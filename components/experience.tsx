"use client"

import { motion } from "framer-motion"
import { FadeIn, GoldDivider, StaggerContainer, StaggerItem } from "./motion-wrapper"
import { Building2, Users, ArrowUpRight } from "lucide-react"

const experiences = [
  {
    title: "Finance Intern",
    company: "Register Karo",
    period: "July 2024 - September 2024",
    icon: Building2,
    color: "from-gold/20 to-gold/5",
    highlights: [
      "Assisted in financial documentation and analysis",
      "Exposure to financial structuring and compliance processes",
      "Improved analytical and reporting skills",
    ],
    skills: ["Financial Analysis", "Compliance", "Excel"],
  },
  {
    title: "Financial Literacy Intern",
    company: "Navjyoti India Foundation",
    period: "November 2025 - January 2026",
    icon: Users,
    color: "from-gold/15 to-gold/5",
    highlights: [
      "Conducted financial awareness initiatives",
      "Helped individuals understand savings, budgeting, and basic finance",
      "Developed communication and social impact skills",
    ],
    skills: ["Communication", "Financial Literacy", "Social Impact"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2 text-balance">
            Work <span className="text-gold-gradient">Experience</span>
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Internship exposure and professional growth
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.title} delay={0.2 + i * 0.15}>
              <motion.div
                whileHover={{
                  y: -6,
                  borderColor: "rgba(198, 167, 94, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="card-glow group h-full rounded-xl bg-charcoal/50 border border-gold/[0.06] overflow-hidden"
              >
                {/* Gradient header */}
                <div className={`h-1 bg-gradient-to-r ${exp.color}`} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/15 transition-colors duration-300"
                      >
                        <exp.icon size={20} />
                      </motion.div>
                      <div>
                        <h3 className="text-off-white font-semibold text-base">
                          {exp.title}
                        </h3>
                        <p className="text-gold text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-gold/30 group-hover:text-gold/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                  <span className="inline-block text-[11px] text-soft-grey tracking-wider mb-5 border border-gold/10 px-3 py-1 rounded-full font-medium">
                    {exp.period}
                  </span>

                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 flex-shrink-0" />
                        <span className="text-soft-grey text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gold/[0.06]">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] text-gold/80 px-2.5 py-1 rounded-full border border-gold/15 bg-gold/[0.05] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
