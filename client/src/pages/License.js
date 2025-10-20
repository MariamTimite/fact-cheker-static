import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Info,
  Copy,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Scale,
  Lock,
  Globe,
  Users,
  Zap,
  Database,
  Code,
  BookOpen,
  Building,
  Cookie
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const License = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedLicense, setSelectedLicense] = useState('commercial');

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const licenseTypes = [
    {
      id: 'commercial',
      name: 'Licence Commerciale',
      description: 'Pour les entreprises et organisations commerciales',
      icon: Building,
      color: 'bg-orange-500',
      price: 'À partir de 99€/mois',
      features: [
        'Utilisation commerciale illimitée',
        'Support technique prioritaire',
        'API complète avec toutes les fonctionnalités',
        'Intégration personnalisée',
        'SLA 99.9%',
        'Formation et documentation avancée'
      ],
      restrictions: [
        'Non redistribuable',
        'Usage interne uniquement'
      ]
    },
    {
      id: 'open-source',
      name: 'Licence Open Source',
      description: 'Pour les projets open source et éducatifs',
      icon: Globe,
      color: 'bg-green-500',
      price: 'Gratuit',
      features: [
        'Utilisation gratuite pour projets open source',
        'Code source disponible',
        'API limitée (1000 requêtes/mois)',
        'Support communautaire',
        'Documentation de base',
        'Contribution à l\'amélioration possible'
      ],
      restrictions: [
        'Projets open source uniquement',
        'Attribution requise',
        'Pas d\'usage commercial'
      ]
    },
    {
      id: 'educational',
      name: 'Licence Éducative',
      description: 'Pour les institutions éducatives et de recherche',
      icon: BookOpen,
      color: 'bg-blue-500',
      price: 'Gratuit',
      features: [
        'Utilisation gratuite pour l\'éducation',
        'API complète pour la recherche',
        'Support académique',
        'Données anonymisées pour la recherche',
        'Formation pour enseignants',
        'Accès aux publications scientifiques'
      ],
      restrictions: [
        'Usage éducatif uniquement',
        'Attribution dans les publications',
        'Pas d\'usage commercial'
      ]
    }
  ];

  const licenseTerms = [
    {
      id: 'usage-rights',
      title: 'Droits d\'Utilisation',
      icon: CheckCircle,
      content: [
        'Vous pouvez utiliser WeYeCheck pour vérifier des informations dans vos applications',
        'Vous pouvez intégrer notre API dans vos services commerciaux',
        'Vous pouvez créer des applications tierces utilisant nos services',
        'Vous pouvez utiliser nos données pour la recherche et l\'analyse'
      ]
    },
    {
      id: 'restrictions',
      title: 'Restrictions',
      icon: XCircle,
      content: [
        'Vous ne pouvez pas redistribuer notre API ou nos données',
        'Vous ne pouvez pas utiliser nos services pour créer un concurrent direct',
        'Vous ne pouvez pas contourner nos limitations techniques',
        'Vous ne pouvez pas utiliser nos services pour des activités illégales'
      ]
    },
    {
      id: 'attribution',
      title: 'Attribution',
      icon: Info,
      content: [
        'Vous devez mentionner WeYeCheck comme source de vérification',
        'Vous devez inclure un lien vers notre site web',
        'Vous devez respecter nos marques et logos',
        'Vous devez indiquer clairement l\'utilisation de nos services'
      ]
    },
    {
      id: 'liability',
      title: 'Responsabilité',
      icon: Shield,
      content: [
        'Nous ne sommes pas responsables des décisions prises sur la base de nos vérifications',
        'Nos services sont fournis "en l\'état" sans garantie',
        'Nous nous réservons le droit de modifier nos services',
        'Nous ne garantissons pas l\'exactitude à 100% de nos vérifications'
      ]
    }
  ];

  const legalDocuments = [
    {
      name: 'Conditions d\'Utilisation',
      description: 'Termes et conditions générales d\'utilisation de WeYeCheck',
      icon: FileText,
      lastUpdated: '2024-01-15',
      size: '45 KB'
    },
    {
      name: 'Politique de Confidentialité',
      description: 'Comment nous collectons, utilisons et protégeons vos données',
      icon: Shield,
      lastUpdated: '2024-01-10',
      size: '32 KB'
    },
    {
      name: 'Contrat de Licence API',
      description: 'Conditions spécifiques pour l\'utilisation de notre API',
      icon: Code,
      lastUpdated: '2024-01-12',
      size: '28 KB'
    },
    {
      name: 'Politique des Cookies',
      description: 'Informations sur l\'utilisation des cookies sur notre site',
      icon: Cookie,
      lastUpdated: '2024-01-08',
      size: '18 KB'
    }
  ];

  const faqItems = [
    {
      question: "Puis-je utiliser WeYeCheck dans mon application commerciale ?",
      answer: "Oui, avec une licence commerciale appropriée. Vous pouvez intégrer notre API dans vos applications commerciales moyennant le paiement des frais de licence mensuels ou annuels."
    },
    {
      question: "Quelle est la différence entre les licences ?",
      answer: "La licence commerciale permet une utilisation illimitée avec support prioritaire. La licence open source est gratuite mais limitée aux projets open source. La licence éducative est gratuite pour les institutions académiques."
    },
    {
      question: "Puis-je redistribuer WeYeCheck ?",
      answer: "Non, vous ne pouvez pas redistribuer notre API ou nos données. Vous pouvez utiliser nos services dans vos applications, mais pas les redistribuer en tant que service séparé."
    },
    {
      question: "Que se passe-t-il si je viole les termes de la licence ?",
      answer: "En cas de violation des termes de licence, nous nous réservons le droit de suspendre ou de résilier votre accès à nos services. Nous travaillons toujours avec nos utilisateurs pour résoudre les problèmes de manière constructive."
    },
    {
      question: "Puis-je modifier WeYeCheck pour mes besoins ?",
      answer: "Pour les licences open source et éducatives, vous pouvez contribuer aux améliorations. Pour la licence commerciale, nous offrons des intégrations personnalisées et des fonctionnalités sur mesure."
    },
    {
      question: "Comment puis-je obtenir une licence ?",
      answer: "Vous pouvez souscrire à une licence directement depuis votre tableau de bord utilisateur, ou nous contacter pour discuter de vos besoins spécifiques et obtenir une licence personnalisée."
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Texte copié dans le presse-papiers !');
  };

  return (
    <>
      <Helmet>
        <title>Licences - WeYeCheck</title>
        <meta name="description" content="Découvrez les différentes licences WeYeCheck pour l'utilisation commerciale, open source et éducative." />
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
                <Scale className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                Licences <span className="text-orange-600">WeYeCheck</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Découvrez les différentes options de licence pour utiliser WeYeCheck selon vos besoins : 
                commercial, open source ou éducatif.
              </p>
            </motion.div>
          </div>
        </section>

        {/* License Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Types de Licences</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choisissez la licence qui correspond le mieux à votre projet
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {licenseTypes.map((license, index) => (
                <motion.div
                  key={license.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                    selectedLicense === license.id ? 'ring-2 ring-orange-500' : ''
                  }`}
                >
                  <div className={`${license.color} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <license.icon className="w-8 h-8 mr-3" />
                      <h3 className="text-xl font-bold">{license.name}</h3>
                    </div>
                    <p className="text-white/90 mb-4">{license.description}</p>
                    <div className="text-2xl font-bold">{license.price}</div>
                  </div>

                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Fonctionnalités incluses :</h4>
                    <ul className="space-y-2 mb-6">
                      {license.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-gray-900 mb-3">Restrictions :</h4>
                    <ul className="space-y-2 mb-6">
                      {license.restrictions.map((restriction, idx) => (
                        <li key={idx} className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{restriction}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelectedLicense(license.id)}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        selectedLicense === license.id
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {selectedLicense === license.id ? 'Sélectionné' : 'Sélectionner'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* License Terms */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Conditions de Licence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprenez vos droits et obligations lors de l'utilisation de WeYeCheck
              </p>
            </motion.div>

            <div className="space-y-6">
              {licenseTerms.map((term, index) => (
                <motion.div
                  key={term.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(term.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <term.icon className="w-6 h-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{term.title}</h3>
                    </div>
                    {expandedSections[term.id] ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedSections[term.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >
                      <ul className="space-y-3">
                        {term.content.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Documents */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Documents Légaux</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Téléchargez et consultez tous nos documents légaux
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {legalDocuments.map((doc, index) => (
                <motion.div
                  key={doc.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <doc.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                  <div className="text-xs text-gray-500 mb-4">
                    <div>Mis à jour: {doc.lastUpdated}</div>
                    <div>Taille: {doc.size}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-1" />
                      Télécharger
                    </button>
                    <button 
                      onClick={() => copyToClipboard(doc.name)}
                      className="px-3 py-2 border border-gray-300 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Réponses aux questions les plus courantes sur nos licences
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(`faq-${index}`)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {expandedSections[`faq-${index}`] ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedSections[`faq-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Legal */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Questions Légales ?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Notre équipe juridique est là pour répondre à toutes vos questions sur les licences et l'utilisation de WeYeCheck.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contacter l'Équipe Juridique
                </a>
                <a
                  href="/support"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Support Technique
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default License;
