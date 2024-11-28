import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'A revolutionary web application built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Project Beta',
      description: 'Mobile-first e-commerce platform using Next.js',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="w-full max-w-6xl px-6">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a href={project.github} className="text-white hover:text-purple-400">
                  <Github size={20} />
                </a>
                <a href={project.demo} className="text-white hover:text-purple-400">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}