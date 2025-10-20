const mongoose = require('mongoose');

const factCheckSchema = new mongoose.Schema({
  content: {
    text: { type: String, required: [true, 'Content text is required'] },
    url: { type: String },
    mediaUrl: { type: String },
    mediaType: { type: String, enum: ['image', 'video', 'audio', 'document'] },
    originalLanguage: { type: String, default: 'fr' },
    translatedText: { type: String }
  },
  verification: {
    status: { 
      type: String, 
      enum: ['pending', 'verified', 'false', 'misleading', 'unverified', 'partially_true'],
      default: 'pending'
    },
    score: { type: Number, min: 0, max: 100, default: 0 },
    confidence: { type: Number, min: 0, max: 1, default: 0 },
    sources: [{
      name: { type: String, required: true },
      url: { type: String },
      credibility: { type: Number, min: 0, max: 100 },
      type: { type: String, enum: ['official', 'media', 'academic', 'expert', 'social_media'] },
      lastVerified: { type: Date, default: Date.now }
    }],
    verificationDate: { type: Date },
    verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    verificationNotes: { type: String }
  },
  analysis: {
    aiAnalysis: {
      summary: { type: String },
      keyPoints: [{ type: String }],
      redFlags: [{ type: String }],
      biasDetection: {
        level: { type: String, enum: ['low', 'medium', 'high'] },
        types: [{ type: String }],
        confidence: { type: Number, min: 0, max: 1 }
      },
      sentiment: {
        score: { type: Number, min: -1, max: 1 },
        label: { type: String, enum: ['positive', 'negative', 'neutral'] }
      },
      intent: {
        type: { type: String, enum: ['informative', 'persuasive', 'manipulative', 'entertainment'] },
        confidence: { type: Number, min: 0, max: 1 }
      }
    },
    humanReview: {
      reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comments: { type: String },
      timestamp: { type: Date, default: Date.now },
      rating: { type: Number, min: 1, max: 5 }
    },
    factCheckers: [{
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      status: { type: String, enum: ['verified', 'false', 'misleading', 'unverified'] },
      comments: { type: String },
      timestamp: { type: Date, default: Date.now }
    }]
  },
  metadata: {
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, enum: ['politics', 'health', 'science', 'business', 'entertainment', 'sports', 'technology', 'other'] },
    tags: [{ type: String }],
    priority: { type: String, enum: ['low', 'medium', 'high', 'urgent'], default: 'medium' },
    language: { type: String, default: 'fr' },
    region: { type: String },
    trending: { type: Boolean, default: false },
    viralScore: { type: Number, default: 0 }
  },
  engagement: {
    views: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    comments: [{
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      text: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
      likes: { type: Number, default: 0 },
      replies: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }
      }]
    }],
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  blockchain: {
    hash: { type: String },
    transactionId: { type: String },
    blockNumber: { type: Number },
    timestamp: { type: Date }
  },
  isActive: { type: Boolean, default: true },
  isPublic: { type: Boolean, default: true }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for verification status color
factCheckSchema.virtual('statusColor').get(function() {
  const statusColors = {
    verified: '#10b981',
    false: '#ef4444',
    misleading: '#f59e0b',
    unverified: '#6b7280',
    pending: '#3b82f6',
    partially_true: '#8b5cf6'
  };
  return statusColors[this.verification.status] || '#6b7280';
});

// Virtual for credibility level
factCheckSchema.virtual('credibilityLevel').get(function() {
  const score = this.verification.score;
  if (score >= 90) return 'Très Fiable';
  if (score >= 70) return 'Fiable';
  if (score >= 50) return 'Partiellement Fiable';
  if (score >= 30) return 'Peu Fiable';
  return 'Non Fiable';
});

// Indexes
factCheckSchema.index({ 'content.text': 'text', 'content.url': 'text' });
factCheckSchema.index({ 'verification.status': 1, 'metadata.category': 1 });
factCheckSchema.index({ 'metadata.submittedBy': 1, createdAt: -1 });
factCheckSchema.index({ 'engagement.views': -1 });
factCheckSchema.index({ 'metadata.trending': 1, createdAt: -1 });

// Pre-save middleware
factCheckSchema.pre('save', function(next) {
  // Auto-update verification date when status changes
  if (this.isModified('verification.status') && this.verification.status !== 'pending') {
    this.verification.verificationDate = new Date();
  }
  
  // Auto-calculate viral score based on engagement
  if (this.isModified('engagement')) {
    this.metadata.viralScore = this.engagement.views + (this.engagement.shares * 2) + (this.engagement.likes * 3);
  }
  
  next();
});

// Static method to find trending fact checks
factCheckSchema.statics.findTrending = function(limit = 10) {
  return this.find({ 'metadata.trending': true, isActive: true })
    .sort({ 'engagement.views': -1, createdAt: -1 })
    .limit(limit)
    .populate('submittedBy', 'username profile.firstName profile.lastName');
};

// Static method to find by category
factCheckSchema.statics.findByCategory = function(category, limit = 20) {
  return this.find({ 'metadata.category': category, isActive: true })
    .sort({ createdAt: -1 })
    .limit(limit)
    .populate('submittedBy', 'username profile.firstName profile.lastName');
};

// Method to add comment
factCheckSchema.methods.addComment = function(userId, text) {
  this.engagement.comments.push({
    userId,
    text,
    timestamp: new Date()
  });
  return this.save();
};

// Method to update engagement
factCheckSchema.methods.updateEngagement = function(type, increment = 1) {
  if (this.engagement[type] !== undefined) {
    this.engagement[type] += increment;
  }
  return this.save();
};

module.exports = mongoose.model('FactCheck', factCheckSchema); 