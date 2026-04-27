"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Esquerda - Nome e Slogan */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Pedro Henrique
              </span>
            </h3>
            <p className="text-slate-400 font-mono text-sm">
              Construindo o futuro, uma linha de código por vez.
            </p>
          </motion.div>

          {/* Links Sociais */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/Pedro-Novais", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/pedro-henrique-novais-7610ab1b6/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:phnovais7@gmail.com", label: "Email" },
            ].map((social, idx) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-lg border border-cyan-500/20 bg-slate-900/50 hover:border-cyan-500/60 hover:bg-slate-900/80 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>

          {/* Botão Voltar ao Topo */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:border-cyan-500/60 hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-cyan-600/40 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Parte Inferior - Direitos e Tecnologias */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-cyan-500/10 text-center"
        >
          <p className="text-sm text-slate-500 font-mono">
            © {currentYear} Pedro Henrique. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}