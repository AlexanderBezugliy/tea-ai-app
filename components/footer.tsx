"use client"

import { motion } from "framer-motion"

const footerLinks = {
  collection: [
    { name: "Green Teas", href: "#" },
    { name: "Black Teas", href: "#" },
    { name: "Oolong Teas", href: "#" },
    { name: "White Teas", href: "#" },
  ],
  company: [
    { name: "Our Heritage", href: "#" },
    { name: "Tea Gardens", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Brewing Guide", href: "#brewing" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Contact", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-secondary/20 px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-5"
        >
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 
              className="font-serif text-2xl font-light tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Élysée Tea
            </h3>
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
              Purveyors of the world&apos;s finest artisanal teas since 1892. 
              Each cup tells a story of heritage, craftsmanship, and devotion to excellence.
            </p>
            <div className="mt-6 flex gap-4">
              {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-foreground">
              Collection
            </h4>
            <ul className="space-y-3">
              {footerLinks.collection.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-foreground">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
          <p className="font-sans text-xs text-muted-foreground">
            © 2024 Élysée Tea. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-xs text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
