import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  SortAsc, 
  SortDesc, 
  Calendar, 
  User, 
  Tag, 
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Grid,
  List,
  SlidersHorizontal
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { mockFactChecks, mockUsers, mockCategories } from '../data/mockData';
import FactCheckCard from '../components/FactCheckCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [filters, setFilters] = useState({
    status: 'all',
    category: 'all',
    dateRange: 'all',
    verifier: 'all'
  });

  // Simuler la recherche
  useEffect(() => {
    if (query) {
      setLoading(true);
      // Simulation d'un délai de recherche
      setTimeout(() => {
        const filteredResults = mockFactChecks.filter(factCheck => {
          const matchesQuery = factCheck.title.toLowerCase().includes(query.toLowerCase()) ||
                              factCheck.content.toLowerCase().includes(query.toLowerCase()) ||
                              factCheck.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
          
          const matchesStatus = filters.status === 'all' || factCheck.status === filters.status;
          const matchesCategory = filters.category === 'all' || 
                                 factCheck.tags.includes(filters.category.toLowerCase());
          
          return matchesQuery && matchesStatus && matchesCategory;
        });

        // Trier les résultats
        const sortedResults = [...filteredResults].sort((a, b) => {
          switch (sortBy) {
            case 'date':
              return new Date(b.createdAt) - new Date(a.createdAt);
            case 'views':
              return b.views - a.views;
            case 'relevance':
            default:
              // Score de pertinence basique
              const scoreA = a.title.toLowerCase().includes(query.toLowerCase()) ? 3 : 
                           a.content.toLowerCase().includes(query.toLowerCase()) ? 2 : 1;
              const scoreB = b.title.toLowerCase().includes(query.toLowerCase()) ? 3 : 
                           b.content.toLowerCase().includes(query.toLowerCase()) ? 2 : 1;
              return scoreB - scoreA;
          }
        });

        setResults(sortedResults);
        setLoading(false);
      }, 500);
    }
  }, [query, filters, sortBy]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      status: 'all',
      category: 'all',
      dateRange: 'all',
      verifier: 'all'
    });
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

  const sortOptions = [
    { value: 'relevance', label: 'Pertinence', icon: Search },
    { value: 'date', label: 'Date', icon: Calendar },
    { value: 'views', label: 'Vues', icon: Eye }
  ];

  const statusOptions = [
    { value: 'all', label: 'Tous les statuts' },
    { value: 'verified', label: 'Vérifiés', icon: CheckCircle, color: 'green' },
    { value: 'false', label: 'Faux', icon: XCircle, color: 'red' },
    { value: 'misleading', label: 'Trompeurs', icon: AlertTriangle, color: 'yellow' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'Toutes les catégories' },
    ...mockCategories.map(cat => ({ value: cat.toLowerCase(), label: cat }))
  ];

  const dateRangeOptions = [
    { value: 'all', label: 'Toutes les dates' },
    { value: 'today', label: 'Aujourd\'hui' },
    { value: 'week', label: 'Cette semaine' },
    { value: 'month', label: 'Ce mois' },
    { value: 'year', label: 'Cette année' }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex items-center mb-4">
            <Search className="w-6 h-6 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">
              Résultats de recherche
            </h1>
          </div>
          
          {query && (
            <div className="flex items-center text-gray-600">
              <span>Recherche pour : </span>
              <span className="font-semibold text-gray-900 ml-2">"{query}"</span>
              <span className="ml-2">({results.length} résultat{results.length > 1 ? 's' : ''})</span>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filtres */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="card p-6 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <SlidersHorizontal className="w-5 h-5 mr-2" />
                  Filtres
                </h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Effacer
                </button>
              </div>

              <div className="space-y-6">
                {/* Statut */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Statut
                  </label>
                  <select
                    value={filters.status}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="input w-full"
                  >
                    {statusOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Catégorie */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Catégorie
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="input w-full"
                  >
                    {categoryOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Période */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Période
                  </label>
                  <select
                    value={filters.dateRange}
                    onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                    className="input w-full"
                  >
                    {dateRangeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Vérificateur */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vérificateur
                  </label>
                  <select
                    value={filters.verifier}
                    onChange={(e) => handleFilterChange('verifier', e.target.value)}
                    className="input w-full"
                  >
                    <option value="all">Tous les vérificateurs</option>
                    {mockUsers.map(user => (
                      <option key={user.id} value={user.username}>
                        {user.username}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Résultats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            {/* Barre d'outils */}
            <div className="card p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
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
                </div>

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

            {/* Contenu des résultats */}
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-600">Recherche en cours...</span>
              </div>
            ) : results.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
                {results.map(factCheck => (
                  <FactCheckCard
                    key={factCheck.id}
                    factCheck={factCheck}
                    onClick={() => window.location.href = `/fact-check/${factCheck.id}`}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-gray-600 mb-6">
                  Essayez de modifier vos critères de recherche ou vos filtres.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Vérifiez l'orthographe de vos mots-clés</p>
                  <p>• Essayez des termes plus généraux</p>
                  <p>• Utilisez moins de filtres</p>
                </div>
              </div>
            )}

            {/* Pagination */}
            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 flex items-center justify-center"
              >
                <div className="flex items-center space-x-2">
                  <button className="btn btn-outline" disabled>
                    Précédent
                  </button>
                  <div className="flex items-center space-x-1">
                    <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                    <button className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">2</button>
                    <button className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">3</button>
                  </div>
                  <button className="btn btn-outline">
                    Suivant
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Suggestions de recherche */}
        {query && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recherches Similaires
              </h3>
              <div className="flex flex-wrap gap-2">
                {['politique', 'santé', 'environnement', 'technologie'].map(suggestion => (
                  <button
                    key={suggestion}
                    onClick={() => window.location.href = `/search?q=${suggestion}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {suggestion}
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

export default SearchResults;

