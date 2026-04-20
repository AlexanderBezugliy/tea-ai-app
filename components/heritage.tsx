"use client";

import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function Heritage() {
    return (
        <section id="heritage" className="bg-secondary/30">
            <div className="mx-auto max-w-7xl">
                <ContainerScroll
                    titleComponent={
                        <div className="mb-20 text-center">
                            <p className="mb-4 font-sans text-sm uppercase tracking-[0.3em] text-primary">
                                Our Heritage
                            </p>
                            <h2
                                className="font-serif text-5xl font-light leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                A Legacy Steeped in <br />
                                <span className="italic text-primary">
                                    Excellence
                                </span>
                            </h2>
                        </div>
                    }
                >
                    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-secondary/50">
                        <img
                            src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2070&auto=format&fit=crop"
                            alt="Tea plantation at dawn"
                            className="h-full w-full object-cover grayscale-[20%] brightness-[0.85]"
                            draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Overlay Info */}
                        <div className="absolute bottom-10 left-10 text-left">
                            <p
                                className="font-serif text-6xl font-light text-primary md:text-8xl"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                130+
                            </p>
                            <p className="font-sans text-sm uppercase tracking-[0.3em] text-white/80">
                                Years of Mastery
                            </p>
                        </div>
                    </div>
                </ContainerScroll>

                {/* Story Section */}
                <div className="px-6 pb-32 md:px-12 lg:px-24">
                    <div className="mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8 text-center"
                        >
                            <div className="space-y-6 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
                                <p>
                                    Since 1892, Élysée Tea has journeyed to the
                                    world&apos;s most revered tea gardens,
                                    forging relationships with master
                                    cultivators across the misty highlands of
                                    Darjeeling, the ancient forests of Yunnan,
                                    and the volcanic slopes of Taiwan.
                                </p>
                                <p>
                                    Each leaf in our collection is hand-selected
                                    during optimal harvest windows, when the
                                    morning dew still clings to tender buds. Our
                                    artisans employ time-honored techniques
                                    passed down through generations—gentle
                                    withering under mountain breezes, precise
                                    oxidation in cedar-lined rooms, and patient
                                    aging in climate-controlled cellars.
                                </p>
                                <p>
                                    The result is not merely tea, but an
                                    invitation to pause, to reflect, and to
                                    savor the culmination of nature&apos;s
                                    finest work and human devotion.
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="mt-12"
                            >
                                <a
                                    href="#brewing"
                                    className="inline-flex items-center gap-3 font-sans text-sm uppercase tracking-[0.3em] text-primary transition-all duration-300 hover:gap-5 hover:text-foreground"
                                >
                                    <span>Discover the Art</span>
                                    <span className="text-xl">→</span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
