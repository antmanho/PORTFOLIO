import { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Page Content with Transitions */}
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <HomePage
              language={language}
              onNavigateToProjects={() => setCurrentPage('projects')}
            />
          </motion.div>
        ) : (
          <motion.div
            key="projects"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectsPage
              language={language}
              onNavigateToHome={() => setCurrentPage('home')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
