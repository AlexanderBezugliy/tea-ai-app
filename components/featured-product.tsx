"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Star, Leaf, Award, Clock } from "lucide-react"

const features = [
  { icon: Leaf, label: "Single Origin", value: "Darjeeling" },
  { icon: Award, label: "Grade", value: "FTGFOP1" },
  { icon: Clock, label: "Harvest", value: "First Flush" },
]

export function FeaturedProduct() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <section
      ref={containerRef}
      id="featured"
      className="relative overflow-hidden bg-background px-6 py-32 md:px-12 lg:px-24"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              top: `${5 + i * 5}%`,
              left: "-10%",
              right: "-10%",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 15 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-sans text-xs uppercase tracking-[0.3em] text-primary">
            Limited Edition
          </span>
          <h2
            className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Crown Jewel
          </h2>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Product Image with Parallax */}
          <motion.div
            style={{ y: imageY, rotate, scale }}
            className="relative aspect-square"
          >
            {/* Decorative Frame */}
            <motion.div
              className="absolute -inset-4 border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className="absolute -inset-8 border border-primary/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Main Image */}
            <div className="relative h-full w-full overflow-hidden bg-secondary group">
              <motion.img
                src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070&auto=format&fit=crop"
                alt="Premium Darjeeling First Flush Tea"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute right-6 top-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-center font-serif text-xs font-medium leading-tight">
                  2024<br />Harvest
                </span>
              </motion.div>
            </div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-primary/40"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>

          {/* Product Details */}
          <motion.div style={{ y: textY }} className="space-y-8">
            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                  <Star className="h-5 w-5 fill-primary text-primary" />
                </motion.div>
              ))}
              <span className="ml-2 font-sans text-sm text-muted-foreground">
                4.9 (127 reviews)
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl font-light text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Darjeeling First Flush<br />
              <span className="text-primary">Moonlight Reserve</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-base leading-relaxed text-muted-foreground"
            >
              Hand-plucked under the gentle glow of the Himalayan moon, this rare 
              first flush captures the essence of spring in every leaf. Notes of 
              muscatel grape and alpine flowers create an ethereal experience.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  className="group flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-border transition-colors duration-300 group-hover:border-primary group-hover:bg-primary/5">
                    <feature.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                      {feature.label}
                    </p>
                    <p className="font-serif text-sm text-foreground">{feature.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Price and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-end gap-8 pt-4"
            >
              <div>
                <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  Price per 50g
                </p>
                <p
                  className="font-serif text-4xl font-light text-foreground"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  $89
                </p>
              </div>
              
              <motion.button
                className="group relative overflow-hidden border border-primary bg-transparent px-10 py-4 font-sans text-xs uppercase tracking-[0.2em] text-primary transition-colors duration-500 hover:text-primary-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Add to Collection</span>
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </motion.div>

            {/* Limited Stock Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <motion.div
                className="h-2 w-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-sans text-sm text-muted-foreground">
                Only 23 boxes remaining from this harvest
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
