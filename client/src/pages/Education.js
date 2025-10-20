import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, CheckCircle, AlertTriangle, Users, Award, Target } from 'lucide-react';

const Education = () => {
  const [activeTab, setActiveTab] = useState('guides');

  const tabs = [
    { id: 'guides', label: 'Guides', icon: BookOpen },
    { id: 'videos', label: 'Vidéos', icon: Video },
    { id: 'resources', label: 'Ressources', icon: FileText },
    { id: 'quiz', label: 'Quiz', icon: Target }
  ];

  const guides = [
    {
      id: 1,
      title: 'Comment vérifier une information en 5 étapes',
      description: 'Un guide complet pour débuter dans le fact-checking',
      difficulty: 'Débutant',
      duration: '15 min',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 2,
      title: 'Détecter les deepfakes et manipulations d\'images',
      description: 'Techniques avancées pour identifier les contenus falsifiés',
      difficulty: 'Intermédiaire',
      duration: '25 min',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 3,
      title: 'Analyser les sources et la crédibilité',
      description: 'Évaluer la fiabilité des sources d\'information',
      difficulty: 'Débutant',
      duration: '20 min',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 4,
      title: 'Fact-checking sur les réseaux sociaux',
      description: 'Bonnes pratiques pour vérifier les informations virales',
      difficulty: 'Intermédiaire',
      duration: '30 min',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Introduction au fact-checking',
      description: 'Vidéo de présentation des concepts de base',
      duration: '8:45',
      thumbnail: '🎥',
      views: 12450
    },
    {
      id: 2,
      title: 'Outils de vérification en ligne',
      description: 'Démonstration des outils essentiels',
      duration: '12:30',
      thumbnail: '🔍',
      views: 8920
    },
    {
      id: 3,
      title: 'Cas pratiques de fact-checking',
      description: 'Exemples concrets de vérifications',
      duration: '18:15',
      thumbnail: '📋',
      views: 15670
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'Glossaire du fact-checking',
      type: 'PDF',
      size: '2.3 MB',
      downloads: 3450
    },
    {
      id: 2,
      title: 'Checklist de vérification',
      type: 'PDF',
      size: '1.1 MB',
      downloads: 5670
    },
    {
      id: 3,
      title: 'Sources fiables par domaine',
      type: 'Excel',
      size: '856 KB',
      downloads: 2340
    },
    {
      id: 4,
      title: 'Guide des biais cognitifs',
      type: 'PDF',
      size: '3.2 MB',
      downloads: 4120
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: 'Quelle est la première étape du fact-checking ?',
      options: [
        'Partager l\'information',
        'Vérifier la source',
        'Croire l\'auteur',
        'Ignorer les détails'
      ],
      correct: 1
    },
    {
      id: 2,
      question: 'Qu\'est-ce qu\'un deepfake ?',
      options: [
        'Une information vraie',
        'Un contenu manipulé par IA',
        'Une source fiable',
        'Un fait vérifié'
      ],
      correct: 1
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateQuizScore = () => {
    const answered = Object.keys(quizAnswers).length;
    const correct = Object.entries(quizAnswers).filter(([questionId, answer]) => {
      const question = quizQuestions.find(q => q.id === parseInt(questionId));
      return question && answer === question.correct;
    }).length;
    
    return { answered, correct, percentage: Math.round((correct / answered) * 100) };
  };

  const submitQuiz = () => {
    setShowQuizResults(true);
  };

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
            <BookOpen className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Centre d'Éducation</h1>
          </div>
          <p className="text-xl text-gray-600">
            Apprenez les techniques de fact-checking et devenez un expert de la vérification d'informations
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-6 mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        {activeTab === 'guides' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {guides.map((guide) => (
              <div key={guide.id} className="card p-6 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${guide.bgColor}`}>
                    <guide.icon className={`w-8 h-8 ${guide.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {guide.difficulty}
                      </span>
                      <span className="text-gray-500">⏱️ {guide.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'videos' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {videos.map((video) => (
              <div key={video.id} className="card p-6 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{video.thumbnail}</div>
                  <div className="text-sm text-gray-500">⏱️ {video.duration}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <div className="text-sm text-gray-500">
                  👁️ {video.views.toLocaleString()} vues
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'resources' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {resources.map((resource) => (
              <div key={resource.id} className="card p-6 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📄 {resource.type}</span>
                      <span>💾 {resource.size}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">📥 {resource.downloads.toLocaleString()}</div>
                    <button className="btn btn-primary text-sm mt-2">Télécharger</button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'quiz' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {!showQuizResults ? (
              <>
                <div className="card p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Testez vos connaissances</h2>
                  <p className="text-gray-600 mb-6">
                    Répondez aux questions pour évaluer votre niveau en fact-checking
                  </p>
                </div>

                {quizQuestions.map((question, index) => (
                  <div key={question.id} className="card p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Question {index + 1}: {question.question}
                    </h3>
                    <div className="space-y-3">
                      {question.options.map((option, optionIndex) => (
                        <label key={optionIndex} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={optionIndex}
                            checked={quizAnswers[question.id] === optionIndex}
                            onChange={() => handleQuizAnswer(question.id, optionIndex)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="text-center">
                  <button
                    onClick={submitQuiz}
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                    className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Valider le Quiz
                  </button>
                </div>
              </>
            ) : (
              <div className="card p-8 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz terminé !</h2>
                {(() => {
                  const score = calculateQuizScore();
                  return (
                    <div className="space-y-4">
                      <div className="text-4xl font-bold text-blue-600">{score.percentage}%</div>
                      <p className="text-gray-600">
                        Vous avez répondu correctement à {score.correct} question(s) sur {score.answered}
                      </p>
                      {score.percentage >= 80 && (
                        <div className="text-green-600 font-medium">Excellent ! Vous maîtrisez bien le sujet.</div>
                      )}
                      {score.percentage >= 60 && score.percentage < 80 && (
                        <div className="text-yellow-600 font-medium">Bien ! Continuez à vous former.</div>
                      )}
                      {score.percentage < 60 && (
                        <div className="text-red-600 font-medium">À améliorer ! Consultez nos guides.</div>
                      )}
                      <button
                        onClick={() => {
                          setShowQuizResults(false);
                          setQuizAnswers({});
                        }}
                        className="btn btn-outline"
                      >
                        Recommencer
                      </button>
                    </div>
                  );
                })()}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Education;


