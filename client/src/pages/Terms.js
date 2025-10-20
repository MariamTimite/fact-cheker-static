import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Scale, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Gavel,
  Calendar,
  Mail
} from 'lucide-react';

const Terms = () => {
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    { id: 'acceptance', title: 'Acceptation des Conditions', icon: CheckCircle },
    { id: 'service-description', title: 'Description du Service', icon: FileText },
    { id: 'user-accounts', title: 'Comptes Utilisateurs', icon: Users },
    { id: 'acceptable-use', title: 'Utilisation Acceptable', icon: Shield },
    { id: 'prohibited-activities', title: 'Activités Interdites', icon: XCircle },
    { id: 'intellectual-property', title: 'Propriété Intellectuelle', icon: Scale },
    { id: 'privacy', title: 'Confidentialité', icon: Shield },
    { id: 'disclaimers', title: 'Avertissements', icon: AlertTriangle },
    { id: 'limitation-liability', title: 'Limitation de Responsabilité', icon: Gavel },
    { id: 'termination', title: 'Résiliation', icon: XCircle },
    { id: 'governing-law', title: 'Droit Applicable', icon: Scale },
    { id: 'contact', title: 'Contact', icon: Mail }
  ];

  const lastUpdated = "15 Décembre 2024";

  const termsContent = {
    acceptance: {
      title: "Acceptation des Conditions",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Bienvenue sur WeYeCheck
            </h3>
            <p className="text-blue-800">
              En accédant et en utilisant WeYeCheck, vous acceptez d'être lié par ces 
              conditions d'utilisation. Si vous n'acceptez pas ces conditions, 
              veuillez ne pas utiliser notre service.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Définitions
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <div>
                  <strong className="text-gray-900">"Service"</strong>
                  <span className="text-gray-600 ml-2">
                    désigne la plateforme WeYeCheck et tous ses services associés
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <div>
                  <strong className="text-gray-900">"Utilisateur"</strong>
                  <span className="text-gray-600 ml-2">
                    désigne toute personne accédant ou utilisant le Service
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                <div>
                  <strong className="text-gray-900">"Contenu"</strong>
                  <span className="text-gray-600 ml-2">
                    désigne tout texte, image, vidéo ou autre matériel soumis au Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'service-description': {
      title: "Description du Service",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Qu'est-ce que WeYeCheck ?
            </h3>
            <p className="text-gray-600 mb-4">
              WeYeCheck est une plateforme de vérification d'informations qui utilise 
              l'intelligence artificielle et une communauté d'experts pour aider les utilisateurs 
              à distinguer les informations vraies des fausses.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Fonctionnalités Principales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Vérification d'Informations</h4>
                <p className="text-gray-600 text-sm">
                  Soumettez des informations pour vérification par notre IA et nos experts
                </p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Base de Données</h4>
                <p className="text-gray-600 text-sm">
                  Accédez à notre base de données de vérifications précédentes
                </p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">API</h4>
                <p className="text-gray-600 text-sm">
                  Intégrez nos services dans vos propres applications
                </p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Communauté</h4>
                <p className="text-gray-600 text-sm">
                  Rejoignez notre communauté de vérificateurs experts
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'user-accounts': {
      title: "Comptes Utilisateurs",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Création de Compte
            </h3>
            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Informations Requises</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email valide</li>
                  <li>Mot de passe sécurisé</li>
                  <li>Acceptation des conditions d'utilisation</li>
                </ul>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Responsabilités</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Maintenir la confidentialité de votre compte</li>
                  <li>Fournir des informations exactes et à jour</li>
                  <li>Notifier immédiatement toute utilisation non autorisée</li>
                  <li>Être responsable de toutes les activités sous votre compte</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mb-2" />
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">
              Important
            </h3>
            <p className="text-yellow-800 text-sm">
              Vous ne pouvez créer qu'un seul compte par personne. 
              Les comptes multiples sont interdits et peuvent entraîner la suspension de tous vos comptes.
            </p>
          </div>
        </div>
      )
    },
    'acceptable-use': {
      title: "Utilisation Acceptable",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Utilisation Autorisée
            </h3>
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-900">Utilisation Légale</h4>
                  <p className="text-green-800 text-sm">
                    Utilisez le Service conformément aux lois applicables
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-900">Respect des Autres</h4>
                  <p className="text-green-800 text-sm">
                    Respectez les droits et la dignité des autres utilisateurs
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-900">Contenu Approprié</h4>
                  <p className="text-green-800 text-sm">
                    Soumettez uniquement du contenu pertinent et approprié
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-900">Collaboration</h4>
                  <p className="text-green-800 text-sm">
                    Contribuez positivement à notre communauté de vérification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'prohibited-activities': {
      title: "Activités Interdites",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg">
            <XCircle className="w-6 h-6 text-red-600 mb-2" />
            <h3 className="text-lg font-semibold text-red-900 mb-2">
              Activités Strictement Interdites
            </h3>
            <p className="text-red-800 text-sm">
              Les activités suivantes sont interdites et peuvent entraîner 
              la suspension immédiate de votre compte.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Liste Non Exhaustive
            </h3>
            <div className="space-y-4">
              <div className="card p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-gray-900 mb-2">Spam et Harcèlement</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Envoi de messages non sollicités</li>
                  <li>Harcèlement d'autres utilisateurs</li>
                  <li>Propagation de contenu offensant</li>
                </ul>
              </div>
              <div className="card p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-gray-900 mb-2">Contenu Illégal</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Contenu diffamatoire ou calomnieux</li>
                  <li>Matériel pornographique ou violent</li>
                  <li>Contenu incitant à la haine</li>
                </ul>
              </div>
              <div className="card p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-gray-900 mb-2">Tentatives de Piratage</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Tentatives d'accès non autorisé</li>
                  <li>Exploitation de vulnérabilités</li>
                  <li>Interférence avec le fonctionnement du service</li>
                </ul>
              </div>
              <div className="card p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-gray-900 mb-2">Violation de Propriété</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Violation de droits d'auteur</li>
                  <li>Utilisation non autorisée de marques</li>
                  <li>Contrefaçon de contenu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'intellectual-property': {
      title: "Propriété Intellectuelle",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Nos Droits
            </h3>
            <div className="card p-6">
              <p className="text-gray-600 mb-4">
                WeYeCheck et tous ses contenus, fonctionnalités et services sont la propriété 
                exclusive de WeYeCheck et sont protégés par les lois sur la propriété intellectuelle.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Scale className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <strong className="text-gray-900">Marques</strong>
                    <span className="text-gray-600 ml-2">
                      Le nom "WeYeCheck" et tous les logos sont nos marques déposées
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Scale className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <strong className="text-gray-900">Droits d'Auteur</strong>
                    <span className="text-gray-600 ml-2">
                      Tous les contenus du site sont protégés par le droit d'auteur
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Scale className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <strong className="text-gray-900">Algorithmes</strong>
                    <span className="text-gray-600 ml-2">
                      Nos algorithmes de vérification sont notre propriété intellectuelle
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Votre Contenu
            </h3>
            <div className="card p-6">
              <p className="text-gray-600 mb-4">
                En soumettant du contenu à WeYeCheck, vous nous accordez une licence 
                non exclusive pour utiliser ce contenu dans le cadre de nos services.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Vous Conservez Vos Droits</h4>
                <p className="text-blue-800 text-sm">
                  Vous conservez tous vos droits sur votre contenu. Nous ne revendiquons 
                  aucune propriété sur vos soumissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'privacy': {
      title: "Confidentialité",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Shield className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Protection de Vos Données
            </h3>
            <p className="text-blue-800">
              Nous nous engageons à protéger votre vie privée conformément à notre 
              Politique de Confidentialité et au RGPD.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Collecte et Utilisation
            </h3>
            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Données Collectées</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Informations de compte (nom, email)</li>
                  <li>Données d'utilisation du service</li>
                  <li>Contenu soumis pour vérification</li>
                  <li>Données techniques (IP, navigateur)</li>
                </ul>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Utilisation des Données</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Fourniture et amélioration du service</li>
                  <li>Communication avec les utilisateurs</li>
                  <li>Prévention de la fraude et des abus</li>
                  <li>Respect des obligations légales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'disclaimers': {
      title: "Avertissements",
      content: (
        <div className="space-y-6">
          <div className="bg-yellow-50 p-6 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mb-2" />
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">
              Service "En L'État"
            </h3>
            <p className="text-yellow-800">
              WeYeCheck est fourni "en l'état" sans garantie d'aucune sorte. 
              Nous ne garantissons pas que le service sera ininterrompu ou exempt d'erreurs.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Limitations Importantes
            </h3>
            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Précision des Vérifications</h4>
                <p className="text-gray-600 text-sm">
                  Bien que nous nous efforcions d'atteindre la plus grande précision possible, 
                  nous ne pouvons garantir que toutes nos vérifications sont parfaitement exactes. 
                  Les utilisateurs doivent exercer leur propre jugement.
                </p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Disponibilité du Service</h4>
                <p className="text-gray-600 text-sm">
                  Nous nous réservons le droit d'interrompre temporairement le service 
                  pour maintenance ou améliorations, sans préavis.
                </p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Contenu Tiers</h4>
                <p className="text-gray-600 text-sm">
                  Nous ne sommes pas responsables du contenu soumis par les utilisateurs 
                  ou des liens vers des sites externes.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'limitation-liability': {
      title: "Limitation de Responsabilité",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg">
            <Gavel className="w-6 h-6 text-red-600 mb-2" />
            <h3 className="text-lg font-semibold text-red-900 mb-2">
              Exclusion de Responsabilité
            </h3>
            <p className="text-red-800">
              Dans la mesure permise par la loi, WeYeCheck ne sera pas responsable 
              des dommages indirects, consécutifs ou punitifs.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Limitations Spécifiques
            </h3>
            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Dommages Exclus</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Perte de profits ou de revenus</li>
                  <li>Perte de données ou d'informations</li>
                  <li>Dommages indirects ou consécutifs</li>
                  <li>Dommages punitifs ou exemplaires</li>
                </ul>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Limite Financière</h4>
                <p className="text-gray-600 text-sm">
                  Notre responsabilité totale ne dépassera pas le montant payé 
                  par l'utilisateur pour le service au cours des 12 derniers mois.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'termination': {
      title: "Résiliation",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Résiliation par l'Utilisateur
            </h3>
            <div className="card p-6">
              <p className="text-gray-600 mb-4">
                Vous pouvez résilier votre compte à tout moment en nous contactant 
                ou en utilisant les fonctionnalités de suppression de compte.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Effet de la Résiliation</h4>
                <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Votre compte sera désactivé</li>
                  <li>Vos données seront supprimées selon notre politique de rétention</li>
                  <li>Vous perdrez l'accès à tous les services</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Résiliation par WeYeCheck
            </h3>
            <div className="card p-6">
              <p className="text-gray-600 mb-4">
                Nous nous réservons le droit de suspendre ou résilier votre compte 
                en cas de violation de ces conditions.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">Motifs de Résiliation</h4>
                <ul className="list-disc list-inside text-red-800 space-y-1">
                  <li>Violation des conditions d'utilisation</li>
                  <li>Activités frauduleuses ou illégales</li>
                  <li>Non-paiement des frais dus</li>
                  <li>Inactivité prolongée du compte</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'governing-law': {
      title: "Droit Applicable",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Loi Applicable
            </h3>
            <div className="card p-6">
              <p className="text-gray-600 mb-4">
                Ces conditions d'utilisation sont régies par le droit français. 
                Tout litige sera soumis à la juridiction exclusive des tribunaux français.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Résolution des Litiges
            </h3>
            <div className="space-y-4">
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Négociation</h4>
                <p className="text-gray-600 text-sm">
                  Nous encourageons la résolution amiable des différends par la négociation directe.
                </p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Médiation</h4>
                <p className="text-gray-600 text-sm">
                  En cas d'échec de la négociation, les parties peuvent recourir à la médiation.
                </p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Tribunaux</h4>
                <p className="text-gray-600 text-sm">
                  À défaut d'accord, les litiges seront portés devant les tribunaux compétents de Paris.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'contact': {
      title: "Contact",
      content: (
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Questions sur les Conditions
            </h3>
            <p className="text-gray-600 mb-4">
              Si vous avez des questions concernant ces conditions d'utilisation, 
              n'hésitez pas à nous contacter.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  Email : 
                  <a href="mailto:legal@weyecheck.com" className="text-blue-600 hover:underline ml-1">
                    legal@weyecheck.com
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">
                  Support : 
                  <a href="mailto:support@weyecheck.com" className="text-blue-600 hover:underline ml-1">
                    support@weyecheck.com
                  </a>
                </span>
              </div>
            </div>
          </div>
          
          <div className="card p-6 bg-blue-50">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Modifications des Conditions
            </h3>
            <p className="text-blue-800 text-sm mb-2">
              Nous pouvons modifier ces conditions d'utilisation de temps à autre. 
              Les modifications importantes seront notifiées par email ou via une notification sur notre site.
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
            <Scale className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">
              Conditions d'Utilisation
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ces conditions régissent votre utilisation de WeYeCheck. 
            Veuillez les lire attentivement avant d'utiliser notre service.
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
                {termsContent[activeSection].title}
              </h2>
              <div className="prose prose-gray max-w-none">
                {termsContent[activeSection].content}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

