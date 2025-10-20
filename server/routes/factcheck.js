const express = require('express');
const { body, validationResult } = require('express-validator');
const FactCheck = require('../models/FactCheck');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/factcheck/submit
// @desc    Submit a new fact check request
// @access  Private
router.post('/submit', auth, [
  body('content.text')
    .isLength({ min: 10 })
    .withMessage('Content text must be at least 10 characters'),
  body('content.url')
    .optional()
    .isURL()
    .withMessage('Please enter a valid URL'),
  body('metadata.category')
    .isIn(['politics', 'health', 'science', 'business', 'entertainment', 'sports', 'technology', 'other'])
    .withMessage('Invalid category')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { content, metadata } = req.body;

    // Create new fact check
    const factCheck = new FactCheck({
      content,
      metadata: {
        ...metadata,
        submittedBy: req.user.id
      }
    });

    await factCheck.save();

    // Update user stats
    await User.findByIdAndUpdate(req.user.id, {
      $inc: { 'stats.verificationsCount': 1 }
    });

    // Populate user info
    await factCheck.populate('submittedBy', 'username profile.firstName profile.lastName');

    res.status(201).json({
      success: true,
      factCheck
    });

  } catch (error) {
    console.error('Submit fact check error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/factcheck
// @desc    Get all fact checks with filters
// @access  Public
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      category,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    const filter = { isActive: true, isPublic: true };
    if (status) filter['verification.status'] = status;
    if (category) filter['metadata.category'] = category;
    if (search) {
      filter.$text = { $search: search };
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort,
      populate: {
        path: 'submittedBy',
        select: 'username profile.firstName profile.lastName'
      }
    };

    const factChecks = await FactCheck.paginate(filter, options);

    res.json({
      success: true,
      ...factChecks
    });

  } catch (error) {
    console.error('Get fact checks error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/factcheck/:id
// @desc    Get fact check by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const factCheck = await FactCheck.findById(req.params.id)
      .populate('submittedBy', 'username profile.firstName profile.lastName')
      .populate('verification.verifiedBy', 'username profile.firstName profile.lastName')
      .populate('analysis.humanReview.reviewerId', 'username profile.firstName profile.lastName');

    if (!factCheck) {
      return res.status(404).json({
        success: false,
        message: 'Fact check not found'
      });
    }

    // Increment views
    factCheck.engagement.views += 1;
    await factCheck.save();

    res.json({
      success: true,
      factCheck
    });

  } catch (error) {
    console.error('Get fact check error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/factcheck/:id/verify
// @desc    Verify a fact check (for fact-checkers and experts)
// @access  Private
router.put('/:id/verify', auth, [
  body('verification.status')
    .isIn(['verified', 'false', 'misleading', 'unverified', 'partially_true'])
    .withMessage('Invalid verification status'),
  body('verification.score')
    .isInt({ min: 0, max: 100 })
    .withMessage('Score must be between 0 and 100'),
  body('verification.sources')
    .isArray()
    .withMessage('Sources must be an array')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { verification, analysis } = req.body;

    const factCheck = await FactCheck.findById(req.params.id);
    if (!factCheck) {
      return res.status(404).json({
        success: false,
        message: 'Fact check not found'
      });
    }

    // Check if user has permission to verify
    const user = await User.findById(req.user.id);
    if (!['fact-checker', 'expert', 'admin'].includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions to verify fact checks'
      });
    }

    // Update verification
    factCheck.verification = {
      ...factCheck.verification,
      ...verification,
      verifiedBy: req.user.id,
      verificationDate: new Date()
    };

    // Update analysis if provided
    if (analysis) {
      factCheck.analysis = {
        ...factCheck.analysis,
        ...analysis
      };
    }

    // Add to fact checkers list
    factCheck.analysis.factCheckers.push({
      userId: req.user.id,
      status: verification.status,
      comments: verification.verificationNotes || '',
      timestamp: new Date()
    });

    await factCheck.save();

    // Update user stats
    await User.findByIdAndUpdate(req.user.id, {
      $inc: { 'stats.contributionsCount': 1 }
    });

    res.json({
      success: true,
      factCheck
    });

  } catch (error) {
    console.error('Verify fact check error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/factcheck/:id/comment
// @desc    Add a comment to a fact check
// @access  Private
router.post('/:id/comment', auth, [
  body('text')
    .isLength({ min: 1, max: 1000 })
    .withMessage('Comment must be between 1 and 1000 characters')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { text } = req.body;

    const factCheck = await FactCheck.findById(req.params.id);
    if (!factCheck) {
      return res.status(404).json({
        success: false,
        message: 'Fact check not found'
      });
    }

    // Add comment
    factCheck.engagement.comments.push({
      userId: req.user.id,
      text,
      timestamp: new Date()
    });

    await factCheck.save();

    // Populate user info for the new comment
    await factCheck.populate('engagement.comments.userId', 'username profile.firstName profile.lastName');

    res.json({
      success: true,
      comment: factCheck.engagement.comments[factCheck.engagement.comments.length - 1]
    });

  } catch (error) {
    console.error('Add comment error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/factcheck/trending
// @desc    Get trending fact checks
// @access  Public
router.get('/trending', async (req, res) => {
  try {
    const { limit = 10 } = req.query;

    const trendingFactChecks = await FactCheck.findTrending(parseInt(limit));

    res.json({
      success: true,
      factChecks: trendingFactChecks
    });

  } catch (error) {
    console.error('Get trending error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/factcheck/:id/like
// @desc    Like/unlike a fact check
// @access  Private
router.post('/:id/like', auth, async (req, res) => {
  try {
    const factCheck = await FactCheck.findById(req.params.id);
    if (!factCheck) {
      return res.status(404).json({
        success: false,
        message: 'Fact check not found'
      });
    }

    // Check if user already liked
    const existingLike = factCheck.engagement.likes.find(like => like.userId.toString() === req.user.id);
    
    if (existingLike) {
      // Unlike
      factCheck.engagement.likes = factCheck.engagement.likes.filter(
        like => like.userId.toString() !== req.user.id
      );
    } else {
      // Like
      factCheck.engagement.likes.push(req.user.id);
    }

    await factCheck.save();

    res.json({
      success: true,
      likes: factCheck.engagement.likes.length,
      liked: !existingLike
    });

  } catch (error) {
    console.error('Like error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router; 