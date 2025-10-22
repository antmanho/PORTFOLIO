import { motion } from 'motion/react';
import { Download, ChevronDown, FileText, FileCheck } from 'lucide-react';
import { useState } from 'react';

interface CVDownloadProps {
  language: 'en' | 'fr';
}

export function CVDownload({ language }: CVDownloadProps) {
  const [isOpen, setIsOpen] = useState(false);

  const translations = {
    en: {
      downloadCV: "Download CV",
      classicVersion: "Classic Version",
      atsVersion: "ATS Version",
      classicDescription: "Traditional CV with visual design",
      atsDescription: "ATS-optimized CV for automated systems"
    },
    fr: {
      downloadCV: "Télécharger CV",
      classicVersion: "Version Classique", 
      atsVersion: "Version ATS",
      classicDescription: "CV traditionnel avec design visuel",
      atsDescription: "CV optimisé ATS pour les systèmes automatisés"
    }
  };

  const t = translations[language];

  const handleDownload = (type: 'classic' | 'ats') => {
    let fileName: string;
    
    if (language === 'fr') {
      // Version française
      fileName = type === 'classic' 
        ? 'Anthony-Barbedet_CV_Stage-IT_2026-2.pdf'  // Version classique française
        : 'Anthony-Barbedet_CV_Stage-IT_2026.pdf'; // Version ATS française
    } else {
      // Version anglaise
      fileName = type === 'classic'
        ? 'Anthony-Barbedet_Resume_Internship-IT_2026-2.pdf' // Version classique anglaise
        : 'Anthony-Barbedet_Resume_Internship-IT_2026.pdf'; // Version ATS anglaise
    }
    
    const link = document.createElement('a');
    link.href = `/assets/pdf/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg transition-all"
      >
        <Download className="w-5 h-5" />
        {t.downloadCV}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mt-2 left-0 right-0 bg-card border border-border rounded-lg shadow-xl z-50 overflow-hidden"
        >
          <motion.button
            whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            onClick={() => handleDownload('classic')}
            className="w-full px-4 py-3 hover:bg-accent transition-colors text-center"
          >
            <div className="font-medium text-foreground">
              {t.classicVersion}
              <br />
              <span className="text-sm text-muted-foreground font-normal">{t.classicDescription}</span>
            </div>
          </motion.button>
          
          <div className="border-t border-border" />
          
          <motion.button
            whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            onClick={() => handleDownload('ats')}
            className="w-full px-4 py-3 hover:bg-accent transition-colors text-center"
          >
            <div className="font-medium text-foreground">
              {t.atsVersion}
              <br />
              <span className="text-sm text-muted-foreground font-normal">{t.atsDescription}</span>
            </div>
          </motion.button>
        </motion.div>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
