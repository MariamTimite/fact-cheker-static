import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, Clock, Eye, Share2, Tag } from 'lucide-react';

const FactCheckCard = ({ factCheck, onClick, showActions = true }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'false':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'misleading':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'false':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'misleading':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'pending':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getScoreColor = (score) => {
    if (score === null) return 'text-gray-500';
    if (score >= 0.8) return 'text-green-600';
    if (score >= 0.6) return 'text-yellow-600';
    if (score >= 0.4) return 'text-orange-600';
    return 'text-red-600';
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div 
      className="card card-hover cursor-pointer transition-all duration-300 hover:shadow-xl"
      onClick={() => onClick && onClick(factCheck)}
    >
      <div className="p-6">
        {/* Header avec statut et score */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            {getStatusIcon(factCheck.status)}
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(factCheck.status)}`}>
              {factCheck.status === 'verified' && 'Vérifié'}
              {factCheck.status === 'false' && 'Faux'}
              {factCheck.status === 'misleading' && 'Trompeur'}
              {factCheck.status === 'pending' && 'En cours'}
            </span>
          </div>
          
          {factCheck.score !== null && (
            <div className="text-right">
              <div className={`text-2xl font-bold ${getScoreColor(factCheck.score)}`}>
                {Math.round(factCheck.score * 100)}%
              </div>
              <div className="text-xs text-gray-500">Score de vérité</div>
            </div>
          )}
        </div>

        {/* Titre et contenu */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {factCheck.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {factCheck.content}
        </p>

        {/* Source et date */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>Source: {factCheck.source}</span>
          <span>Créé le {formatDate(factCheck.createdAt)}</span>
        </div>

        {/* Tags */}
        {factCheck.tags && factCheck.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {factCheck.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
            {factCheck.tags.length > 3 && (
              <span className="text-xs text-gray-500">
                +{factCheck.tags.length - 3} autres
              </span>
            )}
          </div>
        )}

        {/* Fact-checker info */}
        {factCheck.factChecker && (
          <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 rounded-lg">
            <img 
              src={factCheck.factChecker.avatar} 
              alt={factCheck.factChecker.username}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">
                {factCheck.factChecker.firstName} {factCheck.factChecker.lastName}
              </div>
              <div className="text-sm text-gray-500">
                Vérifié le {formatDate(factCheck.verificationDate)}
              </div>
            </div>
          </div>
        )}

        {/* Statistiques */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {factCheck.views.toLocaleString()}
            </span>
            <span className="flex items-center">
              <Share2 className="w-4 h-4 mr-1" />
              {factCheck.shares.toLocaleString()}
            </span>
          </div>
          
          {factCheck.explanation && factCheck.explanation !== 'En cours de vérification...' && (
            <div className="text-green-600 font-medium">
              ✓ Explication disponible
            </div>
          )}
        </div>

        {/* Actions */}
        {showActions && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <button className="btn btn-primary flex-1">
                Voir les détails
              </button>
              <button className="btn btn-outline">
                Partager
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FactCheckCard;


