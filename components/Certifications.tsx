"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Shield } from "lucide-react";

const certifications = [
  {
    title: "TypeScript Avançado",
    issuer: "Frontend Masters",
    date: "2025",
    icon: BookOpen,
  },
];

const education = [
  {
    institution: "Estácio",
    degree: "Ensino Superior",
    field: "Análise e Desenvolvimento de Sistemas",
    year: "2025",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Certifications() {
  return (
    <section id="certificacoes" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl opacity-20"></div>
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
              Certificações & Formação
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Qualificações profissionais e conquistas de aprendizado contínuo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certificações */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Certificações</h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => {
                const IconComponent = cert.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-blue-900/10 hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-slate-900/70 hover:to-blue-900/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 group-hover:border-cyan-500/60">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-cyan-300 mb-1">{cert.title}</h4>
                        <p className="text-sm text-slate-400">{cert.issuer}</p>
                        <p className="text-xs text-blue-400 mt-2 font-mono">{cert.date}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Educação */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Educação</h3>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group p-6 rounded-lg border border-emerald-500/20 bg-gradient-to-br from-slate-900/50 to-emerald-900/10 hover:border-emerald-500/50 hover:bg-gradient-to-br hover:from-slate-900/70 hover:to-emerald-900/30 transition-all duration-300"
                >
                  <h4 className="font-bold text-emerald-300 mb-1">{edu.degree}</h4>
                  <p className="text-sm text-slate-400">{edu.institution}</p>
                  <p className="text-sm text-emerald-400 mt-2">{edu.field}</p>
                  <p className="text-xs text-blue-400 mt-2 font-mono">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}