import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Tag, 
  TrendingUp, 
  Clock, 
  Users, 
  Eye, 
  Filter,
  Grid,
  List,
  SortAsc,
  SortDesc,
  Search,
  Calendar,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import { mockFactChecks, mockCategories } from '../data/mockData';
import FactCheckCard from '../components/FactCheckCard';

const CategoryPage = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState('grid');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Trouver la catégorie
  const categoryData = mockCategories.find(cat => 
    cat.toLowerCase() === category?.toLowerCase()
  );

  if (!categoryData && category) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <Tag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Catégorie non trouvée</h1>
          <p className="text-gray-600 mb-6">Cette catégorie n'existe pas.</p>
          <button 
            onClick={() => window.location.href = '/fact-check'}
            className="btn btn-primary"
          >
            Retour aux Vérifications
          </button>
        </div>
      </div>
    );
  }

  // Filtrer les vérifications par catégorie
  const categoryFactChecks = mockFactChecks.filter(factCheck => {
    const matchesCategory = !category || factCheck.tags.includes(category.toLowerCase());
    const matchesStatus = statusFilter === 'all' || factCheck.status === statusFilter;
    const matchesSearch = !searchQuery || 
      factCheck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      factCheck.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  // Trier les résultats
  const sortedFactChecks = [...categoryFactChecks].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.createdAt) - new Date(a.createdAt);
      case 'popular':
        return b.views - a.views;
      case 'trending':
        return b.views - a.views; // Simplifié pour la démo
      default:
        return 0;
    }
  });

  // Statistiques de la catégorie
  const categoryStats = {
    totalChecks: categoryFactChecks.length,
    verifiedChecks: categoryFactChecks.filter(fc => fc.status === 'verified').length,
    falseChecks: categoryFactChecks.filter(fc => fc.status === 'false').length,
    misleadingChecks: categoryFactChecks.filter(fc => fc.status === 'misleading').length,
    totalViews: categoryFactChecks.reduce((sum, fc) => sum + fc.views, 0),
    averageRating: 4.6
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'false':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'misleading':
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'verified':
        return 'Vérifié';
      case 'false':
        return 'Faux';
      case 'misleading':
        return 'Trompeur';
      default:
        return 'En cours';
    }
  };

  const getCategoryColor = (categoryName) => {
    const colors = {
      'politique': 'bg-blue-100 text-blue-800',
      'santé': 'bg-green-100 text-green-800',
      'environnement': 'bg-emerald-100 text-emerald-800',
      'technologie': 'bg-purple-100 text-purple-800',
      'économie': 'bg-yellow-100 text-yellow-800',
      'sport': 'bg-orange-100 text-orange-800',
      'culture': 'bg-pink-100 text-pink-800',
      'sciences': 'bg-indigo-100 text-indigo-800'
    };
    return colors[categoryName?.toLowerCase()] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryIcon = (categoryName) => {
    const icons = {
      'politique': '🏛️',
      'santé': '🏥',
      'environnement': '🌱',
      'technologie': '💻',
      'économie': '💰',
      'sport': '⚽',
      'culture': '🎭',
      'sciences': '🔬'
    };
    return icons[categoryName?.toLowerCase()] || '📋';
  };

  const sortOptions = [
    { value: 'recent', label: 'Plus récent', icon: Calendar },
    { value: 'popular', label: 'Plus populaire', icon: Eye },
    { value: 'trending', label: 'Tendance', icon: TrendingUp }
  ];

  const statusOptions = [
    { value: 'all', label: 'Tous les statuts' },
    { value: 'verified', label: 'Vérifiés', icon: CheckCircle, color: 'green' },
    { value: 'false', label: 'Faux', icon: XCircle, color: 'red' },
    { value: 'misleading', label: 'Trompeurs', icon: AlertTriangle, color: 'yellow' }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header de la catégorie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {category ? (
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 text-2xl">
                  {getCategoryIcon(category)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 capitalize">
                    {category}
                  </h1>
                  <p className="text-gray-600 mt-1">
                    Vérifications dans la catégorie {category}
                  </p>
                </div>
              </div>

              {/* Statistiques de la catégorie */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {categoryStats.totalChecks}
                  </div>
                  <div className="text-sm text-gray-600">Vérifications</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {categoryStats.totalViews.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Vues Total</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {categoryStats.verifiedChecks}
                  </div>
                  <div className="text-sm text-gray-600">Vérifiées</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {categoryStats.averageRating}
                  </div>
                  <div className="text-sm text-gray-600">Note Moyenne</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Toutes les Catégories
              </h1>
              <p className="text-xl text-gray-600">
                Explorez les vérifications par catégorie
              </p>
            </div>
          )}
        </motion.div>

        {category ? (
          <>
            {/* Barre d'outils */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-4 mb-6"
            >
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                {/* Recherche */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Rechercher dans cette catégorie..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="input pl-10 w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Filtre par statut */}
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="input text-sm"
                    >
                      {statusOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tri */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Trier par :</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="input text-sm"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mode d'affichage */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Résultats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {sortedFactChecks.length > 0 ? (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                  {sortedFactChecks.map(factCheck => (
                    <FactCheckCard
                      key={factCheck.id}
                      factCheck={factCheck}
                      onClick={() => window.location.href = `/fact-check/${factCheck.id}`}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Tag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Aucune vérification trouvée
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Aucune vérification ne correspond à vos critères dans cette catégorie.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setStatusFilter('all');
                    }}
                    className="btn btn-primary"
                  >
                    Effacer les filtres
                  </button>
                </div>
              )}
            </motion.div>
          </>
        ) : (
          /* Liste de toutes les catégories */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {mockCategories.map((cat, index) => {
              const catFactChecks = mockFactChecks.filter(fc => fc.tags.includes(cat.toLowerCase()));
              const catStats = {
                totalChecks: catFactChecks.length,
                totalViews: catFactChecks.reduce((sum, fc) => sum + fc.views, 0),
                verifiedChecks: catFactChecks.filter(fc => fc.status === 'verified').length
              };

              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="card p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => window.location.href = `/category/${cat.toLowerCase()}`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                      {getCategoryIcon(cat)}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {cat}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Vérifications:</span>
                        <span className="font-medium">{catStats.totalChecks}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vues:</span>
                        <span className="font-medium">{catStats.totalViews.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vérifiées:</span>
                        <span className="font-medium text-green-600">{catStats.verifiedChecks}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(cat)}`}>
                        {cat}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Catégories populaires */}
        {category && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Autres Catégories Populaires
              </h3>
              <div className="flex flex-wrap gap-2">
                {mockCategories
                  .filter(cat => cat.toLowerCase() !== category.toLowerCase())
                  .slice(0, 6)
                  .map(cat => (
                    <button
                      key={cat}
                      onClick={() => window.location.href = `/category/${cat.toLowerCase()}`}
                      className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      <span className="mr-2">{getCategoryIcon(cat)}</span>
                      {cat}
                    </button>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

