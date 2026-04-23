"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Check, Loader2 } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("success")
    setTimeout(() => {
      setStatus("idle")
      setEmail("")
    }, 3000)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-background px-6 py-32 md:px-12 lg:px-24">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center border border-primary/30"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="font-serif text-3xl text-primary"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              T
            </motion.span>
          </motion.div>

          <p className="mb-4 font-sans text-sm uppercase tracking-[0.3em] text-primary">
            Stay Connected
          </p>
          
          <h2
            className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Join Our Inner Circle
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
            Receive exclusive access to limited releases, brewing masterclasses, 
            and the stories behind our most treasured teas.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-12 max-w-md"
          >
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status !== "idle"}
                className="w-full border border-border bg-transparent px-6 py-4 pr-32 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary px-6 py-2 font-sans text-xs uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-primary/90 disabled:opacity-100"
              >
                {status === "idle" && (
                  <span className="flex items-center gap-2">
                    Join <ArrowRight className="h-3 w-3" />
                  </span>
                )}
                {status === "loading" && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                {status === "success" && (
                  <Check className="h-4 w-4" />
                )}
              </motion.button>
            </div>
          </motion.form>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-sans text-sm text-primary"
            >
              Welcome to Élysée. Check your inbox for a special welcome gift.
            </motion.p>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 font-sans text-xs text-muted-foreground/60"
          >
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </motion.p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid gap-8 md:grid-cols-3"
        >
          {[
            {
              title: "Early Access",
              description: "Be first to discover limited edition releases and seasonal collections.",
            },
            {
              title: "Exclusive Content",
              description: "Brewing tutorials, origin stories, and behind-the-scenes from our tea gardens.",
            },
            {
              title: "Member Benefits",
              description: "Special pricing, complimentary samples, and invitations to private tastings.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="text-center"
            >
              <h3
                className="mb-2 font-serif text-lg font-light text-foreground"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {feature.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
