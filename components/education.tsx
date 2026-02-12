"use client"

import { motion } from "framer-motion"
import { FadeIn, GoldDivider } from "./motion-wrapper"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const educationData = [
  {
    degree: "Post Graduate Diploma in Management",
    institution: "GL Bajaj Institute of Management and Research, Greater Noida",
    year: "2025 - 2027",
    score: "TGPA: 7.53",
    current: true,
    icon: GraduationCap,
    tags: ["Finance", "Analytics", "Strategy"],
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "IMS University Courses Campus, Ghaziabad",
    year: "2022 - 2025",
    score: "Percentage: 65%",
    current: false,
    icon: BookOpen,
    tags: ["Business", "Management", "Economics"],
  },
  {
    degree: "Senior Secondary (XII) - Commerce with Maths",
    institution: "Dewan Public School, Hapur",
    year: "2020 - 2021",
    score: "Achieved: 94%",
    current: false,
    icon: Award,
    tags: ["Commerce", "Mathematics", "Accounts"],
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-charcoal/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2 text-balance">
            <span className="text-gold-gradient">Education</span> Background
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Academic journey and achievements
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-16" />
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent md:-translate-x-px"
          />

          {educationData.map((edu, i) => (
            <FadeIn
              key={edu.degree}
              delay={0.2 + i * 0.2}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative flex flex-col md:flex-row items-start mb-14 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot with pulse */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-2 md:-translate-x-2 mt-6 z-10">
                  <div className="w-full h-full rounded-full bg-gold border-[3px] border-deep-black" />
                  {edu.current && (
                    <motion.span
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 rounded-full bg-gold/30"
                    />
                  )}
                </div>

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{
                      y: -3,
                      borderColor: "rgba(198, 167, 94, 0.25)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="card-glow p-6 rounded-xl bg-charcoal/60 border border-gold/[0.06]"
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        i % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                        <edu.icon size={18} />
                      </div>
                      <span className="text-xs text-gold font-medium tracking-wider px-3 py-1 border border-gold/15 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <h3 className="text-off-white font-semibold text-base mb-1.5">
                      {edu.degree}
                    </h3>
                    <p className="text-soft-grey text-sm mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-gold font-semibold text-sm mb-3">
                      {edu.score}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {edu.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-soft-grey/80 px-2.5 py-1 rounded-full border border-gold/10 bg-gold/[0.03]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
