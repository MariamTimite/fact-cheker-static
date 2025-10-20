const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/factcheck';
    
    // Vérifier si MongoDB est disponible
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout après 5 secondes
    });

    console.log(`📊 MongoDB Connected: ${conn.connection.host}`);

    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('MongoDB reconnected');
    });

  } catch (error) {
    console.warn('⚠️  MongoDB connection failed. Running in demo mode...');
    console.warn('💡 To enable full functionality, please:');
    console.warn('   1. Install MongoDB locally, or');
    console.warn('   2. Use MongoDB Atlas (update MONGODB_URI in .env)');
    console.warn('   3. Or set NODE_ENV=demo to run without database');
    
    // En mode démo, on continue sans base de données
    if (process.env.NODE_ENV === 'demo') {
      console.log('🚀 Running in demo mode without database');
      return;
    }
  }
};

module.exports = connectDB; 