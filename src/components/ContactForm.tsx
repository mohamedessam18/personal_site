import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border shadow-sm
            dark:bg-white/10 dark:border-white/20 dark:text-white
            light:bg-white light:border-gray-300 light:text-gray-900
            focus:ring-2 focus:ring-primary-dark"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="mt-1 block w-full rounded-md border shadow-sm
            dark:bg-white/10 dark:border-white/20 dark:text-white
            light:bg-white light:border-gray-300 light:text-gray-900
            focus:ring-2 focus:ring-primary-dark"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          rows={4}
          className="mt-1 block w-full rounded-md border shadow-sm
            dark:bg-white/10 dark:border-white/20 dark:text-white
            light:bg-white light:border-gray-300 light:text-gray-900
            focus:ring-2 focus:ring-primary-dark"
          required
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md
          bg-primary-dark text-white hover:bg-primary-dark/90 transition-colors"
      >
        <Send className="w-4 h-4" />
        Send Message
      </motion.button>
    </motion.form>
  );
}