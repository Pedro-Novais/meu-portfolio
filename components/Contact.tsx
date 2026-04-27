"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowRight, X } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const socialLinks = [
    { icon: Github, href: "https://github.com/Pedro-Novais", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pedro-henrique-novais-7610ab1b6/", label: "LinkedIn" },
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden" id="contato">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-900/10 to-slate-950"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Vamos Trabalhar Juntos
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tem uma ideia ou um projeto em mente? Eu adoraria ouvir sobre isso. Vamos criar algo incrível juntos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Formulário de Contato */}
          <motion.div variants={itemVariants}>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-cyan-500/20 text-white placeholder-slate-500 focus:border-cyan-500/60 focus:outline-none transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-cyan-500/20 text-white placeholder-slate-500 focus:border-cyan-500/60 focus:outline-none transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-cyan-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  placeholder="Sua mensagem aqui..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-cyan-500/20 text-white placeholder-slate-500 focus:border-cyan-500/60 focus:outline-none transition-colors font-mono resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Email */}
            <div className="p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-blue-900/10 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-cyan-300">Email</h3>
              </div>
              <p className="text-slate-400 ml-14">phnovais7@gmail.com</p>
            </div>

            {/* Links Sociais */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Conecte-se Comigo</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-blue-900/10 hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-slate-900/70 hover:to-blue-900/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <IconComponent className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                      <span className="text-sm font-semibold text-cyan-300 group-hover:text-cyan-200">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Disponibilidade */}
            <div className="p-6 rounded-lg border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 to-slate-900/50">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1.5 animate-pulse"></div>
                <div>
                  <p className="font-semibold text-emerald-300 mb-1">Disponível para Trabalho</p>
                  <p className="text-sm text-slate-400">
                    Atualmente estou aceitando novos projetos e oportunidades de freelancer.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}