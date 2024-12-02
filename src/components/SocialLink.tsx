import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  color: string;
}

export function SocialLink({ href, icon: Icon, label, color }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 p-3 rounded-lg transition-all ${color} hover:opacity-90 floating`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 15px rgba(255,255,255,0.3)'
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
      <span className="text-white font-medium">{label}</span>
    </motion.a>
  );
}