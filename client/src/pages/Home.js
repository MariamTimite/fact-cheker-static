import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Upload, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Award
} from 'lucide-react';
import ImageUpload from '../components/ImageUpload';
import OrangeMediaUpload from '../components/OrangeMediaUpload';
import toast from 'react-hot-toast';

const Home = () => {
  const [content, setContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedMedia, setUploadedMedia] = useState(null);

  const handleAnalyze = async () => {
    if (!content.trim() && !uploadedImage && !uploadedMedia) return;
    
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.success('Analyse terminée ! Vérification ajoutée à la base de données.');
    }, 2000);
  };

  const handleImageSelect = (file, preview) => {
    setUploadedImage({ file, preview });
  };

  const handleMediaSelect = (file, preview, type) => {
    setUploadedMedia({ file, preview, type });
  };

  const stats = [
    { number: '1,247,832', label: 'Vérifications Effectuées', icon: Search },
    { number: '89.4%', label: 'Précision Moyenne', icon: Shield },
    { number: '12,847', label: 'Fact-Checkers Actifs', icon: Users },
    { number: '847', label: 'Sources Partenaires', icon: TrendingUp },
  ];

  const recentActivity = [
    {
      type: 'verified',
      title: 'Déclaration politique vérifiée',
      meta: 'Vérifié par @expert_marie • il y a 5 min',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      type: 'false',
      title: 'Image manipulée détectée',
      meta: 'Analysé par IA • il y a 12 min',
      icon: XCircle,
      color: 'text-red-600'
    },
    {
      type: 'misleading',
      title: 'Information partiellement exacte',
      meta: 'Vérification collaborative • il y a 25 min',
      icon: AlertTriangle,
      color: 'text-yellow-600'
    },
    {
      type: 'achievement',
      title: 'Nouveau badge débloqué',
      meta: '@thomas_checker • Expert Level 5',
      icon: Award,
      color: 'text-orange-600'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            Vérifiez l'Information en Temps Réel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Combattez la désinformation avec notre IA avancée et notre communauté d'experts. 
            Vérifiez textes, images, vidéos et audio instantanément.
          </p>
        </motion.div>
      </section>

      {/* Fact Check Form */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-8"
        >
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
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Collez ici le texte, l'URL ou la déclaration à vérifier..."
                className="textarea min-h-[120px]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-blue-600 mb-2">
                Média (optionnel)
              </label>
              <OrangeMediaUpload
                onMediaSelect={handleMediaSelect}
                maxSize={10}
                acceptedTypes={{
                  image: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
                  video: ['video/mp4', 'video/avi', 'video/mov', 'video/webm'],
                  audio: ['audio/mp3', 'audio/wav', 'audio/ogg', 'audio/m4a']
                }}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing || (!content.trim() && !uploadedImage && !uploadedMedia)}
                className="btn btn-primary flex items-center justify-center"
              >
                {isAnalyzing ? (
                  <div className="spinner w-5 h-5 mr-2"></div>
                ) : (
                  <Zap className="w-5 h-5 mr-2" />
                )}
                {isAnalyzing ? 'Analyse en cours...' : 'Vérifier Maintenant'}
              </button>
              <button className="btn btn-outline flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Analyse Rapide
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Result */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 card p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Résultat de Vérification</h3>
              <span className="badge badge-success">Vérifié</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-600 mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Analyse IA
                </h4>
                <p className="text-gray-700">
                  Cette information provient de sources officielles fiables. Les données ont été confirmées par 3 organisations de fact-checking indépendantes.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-600 mb-2">Sources Vérifiées</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Reuters', credibility: 95 },
                    { name: 'Source Officielle', credibility: 98 },
                    { name: 'Étude Académique', credibility: 92 }
                  ].map((source, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <span className="font-medium">{source.name}</span>
                      <span className="text-sm text-green-700">Crédibilité: {source.credibility}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Credibility Score */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card p-8"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-6">Score de Crédibilité</h3>
            
            <div className="text-center mb-6">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset="37.68"
                    className="text-green-500"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">87%</span>
                </div>
              </div>
              <p className="text-green-600 font-semibold">Très Fiable</p>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Précision des Sources', value: 92, color: 'bg-green-500' },
                { label: 'Consensus Expert', value: 95, color: 'bg-green-500' },
                { label: 'Récence des Données', value: 78, color: 'bg-yellow-500' }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-700">{item.label}</span>
                    <span className="text-sm font-semibold text-blue-600">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div key={index} className="card p-6 text-center card-hover">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-orange-600" />
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Recent Activity */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="card p-8"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center">
            <Clock className="w-6 h-6 mr-2" />
            Activité Récente
          </h3>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${activity.color}`}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{activity.title}</div>
                  <div className="text-sm text-gray-600">{activity.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 