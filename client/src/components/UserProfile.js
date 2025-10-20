import React from 'react';
import { User, Award, Calendar, Target, TrendingUp, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { mockUsers } from '../data/mockData';

const UserProfile = ({ user, onClose }) => {
  // Simuler des données utilisateur complètes
  const userStats = {
    totalChecks: 47,
    verifiedFacts: 32,
    falseClaims: 8,
    misleadingInfo: 7,
    accuracyRate: 94.2,
    reputation: 1250,
    rank: 'Vérificateur Expert',
    joinDate: '2024-01-15',
    lastActive: '2024-01-23T10:30:00Z'
  };

  const recentAchievements = [
    { id: 1, name: 'Première Vérification', icon: CheckCircle, color: 'text-green-600', date: '2024-01-16' },
    { id: 2, name: 'Vérificateur Fiable', icon: Award, color: 'text-blue-600', date: '2024-01-18' },
    { id: 3, name: 'Expert en Santé', icon: Target, color: 'text-purple-600', date: '2024-01-20' }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getAccuracyColor = (rate) => {
    if (rate >= 90) return 'text-green-600';
    if (rate >= 80) return 'text-yellow-600';
    if (rate >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  const getReputationColor = (reputation) => {
    if (reputation >= 2000) return 'text-yellow-600';
    if (reputation >= 1000) return 'text-blue-600';
    if (reputation >= 500) return 'text-green-600';
    return 'text-gray-600';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Profil Utilisateur</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <XCircle className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6 space-y-6">
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">
                {user?.firstName || 'John'} {user?.lastName || 'Doe'}
              </h3>
              <p className="text-gray-600">@{user?.username || 'john_doe'}</p>
              <p className="text-sm text-gray-500">
                Membre depuis {formatDate(userStats.joinDate)}
              </p>
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold ${getReputationColor(userStats.reputation)}`}>
                {userStats.reputation}
              </div>
              <div className="text-sm text-gray-500">Points</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{userStats.totalChecks}</div>
              <div className="text-sm text-blue-600">Total Vérifications</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{userStats.verifiedFacts}</div>
              <div className="text-sm text-green-600">Faits Vérifiés</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{userStats.falseClaims}</div>
              <div className="text-sm text-red-600">Fausses Affirmations</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">{userStats.misleadingInfo}</div>
              <div className="text-sm text-yellow-600">Informations Trompeuses</div>
            </div>
          </div>

          {/* Accuracy and Rank */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Précision</span>
              </div>
              <div className={`text-3xl font-bold ${getAccuracyColor(userStats.accuracyRate)}`}>
                {userStats.accuracyRate}%
              </div>
              <div className="text-sm text-gray-600">
                Basé sur {userStats.totalChecks} vérifications
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Rang</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {userStats.rank}
              </div>
              <div className="text-sm text-gray-600">
                Prochain rang: 1500 points
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Récentes Réalisations
            </h4>
            <div className="space-y-3">
              {recentAchievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{achievement.name}</div>
                    <div className="text-sm text-gray-500">
                      Obtenu le {formatDate(achievement.date)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Chart Placeholder */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Activité Récente
            </h4>
            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p>Graphique d'activité</p>
                <p className="text-sm">Disponible prochainement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex space-x-3">
            <button className="btn btn-primary flex-1">
              Modifier le Profil
            </button>
            <button className="btn btn-outline flex-1">
              Voir l'Historique
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;


