"use client"

import { motion } from "framer-motion"
import {
  StaggerContainer,
  StaggerItem,
  GoldDivider,
  FadeIn,
} from "./motion-wrapper"
import {
  GraduationCap,
  BarChart3,
  Briefcase,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"

const items = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "BBA & PGDM",
  },
  {
    icon: BarChart3,
    label: "Dashboards Built",
    value: "HR, Finance, Sales",
  },
  {
    icon: Briefcase,
    label: "Internships",
    value: "2 Completed",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ghaziabad, UP",
  },
  {
    icon: Mail,
    label: "Email",
    value: "vishugoel2703@gmail.com",
    href: "mailto:vishugoel2703@gmail.com",
  },
  {
    icon: Phone,
    label: "Contact",
    value: "9045246446",
    href: "tel:9045246446",
  },
]

export function Snapshot() {
  return (
    <section id="snapshot" className="py-24 px-6 bg-charcoal/20">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2 text-balance">
            Quick <span className="text-gold-gradient">Snapshot</span>
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Key highlights at a glance
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerDelay={0.08}
          delay={0.2}
        >
          {items.map((item) => (
            <StaggerItem key={item.label}>
              <motion.div
                whileHover={{
                  y: -4,
                  borderColor: "rgba(198, 167, 94, 0.25)",
                  transition: { duration: 0.3 },
                }}
                className="card-glow group flex items-center gap-4 p-5 rounded-xl bg-charcoal/50 border border-gold/[0.06] transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-shrink-0 w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/15 transition-colors duration-300"
                >
                  <item.icon size={20} />
                </motion.div>
                <div>
                  <p className="text-soft-grey text-[11px] uppercase tracking-wider font-medium">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-off-white text-sm font-medium hover:text-gold transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-off-white text-sm font-medium">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
