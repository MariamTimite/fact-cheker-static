import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Zap, 
  Shield, 
  Search, 
  ChevronRight, 
  ChevronDown,
  ExternalLink,
  Copy,
  CheckCircle,
  AlertCircle,
  Info,
  Terminal,
  Database,
  Globe,
  Lock,
  Key,
  Users,
  Settings
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Documentation = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [activeTab, setActiveTab] = useState('getting-started');

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Commencer',
      icon: Zap,
      content: [
        {
          title: 'Introduction à WeYeCheck',
          content: `WeYeCheck est une plateforme de vérification d'informations révolutionnaire qui combine intelligence artificielle, vérification communautaire et sources fiables pour lutter contre la désinformation en temps réel.`
        },
        {
          title: 'Installation',
          content: `Pour commencer à utiliser WeYeCheck API, vous devez d'abord créer un compte développeur et obtenir votre clé API.`
        },
        {
          title: 'Première requête',
          content: `Voici un exemple simple pour vérifier une information avec notre API :`
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'Référence API',
      icon: Code,
      content: [
        {
          title: 'Endpoints principaux',
          content: `Notre API REST offre plusieurs endpoints pour différentes fonctionnalités de vérification.`
        },
        {
          title: 'Authentification',
          content: `Toutes les requêtes API nécessitent une authentification via clé API dans l'en-tête Authorization.`
        },
        {
          title: 'Codes de réponse',
          content: `L'API retourne des codes de statut HTTP standard pour indiquer le succès ou l'échec des requêtes.`
        }
      ]
    },
    {
      id: 'sdk',
      title: 'SDK & Bibliothèques',
      icon: Terminal,
      content: [
        {
          title: 'JavaScript/Node.js',
          content: `SDK officiel pour JavaScript et Node.js avec support TypeScript.`
        },
        {
          title: 'Python',
          content: `Bibliothèque Python pour intégrer WeYeCheck dans vos applications Python.`
        },
        {
          title: 'PHP',
          content: `Package Composer pour les développeurs PHP.`
        }
      ]
    },
    {
      id: 'webhooks',
      title: 'Webhooks',
      icon: Globe,
      content: [
        {
          title: 'Configuration',
          content: `Configurez des webhooks pour recevoir des notifications en temps réel sur les vérifications.`
        },
        {
          title: 'Événements',
          content: `Types d'événements disponibles pour les webhooks.`
        },
        {
          title: 'Sécurité',
          content: `Comment sécuriser vos webhooks avec la vérification des signatures.`
        }
      ]
    }
  ];

  const codeExamples = {
    javascript: `// Installation
npm install weyecheck-sdk

// Utilisation basique
import { WeYeCheck } from 'weyecheck-sdk';

const client = new WeYeCheck('your-api-key');

// Vérifier une information
const result = await client.verify({
  content: "Le réchauffement climatique est un mythe",
  type: "text"
});

console.log(result.verdict); // "false"
console.log(result.confidence); // 0.95`,

    python: `# Installation
pip install weyecheck

# Utilisation basique
from weyecheck import WeYeCheck

client = WeYeCheck(api_key='your-api-key')

# Vérifier une information
result = client.verify(
    content="Le réchauffement climatique est un mythe",
    type="text"
)

print(result.verdict)  # False
print(result.confidence)  # 0.95`,

    curl: `# Vérifier une information avec cURL
curl -X POST https://api.weyecheck.com/v1/verify \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Le réchauffement climatique est un mythe",
    "type": "text"
  }'`
  };

  const quickStartSteps = [
    {
      step: 1,
      title: "Créer un compte",
      description: "Inscrivez-vous sur notre plateforme pour obtenir votre clé API",
      icon: Users
    },
    {
      step: 2,
      title: "Obtenir votre clé API",
      description: "Générez votre clé API depuis votre tableau de bord développeur",
      icon: Key
    },
    {
      step: 3,
      title: "Installer le SDK",
      description: "Installez le SDK de votre langage préféré",
      icon: Terminal
    },
    {
      step: 4,
      title: "Faire votre première requête",
      description: "Testez votre intégration avec un exemple simple",
      icon: CheckCircle
    }
  ];

  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/v1/verify',
      description: 'Vérifier une information',
      parameters: ['content', 'type', 'context']
    },
    {
      method: 'GET',
      endpoint: '/v1/status/{id}',
      description: 'Obtenir le statut d\'une vérification',
      parameters: ['id']
    },
    {
      method: 'GET',
      endpoint: '/v1/sources',
      description: 'Lister les sources fiables',
      parameters: ['category', 'limit', 'offset']
    },
    {
      method: 'POST',
      endpoint: '/v1/batch-verify',
      description: 'Vérifier plusieurs informations',
      parameters: ['items', 'priority']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - WeYeCheck</title>
        <meta name="description" content="Documentation complète de l'API WeYeCheck pour intégrer la vérification d'informations dans vos applications." />
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
                <BookOpen className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                Documentation <span className="text-orange-600">WeYeCheck</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Intégrez la vérification d'informations dans vos applications avec notre API puissante et nos SDKs officiels.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#getting-started"
                  className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Commencer
                </a>
                <a
                  href="#api-reference"
                  className="px-6 py-3 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Référence API
                </a>
                <a
                  href="/api"
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                >
                  Tester l'API
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Démarrage Rapide</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Commencez à utiliser WeYeCheck en 4 étapes simples
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickStartSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
                  <nav className="space-y-2">
                    {documentationSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveTab(section.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center ${
                          activeTab === section.id
                            ? 'bg-orange-100 text-orange-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <section.icon className="w-4 h-4 mr-3" />
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                {documentationSections.map((section) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`${activeTab === section.id ? 'block' : 'hidden'}`}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <div className="flex items-center mb-6">
                        <section.icon className="w-8 h-8 text-orange-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                      </div>

                      <div className="space-y-8">
                        {section.content.map((item, index) => (
                          <div key={index}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.content}</p>
                            
                            {/* Code examples for specific sections */}
                            {section.id === 'getting-started' && index === 2 && (
                              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                                <pre>{codeExamples.javascript}</pre>
                              </div>
                            )}
                            
                            {section.id === 'api-reference' && index === 0 && (
                              <div className="space-y-4">
                                {apiEndpoints.map((endpoint, idx) => (
                                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                      <span className={`px-2 py-1 rounded text-xs font-medium mr-3 ${
                                        endpoint.method === 'POST' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                      }`}>
                                        {endpoint.method}
                                      </span>
                                      <code className="text-gray-900 font-mono">{endpoint.endpoint}</code>
                                    </div>
                                    <p className="text-gray-600 text-sm">{endpoint.description}</p>
                                    <div className="mt-2">
                                      <span className="text-xs text-gray-500">Paramètres: </span>
                                      <span className="text-xs text-gray-600">{endpoint.parameters.join(', ')}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Exemples de Code</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez comment intégrer WeYeCheck dans différents langages
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {Object.entries(codeExamples).map(([lang, code], index) => (
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
                    <h3 className="text-white font-semibold capitalize">{lang}</h3>
                    <button
                      onClick={() => navigator.clipboard.writeText(code)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-6">
                    <pre className="text-sm text-gray-800 overflow-x-auto">{code}</pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Besoin d'aide ?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Notre équipe de support technique est là pour vous aider à intégrer WeYeCheck dans vos projets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/support"
                  className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Support Technique
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Nous Contacter
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Documentation;
