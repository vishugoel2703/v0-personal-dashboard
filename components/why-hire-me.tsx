"use client"

import { FadeIn, GoldDivider } from "./motion-wrapper"
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
  },
  {
    icon: Briefcase,
    title: "Internship-Backed Exposure",
    description:
      "Real-world experience in finance operations, compliance, and financial literacy through two meaningful internship engagements.",
  },
  {
    icon: BookOpen,
    title: "Strong Academic Foundation",
    description:
      "Solid grounding in business administration and management studies with a 94% score at senior secondary level.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Development Capability",
    description:
      "Proven ability to design and build data-driven dashboards for HR, Finance, and Sales analytics using modern tools.",
  },
  {
    icon: Zap,
    title: "Quick Learner with Execution Focus",
    description:
      "Fast at picking up new concepts and tools, with a consistent focus on delivering accurate, timely results.",
  },
]

export function WhyHireMe() {
  return (
    <section id="why-hire" className="py-24 px-6 bg-charcoal/30">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2">
            Why <span className="text-gold">Hire Me</span>
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Tangible value I bring to your organization
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.title} delay={0.15 + i * 0.1}>
              <div className="group h-full p-5 rounded-lg bg-deep-black/60 border border-gold/[0.08] hover:border-gold/20 transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/15 transition-colors duration-300">
                  <reason.icon size={20} />
                </div>
                <h3 className="text-off-white font-semibold text-sm mb-2">
                  {reason.title}
                </h3>
                <p className="text-soft-grey text-xs leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
