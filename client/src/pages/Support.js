import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Info,
  Send,
  FileText,
  Video,
  BookOpen,
  Zap,
  Shield,
  Users,
  Settings,
  Bug,
  CreditCard,
  Globe,
  Lock,
  Database,
  Code,
  ChevronDown,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    priority: 'medium',
    message: ''
  });

  const supportCategories = [
    { id: 'all', name: 'Tous', icon: HelpCircle },
    { id: 'getting-started', name: 'Premiers pas', icon: Zap },
    { id: 'api', name: 'API & Intégration', icon: Code },
    { id: 'billing', name: 'Facturation', icon: CreditCard },
    { id: 'technical', name: 'Support technique', icon: Settings },
    { id: 'security', name: 'Sécurité', icon: Shield },
    { id: 'account', name: 'Compte', icon: Users }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'getting-started',
      question: "Comment commencer à utiliser WeYeCheck ?",
      answer: "Pour commencer à utiliser WeYeCheck, vous devez d'abord créer un compte sur notre plateforme. Une fois inscrit, vous pouvez obtenir votre clé API depuis votre tableau de bord développeur et commencer à intégrer nos services de vérification dans vos applications.",
      tags: ["début", "compte", "API"]
    },
    {
      id: 2,
      category: 'api',
      question: "Quels sont les limites de l'API ?",
      answer: "Nos limites dépendent de votre plan d'abonnement. Le plan gratuit offre 1000 requêtes par mois, tandis que nos plans payants offrent des limites plus élevées. Consultez notre page de tarification pour plus de détails sur les limites spécifiques à chaque plan.",
      tags: ["limites", "API", "plans"]
    },
    {
      id: 3,
      category: 'billing',
      question: "Comment fonctionne la facturation ?",
      answer: "La facturation se fait mensuellement ou annuellement selon votre choix. Vous êtes facturé à l'avance pour la période choisie. Les paiements sont traités de manière sécurisée via Stripe. Vous pouvez modifier ou annuler votre abonnement à tout moment depuis votre tableau de bord.",
      tags: ["facturation", "paiement", "abonnement"]
    },
    {
      id: 4,
      category: 'technical',
      question: "Que faire si l'API retourne une erreur ?",
      answer: "Si vous rencontrez des erreurs API, vérifiez d'abord votre clé API et la syntaxe de votre requête. Consultez notre documentation pour les codes d'erreur spécifiques. Si le problème persiste, contactez notre support technique avec les détails de l'erreur et votre code.",
      tags: ["erreur", "API", "dépannage"]
    },
    {
      id: 5,
      category: 'security',
      question: "Mes données sont-elles sécurisées ?",
      answer: "Oui, la sécurité de vos données est notre priorité. Nous utilisons un chiffrement de bout en bout, respectons le RGPD et avons obtenu les certifications de sécurité les plus strictes. Vos données ne sont jamais partagées avec des tiers sans votre consentement explicite.",
      tags: ["sécurité", "RGPD", "confidentialité"]
    },
    {
      id: 6,
      category: 'account',
      question: "Comment réinitialiser mon mot de passe ?",
      answer: "Pour réinitialiser votre mot de passe, cliquez sur 'Mot de passe oublié' sur la page de connexion. Entrez votre adresse email et vous recevrez un lien de réinitialisation. Si vous ne recevez pas l'email, vérifiez votre dossier spam ou contactez notre support.",
      tags: ["mot de passe", "compte", "réinitialisation"]
    },
    {
      id: 7,
      category: 'api',
      question: "Puis-je intégrer WeYeCheck dans mon application mobile ?",
      answer: "Absolument ! Nous fournissons des SDKs pour iOS (Swift) et Android (Kotlin/Java), ainsi que des SDKs JavaScript pour les applications React Native et Flutter. Consultez notre documentation pour les guides d'intégration spécifiques à chaque plateforme.",
      tags: ["mobile", "SDK", "intégration"]
    },
    {
      id: 8,
      category: 'technical',
      question: "Quel est le temps de réponse moyen de l'API ?",
      answer: "Le temps de réponse moyen de notre API est de 200-500ms pour les vérifications simples et de 1-3 secondes pour les vérifications complexes nécessitant une analyse approfondie. Nous nous efforçons constamment d'améliorer ces performances.",
      tags: ["performance", "temps de réponse", "API"]
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Chat en direct",
      description: "Obtenez une aide immédiate de notre équipe",
      availability: "24/7",
      responseTime: "< 2 min",
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Envoyez-nous un message détaillé",
      availability: "24/7",
      responseTime: "< 4h",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Téléphone",
      description: "Parlez directement à un expert",
      availability: "9h-18h CET",
      responseTime: "Immédiat",
      color: "bg-purple-500"
    },
    {
      icon: FileText,
      title: "Ticket support",
      description: "Créez un ticket pour un suivi détaillé",
      availability: "24/7",
      responseTime: "< 24h",
      color: "bg-orange-500"
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation complète",
      description: "Guides détaillés et références API",
      link: "/docs",
      type: "Documentation"
    },
    {
      icon: Video,
      title: "Tutoriels vidéo",
      description: "Apprenez avec nos guides vidéo",
      link: "/tutorials",
      type: "Vidéo"
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Rejoignez notre communauté Discord",
      link: "https://discord.gg/weyecheck",
      type: "Communauté"
    },
    {
      icon: FileText,
      title: "Base de connaissances",
      description: "Articles et guides pratiques",
      link: "/knowledge-base",
      type: "Articles"
    }
  ];

  const filteredFAQs = faqItems.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticket soumis:', contactForm);
    alert('Votre ticket de support a été créé avec succès !');
  };

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <>
      <Helmet>
        <title>Support - WeYeCheck</title>
        <meta name="description" content="Obtenez de l'aide avec WeYeCheck. Support technique, documentation, FAQ et contact direct avec notre équipe." />
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
                <HelpCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                Centre de <span className="text-orange-600">Support</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Nous sommes là pour vous aider ! Trouvez des réponses à vos questions ou contactez directement notre équipe de support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher dans la FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {supportCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment nous contacter</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choisissez le canal de support qui vous convient le mieux
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>{channel.responseTime}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors">
                    Utiliser
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trouvez rapidement des réponses aux questions les plus courantes
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {expandedFAQ === faq.id ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 mb-4">{faq.answer}</p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aucune question trouvée
                </h3>
                <p className="text-gray-600 mb-6">
                  Essayez de modifier vos critères de recherche.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Réinitialiser
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ressources utiles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explorez nos ressources pour en savoir plus sur WeYeCheck
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-orange-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.type}</span>
                    <a
                      href={resource.link}
                      className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
                    >
                      Accéder
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Créer un ticket de support
              </h2>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                Vous n'avez pas trouvé ce que vous cherchiez ? Créez un ticket et notre équipe vous répondra rapidement.
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Catégorie *
                    </label>
                    <select
                      name="category"
                      value={contactForm.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez une catégorie</option>
                      <option value="technical">Support technique</option>
                      <option value="billing">Facturation</option>
                      <option value="api">API & Intégration</option>
                      <option value="account">Compte</option>
                      <option value="feature">Demande de fonctionnalité</option>
                      <option value="bug">Signalement de bug</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priorité
                  </label>
                  <select
                    name="priority"
                    value={contactForm.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="low">Faible</option>
                    <option value="medium">Moyenne</option>
                    <option value="high">Élevée</option>
                    <option value="urgent">Urgente</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Décrivez votre problème ou votre question en détail..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors flex items-center mx-auto"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Créer le ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Support;
