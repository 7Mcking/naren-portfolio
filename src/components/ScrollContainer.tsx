import { motion } from "framer-motion";
import { Hero } from "./sections/Hero";
import { Timeline } from "./sections/Timeline";
import { Projects } from "./sections/Projects";
import { Hobbies } from "./sections/Hobbies";
import { Contact } from "./sections/Contact";

export function ScrollContainer() {
  return (
    <div className="relative z-10">
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <Timeline />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <Projects />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <Hobbies />
      </motion.div>
      {/* <motion.div */}
      {/*   initial={{ opacity: 0 }} */}
      {/*   whileInView={{ opacity: 1 }} */}
      {/*   className="min-h-screen flex items-center justify-center" */}
      {/* > */}
      {/*   <Skills /> */}
      {/* </motion.div> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <Contact />
      </motion.div>
    </div>
  );
}

