"use client"

import { FadeIn, GoldDivider } from "./motion-wrapper"

const educationData = [
  {
    degree: "Post Graduate Diploma in Management",
    institution: "GL Bajaj Institute of Management and Research, Greater Noida",
    year: "2025 - 2027",
    score: "TGPA: 7.53",
    current: true,
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "IMS University Courses Campus, Ghaziabad",
    year: "2022 - 2025",
    score: "Percentage: 65%",
    current: false,
  },
  {
    degree: "Senior Secondary (XII) - Commerce with Maths",
    institution: "Dewan Public School, Hapur",
    year: "2020 - 2021",
    score: "Achieved: 94%",
    current: false,
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-charcoal/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-off-white text-center mb-2">
            <span className="text-gold">Education</span> Background
          </h2>
          <p className="text-soft-grey text-center text-sm mb-4">
            Academic journey and achievements
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GoldDivider className="mb-16" />
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 md:-translate-x-px" />

          {educationData.map((edu, i) => (
            <FadeIn
              key={edu.degree}
              delay={0.15 + i * 0.15}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-deep-black -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
                  )}
                </div>

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div className="p-5 rounded-lg bg-charcoal/60 border border-gold/[0.08] hover:border-gold/20 transition-all duration-300">
                    <span className="inline-block text-xs text-gold font-medium tracking-wider mb-2">
                      {edu.year}
                    </span>
                    <h3 className="text-off-white font-semibold text-base mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-soft-grey text-sm mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gold/80 text-sm font-medium">
                      {edu.score}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
