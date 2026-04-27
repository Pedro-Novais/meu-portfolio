"use client";

import { motion } from "framer-motion";
import { Music, Shirt, Play, Volume2 } from "lucide-react";

export default function Creative() {
    return
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl opacity-20"></div>
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Creative Ventures
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Beyond code, I explore music production and fashion design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Beats Channel */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/20 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border border-purple-500/30 group-hover:border-purple-500/60 rounded-xl transition-colors duration-300"></div>

            <div className="relative p-8 h-96 flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/40">
                    <Music className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-300">Alex Beats</h3>
                    <p className="text-sm text-slate-400">Music Production Channel</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">
                  Original beats and soundscapes. From lo-fi hip-hop to electronic productions.
                </p>
              </div>

              {/* Visualizer */}
              <div className="mb-6">
                <div className="flex items-end gap-1 justify-center h-24 p-4 rounded-lg bg-slate-900/50 border border-purple-500/20">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-sm"
                      animate={{
                        height: ["20%", "80%", "40%", "90%", "30%"],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.08,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <button className="flex-1 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                  <Play className="w-4 h-4" />
                  Listen
                </button>
                <button className="flex-1 py-3 rounded-lg border border-purple-500/50 hover:border-purple-500 text-purple-300 hover:text-purple-200 font-semibold transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Streetwear Brand */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-blue-600/20 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-xl transition-colors duration-300"></div>

            <div className="relative p-8 h-96 flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-cyan-500/20 border border-cyan-500/40">
                    <Shirt className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-300">SYS-TAG Wear</h3>
                    <p className="text-sm text-slate-400">Streetwear & Tech Fashion</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">
                  Blending technology aesthetics with street culture. Limited edition drops and exclusive collaborations.
                </p>
              </div>

              {/* Product showcase */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center cursor-pointer hover:border-cyan-500/60 transition-colors"
                    >
                      <Shirt className="w-6 h-6 text-cyan-400 opacity-50" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <button className="flex-1 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold transition-all duration-300">
                  Shop Now
                </button>
                <button className="flex-1 py-3 rounded-lg border border-cyan-500/50 hover:border-cyan-500 text-cyan-300 hover:text-cyan-200 font-semibold transition-all duration-300">
                  Instagram
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
