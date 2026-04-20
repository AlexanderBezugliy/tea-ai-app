"use client";

import { motion } from "framer-motion";
import {
    Thermometer,
    Clock,
    Droplets,
    Leaf,
    Scale,
    Beaker,
} from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const brewingSteps = [
    {
        icon: Droplets,
        title: "Water Quality",
        description:
            "Use filtered spring water for the purest expression of flavor. Avoid distilled or heavily mineralized water.",
    },
    {
        icon: Thermometer,
        title: "Temperature",
        description:
            "Green teas: 70-80°C. Oolong: 85-90°C. Black teas: 90-95°C. White teas: 75-85°C.",
    },
    {
        icon: Leaf,
        title: "Leaf Quantity",
        description:
            "Use 2-3 grams of loose leaf per 200ml of water. Adjust to taste for subsequent infusions.",
    },
    {
        icon: Clock,
        title: "Steeping Time",
        description:
            "First infusion: 2-3 minutes. Subsequent infusions: add 30 seconds. Premium teas offer 4-6 infusions.",
    },
];

export function BrewingGuide() {
    return (
        <section
            id="brewing"
            className="bg-background px-6 py-24 md:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-4 font-sans text-sm uppercase tracking-[0.3em] text-primary">
                        The Ritual
                    </p>
                    <h2
                        className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Brewing Mastery
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
                        The perfect cup requires attention to detail. Follow
                        these principles to unlock the full potential of each
                        leaf.
                    </p>
                    <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                </motion.div>

                {/* Brewing Steps Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {brewingSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group text-center"
                        >
                            <motion.div
                                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-border transition-colors duration-300 group-hover:border-primary group-hover:bg-primary/5"
                                whileHover={{ rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <step.icon
                                    className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110"
                                    strokeWidth={1.5}
                                />
                            </motion.div>
                            <h3
                                className="mb-3 font-serif text-xl font-light text-foreground"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                {step.title}
                            </h3>
                            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Temperature Reference */}
                <div className="mt-16">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                type: "Green Tea",
                                temp: "70-80°C",
                                time: "2-3 min",
                                color: "green" as const,
                                amount: "3g",
                                vessel: "Glassware",
                                notes: "Refreshing & Vegetal",
                            },
                            {
                                type: "White Tea",
                                temp: "75-85°C",
                                time: "3-4 min",
                                color: "blue" as const,
                                amount: "4g",
                                vessel: "Ceramic",
                                notes: "Floral & Delicate",
                            },
                            {
                                type: "Oolong Tea",
                                temp: "85-90°C",
                                time: "3-4 min",
                                color: "orange" as const,
                                amount: "5g",
                                vessel: "Gaiwan",
                                notes: "Complex & Orchid",
                            },
                            {
                                type: "Black Tea",
                                temp: "90-95°C",
                                time: "3-5 min",
                                color: "purple" as const,
                                amount: "3g",
                                vessel: "Yixing Clay",
                                notes: "Malty & Robust",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.type}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 * index,
                                }}
                            >
                                <GlowCard
                                    glowColor={item.color}
                                    customSize
                                    className="flex w-full flex-col items-center justify-between p-7 min-h-[320px]"
                                >
                                    <div className="text-center">
                                        <p className="mb-1 font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">
                                            {item.type}
                                        </p>
                                        <p
                                            className="font-serif text-3xl font-light text-primary"
                                            style={{
                                                fontFamily:
                                                    "var(--font-playfair)",
                                            }}
                                        >
                                            {item.temp}
                                        </p>
                                    </div>

                                    <div className="w-full space-y-4 border-y border-white/10 py-6">
                                        <div className="flex items-center justify-between gap-6 text-xs">
                                            <div className="flex items-center gap-2.5 text-muted-foreground shrink-0">
                                                <Clock className="h-4 w-4 text-primary/60" />
                                                <span className="uppercase tracking-widest">
                                                    Steep
                                                </span>
                                            </div>
                                            <span className="font-medium text-foreground text-right">
                                                {item.time}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between gap-6 text-xs">
                                            <div className="flex items-center gap-2.5 text-muted-foreground shrink-0">
                                                <Scale className="h-4 w-4 text-primary/60" />
                                                <span className="uppercase tracking-widest">
                                                    Amount
                                                </span>
                                            </div>
                                            <span className="font-medium text-foreground text-right">
                                                {item.amount}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between gap-6 text-xs">
                                            <div className="flex items-center gap-2.5 text-muted-foreground shrink-0">
                                                <Beaker className="h-4 w-4 text-primary/60" />
                                                <span className="uppercase tracking-widest">
                                                    Vessel
                                                </span>
                                            </div>
                                            <span className="font-medium text-foreground text-right">
                                                {item.vessel}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-center font-serif text-[12px] italic text-primary/80">
                                        {item.notes}
                                    </p>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
