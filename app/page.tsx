"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Snapshot } from "@/components/snapshot"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { WhyHireMe } from "@/components/why-hire-me"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black grain-overlay">
      <Navbar />
      <Hero />
      <About />
      <Snapshot />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <WhyHireMe />
      <Contact />
    </main>
  )
}
