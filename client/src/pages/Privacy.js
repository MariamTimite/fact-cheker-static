import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  UserCheck, 
  AlertTriangle,
  CheckCircle,
  FileText,
  Calendar,
  Mail
} from 'lucide-react';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Vue d\'ensemble', icon: Eye },
    { id: 'data-collection', title: 'Collecte de données', icon: Database },
    { id: 'data-use', title: 'Utilisation des données', icon: UserCheck },
    { id: 'data-sharing', title: 'Partage des données', icon: Shield },
    { id: 'data-security', title: 'Sécurité', icon: Lock },
    { id: 'user-rights', title: 'Vos droits', icon: CheckCircle },
    { id: 'cookies', title: 'Cookies', icon: FileText },
    { id: 'contact', title: 'Contact', icon: Mail }
  ];

  const lastUpdated = "15 Décembre 2024";

  const privacyContent = {
    overview: {
      title: "Vue d'ensemble",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Notre Engagement
            </h3>
            <p className="text-blue-800">
              Chez WeYeCheck, nous nous engageons à protéger votre vie privée et à traiter 
              vos données personnelles avec le plus grand respect. Cette politique explique 
              comment nous collectons, utilisons et protégeons vos informations.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Principes Fondamentaux
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-900">Transparence</h4>
                  <p className="text-green-800 text-sm">
                    Nous vous informons clairement sur l'utilisation de vos données
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900">Minimisation</h4>
                  <p className="text-blue-800 text-sm">
                    Nous collectons uniquement les données nécessaires
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-900">Sécurité</h4>
                  <p className="text-purple-800 text-sm">
                    Vos données sont protégées par des mesures de sécurité avancées
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-orange-900">Contrôle</h4>
                  <p className="text-orange-800 text-sm">
                    Vous gardez le contrôle total sur vos données personnelles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'data-collection': {
      title: "Collecte de Données",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Types de Données Collectées
            </h3>
            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Données d'Identification</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Photo de profil (optionnelle)</li>
                </ul>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Données d'Utilisation</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Pages visitées et temps passé</li>
                  <li>Recherches effectuées</li>
                  <li>Vérifications demandées</li>
                  <li>Préférences et paramètres</li>
                </ul>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Données Techniques</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Système d'exploitation</li>
                  <li>Cookies et technologies similaires</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'data-use': {
      title: "Utilisation des Données",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Finalités d'Utilisation
            </h3>
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                <UserCheck className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900">Fourniture du Service</h4>
                  <p className="text-blue-800 text-sm">
                    Création et gestion de votre compte, vérification d'informations
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-900">Amélioration du Service</h4>
                  <p className="text-green-800 text-sm">
                    Analyse des performances, développement de nouvelles fonctionnalités
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                <Mail className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-900">Communication</h4>
                  <p className="text-purple-800 text-sm">
                    Envoi de notifications, newsletters, support client
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                <Shield className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-orange-900">Sécurité</h4>
                  <p className="text-orange-800 text-sm">
                    Prévention de la fraude, protection contre les abus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'data-sharing': {
      title: "Partage des Données",
      content: (
        <div className="space-y-6">
          <div className="bg-yellow-50 p-6 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mb-2" />
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">
              Principe Fondamental
            </h3>
            <p className="text-yellow-800">
              Nous ne vendons JAMAIS vos données personnelles à des tiers. 
              Nous ne partageons vos informations que dans les cas strictement nécessaires.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cas de Partage Autorisés
            </h3>
            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Prestataires de Services</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Nous pouvons partager vos données avec des prestataires de confiance qui nous aident à fournir nos services :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Hébergement et infrastructure</li>
                  <li>Services d'email et notifications</li>
                  <li>Outils d'analyse (anonymisés)</li>
                  <li>Support client</li>
                </ul>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Obligations Légales</h4>
                <p className="text-gray-600 text-sm">
                  Nous pouvons divulguer vos informations si la loi l'exige ou pour protéger nos droits légaux.
                </p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Avec Votre Consentement</h4>
                <p className="text-gray-600 text-sm">
                  Nous pouvons partager vos données avec votre consentement explicite pour des finalités spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'data-security': {
      title: "Sécurité des Données",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Mesures de Sécurité
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card p-4">
                <Lock className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Chiffrement</h4>
                <p className="text-gray-600 text-sm">
                  Toutes vos données sont chiffrées en transit et au repos avec des protocoles de sécurité avancés.
                </p>
              </div>
              <div className="card p-4">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Accès Restreint</h4>
                <p className="text-gray-600 text-sm">
                  Seuls les employés autorisés peuvent accéder à vos données, avec des contrôles d'accès stricts.
                </p>
              </div>
              <div className="card p-4">
                <Database className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Sauvegarde Sécurisée</h4>
                <p className="text-gray-600 text-sm">
                  Vos données sont sauvegardées régulièrement dans des centres de données sécurisés.
                </p>
              </div>
              <div className="card p-4">
                <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Surveillance Continue</h4>
                <p className="text-gray-600 text-sm">
                  Nous surveillons en permanence nos systèmes pour détecter toute activité suspecte.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'user-rights': {
      title: "Vos Droits",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Droits RGPD
            </h3>
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900">Droit d'Accès</h4>
                  <p className="text-blue-800 text-sm">
                    Vous pouvez demander une copie de toutes les données que nous avons sur vous.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-900">Droit de Rectification</h4>
                  <p className="text-green-800 text-sm">
                    Vous pouvez corriger ou mettre à jour vos données inexactes.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-red-50 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-900">Droit à l'Effacement</h4>
                  <p className="text-red-800 text-sm">
                    Vous pouvez demander la suppression de vos données personnelles.
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                <Lock className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-900">Droit à la Portabilité</h4>
                  <p className="text-purple-800 text-sm">
                    Vous pouvez récupérer vos données dans un format structuré et lisible.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-blue-50 to-purple-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Comment Exercer Vos Droits
            </h3>
            <p className="text-gray-600 mb-4">
              Pour exercer l'un de ces droits, contactez-nous à : 
              <a href="mailto:privacy@weyecheck.com" className="text-blue-600 hover:underline ml-1">
                privacy@weyecheck.com
              </a>
            </p>
            <p className="text-sm text-gray-500">
              Nous répondrons à votre demande dans un délai de 30 jours maximum.
            </p>
          </div>
        </div>
      )
    },
    'cookies': {
      title: "Cookies et Technologies Similaires",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Types de Cookies Utilisés
            </h3>
            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cookies Essentiels</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Nécessaires au fonctionnement de base du site :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Authentification utilisateur</li>
                  <li>Préférences de sécurité</li>
                  <li>Fonctionnalités de base</li>
                </ul>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cookies de Performance</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Nous aident à comprendre comment vous utilisez notre site :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Pages visitées</li>
                  <li>Temps passé sur le site</li>
                  <li>Erreurs rencontrées</li>
                </ul>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cookies de Fonctionnalité</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Améliorent votre expérience utilisateur :
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Préférences de langue</li>
                  <li>Thème sombre/clair</li>
                  <li>Paramètres personnalisés</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card p-6 bg-yellow-50">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">
              Gestion des Cookies
            </h3>
            <p className="text-yellow-800 mb-4">
              Vous pouvez contrôler et supprimer les cookies via les paramètres de votre navigateur. 
              Notez que désactiver certains cookies peut affecter le fonctionnement du site.
            </p>
            <button className="btn btn-primary">
              Gérer Mes Préférences
            </button>
          </div>
        </div>
      )
    },
    'contact': {
      title: "Contact et Questions",
      content: (
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Questions sur la Confidentialité
            </h3>
            <p className="text-gray-600 mb-4">
              Si vous avez des questions concernant cette politique de confidentialité 
              ou nos pratiques de protection des données, n'hésitez pas à nous contacter.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  Email : 
                  <a href="mailto:privacy@weyecheck.com" className="text-blue-600 hover:underline ml-1">
                    privacy@weyecheck.com
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  DPO : 
                  <a href="mailto:dpo@weyecheck.com" className="text-blue-600 hover:underline ml-1">
                    dpo@weyecheck.com
                  </a>
                </span>
              </div>
            </div>
          </div>
          
          <div className="card p-6 bg-blue-50">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Modifications de cette Politique
            </h3>
            <p className="text-blue-800 text-sm mb-2">
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. 
              Nous vous informerons de tout changement important par email ou via une notification sur notre site.
            </p>
            <div className="flex items-center text-blue-700">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">
                Dernière mise à jour : {lastUpdated}
              </span>
            </div>
          </div>
        </div>
      )
    }
  };

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
            <Shield className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">
              Politique de Confidentialité
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous nous engageons à protéger votre vie privée et à être transparents 
            sur l'utilisation de vos données personnelles.
          </p>
          <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Dernière mise à jour : {lastUpdated}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="card p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Table des Matières
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <section.icon className="w-4 h-4 mr-2" />
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {privacyContent[activeSection].title}
              </h2>
              <div className="prose prose-gray max-w-none">
                {privacyContent[activeSection].content}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

