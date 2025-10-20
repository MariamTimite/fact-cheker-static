import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Shield, 
  Zap, 
  Heart, 
  Globe, 
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Clock,
  Star
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Marie Dubois",
      role: "CEO & Fondatrice",
      bio: "Experte en vérification d'informations avec 15 ans d'expérience dans le journalisme.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      expertise: ["Journalisme", "Fact-checking", "Leadership"]
    },
    {
      name: "Ahmed Benali",
      role: "CTO",
      bio: "Ingénieur en IA spécialisé dans la détection de fake news et l'analyse de contenu.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      expertise: ["Intelligence Artificielle", "Machine Learning", "Blockchain"]
    },
    {
      name: "Sophie Martin",
      role: "Responsable Éditoriale",
      bio: "Ancienne journaliste du Monde, spécialisée dans la vérification des informations politiques.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      expertise: ["Édition", "Politique", "Recherche"]
    },
    {
      name: "Thomas Leroy",
      role: "Développeur Senior",
      bio: "Développeur full-stack passionné par la création d'outils de vérification efficaces.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: ["React", "Node.js", "MongoDB"]
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Fondation de WeYeCheck",
      description: "Création de la plateforme avec une vision claire : lutter contre la désinformation."
    },
    {
      year: "2021",
      title: "Première version beta",
      description: "Lancement de la version beta avec 1000 utilisateurs pilotes."
    },
    {
      year: "2022",
      title: "Intégration IA",
      description: "Déploiement de notre système d'IA pour la détection automatique de fake news."
    },
    {
      year: "2023",
      title: "Expansion internationale",
      description: "Ouverture dans 5 pays européens avec plus de 100,000 utilisateurs."
    },
    {
      year: "2024",
      title: "Blockchain & Certification",
      description: "Implémentation de la blockchain pour certifier les vérifications."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparence",
      description: "Toutes nos vérifications sont transparentes et traçables."
    },
    {
      icon: Target,
      title: "Précision",
      description: "Nous nous efforçons d'atteindre 99.9% de précision dans nos vérifications."
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Notre force vient de notre communauté de vérificateurs experts."
    },
    {
      icon: Globe,
      title: "Impact Social",
      description: "Nous croyons en l'importance de l'information vérifiée pour la démocratie."
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mr-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">À Propos de WeYeCheck</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes une équipe passionnée dédiée à la lutte contre la désinformation 
            et à la promotion de l'information vérifiée.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-8 mb-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center justify-center">
              <Target className="w-8 h-8 mr-3" />
              Notre Mission
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              WeYeCheck a été créé avec une mission simple mais cruciale : 
              <strong className="text-orange-600"> démocratiser l'accès à l'information vérifiée</strong>. 
              Dans un monde où la désinformation se propage plus vite que jamais, 
              nous nous engageons à fournir des outils puissants et accessibles 
              pour vérifier les informations et protéger la vérité.
            </p>
          </div>
        </motion.div>

        {/* Valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="card p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="card p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Notre Histoire
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-blue-400"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="card p-6">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-orange-600 mr-2" />
                      <span className="text-orange-600 font-bold text-lg">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="card p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            WeYeCheck en Chiffres
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600">Vérifications effectuées</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500K+</div>
              <div className="text-gray-600">Utilisateurs actifs</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Taux de précision</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Pays couverts</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="card p-8 text-center bg-gradient-to-r from-blue-600 to-orange-600 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez Notre Mission
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Ensemble, nous pouvons créer un monde où l'information vérifiée 
            est accessible à tous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-white">
              <Users className="w-5 h-5 mr-2" />
              Rejoindre l'Équipe
            </button>
            <button className="btn btn-outline-white">
              <Heart className="w-5 h-5 mr-2" />
              Nous Soutenir
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

