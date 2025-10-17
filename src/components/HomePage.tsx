import { motion } from 'motion/react';
import { Download, Code, Zap, Cloud, Boxes, Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  language: 'en' | 'fr';
  onNavigateToProjects: () => void;
}

export function HomePage({ language, onNavigateToProjects }: HomePageProps) {
  const translations = {
    en: {
      greeting: "Hi, I'm Anthony Barbedet",
      role: "Final-year Computer Engineering Student at Polytech Montpellier",
      seeking: "Passionate about IT and cybersecurity since childhood, currently seeking a long-term internship (March to August 2026) in IT",
      description: "Driven by curiosity and innovation, I specialize in cybersecurity with a solid foundation in software development. My goal is to contribute to securing digital infrastructures while continuing to learn and grow in this ever-evolving field.",
      downloadCV: "Download CV",
      latestProject: "Latest Project",
      projectTitle: "Network Security Scanner",
      projectDesc: "Advanced vulnerability assessment tool with automated reporting and threat analysis",
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
      greeting: "Bonjour, je suis Anthony Barbedet",
      role: "Étudiant en dernière année d'École d'Ingénieur en Informatique à Polytech Montpellier",
      seeking: "Passionné par l'IT et la cybersécurité depuis petit, je recherche actuellement un stage long idéalement de mars à août 2026 dans l'IT",
      description: "Animé par la curiosité et l'innovation, je me spécialise en cybersécurité avec une solide base en développement logiciel. Mon objectif est de contribuer à la sécurisation des infrastructures numériques tout en continuant d'apprendre et d'évoluer dans ce domaine en constante évolution.",
      downloadCV: "Télécharger CV",
      latestProject: "Dernier Projet",
      projectTitle: "Scanner de Sécurité Réseau",
      projectDesc: "Outil avancé d'évaluation des vulnérabilités avec reporting automatisé et analyse des menaces",
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

  const technologies = {
    languages: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'C/C++', icon: '⚡' },
      { name: 'JavaScript', icon: '💛' },
      { name: 'Bash', icon: '�' },
      { name: 'SQL', icon: '🗄️' },
    ],
    security: [
      { name: 'Nmap', icon: '🔍' },
      { name: 'Wireshark', icon: '🦈' },
      { name: 'Metasploit', icon: '💥' },
      { name: 'Burp Suite', icon: '🔒' },
      { name: 'OWASP ZAP', icon: '⚡' },
      { name: 'Nessus', icon: '�️' },
    ],
    systems: [
      { name: 'Linux', icon: '�' },
      { name: 'Windows', icon: '🪟' },
      { name: 'Docker', icon: '�' },
      { name: 'VMware', icon: '💻' },
      { name: 'Kali Linux', icon: '🐉' },
      { name: 'pfSense', icon: '�' },
    ],
    tools: [
      { name: 'Git', icon: '🌳' },
      { name: 'VS Code', icon: '📝' },
      { name: 'IntelliJ', icon: '💡' },
      { name: 'Ansible', icon: '🤖' },
      { name: 'Terraform', icon: '�️' },
      { name: 'Splunk', icon: '📊' },
    ],
  };

  return (
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
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              {t.description}
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg transition-all"
          >
            <Download className="w-5 h-5" />
            {t.downloadCV}
          </motion.button>
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
              src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA0MTIwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
              src="https://images.unsplash.com/photo-1758598497143-84a0cfdc9958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjAzNzY0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-foreground">{t.projectTitle}</h3>
            <p className="text-muted-foreground">{t.projectDesc}</p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
              >
                <Github className="w-4 h-4" />
                {t.viewProject}
              </motion.a>
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
                    <div className="text-4xl">{tech.icon}</div>
                    <p className="text-sm text-muted-foreground">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
