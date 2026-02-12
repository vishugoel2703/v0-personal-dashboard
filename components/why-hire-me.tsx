"use client"

import { motion } from "framer-motion"
import { FadeIn, GoldDivider, StaggerContainer, StaggerItem } from "./motion-wrapper"
import {
  Brain,
  Briefcase,
  BookOpen,
  LayoutDashboard,
  Zap,
} from "lucide-react"

const reasons = [
  {
    icon: Brain,
    title: "Structured & Analytical Mindset",
    description:
      "Approaches problems with clear frameworks, breaking down complexity into actionable insights for effective decision-making.",
    number: "01",
  },
  {
    icon: Briefcase,
    title: "Internship-Backed Exposure",
    description:
      "Real-world experience in finance operations, compliance, and financial literacy through two meaningful internship engagements.",
    number: "02",
  },
  {
    icon: BookOpen,
    title: "Strong Academic Foundation",
    description:
      "Solid grounding in business administration and management studies with a 94% score at senior secondary level.",
    number: "03",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Development Capability",
    description:
      "Proven ability to design and build data-driven dashboards for HR, Finance, and Sales analytics using modern tools.",
    number: "04",
  },
  {
    icon: Zap,
    title: "Quick Learner with Execution Focus",
    description:
      "Fast at picking up new concepts and tools, with a consistent focus on delivering accurate, timely results.",
    number: "05",
  },
]

export function WhyHireMe() {
  return (
    <section id="why-hire" className="py-24 px-6 bg-charcoal/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2 text-balance">
            Why <span className="text-gold-gradient">Hire Me</span>
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Tangible value I bring to your organization
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.1}
          delay={0.2}
        >
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <motion.div
                whileHover={{
                  y: -5,
                  borderColor: "rgba(198, 167, 94, 0.25)",
                }}
                transition={{ duration: 0.3 }}
                className="card-glow group h-full p-6 rounded-xl bg-deep-black/60 border border-gold/[0.06] relative overflow-hidden"
              >
                {/* Large faded number */}
                <span className="absolute top-3 right-4 text-4xl font-bold text-gold/[0.05] font-serif select-none">
                  {reason.number}
                </span>

                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/15 transition-colors duration-300"
                >
                  <reason.icon size={20} />
                </motion.div>
                <h3 className="text-off-white font-semibold text-sm mb-2">
                  {reason.title}
                </h3>
                <p className="text-soft-grey text-xs leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
