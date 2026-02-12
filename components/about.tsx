"use client"

import { motion } from "framer-motion"
import { FadeIn, GoldDivider, RevealText } from "./motion-wrapper"
import { Target, Sparkles, TrendingUp } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Objective",
    text: "Ambitious student with a focus on leveraging AI tools to solve organizational challenges. Passionate about learning how automation can improve business efficiency.",
  },
  {
    icon: Sparkles,
    title: "What Drives Me",
    text: "I believe in combining structured thinking with modern analytics to create real business impact. My hands-on dashboard work and finance internships reflect this approach.",
  },
  {
    icon: TrendingUp,
    title: "Career Focus",
    text: "Seeking opportunities in Finance, Business Analytics, Strategy, and Operations where I can apply my data interpretation skills and structured problem-solving ability.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2 text-balance">
            About <span className="text-gold-gradient">Me</span>
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Who I am and what I bring to the table
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        {/* Main about text */}
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <RevealText
              text="I am a business and finance-focused professional with hands-on dashboard development experience and internship exposure in finance and financial literacy. I aim to contribute structured thinking, analytical clarity, and execution ability to growth-oriented organizations."
              className="text-soft-grey text-base md:text-lg leading-relaxed"
              delay={0.3}
            />
          </div>
        </FadeIn>

        {/* Three highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={0.2 + i * 0.15}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="card-glow h-full p-6 rounded-xl bg-charcoal/50 border border-gold/[0.08] hover:border-gold/25 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5">
                  <item.icon size={22} />
                </div>
                <h3 className="text-gold font-semibold text-base mb-3">
                  {item.title}
                </h3>
                <p className="text-soft-grey text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
