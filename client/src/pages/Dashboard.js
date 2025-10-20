import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { 
  Search, 
  TrendingUp, 
  Users, 
  Award,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  Share2,
  Target
} from 'lucide-react';
import { mockStats, mockFactChecks, mockTrendingTopics, mockLeaderboard } from '../data/mockData';
import StatsCard from '../components/StatsCard';
import FactCheckCard from '../components/FactCheckCard';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Total Vérifications', value: mockStats.totalChecks, icon: Search, color: 'blue', change: 12 },
    { title: 'Taux de Précision', value: mockStats.accuracyRate, icon: Target, color: 'green', format: 'percentage', change: 2.1 },
    { title: 'Utilisateurs Actifs', value: mockStats.totalUsers, icon: Users, color: 'orange', change: 8.5 },
    { title: 'Vérificateurs', value: mockStats.activeCheckers, icon: Award, color: 'purple', change: -1.2 },
  ];

  const recentActivity = [
    {
      type: 'verified',
      title: 'Déclaration politique vérifiée',
      time: 'il y a 5 min',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      type: 'false',
      title: 'Image manipulée détectée',
      time: 'il y a 12 min',
      icon: XCircle,
      color: 'text-red-600'
    },
    {
      type: 'misleading',
      title: 'Information partiellement exacte',
      time: 'il y a 25 min',
      icon: AlertTriangle,
      color: 'text-yellow-600'
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bonjour, {user?.profile?.firstName || user?.username} !
          </h1>
          <p className="text-gray-600">
            Voici un aperçu de votre activité sur WeYeCheck
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
              color={stat.color}
              format={stat.format}
            />
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Fact-Checks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="card p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Vérifications Récentes
                </h2>
                <button className="btn btn-outline text-sm">
                  Voir tout
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockFactChecks.slice(0, 4).map((factCheck) => (
                  <FactCheckCard
                    key={factCheck.id}
                    factCheck={factCheck}
                    showActions={false}
                    onClick={() => console.log('Clicked:', factCheck.title)}
                  />
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Sujets Tendances
              </h2>
              
              <div className="space-y-4">
                {mockTrendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        topic.trend === 'up' ? 'bg-green-500' : 
                        topic.trend === 'down' ? 'bg-red-500' : 'bg-gray-500'
                      }`} />
                      <span className="font-medium text-gray-900">{topic.topic}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {topic.count} vérifications
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions & Leaderboard */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Actions Rapides</h2>
              
              <div className="space-y-4">
                <button className="w-full btn btn-primary flex items-center justify-center">
                  <Search className="w-4 h-4 mr-2" />
                  Nouvelle Vérification
                </button>
                
                <button className="w-full btn btn-outline flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Voir les Tendances
                </button>
                
                <button className="w-full btn btn-outline flex items-center justify-center">
                  <Users className="w-4 h-4 mr-2" />
                  Communauté
                </button>
              </div>
            </motion.div>

            {/* Leaderboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="card p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Classement
              </h2>
              
              <div className="space-y-4">
                {mockLeaderboard.map((entry, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-yellow-100 text-yellow-800' :
                      index === 1 ? 'bg-gray-100 text-gray-800' :
                      index === 2 ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {entry.user.firstName} {entry.user.lastName}
                      </div>
                      <div className="text-sm text-gray-600">
                        {entry.points} pts • {entry.checks} vérifications
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 