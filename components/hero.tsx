"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ShaderBackground } from "@/components/ui/background-paper-shaders"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* 3D Shader Background */}
      <ShaderBackground color1="#D4AF37" color2="#000000" speed={0.25} />

      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2121&auto=format&fit=crop"
          alt="Premium tea cup with steam rising"
          className="h-full w-full object-cover mix-blend-overlay opacity-40"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/30" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center pointer-events-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-sans text-sm uppercase tracking-[0.3em] text-primary"
        >
          Established 1892
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl font-light leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="block">The Art of</span>
          <span className="mt-2 block italic text-primary">Exquisite Tea</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-xl font-sans text-lg font-light leading-relaxed text-muted-foreground md:text-xl"
        >
          Meticulously sourced from the world&apos;s most legendary estates, 
          crafted for those who understand true refinement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <a
            href="#collection"
            className="group inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] text-primary transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white"
          >
            Explore Collection
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
