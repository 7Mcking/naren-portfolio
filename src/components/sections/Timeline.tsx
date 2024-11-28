import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export function Timeline() {
  const events = [
    {
      year: "November 2023 - April 2024",
      title: "Senior Developer",
      company: "Namisens GmbH, Karlsruhe",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      year: "April 2022 - November 2022",
      title: "Machine Learning Engineer",
      company: "Newwork Software GmbH, Remote",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      year: "October 2019 - March 2023",
      title: "Robotics Systems Engineering",
      company: "RWTH Aachen University, Aachen",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      year: "May 2016 - April 2019",
      title: "Founder, CTO",
      company: "IIR Technologies, Mumbai",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      year: "July 2013 - April 2016",
      title: "Advancedy Thermofluids Engineer",
      company: "Rolls Royce Plc., Bangalore, Derby, Berlin",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      year: "May 2011 - July 2011",
      title: "Gas Turbine Engineer Intern",
      company: "General Electric, Bangalore",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      year: "July 2008 - July 2013",
      title: "Mechanical Engineering Dual Degree",
      company: "Indian Institue of Technology, Bombay",
      icon: <GraduationCap className="w-8 h-8" />,
    },
  ];

  return (
    <section id="timeline" className="w-full max-w-4xl px-6">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Experience
      </h2>
      <div className="space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6 bg-white/10 p-6 rounded-lg backdrop-blur-sm"
          >
            <div className="p-3 bg-black/20 rounded-full">{event.icon}</div>
            <div>
              <span className="text-purple-500">{event.year}</span>
              <h3 className="text-xl font-semibold text-white">
                {event.title}
              </h3>
              <p className="text-gray-300">{event.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

