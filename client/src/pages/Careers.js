import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Send, 
  ArrowRight,
  Heart,
  Shield,
  Brain,
  Globe,
  Award,
  Zap,
  CheckCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    motivation: '',
    resume: null
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Développeur Full-Stack Senior",
      department: "Engineering",
      location: "Paris, France",
      type: "CDI",
      experience: "5+ ans",
      description: "Nous recherchons un développeur full-stack expérimenté pour rejoindre notre équipe d'ingénierie et contribuer au développement de notre plateforme de vérification d'informations.",
      requirements: [
        "Maîtrise de React, Node.js et TypeScript",
        "Expérience avec les bases de données (PostgreSQL, MongoDB)",
        "Connaissance des architectures microservices",
        "Expérience avec Docker et Kubernetes",
        "Maîtrise de Git et des bonnes pratiques de développement"
      ],
      benefits: [
        "Salaire compétitif + stock options",
        "Télétravail flexible",
        "Formation continue",
        "Équipement de travail fourni",
        "Mutuelle et prévoyance"
      ],
      posted: "2024-01-15"
    },
    {
      id: 2,
      title: "Data Scientist - NLP",
      department: "Data Science",
      location: "Paris, France",
      type: "CDI",
      experience: "3+ ans",
      description: "Rejoignez notre équipe de data science pour développer des modèles d'IA avancés pour la détection automatique de fausses informations.",
      requirements: [
        "Master/PhD en Data Science ou domaine connexe",
        "Expérience avec Python, PyTorch, TensorFlow",
        "Maîtrise du NLP et des modèles de langage",
        "Expérience avec les données textuelles massives",
        "Connaissance des techniques de ML/AI"
      ],
      benefits: [
        "Salaire compétitif + stock options",
        "Budget formation et conférences",
        "Télétravail flexible",
        "Équipement de travail fourni",
        "Mutuelle et prévoyance"
      ],
      posted: "2024-01-10"
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Paris, France",
      type: "CDI",
      experience: "4+ ans",
      description: "Dirigez la stratégie produit et coordonnez le développement de nouvelles fonctionnalités pour améliorer l'expérience utilisateur.",
      requirements: [
        "Expérience en gestion de produit B2B/B2C",
        "Maîtrise des outils d'analytics",
        "Excellentes compétences en communication",
        "Expérience avec les méthodologies agiles",
        "Connaissance du domaine de la vérification d'informations"
      ],
      benefits: [
        "Salaire compétitif + stock options",
        "Télétravail flexible",
        "Formation continue",
        "Équipement de travail fourni",
        "Mutuelle et prévoyance"
      ],
      posted: "2024-01-08"
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      location: "Paris, France",
      type: "CDI",
      experience: "3+ ans",
      description: "Créez des interfaces utilisateur intuitives et accessibles pour notre plateforme de vérification d'informations.",
      requirements: [
        "Portfolio démontrant une expertise en UX/UI",
        "Maîtrise de Figma, Sketch ou Adobe XD",
        "Connaissance des principes d'accessibilité",
        "Expérience avec les tests utilisateurs",
        "Maîtrise des outils de prototypage"
      ],
      benefits: [
        "Salaire compétitif + stock options",
        "Télétravail flexible",
        "Formation continue",
        "Équipement de travail fourni",
        "Mutuelle et prévoyance"
      ],
      posted: "2024-01-05"
    }
  ];

  const companyBenefits = [
    {
      icon: Heart,
      title: "Mission Impactante",
      description: "Contribuez à la lutte contre la désinformation et protégez la démocratie"
    },
    {
      icon: Zap,
      title: "Innovation Continue",
      description: "Travaillez avec les dernières technologies d'IA et de blockchain"
    },
    {
      icon: Users,
      title: "Équipe Exceptionnelle",
      description: "Rejoignez une équipe de talents passionnés et experts"
    },
    {
      icon: Globe,
      title: "Télétravail Flexible",
      description: "Organisez votre travail selon vos préférences et votre style de vie"
    },
    {
      icon: Award,
      title: "Croissance Personnelle",
      description: "Développez vos compétences avec un budget formation généreux"
    },
    {
      icon: Shield,
      title: "Sécurité & Stabilité",
      description: "Bénéficiez d'un CDI avec des avantages sociaux complets"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setApplicationForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission de candidature
    console.log('Candidature soumise:', applicationForm);
    alert('Candidature envoyée avec succès !');
  };

  return (
    <>
      <Helmet>
        <title>Carrières - WeYeCheck</title>
        <meta name="description" content="Rejoignez notre équipe et participez à la lutte contre la désinformation. Découvrez nos offres d'emploi." />
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
                Rejoignez Notre <span className="text-orange-600">Mission</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Aidez-nous à construire un monde où la vérité prévaut. 
                Rejoignez une équipe passionnée qui utilise la technologie pour lutter contre la désinformation.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {jobOpenings.length} postes ouverts
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Paris, France
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Télétravail flexible
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi Nous Rejoindre ?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez les avantages de travailler chez WeYeCheck
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Postes Ouverts</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explorez nos opportunités de carrière actuelles
              </p>
            </motion.div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Publié le {new Date(job.posted).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        className="px-6 py-2 border border-orange-600 text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-colors"
                      >
                        {selectedJob === job.id ? 'Masquer' : 'Voir Détails'}
                      </button>
                      <button
                        onClick={() => {
                          setSelectedJob(job.id);
                          setApplicationForm(prev => ({ ...prev, position: job.title }));
                        }}
                        className="px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors flex items-center"
                      >
                        Postuler
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>

                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-gray-200"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Exigences</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Avantages</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Candidature Spontanée</h3>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={applicationForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={applicationForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationForm.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poste souhaité *
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={applicationForm.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Années d'expérience *
                  </label>
                  <select
                    name="experience"
                    value={applicationForm.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="0-1">0-1 an</option>
                    <option value="1-3">1-3 ans</option>
                    <option value="3-5">3-5 ans</option>
                    <option value="5+">5+ ans</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lettre de motivation *
                  </label>
                  <textarea
                    name="motivation"
                    value={applicationForm.motivation}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Expliquez pourquoi vous souhaitez rejoindre WeYeCheck et ce que vous pouvez apporter à notre équipe..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CV (PDF) *
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    accept=".pdf"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors flex items-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer Candidature
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Vous ne trouvez pas votre poste idéal ?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Envoyez-nous une candidature spontanée ! Nous sommes toujours à la recherche de talents exceptionnels.
              </p>
              <button
                onClick={() => setSelectedJob('spontaneous')}
                className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Candidature Spontanée
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
