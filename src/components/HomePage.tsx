import { motion } from 'motion/react';
import { Download, Code, Zap, Cloud, Boxes, Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CVDownload } from './CVDownload';

interface TechItem {
  name: string;
  icon: string;
  isImage?: boolean;
}

interface HomePageProps {
  language: 'en' | 'fr';
  onNavigateToProjects: () => void;d
}

export function HomePage({ language, onNavigateToProjects }: HomePageProps) {
  const translations = {
    en: {
      greeting: "Hi, I'm Anthony Barbedet",
      role: "Final-year Computer Engineering Student at Polytech Montpellier",
      seeking: "Passionate about IT and cybersecurity since childhood, currently seeking a long-term internship (March to August 2026) in IT",
      latestProject: "Latest Project",
      projectTitle: "Website Penetration Testing",
      projectDesc: "Comprehensive security assessment of my own website using hashed password tables and brute force techniques for user password recovery",
      viewProject: "View Project",
      seeAllProjects: "See All Projects",
      specialties: "Areas of Expertise",
      cybersecurity: "Cybersecurity & Pentesting",
      networking: "Network Architecture",
      development: "Secure Development",
      forensics: "Digital Forensics",
      skills: "My Technical Arsenal",
      languages: "Programming Languages",
      security: "Security Tools",
      systems: "Systems & Networks",
      tools: "Development Tools",
    },
    fr: {
      greeting: "Bonjour, je m'appel Anthony Barbedet",
      role: "Étudiant en dernière année d'École d'Ingénieur en Informatique à Polytech Montpellier",
      seeking: "Passionné par l'IT depuis petit, je recherche actuellement un stage long idéalement de mars à août 2026 dans l'IT",
      latestProject: "Dernier Projet",
      projectTitle: "Test de Pénétration de Site Web",
      projectDesc: "Évaluation complète de la sécurité de mon propre site web utilisant des tables de mots de passe hashés et les techniques de brute force pour la récupération de mots de passe utilisateur",
      viewProject: "Voir le Projet",
      seeAllProjects: "Voir Tous les Projets",
      specialties: "Domaines d'Expertise",
      cybersecurity: "Cybersécurité & Tests d'Intrusion",
      networking: "Architecture Réseau",
      development: "Développement Sécurisé",
      forensics: "Investigation Numérique",
      skills: "Mon Arsenal Technique",
      languages: "Langages de Programmation",
      security: "Outils de Sécurité",
      systems: "Systèmes & Réseaux",
      tools: "Outils de Développement",
    },
  };

  const t = translations[language];

  const technologies: { [key: string]: TechItem[] } = {
    languages: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'C', icon: '⚡' },
      { name: 'JavaScript', icon: '💛' },
      { name: 'TypeScript', icon: '💙' },
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'PHP', icon: '🐘' },
      { name: 'Bash', icon: '🖥️' },
      { name: 'SQL', icon: '🗄️' },
    ],
    security: [
      { name: 'Nmap', icon: '🔍' },
      { name: 'Wireshark', icon: '🦈' },
    ],
    systems: [
      { name: 'Linux', icon: '🐧' },
      { name: 'Windows', icon: '🪟' },
      { name: 'Docker', icon: '🐳' },
      { name: 'VirtualBox', icon: '💻' },
      { name: 'Kali Linux', icon: '🐉' },
      { name: 'macOS', icon: '🍎' },
    ],
    tools: [
      { name: 'Git', icon: '🌳' },
      { name: 'VSCode/VSCodium', icon: '📝' },
      { name: 'IntelliJ', icon: '💡' },
      { name: 'DBeaver', icon: '🗄️' },
      { name: 'phpMyAdmin', icon: '🐘' },
      { name: 'pgAdmin', icon: '/assets/images/logo_pgadmin.png', isImage: true },
    ],
  };

  return (
    <div className="pt-16">
      <div className="container mx-auto px-6 py-24 space-y-24 relative z-10">
      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]"
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              {t.greeting}
            </h1>
            <h2 className="text-foreground mt-4">
              {t.role}
            </h2>
            <p className="text-muted-foreground mt-4">
              {t.seeking}
            </p>
        
          </motion.div>

          <CVDownload language={language} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            <ImageWithFallback
              src="/assets/images/IMG_3226.jpg" // Updated to use the public directory
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-primary/50"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Latest Project Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <h2 className="text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {t.latestProject}
        </h2>

        <motion.div
          whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
          className="bg-card border border-border rounded-lg overflow-hidden transition-all"
        >
          <div className="aspect-video relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVybWluYWwlMjBjb2Rpbmd8ZW58MHx8fHwxNzMwNDU0ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dark Terminal Coding Environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-foreground">{t.projectTitle}</h3>
            <p className="text-muted-foreground">{t.projectDesc}</p>
            <div className="flex gap-4">
              <motion.button
                onClick={onNavigateToProjects}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t.seeAllProjects}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Specialties Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {t.specialties}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Code, title: t.cybersecurity, color: 'from-red-500 to-red-600' },
            { icon: Zap, title: t.networking, color: 'from-blue-500 to-blue-600' },
            { icon: Cloud, title: t.development, color: 'from-green-500 to-green-600' },
            { icon: Boxes, title: t.forensics, color: 'from-purple-500 to-purple-600' },
          ].map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)' }}
              className="bg-card border border-border rounded-lg p-6 text-center space-y-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className={`inline-block p-4 rounded-full bg-gradient-to-br ${specialty.color}`}
              >
                <specialty.icon className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-foreground">{specialty.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {t.skills}
        </h2>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-foreground mb-6 text-center">
                {category === 'languages' ? t.languages : 
                 category === 'security' ? t.security : 
                 category === 'systems' ? t.systems : 
                 t.tools}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {items.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                    }}
                    className="bg-card border border-border rounded-lg p-4 text-center space-y-2 cursor-pointer"
                  >
                    <div className="text-4xl flex justify-center items-center h-16">
                      {tech.isImage ? (
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        tech.icon
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
    </div>
  );
}
