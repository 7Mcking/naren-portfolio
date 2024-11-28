import { motion } from "framer-motion";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { SocialLink } from "../ui/SocialLink";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-white mb-8">Naren Sadhwani</h1>
        <p className="text-2xl text-gray-300 mb-2">
          Engineer Dreamer Maker Gutiarist
        </p>

        <p className="text-l text-gray-300 mb-10">
          "Exercise your will and muscles"
        </p>

        <div className="flex gap-6 justify-center">
          <SocialLink
            href="https://github.com/7Mcking"
            icon={<Github size={24} />}
          />
          <SocialLink
            href="https://linkedin.com/in/naren-sadhwani"
            icon={<Linkedin size={24} />}
          />
          <SocialLink
            href="mailto:sadhwaninaren@gmail.com"
            icon={<Mail size={24} />}
          />
          <SocialLink href="" icon={<BookOpen size={24} />} />
        </div>
      </motion.div>
    </section>
  );
}

