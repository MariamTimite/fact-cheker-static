import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Key, Globe, Zap, BookOpen, Terminal, Download } from 'lucide-react';

const API = () => {
  const [activeEndpoint, setActiveEndpoint] = useState('fact-checks');

  const endpoints = [
    {
      id: 'fact-checks',
      name: 'Fact-Checks',
      description: 'Gérer les vérifications d\'informations',
      method: 'GET',
      path: '/api/fact-checks',
      color: 'text-blue-600'
    },
    {
      id: 'users',
      name: 'Utilisateurs',
      description: 'Gérer les comptes utilisateurs',
      method: 'GET',
      path: '/api/users',
      color: 'text-green-600'
    },
    {
      id: 'auth',
      name: 'Authentification',
      description: 'Connexion et gestion des tokens',
      method: 'POST',
      path: '/api/auth/login',
      color: 'text-purple-600'
    },
    {
      id: 'stats',
      name: 'Statistiques',
      description: 'Métriques et données d\'analyse',
      method: 'GET',
      path: '/api/stats',
      color: 'text-orange-600'
    }
  ];

  const codeExamples = {
    'fact-checks': {
             request: `curl -X GET "https://api.weyecheck.com/v1/fact-checks" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      response: `{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Vaccin COVID-19 et puces 5G",
      "status": "verified",
      "score": 0.1,
      "explanation": "Cette affirmation est totalement fausse...",
      "createdAt": "2024-01-18T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1247
  }
}`,
      parameters: [
        { name: 'page', type: 'integer', required: false, description: 'Numéro de page (défaut: 1)' },
        { name: 'limit', type: 'integer', required: false, description: 'Nombre d\'éléments par page (défaut: 10)' },
        { name: 'status', type: 'string', required: false, description: 'Filtrer par statut (verified, false, misleading, pending)' },
        { name: 'category', type: 'string', required: false, description: 'Filtrer par catégorie' }
      ]
    },
    'users': {
             request: `curl -X GET "https://api.weyecheck.com/v1/users/profile" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
      response: `{
  "success": true,
  "data": {
    "id": 1,
    "username": "john_doe",
    "firstName": "John",
    "lastName": "Doe",
    "reputation": 1250,
    "totalChecks": 47,
    "accuracyRate": 94.2
  }
}`,
      parameters: [
        { name: 'Authorization', type: 'string', required: true, description: 'Token Bearer dans le header' }
      ]
    },
    'auth': {
             request: `curl -X POST "https://api.weyecheck.com/v1/auth/login" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'`,
      response: `{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe"
    }
  }
}`,
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'Adresse email de l\'utilisateur' },
        { name: 'password', type: 'string', required: true, description: 'Mot de passe de l\'utilisateur' }
      ]
    },
    'stats': {
             request: `curl -X GET "https://api.weyecheck.com/v1/stats/overview" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
      response: `{
  "success": true,
  "data": {
    "totalChecks": 1247,
    "verifiedFacts": 892,
    "falseClaims": 234,
    "misleadingInfo": 89,
    "pendingReview": 32,
    "totalUsers": 15420,
    "activeCheckers": 234,
    "accuracyRate": 94.8
  }
}`,
      parameters: [
        { name: 'period', type: 'string', required: false, description: 'Période d\'analyse (24h, 7d, 30d, all)' }
      ]
    }
  };

  const sdkExamples = [
    {
      language: 'JavaScript',
             code: `import { WeYeCheckAPI } from '@weyecheck/sdk';

const api = new WeYeCheckAPI('YOUR_API_KEY');

// Récupérer les fact-checks
const factChecks = await api.factChecks.list({
  page: 1,
  limit: 10,
  status: 'verified'
});

// Créer un nouveau fact-check
const newCheck = await api.factChecks.create({
  title: 'Nouvelle information à vérifier',
  content: 'Contenu de l\'information...',
  source: 'Source de l\'information'
});`
    },
    {
      language: 'Python',
             code: `from weyecheck import WeYeCheckAPI

api = WeYeCheckAPI('YOUR_API_KEY')

# Récupérer les fact-checks
fact_checks = api.fact_checks.list(
    page=1,
    limit=10,
    status='verified'
)

# Créer un nouveau fact-check
new_check = api.fact_checks.create({
    'title': 'Nouvelle information à vérifier',
    'content': 'Contenu de l\'information...',
    'source': 'Source de l\'information'
})`
    },
    {
      language: 'PHP',
             code: `use WeYeCheck\\WeYeCheckAPI;

$api = new WeYeCheckAPI('YOUR_API_KEY');

// Récupérer les fact-checks
$factChecks = $api->factChecks->list([
    'page' => 1,
    'limit' => 10,
    'status' => 'verified'
]);

// Créer un nouveau fact-check
$newCheck = $api->factChecks->create([
    'title' => 'Nouvelle information à vérifier',
    'content' => 'Contenu de l\'information...',
    'source' => 'Source de l\'information'
]);`
    }
  ];

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
            <Code className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Documentation API</h1>
          </div>
          <p className="text-xl text-gray-600">
            Intégrez WeYeCheck dans vos applications avec notre API REST complète
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-600">Endpoints principaux</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-green-600">99.9%</div>
            <div className="text-sm text-gray-600">Disponibilité</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">3</div>
            <div className="text-sm text-gray-600">SDKs disponibles</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">1000</div>
            <div className="text-sm text-gray-600">Requêtes/min</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Endpoints List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Endpoints
              </h2>
              
              <div className="space-y-4">
                {endpoints.map((endpoint) => (
                  <button
                    key={endpoint.id}
                    onClick={() => setActiveEndpoint(endpoint.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeEndpoint === endpoint.id
                        ? 'bg-blue-50 border-2 border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium px-2 py-1 rounded-full bg-gray-100 ${endpoint.color}`}>
                        {endpoint.method}
                      </span>
                      <span className="text-xs text-gray-500">{endpoint.path}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{endpoint.name}</h3>
                    <p className="text-sm text-gray-600">{endpoint.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* API Documentation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                {endpoints.find(e => e.id === activeEndpoint)?.name}
              </h2>

              {activeEndpoint && codeExamples[activeEndpoint] && (
                <div className="space-y-6">
                  {/* Parameters */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Paramètres</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-2 font-medium">Nom</th>
                            <th className="text-left py-2 font-medium">Type</th>
                            <th className="text-left py-2 font-medium">Requis</th>
                            <th className="text-left py-2 font-medium">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {codeExamples[activeEndpoint].parameters.map((param, index) => (
                            <tr key={index} className="border-b border-gray-100">
                              <td className="py-2 font-mono text-sm">{param.name}</td>
                              <td className="py-2 text-sm">{param.type}</td>
                              <td className="py-2 text-sm">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  param.required 
                                    ? 'bg-red-100 text-red-800' 
                                    : 'bg-green-100 text-green-800'
                                }`}>
                                  {param.required ? 'Oui' : 'Non'}
                                </span>
                              </td>
                              <td className="py-2 text-sm text-gray-600">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Request Example */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Exemple de requête</h3>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        <code>{codeExamples[activeEndpoint].request}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Response Example */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Exemple de réponse</h3>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-yellow-400 text-sm overflow-x-auto">
                        <code>{codeExamples[activeEndpoint].response}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* SDK Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="card p-6 mt-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Terminal className="w-5 h-5 mr-2" />
            SDKs et Exemples de Code
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sdkExamples.map((sdk, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{sdk.language}</h3>
                  <button className="btn btn-outline text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </button>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-gray-300 text-sm overflow-x-auto">
                    <code>{sdk.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="card p-6 mt-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            Commencer avec l'API
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">1. Obtenir une clé API</h3>
              <p className="text-gray-600">
                Créez un compte et générez votre clé API dans votre tableau de bord.
              </p>
              <button className="btn btn-primary">
                <Key className="w-4 h-4 mr-2" />
                Obtenir une clé
              </button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">2. Tester l'API</h3>
              <p className="text-gray-600">
                Utilisez notre console interactive pour tester les endpoints.
              </p>
              <button className="btn btn-outline">
                <Globe className="w-4 h-4 mr-2" />
                Console API
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default API;
