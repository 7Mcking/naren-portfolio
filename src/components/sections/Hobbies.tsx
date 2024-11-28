import { motion } from 'framer-motion';
import { Camera, Gamepad, Music, Book } from 'lucide-react';

export function Hobbies() {
  const hobbies = [
    { icon: <Camera className="w-8 h-8" />, name: 'Photography' },
    { icon: <Gamepad className="w-8 h-8" />, name: 'Gaming' },
    { icon: <Music className="w-8 h-8" />, name: 'Music' },
    { icon: <Book className="w-8 h-8" />, name: 'Reading' },
  ];

  return (
    <section id="hobbies" className="w-full max-w-4xl px-6">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Hobbies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center gap-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm"
          >
            <div className="text-purple-400">{hobby.icon}</div>
            <span className="text-white font-medium">{hobby.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}