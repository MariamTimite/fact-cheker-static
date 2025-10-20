// Données mockées pour WeYeCheck
// Ces données simulent une base de données complète

export const mockUsers = [
  {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'fact-checker',
    reputation: 1250,
    verifiedBadges: 5,
    joinDate: '2024-01-15',
    totalChecks: 47,
    accuracyRate: 94.2
  },
  {
    id: 2,
    username: 'marie_curie',
    email: 'marie@example.com',
    firstName: 'Marie',
    lastName: 'Curie',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    role: 'expert',
    reputation: 2890,
    verifiedBadges: 12,
    joinDate: '2023-08-22',
    totalChecks: 156,
    accuracyRate: 97.8
  },
  {
    id: 3,
    username: 'alex_smith',
    email: 'alex@example.com',
    firstName: 'Alex',
    lastName: 'Smith',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    role: 'moderator',
    reputation: 3420,
    verifiedBadges: 18,
    joinDate: '2023-05-10',
    totalChecks: 203,
    accuracyRate: 96.5
  }
];

export const mockFactChecks = [
  {
    id: 1,
    title: 'Vaccin COVID-19 et puces 5G',
    content: 'Une rumeur circule selon laquelle les vaccins COVID-19 contiendraient des puces 5G pour tracer la population.',
    source: 'Réseaux sociaux',
    status: 'verified',
    verificationDate: '2024-01-20',
    factChecker: mockUsers[0],
    score: 0.1,
    explanation: 'Cette affirmation est totalement fausse. Les vaccins COVID-19 ne contiennent aucune puce électronique. Ils sont composés de composants biologiques standard.',
    sources: [
      'Organisation Mondiale de la Santé (OMS)',
      'Agence européenne des médicaments (EMA)',
      'Centers for Disease Control and Prevention (CDC)'
    ],
    tags: ['santé', 'vaccin', 'COVID-19', 'fake news'],
    views: 15420,
    shares: 890,
    createdAt: '2024-01-18'
  },
  {
    id: 2,
    title: 'Changement climatique et températures record',
    content: 'Les températures mondiales ont atteint des records historiques en 2023, confirmant l\'accélération du changement climatique.',
    source: 'Rapport scientifique',
    status: 'verified',
    verificationDate: '2024-01-22',
    factChecker: mockUsers[1],
    score: 0.95,
    explanation: 'Cette information est confirmée par de multiples sources scientifiques. 2023 a été l\'année la plus chaude jamais enregistrée.',
    sources: [
      'NASA Goddard Institute for Space Studies',
      'Organisation météorologique mondiale (OMM)',
      'Copernicus Climate Change Service'
    ],
    tags: ['climat', 'environnement', 'science', 'température'],
    views: 8920,
    shares: 456,
    createdAt: '2024-01-20'
  },
  {
    id: 3,
    title: 'Élection présidentielle et fraude électorale',
    content: 'Des preuves de fraude électorale massive ont été découvertes lors de la dernière élection présidentielle.',
    source: 'Site web d\'information',
    status: 'misleading',
    verificationDate: '2024-01-19',
    factChecker: mockUsers[2],
    score: 0.3,
    explanation: 'Cette affirmation est largement exagérée. Bien que des cas isolés de fraude existent, ils ne représentent qu\'une infime partie des votes et n\'ont pas d\'impact sur le résultat final.',
    sources: [
      'Commission électorale fédérale',
      'Études universitaires sur la sécurité électorale',
      'Audits électoraux indépendants'
    ],
    tags: ['politique', 'élection', 'fraude', 'démocratie'],
    views: 23450,
    shares: 1234,
    createdAt: '2024-01-17'
  },
  {
    id: 4,
    title: 'Intelligence artificielle et emploi',
    content: 'L\'IA va détruire 50% des emplois dans les 10 prochaines années.',
    source: 'Article de presse',
    status: 'pending',
    verificationDate: null,
    factChecker: null,
    score: null,
    explanation: 'En cours de vérification...',
    sources: [],
    tags: ['IA', 'emploi', 'technologie', 'économie'],
    views: 5670,
    shares: 234,
    createdAt: '2024-01-23'
  }
];

export const mockCategories = [
  { id: 1, name: 'Politique', color: 'blue', count: 45 },
  { id: 2, name: 'Santé', color: 'green', count: 67 },
  { id: 3, name: 'Science', color: 'purple', count: 89 },
  { id: 4, name: 'Économie', color: 'yellow', count: 34 },
  { id: 5, name: 'Environnement', color: 'emerald', count: 56 },
  { id: 6, name: 'Technologie', color: 'indigo', count: 78 }
];

export const mockStats = {
  totalChecks: 1247,
  verifiedFacts: 892,
  falseClaims: 234,
  misleadingInfo: 89,
  pendingReview: 32,
  totalUsers: 15420,
  activeCheckers: 234,
  accuracyRate: 94.8
};

export const mockNotifications = [
  {
    id: 1,
    type: 'success',
    title: 'Vérification approuvée',
    message: 'Votre fact-check sur "Vaccin COVID-19" a été approuvé par la communauté.',
    timestamp: '2024-01-23T10:30:00Z',
    read: false
  },
  {
    id: 2,
    type: 'info',
    title: 'Nouveau badge',
    message: 'Vous avez gagné le badge "Vérificateur Expert" !',
    timestamp: '2024-01-22T15:45:00Z',
    read: false
  },
  {
    id: 3,
    type: 'warning',
    title: 'Vérification contestée',
    message: 'Votre fact-check sur "Élection présidentielle" a été contesté par un autre utilisateur.',
    timestamp: '2024-01-21T09:15:00Z',
    read: true
  }
];

export const mockLeaderboard = [
  { rank: 1, user: mockUsers[1], points: 2890, checks: 156 },
  { rank: 2, user: mockUsers[2], points: 3420, checks: 203 },
  { rank: 3, user: mockUsers[0], points: 1250, checks: 47 },
  { rank: 4, user: { username: 'sarah_wilson', firstName: 'Sarah', lastName: 'Wilson' }, points: 980, checks: 34 },
  { rank: 5, user: { username: 'mike_johnson', firstName: 'Mike', lastName: 'Johnson' }, points: 850, checks: 28 }
];

export const mockTrendingTopics = [
  { topic: 'Élections 2024', count: 156, trend: 'up' },
  { topic: 'Changement climatique', count: 134, trend: 'up' },
  { topic: 'Intelligence artificielle', count: 98, trend: 'up' },
  { topic: 'Santé publique', count: 87, trend: 'down' },
  { topic: 'Cryptomonnaies', count: 76, trend: 'stable' }
];

// Fonctions utilitaires pour simuler des opérations
export const simulateAPI = {
  // Simuler un délai réseau
  delay: (ms = 500) => new Promise(resolve => setTimeout(resolve, ms)),
  
  // Simuler une réponse d'API
  response: (data, success = true, message = '') => ({
    success,
    data,
    message,
    timestamp: new Date().toISOString()
  }),
  
  // Simuler une erreur d'API
  error: (message = 'Une erreur est survenue', status = 400) => ({
    success: false,
    error: message,
    status,
    timestamp: new Date().toISOString()
  })
};

// Données pour les démos et tests
export const demoContent = {
      welcomeMessage: 'Bienvenue sur WeYeCheck - La plateforme de vérification d\'informations la plus avancée au monde !',
  features: [
    'Vérification instantanée avec IA',
    'Analyse d\'images et vidéos',
    'Système communautaire de validation',
    'Score de crédibilité en temps réel',
    'Historique complet des vérifications'
  ]
};
