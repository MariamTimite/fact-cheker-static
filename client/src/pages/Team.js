import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Github, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Calendar,
  Shield,
  Brain,
  Heart
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "CEO & Fondatrice",
      bio: "Experte en intelligence artificielle avec 15 ans d'expérience dans la lutte contre la désinformation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/marie-dubois",
        twitter: "https://twitter.com/marie_dubois",
        github: "https://github.com/marie-dubois"
      },
      expertise: ["IA", "Machine Learning", "Leadership"]
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "CTO",
      bio: "Architecte technique spécialisé dans les systèmes distribués et la blockchain.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/ahmed-hassan",
        github: "https://github.com/ahmed-hassan"
      },
      expertise: ["Blockchain", "Architecture", "DevOps"]
    },
    {
      id: 3,
      name: "Sophie Martin",
      role: "Lead Data Scientist",
      bio: "Spécialiste en traitement du langage naturel et analyse de données massives.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/sophie-martin",
        github: "https://github.com/sophie-martin"
      },
      expertise: ["NLP", "Data Science", "Python"]
    },
    {
      id: 4,
      name: "Thomas Leroy",
      role: "Lead Frontend Developer",
      bio: "Expert en interfaces utilisateur et expérience utilisateur pour applications web modernes.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/thomas-leroy",
        github: "https://github.com/thomas-leroy"
      },
      expertise: ["React", "UI/UX", "JavaScript"]
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      role: "Responsable Communication",
      bio: "Spécialiste en communication digitale et relations publiques dans le domaine technologique.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/elena-rodriguez",
        twitter: "https://twitter.com/elena_rodriguez"
      },
      expertise: ["Communication", "Marketing", "PR"]
    },
    {
      id: 6,
      name: "David Kim",
      role: "Lead Backend Developer",
      bio: "Expert en développement backend et architecture de microservices.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/david-kim",
        github: "https://github.com/david-kim"
      },
      expertise: ["Node.js", "Microservices", "API Design"]
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Intégrité",
      description: "Nous nous engageons à fournir des informations vérifiées et fiables."
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Nous utilisons les dernières technologies pour lutter contre la désinformation."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous croyons en la force du travail d'équipe et de la communauté."
    },
    {
      icon: Heart,
      title: "Impact Social",
      description: "Notre mission est de protéger la démocratie et la vérité."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Équipe - WeYeCheck</title>
        <meta name="description" content="Découvrez l'équipe passionnée derrière WeYeCheck, dédiée à la lutte contre la désinformation." />
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
                Notre <span className="text-orange-600">Équipe</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Une équipe passionnée et experte, unie par la mission de protéger la vérité 
                et de lutter contre la désinformation grâce à la technologie.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Paris, France
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {teamMembers.length} membres
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Fondé en 2023
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-orange-300 font-medium">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-sky-100 text-sky-600 rounded-lg hover:bg-sky-200 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes qui guident notre travail et notre mission
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Rejoignez Notre Mission
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Vous voulez contribuer à la lutte contre la désinformation ? 
                Découvrez nos opportunités de carrière.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Voir les Offres
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Nous Contacter
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
