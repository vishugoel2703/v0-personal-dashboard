"use client"

import { FadeIn, ScaleIn, GoldDivider } from "./motion-wrapper"
import { BarChart3, TrendingUp, PieChart } from "lucide-react"

const projects = [
  {
    title: "HR Dashboard",
    icon: BarChart3,
    description: "Workforce analytics and employee metrics visualization",
    points: [
      "Designed workforce analytics dashboard",
      "Visualized employee metrics and HR KPIs",
      "Used structured data presentation methods",
    ],
  },
  {
    title: "Finance Dashboard",
    icon: TrendingUp,
    description: "Financial performance visualization and analysis",
    points: [
      "Built financial performance visualization dashboard",
      "Analyzed cost, revenue, and financial trends",
      "Focused on decision-support metrics",
    ],
  },
  {
    title: "Sales Dashboard",
    icon: PieChart,
    description: "Sales performance tracking and growth insights",
    points: [
      "Developed sales performance tracking dashboard",
      "Tracked targets vs achievements",
      "Created data-driven insights for growth",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-charcoal/30">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2">
            Dashboard <span className="text-gold">Projects</span>
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Hands-on data visualization and analytics work
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScaleIn key={project.title} delay={0.15 + i * 0.12}>
              <div className="group h-full p-6 rounded-lg bg-charcoal/60 border border-gold/[0.08] hover:border-gold/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/[0.04]">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                  <project.icon size={24} />
                </div>

                <h3 className="text-gold font-semibold text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-soft-grey text-xs mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2">
                  {project.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 flex-shrink-0" />
                      <span className="text-soft-grey text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  )
}
