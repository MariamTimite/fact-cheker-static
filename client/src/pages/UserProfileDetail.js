import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Award, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Eye,
  Mail,
  MapPin,
  Globe,
  Star,
  Users,
  Shield,
  Activity,
  PieChart,
  LineChart
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockUsers, mockFactChecks } from '../data/mockData';
import FactCheckCard from '../components/FactCheckCard';

const UserProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Trouver l'utilisateur par ID
  const user = mockUsers.find(u => u.id === id);

  if (!user) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Utilisateur non trouvé</h1>
          <p className="text-gray-600 mb-6">Cet utilisateur n'existe pas ou a été supprimé.</p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="btn btn-primary"
          >
            Retour au Tableau de Bord
          </button>
        </div>
      </div>
    );
  }

  // Filtrer les vérifications de cet utilisateur
  const userFactChecks = mockFactChecks.filter(fc => fc.verifier === user.username);

  // Statistiques calculées
  const stats = {
    totalChecks: userFactChecks.length,
    verifiedChecks: userFactChecks.filter(fc => fc.status === 'verified').length,
    falseChecks: userFactChecks.filter(fc => fc.status === 'false').length,
    misleadingChecks: userFactChecks.filter(fc => fc.status === 'misleading').length,
    totalViews: userFactChecks.reduce((sum, fc) => sum + fc.views, 0),
    averageRating: 4.8,
    accuracyRate: 96.5,
    experienceLevel: userFactChecks.length > 100 ? 'Expert' : userFactChecks.length > 50 ? 'Avancé' : 'Intermédiaire'
  };

  const achievements = [
    {
      id: 1,
      title: 'Premier Vérificateur',
      description: 'Première vérification publiée',
      icon: Award,
      earned: true,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Expert en Politique',
      description: '50+ vérifications politiques',
      icon: Target,
      earned: userFactChecks.filter(fc => fc.tags.includes('politique')).length >= 50,
      date: '2024-03-20'
    },
    {
      id: 3,
      title: 'Champion de Précision',
      description: '95%+ de précision',
      icon: Shield,
      earned: stats.accuracyRate >= 95,
      date: '2024-04-10'
    },
    {
      id: 4,
      title: 'Influenceur',
      description: '10,000+ vues totales',
      icon: TrendingUp,
      earned: stats.totalViews >= 10000,
      date: '2024-05-15'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: User },
    { id: 'fact-checks', label: 'Vérifications', icon: CheckCircle },
    { id: 'achievements', label: 'Réalisations', icon: Award },
    { id: 'activity', label: 'Activité', icon: Activity }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'fact_check',
      title: 'Nouvelle vérification publiée',
      description: 'Vérification sur les élections européennes',
      timestamp: 'Il y a 2 heures',
      icon: CheckCircle
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Réalisation débloquée',
      description: 'Champion de Précision',
      timestamp: 'Il y a 1 jour',
      icon: Award
    },
    {
      id: 3,
      type: 'rating',
      title: 'Évaluation reçue',
      description: '5 étoiles pour votre dernière vérification',
      timestamp: 'Il y a 2 jours',
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header du profil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card p-8 mb-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar et infos de base */}
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{user.username}</h1>
                <p className="text-gray-600">{user.profile?.firstName} {user.profile?.lastName}</p>
                <div className="flex items-center mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    stats.experienceLevel === 'Expert' ? 'bg-purple-100 text-purple-800' :
                    stats.experienceLevel === 'Avancé' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {stats.experienceLevel}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3 ml-auto">
              <button className="btn btn-outline flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Contacter
              </button>
              <button className="btn btn-primary flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Suivre
              </button>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6">
            <p className="text-gray-700 leading-relaxed">
              {user.profile?.bio || "Passionné de vérification d'informations et de lutte contre la désinformation. Expert en analyse de contenu et vérification de faits."}
            </p>
          </div>

          {/* Informations de contact */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {user.profile?.email && (
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2" />
                <span>{user.profile.email}</span>
              </div>
            )}
            {user.profile?.location && (
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{user.profile.location}</span>
              </div>
            )}
            {user.profile?.website && (
              <div className="flex items-center text-gray-600">
                <Globe className="w-5 h-5 mr-2" />
                <a href={user.profile.website} className="hover:text-blue-600">
                  Site web
                </a>
              </div>
            )}
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
        >
          <div className="card p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">{stats.totalChecks}</div>
            <div className="text-sm text-gray-600">Vérifications</div>
          </div>
          <div className="card p-6 text-center">
            <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">{stats.totalViews.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Vues Total</div>
          </div>
          <div className="card p-6 text-center">
            <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">{stats.accuracyRate}%</div>
            <div className="text-sm text-gray-600">Précision</div>
          </div>
          <div className="card p-6 text-center">
            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">{stats.averageRating}</div>
            <div className="text-sm text-gray-600">Note Moyenne</div>
          </div>
        </motion.div>

        {/* Onglets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card p-6 mb-6"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenu des onglets */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Graphiques */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Vérifications par Statut</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <PieChart className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Activité Récente</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <LineChart className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Répartition des vérifications */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Vérifiées</span>
                    <span className="text-sm font-medium text-green-600">{stats.verifiedChecks}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(stats.verifiedChecks / stats.totalChecks) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Fausses</span>
                    <span className="text-sm font-medium text-red-600">{stats.falseChecks}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full" 
                      style={{ width: `${(stats.falseChecks / stats.totalChecks) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Trompeuses</span>
                    <span className="text-sm font-medium text-yellow-600">{stats.misleadingChecks}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-600 h-2 rounded-full" 
                      style={{ width: `${(stats.misleadingChecks / stats.totalChecks) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fact-checks' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Vérifications ({userFactChecks.length})
                </h3>
                <div className="flex items-center space-x-2">
                  <select className="input text-sm">
                    <option>Toutes</option>
                    <option>Vérifiées</option>
                    <option>Fausses</option>
                    <option>Trompeuses</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                {userFactChecks.length > 0 ? (
                  userFactChecks.map(factCheck => (
                    <FactCheckCard
                      key={factCheck.id}
                      factCheck={factCheck}
                      onClick={() => navigate(`/fact-check/${factCheck.id}`)}
                    />
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Aucune vérification publiée</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Réalisations ({achievements.filter(a => a.earned).length}/{achievements.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map(achievement => (
                  <div
                    key={achievement.id}
                    className={`card p-4 ${
                      achievement.earned ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-200 text-gray-400'
                      }`}>
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          achievement.earned ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm ${
                          achievement.earned ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </p>
                        {achievement.earned && (
                          <p className="text-xs text-yellow-600 mt-1">
                            Obtenu le {new Date(achievement.date).toLocaleDateString('fr-FR')}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Activité Récente
              </h3>
              <div className="space-y-3">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{activity.title}</h4>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default UserProfileDetail;

