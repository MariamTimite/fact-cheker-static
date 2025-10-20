import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Users, 
  HelpCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@weyecheck.com",
      description: "Réponse sous 24h"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      description: "Lun-Ven 9h-18h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "123 Rue de la Vérification",
      description: "75001 Paris, France"
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lundi - Vendredi",
      description: "9h00 - 18h00"
    }
  ];

  const categories = [
    { value: 'general', label: 'Question générale' },
    { value: 'technical', label: 'Support technique' },
    { value: 'partnership', label: 'Partenariat' },
    { value: 'media', label: 'Presse & Médias' },
    { value: 'bug', label: 'Signaler un bug' },
    { value: 'feature', label: 'Demande de fonctionnalité' }
  ];

  const faqs = [
    {
      question: "Comment fonctionne WeYeCheck ?",
      answer: "WeYeCheck utilise l'intelligence artificielle et une communauté d'experts pour vérifier les informations. Notre algorithme analyse le contenu et nos vérificateurs humains confirment les résultats."
    },
    {
      question: "Puis-je devenir vérificateur ?",
      answer: "Oui ! Nous recherchons constamment des experts dans différents domaines. Remplissez notre formulaire de candidature ou contactez-nous directement."
    },
    {
      question: "Comment signaler une information douteuse ?",
      answer: "Utilisez notre formulaire de vérification sur la page principale ou envoyez-nous un email avec les détails de l'information à vérifier."
    },
    {
      question: "WeYeCheck est-il gratuit ?",
      answer: "Oui, notre service de base est entièrement gratuit. Nous proposons également des plans premium pour les organisations et les entreprises."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message envoyé avec succès ! Nous vous répondrons bientôt.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: 'general',
      message: ''
    });
    setIsSubmitting(false);
  };

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes là pour vous aider. N'hésitez pas à nous contacter 
            pour toute question, suggestion ou demande de support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="input"
                      placeholder="Objet de votre message"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Catégorie
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="input"
                    >
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="textarea"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Informations de Contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-orange-600" />
                Questions Fréquentes
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="card p-6 bg-gradient-to-r from-blue-50 to-orange-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Besoin d'Aide Immédiate ?
              </h3>
              <p className="text-gray-600 mb-4">
                Pour les problèmes urgents ou les bugs critiques, 
                contactez notre équipe de support directement.
              </p>
              <div className="space-y-2">
                <button className="btn btn-primary w-full">
                  <Users className="w-4 h-4 mr-2" />
                  Support en Direct
                </button>
                <button className="btn btn-outline w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat Bot
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Carte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Notre Localisation
            </h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="text-lg">Carte interactive</p>
                <p className="text-sm">123 Rue de la Vérification, 75001 Paris</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Suivez-Nous
            </h2>
            <p className="text-gray-600 mb-6">
              Restez informé de nos dernières actualités et fonctionnalités
            </p>
            <div className="flex justify-center space-x-4">
              <button className="btn btn-outline">
                <span className="mr-2">📘</span>
                Facebook
              </button>
              <button className="btn btn-outline">
                <span className="mr-2">🐦</span>
                Twitter
              </button>
              <button className="btn btn-outline">
                <span className="mr-2">💼</span>
                LinkedIn
              </button>
              <button className="btn btn-outline">
                <span className="mr-2">📷</span>
                Instagram
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

