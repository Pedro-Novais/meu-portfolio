"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-4 sm:px-6 lg:px-8">
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>

            <motion.div
                className="max-w-4xl mx-auto text-center z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm hover:border-cyan-500/60 transition-colors"
                >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-cyan-300">Bem-Vindo ao meu portfólio</span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
                        Pedro Henrique Gomes Santos Novais
                    </span>
                    <br />
                    <span className="text-slate-200">Full-Stack Developer</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-mono"
                >
                    &gt; Criando experiências web de alto desempenho com tecnologias modernas.
                    <br />
                    &gt; Eu crio soluções digitais belas, funcionais e escaláveis.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                >
                    <motion.a
                        href="#projects" // Altere para o ID da seção de destino (ex: #projetos, #contato)
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden inline-flex items-center justify-center cursor-pointer"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-lg -z-10 group-hover:blur-xl transition-all duration-300 opacity-75 group-hover:opacity-100"></div>
                        <div className="absolute inset-0.5 bg-slate-950 rounded-lg -z-10"></div>

                        <span className="relative flex items-center gap-2">
                            Trabalhos <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </motion.a>

                    <motion.a
                        href="#contact" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-lg font-semibold border-2 border-cyan-500/50 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 hover:bg-cyan-500/5 transition-all duration-300"
                    >
                        Entre em Contato
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center"
                >
                    <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-cyan-500 rounded-full"></div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
