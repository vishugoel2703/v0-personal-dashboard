"use client"

import { motion } from "framer-motion"
import { FadeIn, GoldDivider, StaggerContainer, StaggerItem } from "./motion-wrapper"
import { BarChart3, TrendingUp, PieChart, Bot, ArrowUpRight } from "lucide-react"

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
    tools: ["Excel", "Data Viz", "Analytics"],
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
    tools: ["Power BI", "Financial Modeling", "KPIs"],
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
    tools: ["Dashboards", "Sales Analytics", "Reporting"],
  },
  {
    title: "AI-Driven Recruitment Interface",
    icon: Bot,
    description: "Responsive professional dashboard using AI-assisted rapid prototyping",
    points: [
      "Built a responsive professional dashboard using Vercel v0",
      "Demonstrated how AI can assist in rapid prototyping and building projects",
      "Showcased modern web development with AI tools",
    ],
    tools: ["Vercel v0", "AI Prototyping", "Next.js"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-charcoal/30">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2 text-balance">
            <span className="text-gold-gradient">Projects</span>
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Hands-on data visualization, analytics, and AI-assisted work
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.12}
          delay={0.2}
        >
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{
                  y: -6,
                  borderColor: "rgba(198, 167, 94, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="card-glow group h-full rounded-xl bg-charcoal/60 border border-gold/[0.06] overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/15 transition-colors duration-300"
                    >
                      <project.icon size={24} />
                    </motion.div>
                    <ArrowUpRight
                      size={16}
                      className="text-gold/20 group-hover:text-gold/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                  <h3 className="text-gold font-semibold text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="text-soft-grey/80 text-xs mb-5">
                    {project.description}
                  </p>

                  <ul className="space-y-2.5 mb-5">
                    {project.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 flex-shrink-0"
                        />
                        <span className="text-soft-grey text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gold/[0.06]">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] text-gold/70 px-2.5 py-1 rounded-full border border-gold/10 bg-gold/[0.04] font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
