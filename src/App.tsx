import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { SocialLink } from './components/SocialLink';
import { ContactForm } from './components/ContactForm';
import { TypewriterTitle } from './components/TypewriterTitle';
import { ProjectsSection } from './components/ProjectsSection';
import { ThemeToggle } from './components/ThemeToggle';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-200
      dark:bg-background-dark dark:text-text-dark
      light:bg-background-light light:text-text-light">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <TypewriterTitle />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid gap-4 max-w-md mx-auto mb-12"
        >
          <SocialLink
            href="https://www.facebook.com/people/%D9%85%D8%AD%D9%85%D8%AF-%D8%A8%D9%86-%D8%B9%D8%B5%D8%A7%D9%85/100061403808829/"
            icon={Facebook}
            label="Facebook"
            color="bg-primary-dark hover:bg-primary-light"
          />
          <SocialLink
            href="https://www.instagram.com/mohamed_.essam_19/?fbclid=IwY2xjawG6XHRleHRuA2FlbQIxMAABHUHAx42qhL_AjLyiLvR7tGAFv3mKjCLCxtIAtXo-bkjePHIlDxDZe-z1wQ_aem_EsH4A8ARl5tZoNd7ZbHS6w"
            icon={Instagram}
            label="Instagram"
            color="bg-accent-dark hover:bg-accent-light"
          />
          <SocialLink
            href="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D8%AF-%D8%A8%D9%86-%D8%B9%D8%B5%D8%A7%D9%85-972a292a3/"
            icon={Linkedin}
            label="LinkedIn"
            color="bg-secondary-dark hover:bg-secondary-light"
          />
        </motion.div>

        <ProjectsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-md mx-auto bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10
            dark:bg-white/10 dark:border-white/10
            light:bg-black/5 light:border-black/10"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}

export default App;