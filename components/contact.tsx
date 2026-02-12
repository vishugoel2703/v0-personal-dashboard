"use client"

import { FadeIn, GoldDivider } from "./motion-wrapper"
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white mb-2">
            {"Let's"} <span className="text-gold">Connect</span>
          </h2>
          <p className="text-soft-grey text-sm mb-4">
            Open to internships and entry-level roles in Finance, Analytics,
            Strategy, and Operations
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a
              href="mailto:vishugoel2703@gmail.com"
              className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-charcoal/50 border border-gold/[0.08] hover:border-gold/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={18} className="text-gold" />
              <span className="text-off-white text-sm">
                vishugoel2703@gmail.com
              </span>
            </a>

            <a
              href="tel:9045246446"
              className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-charcoal/50 border border-gold/[0.08] hover:border-gold/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={18} className="text-gold" />
              <span className="text-off-white text-sm">9045246446</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="https://www.linkedin.com/in/vishu-goel-1910a3275"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold/90 text-deep-black text-sm font-semibold rounded-lg hover:bg-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
            <ExternalLink size={14} />
          </a>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-16 pt-8 border-t border-gold/10">
            <p className="text-soft-grey text-xs">
              Designed & crafted by Vishu Goel
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
