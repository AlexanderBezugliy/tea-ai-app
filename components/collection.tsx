"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const teas = [
  {
    name: "Imperial Jade Dragon",
    description: "A rare green tea from Hangzhou's misty mountains, with delicate vegetal notes and a silken finish.",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Midnight Oolong",
    description: "Hand-rolled leaves from Taiwan's highest peaks, revealing layers of honey and orchid.",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Golden Yunnan",
    description: "Sun-dried black tea with whispers of cocoa and dried apricot, from ancient tea forests.",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "White Peony Reserve",
    description: "Delicate silver needles paired with tender leaves, offering notes of fresh hay and melon.",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Aged Pu-erh Royale",
    description: "Twenty-year aged pu-erh with complex earthen depths and a smooth, lingering sweetness.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Jasmine Pearl Estate",
    description: "Hand-rolled pearls scented seven times with night-blooming jasmine blossoms.",
    image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Darjeeling First Flush",
    description: "The champagne of teas, with bright muscatel notes from Himalayan spring harvests.",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Smoked Lapsang Reserve",
    description: "Pine-smoked leaves from Fujian's Wuyi Mountains, offering bold, campfire warmth.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
  },
]

function TeaCard({ tea, index }: { tea: typeof teas[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const xPos = (e.clientX - rect.left) / rect.width - 0.5
    const yPos = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPos)
    y.set(yPos)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative mb-6 aspect-[3/4] overflow-hidden bg-secondary"
      >
        <img
          src={tea.image}
          alt={tea.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ transform: "translateZ(50px)" }}
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/10" />
        {/* Border Glow Effect */}
        <div className="absolute inset-0 border border-primary/0 transition-colors duration-500 group-hover:border-primary/40" />
        {/* View Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center bg-background/90 py-3 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-foreground">View Details</span>
        </motion.div>
      </motion.div>
      <motion.h3
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        className="mb-2 font-serif text-xl font-light tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {tea.name}
      </motion.h3>
      <p className="font-sans text-sm leading-relaxed text-muted-foreground">
        {tea.description}
      </p>
    </motion.article>
  )
}

export function Collection() {
  return (
    <section id="collection" className="bg-background px-6 py-32 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 font-sans text-sm uppercase tracking-[0.3em] text-primary">
            Curated Selection
          </p>
          <h2 
            className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Collection
          </h2>
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>

        {/* Tea Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teas.map((tea, index) => (
            <TeaCard key={tea.name} tea={tea} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
