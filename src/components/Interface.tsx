import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Interface() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center pointer-events-auto"
        >
          <h1 className="text-6xl font-bold text-white mb-8">John Doe</h1>
          <p className="text-xl text-gray-300 mb-12">Full Stack Developer</p>
          
          <div className="flex gap-6 justify-center">
            <SocialLink href="https://github.com" icon={<Github size={24} />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} />
            <SocialLink href="mailto:email@example.com" icon={<Mail size={24} />} />
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center text-gray-400"
        >
          <p>Scroll to explore</p>
        </motion.div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}