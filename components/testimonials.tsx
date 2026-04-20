"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Isabelle Moreau",
    title: "Tea Sommelier, Paris",
    quote: "The Imperial Jade Dragon is unlike any green tea I&apos;ve encountered in thirty years. The complexity of its terroir speaks to generations of cultivation mastery.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "James Chen",
    title: "Director, Hong Kong Tea Society",
    quote: "Élysée has redefined what premium tea can be. Their Aged Pu-erh Royale offers a meditation in every cup—earthy depths that reveal themselves over hours.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Elena Volkov",
    title: "Luxury Hospitality Consultant",
    quote: "We serve Élysée exclusively at our properties. The packaging, the ritual, the taste—every element speaks to discerning guests who expect only the finest.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Marcus Sterling",
    title: "Private Collection Curator",
    quote: "I&apos;ve sourced teas from every corner of the world. The transparency and provenance Élysée provides is unmatched—truly the Rolls-Royce of tea houses.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
]

function AnimatedCounter({ value }: { value: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    })
    return () => controls.stop()
  }, [count, value])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })
    return () => unsubscribe()
  }, [rounded])

  return <span>{displayValue}</span>
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="relative overflow-hidden bg-secondary/20 px-6 py-32 md:px-12 lg:px-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 font-sans text-sm uppercase tracking-[0.3em] text-primary">
            Testimonials
          </p>
          <h2
            className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Words of Appreciation
          </h2>
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            { value: 15000, label: "Happy Clients", suffix: "+" },
            { value: 42, label: "Countries Served", suffix: "" },
            { value: 130, label: "Years of Heritage", suffix: "+" },
            { value: 98, label: "Satisfaction Rate", suffix: "%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <p
                className="font-serif text-4xl font-light text-primary md:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Quote className="mx-auto mb-8 h-12 w-12 text-primary/30" strokeWidth={1} />
            
            <p
              className="font-serif text-2xl font-light leading-relaxed text-foreground md:text-3xl lg:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {testimonials[currentIndex].quote}
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div className="text-left">
                <p className="font-serif text-lg font-medium text-foreground" style={{ fontFamily: "var(--font-playfair)" }}>
                  {testimonials[currentIndex].name}
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="flex h-12 w-12 items-center justify-center border border-border transition-all duration-300 hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-6 bg-primary" : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="flex h-12 w-12 items-center justify-center border border-border transition-all duration-300 hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
