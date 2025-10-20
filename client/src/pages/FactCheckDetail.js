import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  Eye, 
  Share2, 
  ThumbsUp, 
  ThumbsDown,
  Flag,
  ExternalLink,
  Calendar,
  User,
  Tag,
  MessageSquare,
  Bookmark,
  Download,
  Copy,
  TrendingUp,
  Users,
  Award,
  Shield,
  Zap
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockFactChecks } from '../data/mockData';
import toast from 'react-hot-toast';

const FactCheckDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [userRating, setUserRating] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  // Trouver la vérification par ID
  const factCheck = mockFactChecks.find(fc => fc.id === id);

  if (!factCheck) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Vérification non trouvée</h1>
          <p className="text-gray-600 mb-6">Cette vérification n'existe pas ou a été supprimée.</p>
          <button 
            onClick={() => navigate('/fact-check')}
            className="btn btn-primary"
          >
            Retour aux Vérifications
          </button>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'false':
        return <XCircle className="w-6 h-6 text-red-600" />;
      case 'misleading':
        return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
      default:
        return <Clock className="w-6 h-6 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'false':
        return 'bg-red-100 text-red-800';
      case 'misleading':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: factCheck.title,
          text: factCheck.summary,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Erreur de partage:', err);
      }
    } else {
      // Fallback: copier le lien
      navigator.clipboard.writeText(window.location.href);
      toast.success('Lien copié dans le presse-papiers !');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(factCheck.content);
    toast.success('Contenu copié !');
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Supprimé des favoris' : 'Ajouté aux favoris');
  };

  const handleRating = (rating) => {
    setUserRating(rating);
    toast.success(`Merci pour votre évaluation !`);
  };

  const handleReport = () => {
    toast.success('Signalement envoyé. Merci pour votre contribution.');
  };

  const mockComments = [
    {
      id: 1,
      user: 'Marie Dubois',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      content: 'Excellente vérification ! Les sources sont très fiables.',
      timestamp: 'Il y a 2 heures',
      likes: 12
    },
    {
      id: 2,
      user: 'Ahmed Benali',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      content: 'Je confirme, cette information était effectivement trompeuse.',
      timestamp: 'Il y a 3 heures',
      likes: 8
    }
  ];

  const mockSources = [
    {
      title: 'Article de référence - Le Monde',
      url: 'https://example.com/source1',
      type: 'article',
      reliability: 'high'
    },
    {
      title: 'Rapport officiel - Ministère',
      url: 'https://example.com/source2',
      type: 'official',
      reliability: 'high'
    },
    {
      title: 'Étude scientifique - Nature',
      url: 'https://example.com/source3',
      type: 'study',
      reliability: 'high'
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header avec bouton retour */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <button
            onClick={() => navigate('/fact-check')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux vérifications
          </button>
        </motion.div>

        {/* Contenu principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-8 mb-6"
        >
          {/* En-tête de la vérification */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {getStatusIcon(factCheck.status)}
                <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(factCheck.status)}`}>
                  {getStatusText(factCheck.status)}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-lg transition-colors ${
                    isBookmarked ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Bookmark className="w-5 h-5" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={handleReport}
                  className="p-2 rounded-lg text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Flag className="w-5 h-5" />
                </button>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {factCheck.title}
            </h1>

            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="mr-4">Publié le {new Date(factCheck.createdAt).toLocaleDateString('fr-FR')}</span>
              <Eye className="w-4 h-4 mr-1" />
              <span className="mr-4">{factCheck.views.toLocaleString()} vues</span>
              <User className="w-4 h-4 mr-1" />
              <span>Par {factCheck.verifier}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {factCheck.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full flex items-center"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Résumé */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Résumé</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                {factCheck.summary}
              </p>
            </div>
          </div>

          {/* Contenu détaillé */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Analyse Détaillée</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                {factCheck.content}
              </p>
              
              {/* Détails de la vérification */}
              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Méthodologie de Vérification
                </h3>
                <ul className="list-disc list-inside text-blue-800 space-y-2">
                  <li>Analyse automatique par IA de détection de fake news</li>
                  <li>Vérification croisée par 3 experts indépendants</li>
                  <li>Consultation de sources primaires et officielles</li>
                  <li>Validation finale par notre comité éditorial</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sources */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sources</h2>
            <div className="space-y-3">
              {mockSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <ExternalLink className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">{source.title}</h4>
                      <p className="text-sm text-gray-500">{source.url}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      source.reliability === 'high' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {source.reliability === 'high' ? 'Haute fiabilité' : 'Fiabilité moyenne'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Cette vérification vous aide-t-elle ?</span>
                  <button
                    onClick={() => handleRating('helpful')}
                    className={`p-2 rounded-lg transition-colors ${
                      userRating === 'helpful' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-green-600'
                    }`}
                  >
                    <ThumbsUp className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleRating('not-helpful')}
                    className={`p-2 rounded-lg transition-colors ${
                      userRating === 'not-helpful' ? 'bg-red-100 text-red-600' : 'text-gray-400 hover:text-red-600'
                    }`}
                  >
                    <ThumbsDown className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopy}
                  className="btn btn-outline flex items-center"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copier
                </button>
                <button className="btn btn-outline flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  PDF
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
        >
          <div className="card p-6 text-center">
            <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
            <div className="text-sm text-gray-600">Confiance</div>
          </div>
          <div className="card p-6 text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-sm text-gray-600">Vérificateurs</div>
          </div>
          <div className="card p-6 text-center">
            <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 mb-1">A+</div>
            <div className="text-sm text-gray-600">Qualité</div>
          </div>
        </motion.div>

        {/* Commentaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Commentaires ({mockComments.length})
            </h2>
            <button
              onClick={() => setShowComments(!showComments)}
              className="btn btn-outline"
            >
              {showComments ? 'Masquer' : 'Afficher'}
            </button>
          </div>

          {showComments && (
            <div className="space-y-4">
              {/* Formulaire de commentaire */}
              <div className="border-t pt-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Ajouter un commentaire..."
                  className="textarea w-full mb-3"
                  rows={3}
                />
                <button
                  onClick={() => {
                    setNewComment('');
                    toast.success('Commentaire ajouté !');
                  }}
                  className="btn btn-primary"
                  disabled={!newComment.trim()}
                >
                  Publier
                </button>
              </div>

              {/* Liste des commentaires */}
              <div className="space-y-4">
                {mockComments.map((comment) => (
                  <div key={comment.id} className="flex items-start space-x-3">
                    <img
                      src={comment.avatar}
                      alt={comment.user}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-gray-900">{comment.user}</h4>
                        <span className="text-sm text-gray-500">{comment.timestamp}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{comment.content}</p>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {comment.likes}
                        </button>
                        <button className="text-sm text-gray-500 hover:text-gray-700">
                          Répondre
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FactCheckDetail;

