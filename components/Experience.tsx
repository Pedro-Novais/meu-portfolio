"use client";

import { motion } from "framer-motion";
import { Code, Briefcase, Terminal } from "lucide-react";

const experiences = [
    {
        company: "E-Deploy (IFood)",
        position: "Engenheiro de Software Pleno",
        period: "2025 - ",
        description: "Realização de testes manuais e automatizados, garantindo a qualidade e estabilidade das aplicações antes do lançamento",
        icon: Terminal,
    },
    {
        company: "E-Deploy (IFood)",
        position: "Engenheiro de Software Júnior",
        period: "2025 - 2025",
        description: "Realização de testes manuais e automatizados, garantindo a qualidade e estabilidade das aplicações antes do lançamento",
        icon: Terminal,
    },
    {
        company: "E-Deploy (IFood)",
        position: "QA Júnior",
        period: "2024 - 2025",
        description: "Realização de testes manuais e automatizados, garantindo a qualidade e estabilidade das aplicações antes do lançamento",
        icon: Terminal,
    },
    {
        company: "E-Deploy (IFood)",
        position: "Estagiário QA",
        period: "2023 - 2024",
        description: "Realização de testes manuais e automatizados, garantindo a qualidade e estabilidade das aplicações antes do lançamento",
        icon: Terminal,
    },
];

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Celery"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Linux", "Redis"] },
    { category: "Inteligência Artificial", items: ["LLM Integration", "Engenharia de Prompt", "RAG (Retrieval-Augmented Generation)"] },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative" id="experience">
            <div className="absolute inset-0 -z-10">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl opacity-30"></div>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Experiência e Carreira
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Minha trajetória profissional inclui contribuições em empresas líderes do setor de tecnologia.
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20"
                >
                    <div className="space-y-8">
                        {experiences.map((exp, idx) => {
                            const IconComponent = exp.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="relative pl-8 pb-8 border-l-2 border-cyan-500/30 hover:border-cyan-500/60 transition-colors last:pb-0"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-4 top-0 w-6 h-6 bg-slate-950 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                                        <IconComponent className="w-3 h-3 text-cyan-400" />
                                    </div>

                                    {/* Card */}
                                    <div className="group relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative p-6 rounded-lg border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors duration-300 bg-slate-900/30 backdrop-blur-sm">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-200">
                                                        {exp.position}
                                                    </h3>
                                                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                                                </div>
                                                <span className="text-sm px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 whitespace-nowrap">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-20"
                >
                    <h3 className="text-3xl font-bold mb-8 text-white">Tech Stack & Skills</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skillGroup, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-blue-900/20 hover:border-cyan-500/50 transition-all duration-300 group"
                            >
                                <h4 className="text-lg font-bold text-cyan-300 mb-4 group-hover:text-cyan-200">
                                    {skillGroup.category}
                                </h4>
                                <div className="space-y-2">
                                    {skillGroup.items.map((skill) => (
                                        <div
                                            key={skill}
                                            className="text-sm text-slate-300 flex items-center gap-2 font-mono"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
