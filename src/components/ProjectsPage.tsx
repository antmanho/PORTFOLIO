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
      footer: '© 2025 Anthony Barbedet – Built with passion for IT 💙',
    },
    fr: {
      title: 'Mes Réalisations',
      back: 'Retour à l\'Accueil',
      all: 'Tous',
      viewGithub: 'Voir sur GitHub',
      footer: "© 2025 Anthony Barbedet – Créé avec passion pour l'IT 💙",
    },
  };

  const t = translations[language];

  const projects = [
    {
      id: 12,
      title: 'CityMatch',
      titleFr: 'CityMatch',
      description: 'Secure application for creating or joining any type of event (online or in-person) implementing OWASP security best practices',
      descriptionFr: 'Application sécurisée pour créer ou rejoindre tout type d\'événement (en ligne ou présentiel) implémentant les meilleures pratiques de sécurité OWASP',
      image: '/assets/images/CityMatch.png',
      tags: ['React Native', 'Expo Go', 'Node.js', 'Docker', 'Keycloak', 'OWASP'],
      github: 'https://github.com/Eugenio-BAYE/citymatch',
    },
    {
      id: 6,
      title: 'BoardLand Platform',
      titleFr: 'Plateforme BoardLand',
      description: 'Board game festival management platform with roles and secure workflows implementing OWASP security best practices',
      descriptionFr: 'Plateforme de gestion de festivals de jeux de société avec rôles et workflows sécurisés implémentant les meilleures pratiques de sécurité OWASP',
      image: '/assets/images/Boardland_web.png',
      tags: ['Angular', 'Node.js', 'OWASP'],
      github: 'https://github.com/antmanho/PROJECT_AWI',
    },
    {
      id: 14,
      title: 'AI Video Generator with N8N',
      titleFr: 'Générateur de Vidéos IA avec N8N',
      description: '100% automated and customizable AI video generator using N8N workflow automation and multiple APIs integration',
      descriptionFr: 'Générateur de vidéos IA 100% automatisable et personnalisable avec N8N et l\'utilisation de différentes APIs',
      image: '/assets/images/N8N.png',
      tags: ['Python', 'N8N', 'API', 'Automation', 'AI'],
      github: 'https://github.com/antmanho/PROJECT_N8N',
    },
    {
      id: 10,
      title: 'Poisoning ARP',
      titleFr: 'Poisoning ARP',
      description: 'ARP attack testing on local machines for cybersecurity research',
      descriptionFr: 'Test d\'une attaque ARP sur mes machines en local',
      image: '/assets/images/poisoningARP.png',
      tags: ['Nmap', 'Wireshark', 'VMBox', 'Kali Linux'],
      github: null,
    },
    {
      id: 11,
      title: 'Shopyverse',
      titleFr: 'Shopyverse',
      description: 'Application for creating e-commerce websites, inspired by Shopify',
      descriptionFr: 'Application pour créer des sites e-commerce, inspirée de Shopify',
      image: '/assets/images/ShopyVerse.png',
      tags: ['React', 'TypeScript', 'CSS', 'HTML'],
      github: 'https://github.com/antmanho/Shopyverse',
    },
    {
      id: 9,
      title: 'Internship at TRF Retail Barcelona',
      titleFr: 'Stage à Barcelone chez TRF Retail',
      description: 'Internship in Barcelona at TRF Retail: Creation of an internal company platform and a client screen to automatically supervise data processing',
      descriptionFr: 'Stage à Barcelone chez TRF Retail : Création d\'une plateforme interne à l\'entreprise et d\'un écran client pour superviser automatiquement les traitements de données',
      image: '/assets/images/BARCELONE.png',
      tags: ['PHP', 'Vue 3'],
      github: null,
    },
    {
      id: 13,
      title: 'Undetectable Bot Automation',
      titleFr: 'Automatisation de Bots Indétectables',
      description: 'Undetectable automation scripts simulating human behavior with Python. BIOS modifications (RTS) for automatic system control and program launch.',
      descriptionFr: 'Scripts d\'automatisation indétectables simulant le comportement humain avec Python. Modifications BIOS (RTS) pour contrôle système automatique.',
      image: '/assets/images/BOT.png',
      tags: ['Python', 'Automation', 'BIOS'],
      github: 'https://github.com/antmanho/BOT-CREATION',
    },
    {
      id: 7,
      title: 'N-Body Simulation',
      titleFr: 'Simulation N-Corps',
      description: 'Real-time simulation of N-body gravitational attraction',
      descriptionFr: 'Simulation temps réel d\'attraction gravitationnelle à N corps',
      image: '/assets/images/Nbody.png',
      tags: ['Java', 'JavaScript', 'Maven'],
      github: 'https://github.com/antmanho/SIMULATION_NCORPS',
    },
    {
      id: 8,
      title: 'Native Swift App',
      titleFr: 'Application Swift Native',
      description: 'Native iOS redesign of BoardLand to manage sales, deposits and finances of a festival',
      descriptionFr: 'Refonte iOS native de BoardLand pour gérer ventes, dépôts et finances d\'un festival',
      image: '/assets/images/Boardland_mobile.png',
      tags: ['Swift'],
      github: null,
    },
    {
      id: 5,
      title: 'Data Science Project',
      titleFr: 'Projet Data Science',
      description: 'Web tool for forecasting electricity consumption in France until 2050',
      descriptionFr: 'Outil web de prévision de la consommation d\'électricité en France jusqu\'en 2050',
      image: '/assets/images/Data.png',
      tags: ['Python', 'R', 'Node.js'],
      github: 'https://github.com/antmanho/DATA_SCIENCE',
    },
    {
      id: 4,
      title: 'Geekomaniak',
      titleFr: 'Geekomaniak',
      description: 'High-tech marketplace focused on solid software architecture (DAO, Facade, etc.)',
      descriptionFr: 'Marketplace high-tech axée sur l\'architecture logicielle solide (DAO, Facade, etc.)',
      image: '/assets/images/Geekomaniak.png',
      tags: ['Java', 'JavaFX', 'PostgreSQL'],
      github: null,
    },
    {
      id: 3,
      title: 'Tournament Platform',
      titleFr: 'Plateforme Tournament',
      description: 'Platform to create/join geolocated tournaments on interactive map',
      descriptionFr: 'Plateforme pour créer/rejoindre des tournois géolocalisés sur carte interactive',
      image: '/assets/images/TOURNAMENT.png',
      tags: ['PHP', 'Node.js'],
      github: 'https://github.com/antmanho/WEB_PROJECT_NODEJS',
    },
    {
      id: 2,
      title: 'Gloves for Sign Language',
      titleFr: 'Gants pour Langage des Signes',
      description: 'Communicating glove displaying text on LCD, controlled by Raspberry Pi',
      descriptionFr: 'Gant communicant affichant du texte sur LCD, piloté par Raspberry Pi',
      image: '/assets/images/glove.png',
      tags: ['Raspberry Pi', 'Python'],
      github: 'https://github.com/antmanho/IOT_PROJECT',
    },
    {
      id: 1,
      title: 'LinuxTerm Chat',
      titleFr: 'Chat LinuxTerm',
      description: 'Linux terminal messaging with channels and file sharing, protected accounts',
      descriptionFr: 'Messagerie terminal Linux avec salons et partage de fichiers, comptes protégés',
      image: '/assets/images/messagerie.jpeg',
      tags: ['C'],
      github: 'https://github.com/YohannSchatt/Messagerie_Linux',
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

                {project.github ? (
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
                ) : (
                  <div className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg w-full justify-center">
                    <Github className="w-4 h-4" />
                    {language === 'fr' ? 'Pas de repo public' : 'No public repo'}
                  </div>
                )}
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
