import { Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: 'home' | 'projects';
  onNavigate: (page: 'home' | 'projects') => void;
  language: 'en' | 'fr';
  onLanguageChange: (lang: 'en' | 'fr') => void;
}

export function Navigation({ currentPage, onNavigate, language, onLanguageChange }: NavigationProps) {
  const translations = {
    en: {
      about: 'About Me',
      projects: 'Projects',
      contact: 'Contact',
    },
    fr: {
      about: 'À Propos',
      projects: 'Projets',
      contact: 'Contact',
    },
  };

  const t = translations[language];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <style jsx>{`
          @media (max-width: 768px) {
            .logo {
              display: none;
            }
          }
        `}</style>
        <motion.div
          className="cursor-pointer logo" // Add a class for responsive hiding
          whileHover={{ scale: 1.05 }}
          onClick={() => onNavigate('home')}
        >
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Portfolio
          </span>
          <span className="text-foreground"> – Barbedet Anthony</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <motion.button
            onClick={() => onNavigate('home')}
            className={`relative transition-colors ${
              currentPage === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
            whileHover={{ scale: 1.05 } as any} // Temporary fix for type issue
          >
            {t.about}
            {currentPage === 'home' && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
              />
            )}
          </motion.button>

          <motion.button
            onClick={() => onNavigate('projects')}
            className={`relative transition-colors ${
              currentPage === 'projects' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
            whileHover={{ scale: 1.05 } as any} // Temporary fix for type issue
          >
            {t.projects}
            {currentPage === 'projects' && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
              />
            )}
          </motion.button>

          <motion.a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {t.contact}
          </motion.a>

          {/* Language Toggle */}
          <div className="flex items-center gap-2 ml-4">
            <motion.button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              🇬🇧
            </motion.button>
            <motion.button
              onClick={() => onLanguageChange('fr')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'fr' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              🇫🇷
            </motion.button>
          </div>

          {/* LinkedIn Icon */}
          <motion.a
            href="https://www.linkedin.com/in/brb-anthony"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Linkedin className="w-5 h-5" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }} />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
