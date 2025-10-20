import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  Share2,
  BookOpen,
  Zap,
  Shield,
  Brain,
  Globe,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'Tous', count: 24 },
    { id: 'technology', name: 'Technologie', count: 8 },
    { id: 'fact-checking', name: 'Vérification', count: 6 },
    { id: 'ai', name: 'Intelligence Artificielle', count: 5 },
    { id: 'security', name: 'Sécurité', count: 3 },
    { id: 'industry', name: 'Industrie', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Comment l'IA révolutionne la détection de fausses informations",
      excerpt: "Découvrez comment les dernières avancées en intelligence artificielle permettent de détecter et combattre la désinformation plus efficacement que jamais.",
      content: "L'intelligence artificielle transforme radicalement notre approche de la lutte contre la désinformation...",
      author: "Marie Dubois",
      authorRole: "CEO & Fondatrice",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      publishedAt: "2024-01-20",
      readTime: "8 min",
      category: "ai",
      tags: ["IA", "Machine Learning", "Désinformation"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      views: 1250,
      shares: 45,
      featured: true
    },
    {
      id: 2,
      title: "WeYeCheck 2.0 : Nouvelles fonctionnalités et améliorations",
      excerpt: "Nous sommes fiers de présenter WeYeCheck 2.0 avec de nouvelles fonctionnalités révolutionnaires pour une vérification d'informations encore plus précise.",
      content: "La version 2.0 de WeYeCheck apporte des améliorations significatives...",
      author: "Ahmed Hassan",
      authorRole: "CTO",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      publishedAt: "2024-01-18",
      readTime: "6 min",
      category: "technology",
      tags: ["Mise à jour", "Fonctionnalités", "API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      views: 980,
      shares: 32,
      featured: false
    },
    {
      id: 3,
      title: "Les défis de la vérification d'informations en temps réel",
      excerpt: "Analysons les défis techniques et éthiques de la vérification d'informations en temps réel dans un monde où l'information circule à la vitesse de la lumière.",
      content: "La vérification en temps réel présente des défis uniques...",
      author: "Sophie Martin",
      authorRole: "Lead Data Scientist",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      publishedAt: "2024-01-15",
      readTime: "10 min",
      category: "fact-checking",
      tags: ["Temps réel", "Défis", "Éthique"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
      views: 756,
      shares: 28,
      featured: false
    },
    {
      id: 4,
      title: "Sécurité des données : Notre engagement envers la confidentialité",
      excerpt: "Découvrez comment WeYeCheck protège vos données et respecte votre vie privée tout en fournissant des services de vérification efficaces.",
      content: "La sécurité des données est au cœur de nos préoccupations...",
      author: "David Kim",
      authorRole: "Lead Backend Developer",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      publishedAt: "2024-01-12",
      readTime: "7 min",
      category: "security",
      tags: ["Sécurité", "Confidentialité", "RGPD"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      views: 892,
      shares: 41,
      featured: false
    },
    {
      id: 5,
      title: "L'impact de la désinformation sur la démocratie",
      excerpt: "Une analyse approfondie de l'impact de la désinformation sur les processus démocratiques et comment la technologie peut aider à protéger nos institutions.",
      content: "La désinformation représente une menace croissante pour la démocratie...",
      author: "Elena Rodriguez",
      authorRole: "Responsable Communication",
      authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      publishedAt: "2024-01-10",
      readTime: "12 min",
      category: "industry",
      tags: ["Démocratie", "Société", "Impact"],
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=400&fit=crop",
      views: 1103,
      shares: 67,
      featured: false
    },
    {
      id: 6,
      title: "Guide du développeur : Intégrer WeYeCheck dans votre application",
      excerpt: "Un guide complet pour les développeurs souhaitant intégrer les fonctionnalités de vérification WeYeCheck dans leurs applications.",
      content: "Ce guide vous accompagne étape par étape...",
      author: "Thomas Leroy",
      authorRole: "Lead Frontend Developer",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      publishedAt: "2024-01-08",
      readTime: "15 min",
      category: "technology",
      tags: ["Développement", "API", "Intégration"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      views: 1345,
      shares: 89,
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      case 'popular':
        return b.views - a.views;
      case 'trending':
        return b.shares - a.shares;
      default:
        return 0;
    }
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - WeYeCheck</title>
        <meta name="description" content="Découvrez les dernières actualités, analyses et insights sur la lutte contre la désinformation et les technologies de vérification." />
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
                Blog <span className="text-orange-600">WeYeCheck</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Découvrez les dernières actualités, analyses et insights sur la lutte contre la désinformation 
                et les technologies de vérification d'informations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white"
              >
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 mr-2" />
                  <span className="text-orange-100 font-medium">Article en vedette</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-xl text-orange-100 mb-6 max-w-3xl">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap items-center gap-6 text-orange-100">
                  <div className="flex items-center">
                    <img
                      src={featuredPost.authorAvatar}
                      alt={featuredPost.author}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(featuredPost.publishedAt)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{featuredPost.views.toLocaleString()}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Filters and Search */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher des articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                {/* Categories */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="latest">Plus récent</option>
                  <option value="popular">Plus populaire</option>
                  <option value="trending">Tendance</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-600 text-white text-xs font-medium rounded-full">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.authorRole}</p>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>{formatDate(post.publishedAt)}</p>
                        <p>{post.readTime}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Share2 className="w-4 h-4 mr-1" />
                          <span>{post.shares}</span>
                        </div>
                      </div>
                      <a
                        href={`/blog/${post.id}`}
                        className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
                      >
                        Lire
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More */}
            {sortedPosts.length > 0 && (
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
                  Charger plus d'articles
                </button>
              </div>
            )}

            {/* No Results */}
            {sortedPosts.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aucun article trouvé
                </h3>
                <p className="text-gray-600 mb-6">
                  Essayez de modifier vos critères de recherche ou vos filtres.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
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
                Recevez nos derniers articles et analyses directement dans votre boîte mail.
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

export default Blog;
