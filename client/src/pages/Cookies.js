import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  CheckCircle, 
  XCircle, 
  Info, 
  AlertTriangle,
  Eye,
  Database,
  Globe,
  Users,
  BarChart3,
  Lock,
  Zap,
  ChevronDown,
  ChevronRight,
  Save,
  RefreshCw
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Cookies = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Toujours activé
    functional: true,
    analytics: false,
    marketing: false,
    personalization: false
  });

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const cookieTypes = [
    {
      id: 'necessary',
      name: 'Cookies Nécessaires',
      description: 'Ces cookies sont essentiels au fonctionnement du site web et ne peuvent pas être désactivés.',
      icon: Shield,
      color: 'bg-green-500',
      examples: [
        'Cookies de session pour maintenir votre connexion',
        'Cookies de sécurité pour protéger contre les attaques CSRF',
        'Cookies de préférences linguistiques',
        'Cookies de panier d\'achat'
      ],
      purpose: 'Fonctionnement de base du site',
      retention: 'Session ou 30 jours maximum',
      mandatory: true
    },
    {
      id: 'functional',
      name: 'Cookies Fonctionnels',
      description: 'Ces cookies améliorent les fonctionnalités du site et permettent une meilleure expérience utilisateur.',
      icon: Settings,
      color: 'bg-blue-500',
      examples: [
        'Cookies de préférences utilisateur',
        'Cookies de thème (clair/sombre)',
        'Cookies de géolocalisation',
        'Cookies de format de date et devise'
      ],
      purpose: 'Amélioration de l\'expérience utilisateur',
      retention: '12 mois maximum',
      mandatory: false
    },
    {
      id: 'analytics',
      name: 'Cookies Analytiques',
      description: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site.',
      icon: BarChart3,
      color: 'bg-purple-500',
      examples: [
        'Google Analytics pour les statistiques de visite',
        'Cookies de performance pour mesurer la vitesse',
        'Cookies de test A/B',
        'Cookies de suivi des erreurs'
      ],
      purpose: 'Analyse et amélioration des performances',
      retention: '24 mois maximum',
      mandatory: false
    },
    {
      id: 'marketing',
      name: 'Cookies Marketing',
      description: 'Ces cookies sont utilisés pour diffuser des publicités plus pertinentes et mesurer leur efficacité.',
      icon: Globe,
      color: 'bg-orange-500',
      examples: [
        'Cookies de réseaux publicitaires',
        'Cookies de retargeting',
        'Cookies de réseaux sociaux',
        'Cookies de partenaires publicitaires'
      ],
      purpose: 'Publicité personnalisée et mesure d\'efficacité',
      retention: '12 mois maximum',
      mandatory: false
    },
    {
      id: 'personalization',
      name: 'Cookies de Personnalisation',
      description: 'Ces cookies permettent de personnaliser votre expérience selon vos préférences.',
      icon: Users,
      color: 'bg-pink-500',
      examples: [
        'Cookies de recommandations personnalisées',
        'Cookies de contenu adaptatif',
        'Cookies de préférences d\'affichage',
        'Cookies de suggestions intelligentes'
      ],
      purpose: 'Personnalisation du contenu et des recommandations',
      retention: '6 mois maximum',
      mandatory: false
    }
  ];

  const cookieDetails = [
    {
      name: '_weyecheck_session',
      type: 'necessary',
      purpose: 'Maintient votre session utilisateur active',
      retention: 'Session',
      domain: '.weyecheck.com'
    },
    {
      name: '_weyecheck_csrf',
      type: 'necessary',
      purpose: 'Protection contre les attaques CSRF',
      retention: 'Session',
      domain: '.weyecheck.com'
    },
    {
      name: '_weyecheck_theme',
      type: 'functional',
      purpose: 'Mémorise votre préférence de thème',
      retention: '1 an',
      domain: '.weyecheck.com'
    },
    {
      name: '_weyecheck_language',
      type: 'functional',
      purpose: 'Mémorise votre langue préférée',
      retention: '1 an',
      domain: '.weyecheck.com'
    },
    {
      name: '_ga',
      type: 'analytics',
      purpose: 'Google Analytics - Identifie les utilisateurs uniques',
      retention: '2 ans',
      domain: '.weyecheck.com'
    },
    {
      name: '_gid',
      type: 'analytics',
      purpose: 'Google Analytics - Identifie les sessions',
      retention: '24 heures',
      domain: '.weyecheck.com'
    },
    {
      name: '_fbp',
      type: 'marketing',
      purpose: 'Facebook Pixel - Suivi des conversions',
      retention: '3 mois',
      domain: '.weyecheck.com'
    },
    {
      name: '_weyecheck_preferences',
      type: 'personalization',
      purpose: 'Préférences personnalisées de l\'utilisateur',
      retention: '6 mois',
      domain: '.weyecheck.com'
    }
  ];

  const handlePreferenceChange = (cookieType, enabled) => {
    if (cookieType === 'necessary') return; // Ne peut pas être désactivé
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: enabled
    }));
  };

  const savePreferences = () => {
    // Ici, vous sauvegarderiez les préférences dans le localStorage ou envoyez à votre serveur
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Vos préférences de cookies ont été sauvegardées !');
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    alert('Tous les cookies ont été acceptés !');
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      personalization: false
    };
    setCookiePreferences(onlyNecessary);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyNecessary));
    alert('Seuls les cookies nécessaires ont été acceptés !');
  };

  return (
    <>
      <Helmet>
        <title>Politique des Cookies - WeYeCheck</title>
        <meta name="description" content="Découvrez comment WeYeCheck utilise les cookies pour améliorer votre expérience et respecter votre vie privée." />
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
                <Cookie className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                Politique des <span className="text-orange-600">Cookies</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Découvrez comment WeYeCheck utilise les cookies pour améliorer votre expérience 
                tout en respectant votre vie privée et vos préférences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Accepter tous les cookies
                </button>
                <button
                  onClick={rejectAll}
                  className="px-6 py-3 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Rejeter les cookies non essentiels
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What are Cookies */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un cookie ?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous aident à améliorer votre expérience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stockage Local</h3>
                <p className="text-gray-600">
                  Les cookies sont stockés localement sur votre navigateur pour mémoriser vos préférences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sécurité</h3>
                <p className="text-gray-600">
                  Nous utilisons des cookies sécurisés pour protéger vos données et votre session.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparence</h3>
                <p className="text-gray-600">
                  Vous pouvez voir et contrôler quels cookies sont utilisés sur notre site.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Types de Cookies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nous utilisons différents types de cookies pour différentes fonctionnalités
              </p>
            </motion.div>

            <div className="space-y-6">
              {cookieTypes.map((cookieType, index) => (
                <motion.div
                  key={cookieType.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 ${cookieType.color} rounded-xl flex items-center justify-center mr-4`}>
                          <cookieType.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{cookieType.name}</h3>
                          <p className="text-gray-600">{cookieType.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {cookieType.mandatory ? (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                            Obligatoire
                          </span>
                        ) : (
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={cookiePreferences[cookieType.id]}
                              onChange={(e) => handlePreferenceChange(cookieType.id, e.target.checked)}
                              className="sr-only"
                            />
                            <div className={`relative w-12 h-6 rounded-full transition-colors ${
                              cookiePreferences[cookieType.id] ? 'bg-orange-500' : 'bg-gray-300'
                            }`}>
                              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                cookiePreferences[cookieType.id] ? 'transform translate-x-6' : ''
                              }`} />
                            </div>
                          </label>
                        )}
                        <button
                          onClick={() => toggleSection(cookieType.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          {expandedSections[cookieType.id] ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {expandedSections[cookieType.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t pt-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Exemples d'utilisation :</h4>
                            <ul className="space-y-2">
                              {cookieType.examples.map((example, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600 text-sm">{example}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Finalité :</h4>
                              <p className="text-gray-600 text-sm">{cookieType.purpose}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Durée de conservation :</h4>
                              <p className="text-gray-600 text-sm">{cookieType.retention}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Détails des Cookies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Liste complète des cookies utilisés sur notre site
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nom du Cookie</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Finalité</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Durée</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Domaine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-mono text-gray-900">{cookie.name}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cookie.type === 'necessary' ? 'bg-green-100 text-green-700' :
                          cookie.type === 'functional' ? 'bg-blue-100 text-blue-700' :
                          cookie.type === 'analytics' ? 'bg-purple-100 text-purple-700' :
                          cookie.type === 'marketing' ? 'bg-orange-100 text-orange-700' :
                          'bg-pink-100 text-pink-700'
                        }`}>
                          {cookieTypes.find(ct => ct.id === cookie.type)?.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{cookie.purpose}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{cookie.retention}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{cookie.domain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vos Droits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vous avez le contrôle total sur vos données et cookies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contrôle</h3>
                <p className="text-gray-600 text-sm">
                  Vous pouvez activer ou désactiver les cookies non essentiels à tout moment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Modification</h3>
                <p className="text-gray-600 text-sm">
                  Vous pouvez modifier vos préférences de cookies à tout moment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Suppression</h3>
                <p className="text-gray-600 text-sm">
                  Vous pouvez supprimer tous les cookies depuis votre navigateur.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Info className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Information</h3>
                <p className="text-gray-600 text-sm">
                  Nous vous informons clairement de l'utilisation de chaque cookie.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Save Preferences */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Sauvegarder vos Préférences
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Une fois vos préférences définies, cliquez sur le bouton ci-dessous pour les sauvegarder.
              </p>
              <button
                onClick={savePreferences}
                className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center mx-auto"
              >
                <Save className="w-5 h-5 mr-2" />
                Sauvegarder mes Préférences
              </button>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Questions sur les Cookies ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Si vous avez des questions sur notre utilisation des cookies, n'hésitez pas à nous contacter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Nous Contacter
                </a>
                <a
                  href="/privacy"
                  className="px-6 py-3 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Politique de Confidentialité
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cookies;
