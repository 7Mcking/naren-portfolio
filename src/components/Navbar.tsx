import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
  const sections = [
    "Home",
    "Timeline",
    "Projects",
    "Hobbies",
    "Skills",
    "Contact",
  ];
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(
              entry.target.id.charAt(0).toUpperCase() +
                entry.target.id.slice(1),
            );
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="flex gap-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className={`transition-colors ${
              activeSection === section
                ? "text-purple-400 font-medium"
                : "text-white/80 hover:text-white"
            }`}
          >
            {section}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

