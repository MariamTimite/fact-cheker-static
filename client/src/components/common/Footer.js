import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Vérifications', href: '/fact-check' },
      { name: 'Tendances', href: '/trending' },
      { name: 'API', href: '/api' },
      { name: 'Éducation', href: '/education' },
    ],
    company: [
      { name: 'À propos', href: '/about' },
      { name: 'Équipe', href: '/team' },
      { name: 'Carrières', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Blog', href: '/blog' },
      { name: 'Support', href: '/support' },
      { name: 'Statut', href: '/status' },
    ],
    legal: [
      { name: 'Confidentialité', href: '/privacy' },
      { name: 'Conditions', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Licence', href: '/license' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/weyecheck', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com/weyecheck', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/weyecheck', icon: Linkedin },
    { name: 'Email', href: 'mailto:contact@weyecheck.com', icon: Mail },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
                              <span className="text-xl font-bold text-orange-600">WeYeCheck</span>
            </div>
            <p className="text-gray-300 dark:text-gray-200 mb-6 max-w-md">
              Plateforme de vérification d'informations révolutionnaire qui combine 
              intelligence artificielle, vérification communautaire et sources fiables 
              pour lutter contre la désinformation en temps réel.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Produit</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Ressources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 dark:text-gray-300 text-sm">
              © {currentYear} WeYeCheck. Tous droits réservés.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-300 text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 