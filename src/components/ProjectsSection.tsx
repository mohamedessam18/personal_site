import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application built with React and TypeScript',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    liveUrl: 'https://project1.com',
    githubUrl: 'https://github.com/user/project1',
    technologies: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Project 2',
    description: 'Full-stack application with real-time features',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    liveUrl: 'https://project2.com',
    githubUrl: 'https://github.com/user/project2',
    technologies: ['Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'Project 3',
    description: 'Mobile-first responsive design with modern animations',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    liveUrl: 'https://project3.com',
    githubUrl: 'https://github.com/user/project3',
    technologies: ['React Native', 'Firebase', 'Framer Motion']
  }
];

export function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-16"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
}