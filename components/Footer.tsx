'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Github } from 'lucide-react';
import { memo } from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-400">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-2">{'Abdul Rahman Khan'}</h3>
            <p className="text-sm">
              Frontend Engineer passionate about building scalable systems, secure blockchain networks, and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-2 text-center md:text-left">Quick Links</h4>
            <ul className="flex space-x-4">
              {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm flex items-center gap-1">
            © 2025 Abdul Rahman Khan
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}

export default memo(Footer);
