"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FadeIn, GoldDivider, StaggerContainer, StaggerItem } from "./motion-wrapper"

interface SkillBarProps {
  name: string
  level: number
  delay: number
}

function SkillBar({ name, level, delay }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="mb-5 last:mb-0 group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-off-white text-sm font-medium">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-gold text-xs font-semibold"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 w-full bg-charcoal/80 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="h-full rounded-full bg-gradient-to-r from-gold-muted via-gold to-gold-champagne relative"
        >
          {/* Shine effect on the bar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "200%" } : {}}
            transition={{
              duration: 1,
              delay: delay + 1,
              ease: "easeOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-off-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  )
}

const skillCategories = [
  {
    title: "Business & Strategy",
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "Analytical Thinking", level: 82 },
      { name: "Market Understanding", level: 75 },
      { name: "Process Structuring", level: 78 },
    ],
  },
  {
    title: "Finance & Analytics",
    skills: [
      { name: "Financial Basics", level: 80 },
      { name: "ROI Understanding", level: 75 },
      { name: "Cost & Revenue Analysis", level: 78 },
      { name: "Data Interpretation", level: 82 },
    ],
  },
  {
    title: "Tools & Software",
    skills: [
      { name: "MS Excel", level: 88 },
      { name: "Power BI / Dashboards", level: 80 },
      { name: "PowerPoint", level: 85 },
      { name: "Research & Reporting", level: 82 },
    ],
  },
]

// Floating skill tags that orbit around
const floatingSkills = [
  "Excel", "Power BI", "Finance", "Analytics", "Strategy",
  "Dashboards", "Reporting", "AI Tools", "Prototyping",
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Floating skill tags in background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingSkills.map((skill, i) => (
          <motion.span
            key={skill}
            className="absolute text-[10px] text-gold/[0.08] font-medium"
            style={{
              left: `${10 + (i * 10) % 80}%`,
              top: `${15 + (i * 13) % 70}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2 text-balance">
            Professional <span className="text-gold-gradient">Skills</span>
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Core competencies and tools
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.15}
          delay={0.2}
        >
          {skillCategories.map((category, catIdx) => (
            <StaggerItem key={category.title}>
              <motion.div
                whileHover={{
                  y: -4,
                  borderColor: "rgba(198, 167, 94, 0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="card-glow p-6 rounded-xl bg-charcoal/50 border border-gold/[0.06]"
              >
                <h3 className="text-gold font-semibold text-base mb-6 pb-3 border-b border-gold/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  {category.title}
                </h3>
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.2 + catIdx * 0.1 + skillIdx * 0.08}
                  />
                ))}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
