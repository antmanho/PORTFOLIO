import { motion } from 'motion/react';
import { Linkedin, Github, Mail, Phone, MapPin, Copy, Check, ExternalLink, User, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface ContactPageProps {
  language: 'en' | 'fr';
}

const ContactPage = ({ language }: ContactPageProps) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const translations = {
    en: {
      title: "Let's Work Together",
      subtitle: "I'm currently seeking a long-term internship (March to August 2026) in IT and Cybersecurity",
      nationality: "French",
      location: "Montpellier, South of France",
      role: "Computer Engineering Student",
      school: "Polytech Montpellier",
      copied: "Copied!",
      copy: "Copy",
      contactMe: "Contact Me",
      quickContact: "Quick Contact",
      socialLinks: "Social & Professional Links",
      openTo: "Open to opportunities in",
      interests: ["Web Development", "DevOps", "Cybersecurity", "Cloud Computing", "Pentesting", "Network Security", "System Administration", "Software Engineering"]
    },
    fr: {
      title: "Travaillons Ensemble",
      subtitle: "Je recherche actuellement un stage long (mars à août 2026) dans l'IT et la Cybersécurité",
      nationality: "Français",
      location: "Montpellier, Sud de la France",
      role: "Étudiant Ingénieur Informatique",
      school: "Polytech Montpellier",
      copied: "Copié !",
      copy: "Copier",
      contactMe: "Me Contacter",
      quickContact: "Contact Rapide",
      socialLinks: "Réseaux & Liens Professionnels",
      openTo: "Ouvert aux opportunités en",
      interests: ["Développement Web", "DevOps", "Cybersécurité", "Cloud Computing", "Pentesting", "Sécurité Réseau", "Administration Système", "Ingénierie Logicielle"]
    }
  };

  const t = translations[language];

  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const primaryContacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'barbedetanthony@gmail.com',
      href: 'mailto:barbedetanthony@gmail.com',
      copyValue: 'barbedetanthony@gmail.com',
      color: 'from-blue-500 to-blue-600',
      isPrimary: true
    },
    {
      icon: Phone,
      label: language === 'en' ? 'Phone' : 'Téléphone',
      value: '+33 7 89 54 03 14',
      href: 'tel:+33789540314',
      copyValue: '+33789540314',
      color: 'from-green-500 to-green-600',
      isPrimary: true
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'brb-anthony',
      href: 'https://www.linkedin.com/in/brb-anthony',
      copyValue: 'https://www.linkedin.com/in/brb-anthony',
      color: 'from-[#0077B5] to-[#0077B5]',
      bgColor: 'bg-[#0077B5]'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'antmanho',
      href: 'https://github.com/antmanho',
      copyValue: 'https://github.com/antmanho',
      color: 'from-gray-800 to-gray-900',
      bgColor: 'bg-gray-800'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Photo de profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-10 relative z-[100]"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative flex-shrink-0"
              style={{ width: '120px', height: '120px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full blur-sm opacity-20 animate-pulse" />
              <img
                src="/assets/images/profil.jpg"
                alt="Anthony Barbedet"
                className="relative z-[110] rounded-full object-cover border-2 border-cyan-400 shadow-lg"
                style={{ width: '120px', height: '120px' }}
              />
            </motion.div>
          </motion.div>

          {/* Profile Card avec Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900 border border-gray-700 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl"
          >
            <div className="flex flex-col items-center gap-8">
              
              {/* Informations */}
              <div className="text-center space-y-8 relative z-[100] max-w-3xl mx-auto">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold text-center"
                >
                  {t.title}
                </motion.p>

                <div className="flex flex-wrap items-center justify-center gap-3 text-gray-300 text-sm md:text-base relative z-[100]">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span className="text-center">{t.school}</span>
                  </div>
                  <span className="text-cyan-400">•</span>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-center">{t.location}</span>
                  </div>
                  <span className="text-cyan-400">•</span>
                  <div className="flex items-center gap-2">
                    <span>🇫🇷</span>
                    <span className="text-center">{t.nationality}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 relative z-[100]"
          >
            
            <div className="grid md:grid-cols-2 gap-4">
              {primaryContacts.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden backdrop-blur-lg bg-background/80 border border-border text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all z-[100]"
                >
                  <div className="relative z-[100] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <contact.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-sm font-medium opacity-90">{contact.label}</p>
                        <p className="text-lg font-bold">{contact.value}</p>
                      </div>
                    </div>
                    <motion.button
                      onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard(contact.copyValue, contact.label);
                      }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      {copiedItem === contact.label ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </motion.button>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Réseaux Sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="relative z-[100]"
          >
            
            <div className="grid md:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="backdrop-blur-lg bg-background/80 border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group relative z-[100]"
                >
                  <div className="flex items-center gap-4 mb-4 relative z-[100]">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 ${social.bgColor} rounded-xl relative z-[100]`}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="relative z-[100]">
                      <p className="text-sm text-gray-400">{social.label}</p>
                      <p className="text-lg font-bold text-white">{social.value}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 relative z-[100]">
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 backdrop-blur-lg bg-background/80 hover:bg-background text-white rounded-lg transition-colors font-medium relative z-[100] border border-border"
                    >
                      <social.icon className="w-4 h-4" />
                      {language === 'en' ? 'Visit Profile' : 'Voir le Profil'}
                    </motion.a>
                    <motion.button
                      onClick={() => copyToClipboard(social.copyValue, social.label)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 backdrop-blur-lg bg-background/80 border border-border rounded-lg hover:bg-background transition-colors relative z-[100]"
                    >
                      {copiedItem === social.label ? (
                        <Check className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-300" />
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Domaines d'intérêt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-16 p-10 bg-gray-900/50 rounded-2xl relative z-[100]"
          >
            <p className="text-lg text-gray-400 mb-6 relative z-[100]">{t.openTo}</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {t.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-6 py-3 text-white rounded-full text-sm font-semibold border-2 relative z-[110] whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
                    borderImage: 'linear-gradient(to right, rgb(59, 130, 246), rgb(6, 182, 212), rgb(168, 85, 247)) 1',
                    borderRadius: '9999px'
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Final */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-8 p-8 relative z-[100]"
          >
            <p className="text-lg text-gray-300 relative z-[100]">
              {language === 'en' 
                ? "Looking forward to hearing from you!" 
                : "Au plaisir d'échanger avec vous !"}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
