"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    "id": 1,
    "title": "Zap-Language",
    "description": "Plataforma de ensino de inglês via WhatsApp integrada com IA para conversação em tempo real e feedback automatizado.",
    "technologies": ["Python", "Flask", "OpenAI API", "Redis", "WhatsApp API"],
    "image": "gradient-to-br from-blue-700 via-blue-800 to-slate-900",
    "link": "#",
    "featured": true
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden"  id="projects">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Explore uma seleção dos meus trabalhos recentes, que demonstram minha experiência em desenvolvimento full-stack e soluções inovadoras para problemas.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`
                relative group rounded-xl overflow-hidden cursor-pointer
                ${idx === 1 || idx === 3 ? "md:col-span-2" : ""}
                ${idx === 0 ? "md:row-span-2" : ""}
              `}
            >
              {/* Card background */}
              <div className={`absolute inset-0 bg-${project.image} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              
              {/* Glassmorphism border */}
              <div className="absolute inset-0 rounded-xl border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors duration-300"></div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between">
                {/* Top content */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <div className="px-2 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-xs text-cyan-300 font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack - hidden by default, shown on hover */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.link}
                      className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
