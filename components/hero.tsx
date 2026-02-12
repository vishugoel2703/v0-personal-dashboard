"use client"

import { motion } from "framer-motion"
import { Download, ArrowDown, Linkedin, Mail } from "lucide-react"
import {
  Typewriter,
  FloatingParticles,
  Magnetic,
  AnimatedCounter,
} from "./motion-wrapper"

const stats = [
  { value: 3, suffix: "+", label: "Dashboards Built" },
  { value: 2, suffix: "", label: "Internships" },
  { value: 94, suffix: "%", label: "Best Academic Score" },
  { value: 7.53, suffix: "", label: "Current TGPA", isDecimal: true },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <FloatingParticles />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Welcome line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-soft-grey text-xs tracking-[0.4em] uppercase mb-6 px-4 py-2 border border-gold/10 rounded-full">
            Welcome
          </span>
        </motion.div>

        {/* Name with shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-off-white mb-4 text-balance"
        >
          {"Hi, I'm "}
          <span className="gold-shimmer">Vishu Goel</span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-8 md:h-10 flex items-center justify-center mb-8"
        >
          <span className="text-gold text-base md:text-xl font-medium">
            <Typewriter
              words={[
                "Finance & Business Analytics Enthusiast",
                "Aspiring Strategy & Operations Professional",
                "Dashboard Developer & Data Storyteller",
                "PGDM Student at GL Bajaj Institute",
              ]}
            />
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
          className="gold-divider w-48 mx-auto mb-8"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Magnetic>
            <a
              href="/Vishu_Goel_Resume.pdf"
              download
              className="magnetic-btn flex items-center gap-2 px-7 py-3.5 bg-gold/90 text-deep-black text-sm font-semibold rounded-lg hover:bg-gold transition-all duration-300"
            >
              <Download size={16} />
              Download Resume
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/vishu-goel-1910a3275"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn flex items-center gap-2 px-7 py-3.5 border border-gold/40 text-gold text-sm font-medium rounded-lg hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
            >
              <Linkedin size={16} />
              LinkedIn Profile
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="mailto:vishugoel2703@gmail.com"
              className="magnetic-btn flex items-center gap-2 px-7 py-3.5 border border-gold/20 text-off-white text-sm rounded-lg hover:bg-charcoal hover:border-gold/40 transition-all duration-300"
            >
              <Mail size={16} />
              Email Me
            </a>
          </Magnetic>
        </motion.div>

        {/* Animated Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-lg border border-gold/[0.06] bg-charcoal/30"
            >
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1 font-serif">
                {stat.isDecimal ? (
                  <span>7.53</span>
                ) : (
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-soft-grey text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-soft-grey text-[10px] tracking-[0.2em] uppercase">
            Scroll Down
          </span>
          <ArrowDown size={14} className="text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
