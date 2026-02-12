"use client"

import { motion } from "framer-motion"
import { FadeIn, GoldDivider } from "./motion-wrapper"

interface SkillBarProps {
  name: string
  level: number
  delay: number
}

function SkillBar({ name, level, delay }: SkillBarProps) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-off-white text-sm">{name}</span>
        <span className="text-soft-grey text-xs">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-charcoal/80 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: delay,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="h-full rounded-full bg-gradient-to-r from-gold-muted to-gold"
        />
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

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2">
            Professional <span className="text-gold">Skills</span>
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Core competencies and tools
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <FadeIn key={category.title} delay={0.15 + catIdx * 0.1}>
              <div className="p-6 rounded-lg bg-charcoal/50 border border-gold/[0.08]">
                <h3 className="text-gold font-semibold text-base mb-5 pb-3 border-b border-gold/10">
                  {category.title}
                </h3>
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.3 + catIdx * 0.1 + skillIdx * 0.08}
                  />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
