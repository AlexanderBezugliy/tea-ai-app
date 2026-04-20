"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Trophy, Medal, Crown } from "lucide-react"

const awards = [
  {
    icon: Trophy,
    year: "2024",
    title: "World Tea Championship",
    subtitle: "Gold Medal - Premium Category",
  },
  {
    icon: Award,
    year: "2023",
    title: "International Tea Masters",
    subtitle: "Best Single Origin Tea",
  },
  {
    icon: Medal,
    year: "2023",
    title: "European Tea Society",
    subtitle: "Excellence in Craftsmanship",
  },
  {
    icon: Crown,
    year: "2022",
    title: "Royal Tea Connoisseurs",
    subtitle: "Heritage Brand of the Year",
  },
]

const partners = [
  "The Ritz London",
  "Four Seasons",
  "Mandarin Oriental",
  "The Peninsula",
  "Claridge&apos;s",
  "The Savoy",
]

export function Awards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-secondary/30 px-6 py-32 md:px-12 lg:px-24"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 -top-32 h-64 w-64 rounded-full border border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full border border-primary/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-4 inline-block font-sans text-xs uppercase text-primary"
          >
            Recognition
          </motion.span>
          <h2
            className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Awards & Accolades
          </h2>
        </motion.div>

        {/* Awards Grid */}
        <div className="mb-24 grid grid-rows-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-full"
              style={{ perspective: 1000 }}
            >
              <div className="relative flex h-full flex-col overflow-hidden border border-border bg-background p-8 transition-colors duration-500 group-hover:border-primary/50">
                {/* Animated Corner Accents */}
                <motion.div
                  className="absolute left-0 top-0 h-8 w-px bg-primary"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: 32 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                />
                <motion.div
                  className="absolute left-0 top-0 h-px w-8 bg-primary"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 32 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 h-8 w-px bg-primary"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: 32 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 h-px w-8 bg-primary"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 32 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                />

                {/* Icon */}
                <motion.div
                  className="mb-6"
                  animate={{ rotateY: [0, 360] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                >
                  <award.icon
                    className="h-10 w-10 text-primary"
                    strokeWidth={1}
                  />
                </motion.div>

                {/* Year Badge */}
                <motion.span
                  className="mb-4 inline-block border border-primary/30 px-3 py-1 font-sans text-xs text-primary"
                  whileHover={{ scale: 1.1 }}
                >
                  {award.year}
                </motion.span>

                <div className="flex-grow">
                  <h3
                    className="mb-2 font-serif text-lg font-light text-foreground"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {award.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {award.subtitle}
                  </p>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Hotels - Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="mb-8 text-center">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Served at the World&apos;s Finest Hotels
            </span>
          </div>

          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary/30 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary/30 to-transparent" />

            {/* Scrolling Content */}
            <motion.div
              className="flex gap-16"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap font-serif text-2xl font-light text-foreground/40 transition-colors duration-300 hover:text-primary"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {partner}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
