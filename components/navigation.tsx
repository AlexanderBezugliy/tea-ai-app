"use client";

import {
    motion,
    useScroll,
    useMotionValueEvent,
    AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
    { name: "Collection", href: "#collection" },
    { name: "Heritage", href: "#heritage" },
    { name: "Brewing", href: "#brewing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const { cartCount, toggleCart } = useCart();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? "bg-background/90 backdrop-blur-md border-b border-border/20"
                        : "bg-transparent"
                }`}
            >
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="relative z-10"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span
                            className="font-serif text-xl font-light tracking-tight text-foreground md:text-2xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Élysée Tea
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-10 md:flex">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * index,
                                }}
                                className="group relative font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-6 md:flex">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                        >
                            <Search className="h-5 w-5" strokeWidth={1.5} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleCart}
                            className="relative p-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                        >
                            <ShoppingBag
                                className="h-5 w-5"
                                strokeWidth={1.5}
                            />
                            {cartCount > 0 && (
                                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                                    {cartCount}
                                </span>
                            )}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="relative z-10 -m-2 p-2 md:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <X
                                className="h-6 w-6 text-foreground"
                                strokeWidth={1.5}
                            />
                        ) : (
                            <Menu
                                className="h-6 w-6 text-foreground"
                                strokeWidth={1.5}
                            />
                        )}
                    </motion.button>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg md:hidden"
                    >
                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex h-full flex-col items-center justify-center gap-8"
                        >
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.1 * index,
                                    }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-serif text-3xl font-light text-foreground transition-colors duration-300 hover:text-primary"
                                    style={{
                                        fontFamily: "var(--font-playfair)",
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 flex gap-8"
                            >
                                <button className="p-4">
                                    <Search
                                        className="h-6 w-6 text-muted-foreground"
                                        strokeWidth={1.5}
                                    />
                                </button>
                                <button
                                    className="relative p-4"
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        toggleCart();
                                    }}
                                >
                                    <ShoppingBag
                                        className="h-6 w-6 text-muted-foreground"
                                        strokeWidth={1.5}
                                    />
                                    {cartCount > 0 && (
                                        <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                                            {cartCount}
                                        </span>
                                    )}
                                </button>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
