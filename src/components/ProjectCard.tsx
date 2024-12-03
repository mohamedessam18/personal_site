import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

export function ProjectCard({ title, description, imageUrl, liveUrl, githubUrl, technologies }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
      transition={{ duration: 0.3 }}
      className="rounded-lg overflow-hidden backdrop-blur-sm border
        dark:bg-white/10 dark:border-white/10
        light:bg-white light:border-gray-200"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative h-48 overflow-hidden"
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
        />
      </motion.div>
      <motion.div 
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4 dark:text-gray-300 light:text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="px-2 py-1 text-sm rounded-full
                dark:bg-white/20 dark:text-white
                light:bg-gray-100 light:text-gray-800"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-dark hover:text-primary-light"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-dark hover:text-primary-light"
            >
              <Github className="w-4 h-4" />
              Source Code
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}