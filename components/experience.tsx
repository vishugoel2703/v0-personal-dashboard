"use client"

import { FadeIn, GoldDivider } from "./motion-wrapper"
import { Building2, Users } from "lucide-react"

const experiences = [
  {
    title: "Finance Intern",
    company: "Register Karo",
    period: "July 2024 - September 2024",
    icon: Building2,
    highlights: [
      "Assisted in financial documentation and analysis",
      "Exposure to financial structuring and compliance processes",
      "Improved analytical and reporting skills",
    ],
  },
  {
    title: "Financial Literacy Intern",
    company: "Navjyoti India Foundation",
    period: "November 2025 - January 2026",
    icon: Users,
    highlights: [
      "Conducted financial awareness initiatives",
      "Helped individuals understand savings, budgeting, and basic finance",
      "Developed communication and social impact skills",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2">
            Work <span className="text-gold">Experience</span>
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
            <FadeIn key={exp.title} delay={0.15 + i * 0.12}>
              <div className="group h-full p-6 rounded-lg bg-charcoal/50 border border-gold/[0.08] hover:border-gold/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/[0.03]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/15 transition-colors duration-300">
                    <exp.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-off-white font-semibold text-base">
                      {exp.title}
                    </h3>
                    <p className="text-gold/80 text-sm">{exp.company}</p>
                  </div>
                </div>

                <span className="inline-block text-xs text-soft-grey tracking-wider mb-4 border border-gold/10 px-3 py-1 rounded-full">
                  {exp.period}
                </span>

                <ul className="space-y-2">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-1.5 flex-shrink-0" />
                      <span className="text-soft-grey text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
