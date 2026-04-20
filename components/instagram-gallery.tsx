"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState } from "react"
import { Instagram, Heart, MessageCircle } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500&auto=format&fit=crop",
    likes: "2.4k",
    comments: "86",
  },
  {
    src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=500&auto=format&fit=crop",
    likes: "3.1k",
    comments: "124",
  },
  {
    src: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=500&auto=format&fit=crop",
    likes: "1.9k",
    comments: "67",
  },
  {
    src: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=500&auto=format&fit=crop",
    likes: "4.2k",
    comments: "198",
  },
  {
    src: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=500&auto=format&fit=crop",
    likes: "2.8k",
    comments: "92",
  },
  {
    src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=500&auto=format&fit=crop",
    likes: "5.1k",
    comments: "234",
  },
]

function GalleryItem({ image, index }: { image: typeof galleryImages[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const xPos = (e.clientX - rect.left - rect.width / 2) / 10
    const yPos = (e.clientY - rect.top - rect.height / 2) / 10
    x.set(xPos)
    y.set(yPos)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-square cursor-pointer overflow-hidden"
      style={{ perspective: 800 }}
    >
      <motion.div
        className="h-full w-full"
        style={{
          rotateX: mouseYSpring,
          rotateY: mouseXSpring,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={image.src}
          alt="Tea lifestyle"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-6">
            <motion.div
              className="flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Heart className="h-5 w-5 text-primary" fill="currentColor" />
              <span className="font-sans text-sm text-foreground">{image.likes}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="font-sans text-sm text-foreground">{image.comments}</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function InstagramGallery() {
  return (
    <section className="relative overflow-hidden bg-secondary/20 px-6 py-32 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <Instagram className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-primary">
              @lumieretea
            </span>
          </motion.div>

          <h2
            className="mb-6 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Join Our Community
          </h2>

          <p className="mx-auto max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
            Share your tea moments with us. Tag your photos with #LumiereTea
            for a chance to be featured.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} image={image} index={index} />
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-border px-8 py-4 transition-colors duration-300 hover:border-primary hover:bg-primary/5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Instagram className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-foreground">
              Follow Us on Instagram
            </span>
          </motion.a>
        </motion.div>

        {/* Floating Hashtags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {["#LumiereTea", "#TeaMoments", "#TeaTime", "#TeaLovers", "#LuxuryTea"].map(
            (tag, index) => (
              <motion.span
                key={tag}
                className="font-sans text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {tag}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
