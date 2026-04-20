"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Mountain, Sun, Hand, Flame, Package, Truck } from "lucide-react"

const journeySteps = [
  {
    icon: Mountain,
    title: "Highland Gardens",
    description:
      "Our tea leaves flourish in mist-covered highlands at 2,000 meters, where pure mountain air and pristine soil create the perfect growing conditions.",
    image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Sun,
    title: "Harvest Season",
    description:
      "Skilled artisans hand-select only the finest two leaves and a bud during the optimal morning hours when essential oils reach their peak.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=2074&auto=format&fit=crop",
  },
  {
    icon: Hand,
    title: "Artisan Processing",
    description:
      "Master tea craftsmen apply centuries-old techniques, carefully withering, rolling, and oxidizing each batch to unlock complex flavors.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2080&auto=format&fit=crop",
  },
  {
    icon: Flame,
    title: "Precision Firing",
    description:
      "Traditional charcoal firing at exact temperatures seals in aromatic compounds and ensures the perfect moisture content for longevity.",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Package,
    title: "Curated Selection",
    description:
      "Our master tasters evaluate every batch through rigorous protocols, selecting only those that meet our exacting standards of excellence.",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Truck,
    title: "Swift Delivery",
    description:
      "Climate-controlled packaging preserves freshness as your tea journeys from our estates directly to your doorstep within days of curation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop",
  },
]

export function TeaJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={containerRef}
      id="journey"
      className="relative overflow-hidden bg-background px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 inline-block font-sans text-xs uppercase tracking-[0.3em] text-primary"
          >
            From Garden to Cup
          </motion.span>
          <h2
            className="mb-6 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Journey of Excellence
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-muted-foreground"
          >
            Every cup tells a story of dedication, tradition, and meticulous
            craftsmanship that spans generations.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:left-1/2 md:block">
            <motion.div
              className="w-full bg-primary"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-24 md:space-y-32">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`relative grid items-center gap-8 md:grid-cols-2 ${
                    isEven ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* Step Number Indicator */}
                  <motion.div
                    className="absolute left-6 top-0 z-20 hidden h-5 w-5 items-center justify-center rounded-full bg-primary md:left-1/2 md:-ml-2.5 md:flex"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <span className="font-sans text-[10px] font-medium text-primary-foreground">
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    className={`group relative aspect-[4/3] overflow-hidden md:[direction:ltr] ${
                      isEven ? "md:pr-16" : "md:pl-16"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-cover"
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Decorative Frame */}
                    <motion.div
                      className={`absolute ${
                        isEven ? "-right-4 -top-4" : "-left-4 -top-4"
                      } h-24 w-24 border border-primary/30`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`md:[direction:ltr] ${
                      isEven ? "md:pl-16" : "md:pr-16"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {/* Icon */}
                      <motion.div
                        className="mb-6 inline-flex h-14 w-14 items-center justify-center border border-border transition-colors duration-300 hover:border-primary hover:bg-primary/5"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon
                          className="h-6 w-6 text-primary"
                          strokeWidth={1.5}
                        />
                      </motion.div>

                      {/* Step Number Mobile */}
                      <span className="mb-3 block font-sans text-xs uppercase tracking-[0.2em] text-primary md:hidden">
                        Step {index + 1}
                      </span>

                      <h3
                        className="mb-4 font-serif text-2xl font-light text-foreground md:text-3xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {step.title}
                      </h3>

                      <p className="font-sans text-base leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>

                      {/* Animated Underline */}
                      <motion.div
                        className="mt-6 h-px w-0 bg-primary"
                        whileInView={{ width: 60 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
