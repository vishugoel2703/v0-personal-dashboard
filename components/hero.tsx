"use client"

import { motion } from "framer-motion"
import { Download, FolderOpen, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-soft-grey text-sm tracking-[0.3em] uppercase mb-4">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl font-bold text-off-white mb-2 text-balance"
        >
          Vishu{" "}
          <span className="text-gold-gradient">Goel</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="gold-divider w-32 mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gold text-sm md:text-base font-medium tracking-wide mb-6"
        >
          Finance & Business Analytics Enthusiast | Aspiring Strategy &
          Operations Professional
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-soft-grey text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          I am a business and finance-focused professional with hands-on
          dashboard development experience and internship exposure in finance and
          financial literacy. I aim to contribute structured thinking, analytical
          clarity, and execution ability to growth-oriented organizations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/Vishu_Goel_Resume.pdf"
            download
            className="group flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold text-sm rounded-lg hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/5"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group flex items-center gap-2 px-6 py-3 border border-gold/20 text-off-white text-sm rounded-lg hover:bg-charcoal hover:border-gold/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FolderOpen size={16} />
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group flex items-center gap-2 px-6 py-3 bg-gold/90 text-deep-black text-sm font-medium rounded-lg hover:bg-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
          >
            <MessageCircle size={16} />
            {"Let's Connect"}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
