const express = require('express');
const User = require('../models/User');
const FactCheck = require('../models/FactCheck');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      user: user.getPublicProfile()
    });

  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', auth, async (req, res) => {
  try {
    const { firstName, lastName, bio, location, website, socialMedia, preferences } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Update profile fields
    if (firstName !== undefined) user.profile.firstName = firstName;
    if (lastName !== undefined) user.profile.lastName = lastName;
    if (bio !== undefined) user.profile.bio = bio;
    if (location !== undefined) user.profile.location = location;
    if (website !== undefined) user.profile.website = website;
    if (socialMedia !== undefined) user.profile.socialMedia = socialMedia;
    if (preferences !== undefined) user.preferences = { ...user.preferences, ...preferences };

    await user.save();

    res.json({
      success: true,
      user: user.getPublicProfile()
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/users/stats
// @desc    Get user statistics
// @access  Private
router.get('/stats', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Get user's fact checks
    const factChecks = await FactCheck.find({ 'metadata.submittedBy': req.user.id });
    
    // Calculate additional stats
    const totalViews = factChecks.reduce((sum, fc) => sum + fc.engagement.views, 0);
    const totalLikes = factChecks.reduce((sum, fc) => sum + fc.engagement.likes, 0);
    const totalShares = factChecks.reduce((sum, fc) => sum + fc.engagement.shares, 0);

    const stats = {
      ...user.stats,
      totalViews,
      totalLikes,
      totalShares,
      factChecksCount: factChecks.length,
      verifiedCount: factChecks.filter(fc => fc.verification.status === 'verified').length,
      falseCount: factChecks.filter(fc => fc.verification.status === 'false').length,
      pendingCount: factChecks.filter(fc => fc.verification.status === 'pending').length
    };

    res.json({
      success: true,
      stats
    });

  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/users/leaderboard
// @desc    Get leaderboard
// @access  Public
router.get('/leaderboard', async (req, res) => {
  try {
    const { limit = 10, period = 'all' } = req.query;

    let dateFilter = {};
    if (period === 'week') {
      dateFilter = { createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } };
    } else if (period === 'month') {
      dateFilter = { createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } };
    }

    const leaderboard = await User.aggregate([
      { $match: { isActive: true, ...dateFilter } },
      {
        $project: {
          username: 1,
          'profile.firstName': 1,
          'profile.lastName': 1,
          'profile.avatar': 1,
          'reputation.score': 1,
          'reputation.level': 1,
          'stats.verificationsCount': 1,
          'stats.contributionsCount': 1,
          'stats.accuracy': 1,
          totalScore: {
            $add: [
              '$reputation.score',
              { $multiply: ['$stats.verificationsCount', 10] },
              { $multiply: ['$stats.contributionsCount', 5] }
            ]
          }
        }
      },
      { $sort: { totalScore: -1 } },
      { $limit: parseInt(limit) }
    ]);

    res.json({
      success: true,
      leaderboard
    });

  } catch (error) {
    console.error('Get leaderboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/users/:id
// @desc    Get public user profile
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password -email -resetPasswordToken -verificationToken');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Get user's public fact checks
    const factChecks = await FactCheck.find({ 
      'metadata.submittedBy': req.params.id,
      isPublic: true,
      isActive: true
    })
    .sort({ createdAt: -1 })
    .limit(5)
    .populate('submittedBy', 'username profile.firstName profile.lastName');

    res.json({
      success: true,
      user: user.getPublicProfile(),
      recentFactChecks: factChecks
    });

  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/users/:id/factchecks
// @desc    Get user's fact checks
// @access  Public
router.get('/:id/factchecks', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const factChecks = await FactCheck.find({ 
      'metadata.submittedBy': req.params.id,
      isPublic: true,
      isActive: true
    })
    .sort({ createdAt: -1 })
    .skip((parseInt(page) - 1) * parseInt(limit))
    .limit(parseInt(limit))
    .populate('submittedBy', 'username profile.firstName profile.lastName');

    const total = await FactCheck.countDocuments({ 
      'metadata.submittedBy': req.params.id,
      isPublic: true,
      isActive: true
    });

    res.json({
      success: true,
      factChecks,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });

  } catch (error) {
    console.error('Get user fact checks error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router; 