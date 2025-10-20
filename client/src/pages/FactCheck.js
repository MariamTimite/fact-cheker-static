import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Upload, Zap, FileText, Image, Video, Mic, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { mockFactChecks, mockCategories } from '../data/mockData';
import FactCheckCard from '../components/FactCheckCard';
import ImageUpload from '../components/ImageUpload';
import toast from 'react-hot-toast';

const FactCheck = () => {
  const [activeTab, setActiveTab] = useState('new');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    source: '',
    category: '',
    tags: []
  });
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredFactChecks = mockFactChecks.filter(factCheck => {
    const matchesSearch = factCheck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         factCheck.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || factCheck.tags.includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageSelect = (file, preview) => {
    setUploadedImage({ file, preview });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Vérification soumise avec succès !');
      
      // Reset form
      setFormData({
        title: '',
        content: '',
        source: '',
        category: '',
        tags: []
      });
      setUploadedImage(null);
      
    } catch (error) {
      toast.error('Erreur lors de la soumission');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Vérification d'Informations
          </h1>
          <p className="text-gray-600">
            Analysez et vérifiez la crédibilité des informations en temps réel
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-6 mb-6"
        >
          <div className="flex space-x-1 mb-6">
            <button
              onClick={() => setActiveTab('new')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'new'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Search className="w-4 h-4 inline mr-2" />
              Nouvelle Vérification
            </button>
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'browse'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Parcourir
            </button>
            <button
              onClick={() => setActiveTab('trending')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === 'trending'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <TrendingUp className="w-4 h-4 inline mr-2" />
              Tendances
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'new' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                <Search className="w-6 h-6 mr-2" />
                Nouvelle Vérification
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-600 mb-2">
                    Contenu à vérifier
                  </label>
                  <textarea
                    placeholder="Collez ici le texte, l'URL ou la déclaration à vérifier..."
                    className="textarea min-h-[120px]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-blue-600 mb-2">
                    Image (optionnel)
                  </label>
                  <ImageUpload
                    onImageSelect={handleImageSelect}
                    maxSize={5}
                    acceptedTypes={['image/jpeg', 'image/png', 'image/gif', 'image/webp']}
                    multiple={false}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="btn btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
                        Vérifier Maintenant
                      </>
                    )}
                  </button>
                  <button 
                    type="button"
                    className="btn btn-outline flex items-center justify-center"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Analyse Rapide
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'browse' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                Parcourir les Vérifications
              </h2>
              
              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Rechercher des vérifications..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input md:w-48"
                >
                  <option value="all">Toutes les catégories</option>
                  {mockCategories.map(category => (
                    <option key={category.id} value={category.name.toLowerCase()}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Results */}
              <div className="space-y-4">
                {filteredFactChecks.length > 0 ? (
                  filteredFactChecks.map(factCheck => (
                    <FactCheckCard
                      key={factCheck.id}
                      factCheck={factCheck}
                      onClick={() => console.log('Clicked:', factCheck.title)}
                    />
                  ))
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p>Aucune vérification trouvée</p>
                    <p className="text-sm">Essayez de modifier vos critères de recherche</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'trending' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Vérifications Tendances
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockFactChecks
                  .sort((a, b) => b.views - a.views)
                  .slice(0, 6)
                  .map(factCheck => (
                    <FactCheckCard
                      key={factCheck.id}
                      factCheck={factCheck}
                      showActions={false}
                      onClick={() => console.log('Clicked:', factCheck.title)}
                    />
                  ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FactCheck; 