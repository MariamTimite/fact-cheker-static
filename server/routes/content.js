const express = require('express');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/content/analyze
// @desc    Analyze content using AI
// @access  Private
router.post('/analyze', auth, [
  body('content')
    .isLength({ min: 10 })
    .withMessage('Content must be at least 10 characters')
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

    const { content, type = 'text' } = req.body;

    // TODO: Integrate with AI services (OpenAI, Google AI, etc.)
    // For now, return mock analysis
    const analysis = {
      summary: "Analyse automatique du contenu fourni",
      keyPoints: [
        "Point clé 1 identifié",
        "Point clé 2 identifié",
        "Point clé 3 identifié"
      ],
      redFlags: [
        "Aucun drapeau rouge détecté"
      ],
      biasDetection: {
        level: "low",
        types: [],
        confidence: 0.8
      },
      sentiment: {
        score: 0.1,
        label: "neutral"
      },
      intent: {
        type: "informative",
        confidence: 0.7
      },
      credibility: {
        score: 75,
        level: "Fiable",
        factors: [
          "Source identifiable",
          "Langage neutre",
          "Faits vérifiables"
        ]
      }
    };

    res.json({
      success: true,
      analysis
    });

  } catch (error) {
    console.error('Analyze content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/content/sources
// @desc    Get reliable sources
// @access  Public
router.get('/sources', async (req, res) => {
  try {
    const { category, limit = 20 } = req.query;

    // Mock reliable sources - in production, this would come from a database
    const sources = [
      {
        name: "Reuters",
        url: "https://www.reuters.com",
        credibility: 95,
        type: "media",
        category: "general",
        description: "Agence de presse internationale reconnue"
      },
      {
        name: "AFP",
        url: "https://www.afp.com",
        credibility: 94,
        type: "media",
        category: "general",
        description: "Agence France-Presse"
      },
      {
        name: "Le Monde",
        url: "https://www.lemonde.fr",
        credibility: 88,
        type: "media",
        category: "general",
        description: "Journal français de référence"
      },
      {
        name: "WHO",
        url: "https://www.who.int",
        credibility: 98,
        type: "official",
        category: "health",
        description: "Organisation mondiale de la santé"
      },
      {
        name: "UNESCO",
        url: "https://www.unesco.org",
        credibility: 96,
        type: "official",
        category: "education",
        description: "Organisation des Nations unies pour l'éducation"
      }
    ];

    let filteredSources = sources;
    if (category) {
      filteredSources = sources.filter(source => source.category === category);
    }

    res.json({
      success: true,
      sources: filteredSources.slice(0, parseInt(limit))
    });

  } catch (error) {
    console.error('Get sources error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/content/report
// @desc    Report inappropriate content
// @access  Private
router.post('/report', auth, [
  body('contentId')
    .isMongoId()
    .withMessage('Invalid content ID'),
  body('reason')
    .isIn(['inappropriate', 'spam', 'misleading', 'offensive', 'other'])
    .withMessage('Invalid reason'),
  body('description')
    .isLength({ min: 10, max: 500 })
    .withMessage('Description must be between 10 and 500 characters')
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

    const { contentId, reason, description } = req.body;

    // TODO: Implement reporting system
    // For now, just return success
    res.json({
      success: true,
      message: 'Report submitted successfully',
      reportId: `report_${Date.now()}`
    });

  } catch (error) {
    console.error('Report content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/content/categories
// @desc    Get content categories
// @access  Public
router.get('/categories', async (req, res) => {
  try {
    const categories = [
      {
        id: 'politics',
        name: 'Politique',
        description: 'Informations politiques et gouvernementales',
        icon: '🏛️',
        color: '#3b82f6'
      },
      {
        id: 'health',
        name: 'Santé',
        description: 'Informations médicales et de santé',
        icon: '🏥',
        color: '#10b981'
      },
      {
        id: 'science',
        name: 'Science',
        description: 'Découvertes scientifiques et recherches',
        icon: '🔬',
        color: '#8b5cf6'
      },
      {
        id: 'business',
        name: 'Économie',
        description: 'Informations économiques et business',
        icon: '💼',
        color: '#f59e0b'
      },
      {
        id: 'entertainment',
        name: 'Divertissement',
        description: 'Actualités du divertissement',
        icon: '🎬',
        color: '#ec4899'
      },
      {
        id: 'sports',
        name: 'Sport',
        description: 'Actualités sportives',
        icon: '⚽',
        color: '#06b6d4'
      },
      {
        id: 'technology',
        name: 'Technologie',
        description: 'Innovations technologiques',
        icon: '💻',
        color: '#6366f1'
      },
      {
        id: 'other',
        name: 'Autre',
        description: 'Autres catégories',
        icon: '📰',
        color: '#6b7280'
      }
    ];

    res.json({
      success: true,
      categories
    });

  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/content/trending-topics
// @desc    Get trending topics
// @access  Public
router.get('/trending-topics', async (req, res) => {
  try {
    const { limit = 10 } = req.query;

    // Mock trending topics - in production, this would be calculated from actual data
    const trendingTopics = [
      {
        topic: "Élections 2024",
        count: 1250,
        category: "politics",
        trend: "up"
      },
      {
        topic: "Santé publique",
        count: 890,
        category: "health",
        trend: "up"
      },
      {
        topic: "Intelligence artificielle",
        count: 756,
        category: "technology",
        trend: "up"
      },
      {
        topic: "Changement climatique",
        count: 634,
        category: "science",
        trend: "stable"
      },
      {
        topic: "Économie mondiale",
        count: 521,
        category: "business",
        trend: "down"
      }
    ];

    res.json({
      success: true,
      topics: trendingTopics.slice(0, parseInt(limit))
    });

  } catch (error) {
    console.error('Get trending topics error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router; 