import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Flame, Clock, Users, Eye } from 'lucide-react';
import { mockTrendingTopics, mockFactChecks, mockStats } from '../data/mockData';
import FactCheckCard from '../components/FactCheckCard';

const Trending = () => {
  const [timeFilter, setTimeFilter] = useState('24h');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const timeFilters = [
    { value: '1h', label: '1 heure', icon: Clock },
    { value: '24h', label: '24 heures', icon: Clock },
    { value: '7d', label: '7 jours', icon: Clock },
    { value: '30d', label: '30 jours', icon: Clock }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'down':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  // Simuler des données de tendances plus détaillées
  const trendingData = mockTrendingTopics.map(topic => ({
    ...topic,
    growth: topic.trend === 'up' ? Math.floor(Math.random() * 50) + 10 : 
            topic.trend === 'down' ? -(Math.floor(Math.random() * 30) + 5) : 0,
    relatedChecks: Math.floor(Math.random() * 20) + 5,
    engagement: Math.floor(Math.random() * 1000) + 100
  }));

  const trendingFactChecks = mockFactChecks
    .sort((a, b) => b.views - a.views)
    .slice(0, 8);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
                            <Flame className="w-12 h-12 text-orange-500 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Tendances</h1>
          </div>
          <p className="text-xl text-gray-600">
            Découvrez ce qui fait l'actualité et les sujets les plus discutés
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{mockStats.totalChecks}</div>
            <div className="text-sm text-gray-600">Vérifications totales</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-green-600">{mockStats.verifiedFacts}</div>
            <div className="text-sm text-gray-600">Faits vérifiés</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">{mockStats.totalUsers}</div>
            <div className="text-sm text-gray-600">Utilisateurs actifs</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">{mockStats.accuracyRate}%</div>
            <div className="text-sm text-gray-600">Taux de précision</div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Période :</span>
              {timeFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setTimeFilter(filter.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    timeFilter === filter.value
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <filter.icon className="w-4 h-4 inline mr-2" />
                  {filter.label}
                </button>
              ))}
            </div>
            
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="input md:w-48"
            >
              <option value="all">Toutes les catégories</option>
              <option value="politique">Politique</option>
              <option value="santé">Santé</option>
              <option value="science">Science</option>
              <option value="technologie">Technologie</option>
            </select>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trending Topics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Sujets Tendances
              </h2>
              
              <div className="space-y-4">
                {trendingData.map((topic, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          topic.trend === 'up' ? 'bg-green-500' : 
                          topic.trend === 'down' ? 'bg-red-500' : 'bg-gray-500'
                        }`} />
                        <span className="font-medium text-gray-900">{topic.topic}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getTrendIcon(topic.trend)}
                        <span className={`text-sm font-medium px-2 py-1 rounded-full border ${getTrendColor(topic.trend)}`}>
                          {topic.growth > 0 ? `+${topic.growth}%` : `${topic.growth}%`}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {topic.relatedChecks} vérifications
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {topic.engagement.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trending Fact-Checks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Flame className="w-5 h-5 mr-2" />
                Vérifications Populaires
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trendingFactChecks.map((factCheck) => (
                  <FactCheckCard
                    key={factCheck.id}
                    factCheck={factCheck}
                    showActions={false}
                    onClick={() => console.log('Clicked:', factCheck.title)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Engagement Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="card p-6 mt-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Métriques d'Engagement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">
                {trendingFactChecks.reduce((sum, fc) => sum + fc.views, 0).toLocaleString()}
              </div>
              <div className="text-sm text-blue-600">Vues totales</div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">
                {trendingFactChecks.reduce((sum, fc) => sum + fc.shares, 0).toLocaleString()}
              </div>
              <div className="text-sm text-green-600">Partages totaux</div>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600">
                {trendingData.length}
              </div>
              <div className="text-sm text-orange-600">Sujets tendances</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Trending;
