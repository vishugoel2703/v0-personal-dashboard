"use client"

import { motion } from "framer-motion"
import { FadeIn, GoldDivider, Magnetic } from "./motion-wrapper"
import { Mail, Phone, Linkedin, ExternalLink, MapPin, ArrowUpRight } from "lucide-react"

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "vishugoel2703@gmail.com",
    href: "mailto:vishugoel2703@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9045246446",
    href: "tel:+919045246446",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ghaziabad, Uttar Pradesh",
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white mb-2 text-balance">
            {"Let's"} <span className="text-gold-gradient">Connect</span>
          </h2>
          <p className="text-soft-grey text-sm mb-4">
            Open to internships and entry-level roles in Finance, Analytics,
            Strategy, and Operations
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        {/* Contact cards */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {contactItems.map((item) => {
              const content = (
                <motion.div
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(198, 167, 94, 0.25)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="card-glow group flex flex-col items-center gap-3 p-5 rounded-xl bg-charcoal/50 border border-gold/[0.06]"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/15 transition-colors duration-300">
                    <item.icon size={18} />
                  </div>
                  <div className="text-center">
                    <p className="text-[11px] text-soft-grey/70 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-off-white text-sm font-medium group-hover:text-gold transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              )

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>
        </FadeIn>

        {/* LinkedIn CTA */}
        <FadeIn delay={0.3}>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/vishu-goel-1910a3275"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 bg-gold/90 text-deep-black text-sm font-semibold rounded-xl hover:bg-gold transition-all duration-300"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
              <ExternalLink size={14} />
            </a>
          </Magnetic>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={0.4}>
          <div className="mt-20 pt-8 border-t border-gold/[0.08]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-soft-grey/60 text-xs">
                Designed & crafted by Vishu Goel
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:vishugoel2703@gmail.com"
                  className="text-soft-grey/40 hover:text-gold transition-colors duration-300"
                  aria-label="Email Vishu Goel"
                >
                  <Mail size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vishu-goel-1910a3275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-grey/40 hover:text-gold transition-colors duration-300"
                  aria-label="Vishu Goel LinkedIn profile"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="tel:+919045246446"
                  className="text-soft-grey/40 hover:text-gold transition-colors duration-300"
                  aria-label="Call Vishu Goel"
                >
                  <Phone size={14} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
