import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  RefreshCw,
  Server,
  Database,
  Globe,
  Zap,
  Shield,
  Users,
  TrendingUp,
  TrendingDown,
  Minus,
  Calendar,
  Clock as ClockIcon,
  AlertCircle,
  Info
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Status = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Simuler des données de statut en temps réel
  const [statusData, setStatusData] = useState({
    overall: 'operational',
    services: [
      {
        name: 'API WeYeCheck',
        status: 'operational',
        uptime: '99.9%',
        responseTime: '245ms',
        lastIncident: null,
        description: 'Service principal de vérification d\'informations'
      },
      {
        name: 'Base de données',
        status: 'operational',
        uptime: '99.95%',
        responseTime: '12ms',
        lastIncident: null,
        description: 'Base de données principale'
      },
      {
        name: 'Service d\'authentification',
        status: 'operational',
        uptime: '99.8%',
        responseTime: '89ms',
        lastIncident: null,
        description: 'Gestion des utilisateurs et authentification'
      },
      {
        name: 'CDN et hébergement',
        status: 'operational',
        uptime: '99.9%',
        responseTime: '156ms',
        lastIncident: null,
        description: 'Réseau de distribution de contenu'
      },
      {
        name: 'Service de notifications',
        status: 'degraded',
        uptime: '98.2%',
        responseTime: '1.2s',
        lastIncident: {
          title: 'Latence élevée des notifications',
          startTime: '2024-01-20T10:30:00Z',
          endTime: null,
          status: 'investigating'
        },
        description: 'Envoi des notifications push et email'
      },
      {
        name: 'Service de facturation',
        status: 'operational',
        uptime: '99.7%',
        responseTime: '78ms',
        lastIncident: null,
        description: 'Gestion des paiements et facturation'
      }
    ],
    incidents: [
      {
        id: 1,
        title: 'Latence élevée des notifications',
        status: 'investigating',
        impact: 'minor',
        startTime: '2024-01-20T10:30:00Z',
        endTime: null,
        description: 'Nous observons des délais plus longs que d\'habitude dans l\'envoi des notifications push et email.',
        updates: [
          {
            time: '2024-01-20T10:30:00Z',
            status: 'investigating',
            message: 'Nous avons identifié une latence élevée dans notre service de notifications. Notre équipe technique enquête sur la cause.'
          },
          {
            time: '2024-01-20T11:15:00Z',
            status: 'investigating',
            message: 'Nous avons identifié le problème comme étant lié à notre fournisseur de notifications push. Nous travaillons sur une solution de contournement.'
          }
        ]
      },
      {
        id: 2,
        title: 'Maintenance programmée - Base de données',
        status: 'resolved',
        impact: 'major',
        startTime: '2024-01-18T02:00:00Z',
        endTime: '2024-01-18T04:30:00Z',
        description: 'Maintenance programmée de notre base de données principale pour des améliorations de performance.',
        updates: [
          {
            time: '2024-01-18T02:00:00Z',
            status: 'maintenance',
            message: 'La maintenance de la base de données a commencé. Les services peuvent être temporairement indisponibles.'
          },
          {
            time: '2024-01-18T04:30:00Z',
            status: 'resolved',
            message: 'La maintenance est terminée. Tous les services sont de nouveau opérationnels.'
          }
        ]
      }
    ],
    metrics: {
      uptime: {
        last24h: '99.9%',
        last7d: '99.8%',
        last30d: '99.7%'
      },
      responseTime: {
        average: '245ms',
        p95: '890ms',
        p99: '1.2s'
      },
      requests: {
        total: '2.4M',
        successful: '99.9%',
        failed: '0.1%'
      }
    }
  });

  useEffect(() => {
    let interval;
    if (autoRefresh) {
      interval = setInterval(() => {
        setLastUpdated(new Date());
        // Ici, vous feriez un appel API réel pour obtenir les données de statut
      }, 30000); // Actualisation toutes les 30 secondes
    }
    return () => clearInterval(interval);
  }, [autoRefresh]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'investigating':
        return <AlertCircle className="w-5 h-5 text-orange-500" />;
      default:
        return <Minus className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'outage':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'maintenance':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'investigating':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'operational':
        return 'Opérationnel';
      case 'degraded':
        return 'Dégradé';
      case 'outage':
        return 'Indisponible';
      case 'maintenance':
        return 'Maintenance';
      case 'investigating':
        return 'En cours d\'enquête';
      default:
        return 'Inconnu';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'minor':
        return 'bg-yellow-100 text-yellow-700';
      case 'major':
        return 'bg-orange-100 text-orange-700';
      case 'critical':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDuration = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = endTime ? new Date(endTime) : new Date();
    const diffMs = end - start;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${diffHours}h ${diffMinutes}m`;
  };

  return (
    <>
      <Helmet>
        <title>Statut des Services - WeYeCheck</title>
        <meta name="description" content="Surveillez le statut de tous les services WeYeCheck en temps réel. Uptime, incidents et métriques de performance." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <Activity className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                Statut des <span className="text-orange-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Surveillez le statut de tous les services WeYeCheck en temps réel. 
                Nous nous engageons à maintenir une disponibilité élevée pour nos utilisateurs.
              </p>
              
              {/* Overall Status */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className={`px-6 py-3 rounded-lg border-2 ${getStatusColor(statusData.overall)}`}>
                  <div className="flex items-center">
                    {getStatusIcon(statusData.overall)}
                    <span className="ml-2 font-semibold">
                      {getStatusText(statusData.overall)}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Dernière mise à jour: {lastUpdated.toLocaleTimeString('fr-FR')}
                </div>
                <button
                  onClick={() => setAutoRefresh(!autoRefresh)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    autoRefresh 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Statut des Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vue d'ensemble de tous nos services et leur disponibilité
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {statusData.services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Uptime:</span>
                      <span className="font-medium text-green-600">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Temps de réponse:</span>
                      <span className="font-medium">{service.responseTime}</span>
                    </div>
                  </div>

                  {service.lastIncident && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Dernier incident:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.lastIncident.status)}`}>
                          {getStatusText(service.lastIncident.status)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{service.lastIncident.title}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Métriques de Performance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Statistiques détaillées sur la performance de nos services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Uptime */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Server className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Uptime</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">24 dernières heures:</span>
                    <span className="font-semibold text-green-600">{statusData.metrics.uptime.last24h}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">7 derniers jours:</span>
                    <span className="font-semibold text-green-600">{statusData.metrics.uptime.last7d}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">30 derniers jours:</span>
                    <span className="font-semibold text-green-600">{statusData.metrics.uptime.last30d}</span>
                  </div>
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Temps de Réponse</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Moyenne:</span>
                    <span className="font-semibold">{statusData.metrics.responseTime.average}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">P95:</span>
                    <span className="font-semibold">{statusData.metrics.responseTime.p95}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">P99:</span>
                    <span className="font-semibold">{statusData.metrics.responseTime.p99}</span>
                  </div>
                </div>
              </motion.div>

              {/* Requests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Requêtes</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total (30j):</span>
                    <span className="font-semibold">{statusData.metrics.requests.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Succès:</span>
                    <span className="font-semibold text-green-600">{statusData.metrics.requests.successful}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Échecs:</span>
                    <span className="font-semibold text-red-600">{statusData.metrics.requests.failed}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Incidents */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Incidents Récents</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Historique des incidents et maintenances programmées
              </p>
            </motion.div>

            <div className="space-y-6">
              {statusData.incidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{incident.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                          {getStatusText(incident.status)}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(incident.impact)}`}>
                          {incident.impact === 'minor' ? 'Mineur' : incident.impact === 'major' ? 'Majeur' : 'Critique'}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{incident.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Début: {formatDate(incident.startTime)}</span>
                    </div>
                    {incident.endTime && (
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-2" />
                        <span>Fin: {formatDate(incident.endTime)}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Durée: {formatDuration(incident.startTime, incident.endTime)}</span>
                    </div>
                  </div>

                  {/* Updates */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Mises à jour</h4>
                    <div className="space-y-3">
                      {incident.updates.map((update, updateIndex) => (
                        <div key={updateIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            {getStatusIcon(update.status)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-sm font-medium text-gray-900">
                                {getStatusText(update.status)}
                              </span>
                              <span className="text-xs text-gray-500">
                                {formatDate(update.time)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{update.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Restez informé
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Recevez des notifications par email lors d'incidents ou de maintenances programmées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  S'abonner
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Status;
