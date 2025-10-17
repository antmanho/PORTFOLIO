import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsPageProps {
  language: 'en' | 'fr';
  onNavigateToHome: () => void;
}

export function ProjectsPage({ language, onNavigateToHome }: ProjectsPageProps) {
  const [filter, setFilter] = useState<string>('all');

  const translations = {
    en: {
      title: 'My Projects',
      back: 'Back to Home',
      all: 'All',
      viewGithub: 'View on GitHub',
      footer: '© 2025 Anthony Barbedet – Built with passion for cybersecurity 💙',
    },
    fr: {
      title: 'Mes Réalisations',
      back: 'Retour à l\'Accueil',
      all: 'Tous',
      viewGithub: 'Voir sur GitHub',
      footer: '© 2025 Anthony Barbedet – Créé avec passion pour la cybersécurité 💙',
    },
  };

  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: 'Network Security Scanner',
      titleFr: 'Scanner de Sécurité Réseau',
      description: 'Advanced vulnerability assessment tool with automated reporting and threat analysis',
      descriptionFr: 'Outil avancé d\'évaluation des vulnérabilités avec reporting automatisé et analyse des menaces',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc2MDQxMjgxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'Nmap', 'Nessus', 'Flask'],
      github: 'https://github.com/anthony-barbedet',
    },
    {
      id: 2,
      title: 'Penetration Testing Lab',
      titleFr: 'Laboratoire de Tests d\'Intrusion',
      description: 'Virtualized environment for ethical hacking and security testing',
      descriptionFr: 'Environnement virtualisé pour le hacking éthique et les tests de sécurité',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxoYWNraW5nfGVufDF8fHx8MTc2MDQxMjg2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Kali Linux', 'Metasploit', 'Docker', 'VMware'],
      github: 'https://github.com/anthony-barbedet',
    },
    {
      id: 3,
      title: 'SIEM Dashboard',
      titleFr: 'Tableau de Bord SIEM',
      description: 'Real-time security monitoring and incident response platform',
      descriptionFr: 'Plateforme de surveillance de sécurité et de réponse aux incidents en temps réel',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxzZWN1cml0eSUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzYwNDEyOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Splunk', 'Python', 'React', 'Elasticsearch'],
      github: 'https://github.com/anthony-barbedet',
    },
    {
      id: 4,
      title: 'Digital Forensics Toolkit',
      titleFr: 'Boîte à Outils d\'Investigation Numérique',
      description: 'Comprehensive forensic analysis suite for digital evidence examination',
      descriptionFr: 'Suite d\'analyse forensique complète pour l\'examen de preuves numériques',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmb3JlbnNpY3N8ZW58MXx8fHwxNzYwNDEyOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'Volatility', 'Autopsy', 'C++'],
      github: 'https://github.com/anthony-barbedet',
    },
    {
      id: 5,
      title: 'Secure Web Application',
      titleFr: 'Application Web Sécurisée',
      description: 'Full-stack application implementing OWASP security best practices',
      descriptionFr: 'Application full-stack implémentant les meilleures pratiques de sécurité OWASP',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHx3ZWIlMjBzZWN1cml0eXxlbnwxfHx8fDE3NjA0MTMwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'JWT', 'OWASP'],
      github: 'https://github.com/anthony-barbedet',
    },
    {
      id: 6,
      title: 'Network Packet Analyzer',
      titleFr: 'Analyseur de Paquets Réseau',
      description: 'Custom network traffic analysis tool with anomaly detection',
      descriptionFr: 'Outil d\'analyse du trafic réseau personnalisé avec détection d\'anomalies',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxuZXR3b3JrJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzYwNDEzMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Wireshark', 'Python', 'C++', 'Machine Learning'],
      github: 'https://github.com/anthony-barbedet',
    },
  ];

  const allTags = ['all', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <div className="min-h-screen relative z-10">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 pt-24 pb-12"
      >
        <motion.button
          onClick={onNavigateToHome}
          whileHover={{ scale: 1.05, x: -5 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          {t.back}
        </motion.button>

        <h1 className="text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-8">
          {t.title}
        </h1>

        {/* Filter Menu */}
        <div className="flex flex-wrap justify-center gap-3">
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === tag
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-card border border-border hover:border-primary'
              }`}
            >
              {tag === 'all' ? t.all : tag}
            </motion.button>
          ))}
        </div>
      </motion.header>

      {/* Projects Grid */}
      <motion.section
        layout
        className="container mx-auto px-6 pb-24"
      >
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
              }}
              className="bg-card border border-border rounded-lg overflow-hidden cursor-pointer group"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-foreground">
                  {language === 'fr' ? project.titleFr : project.title}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'fr' ? project.descriptionFr : project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg w-full justify-center"
                >
                  <Github className="w-4 h-4" />
                  {t.viewGithub}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t border-border py-8"
        id="contact"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </div>
          <p className="text-muted-foreground">{t.footer}</p>
        </div>
      </motion.footer>
    </div>
  );
}
