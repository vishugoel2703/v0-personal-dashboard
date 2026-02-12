"use client"

import { FadeIn, GoldDivider } from "./motion-wrapper"
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
    <section id="snapshot" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2">
            Quick <span className="text-gold">Snapshot</span>
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Key highlights at a glance
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={0.1 + i * 0.08}>
              <div className="group flex items-center gap-4 p-5 rounded-lg bg-charcoal/50 border border-gold/[0.08] hover:border-gold/20 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/15 transition-colors duration-300">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-soft-grey text-xs uppercase tracking-wider">
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
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
