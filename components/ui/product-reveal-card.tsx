"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductRevealCardProps {
    name?: string;
    price?: string;
    originalPrice?: string;
    image?: string;
    description?: string;
    rating?: number;
    reviewCount?: number;
    onAdd?: () => void;
    onViewDetails?: () => void;
    enableAnimations?: boolean;
    className?: string;
}

export function ProductRevealCard({
    name = "Premium Wireless Headphones",
    price = "$199",
    originalPrice = "$299",
    image = "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop",
    description = "Experience studio-quality sound with advanced noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    rating = 4.8,
    reviewCount = 124,
    onAdd,
    onViewDetails,
    enableAnimations = true,
    className,
}: ProductRevealCardProps) {
    const shouldReduceMotion = useReducedMotion();
    const shouldAnimate = enableAnimations && !shouldReduceMotion;

    const containerVariants: Variants = {
        rest: {
            scale: 1,
            y: 0,
        },
        hover: shouldAnimate
            ? {
                  scale: 1.02,
                  y: -4,
                  transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                  },
              }
            : {},
    };

    const imageVariants: Variants = {
        rest: { scale: 1 },
        hover: { scale: 1.05 },
    };

    const overlayVariants: Variants = {
        rest: {
            y: "100%",
            opacity: 0,
        },
        hover: {
            y: "0%",
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.6,
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    };

    const contentVariants: Variants = {
        rest: {
            opacity: 0,
            y: 10,
        },
        hover: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
            },
        },
    };

    const buttonVariants_motion: Variants = {
        rest: { scale: 1, y: 0 },
        hover: shouldAnimate
            ? {
                  scale: 1.02,
                  y: -1,
                  transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                  },
              }
            : {},
        tap: shouldAnimate ? { scale: 0.98 } : {},
    };

    return (
        <motion.div
            data-slot="product-reveal-card"
            initial="rest"
            whileHover="hover"
            variants={containerVariants}
            onClick={onViewDetails}
            className={cn(
                "relative w-full rounded-2xl border border-border bg-card text-card-foreground overflow-hidden",
                "shadow-2xl shadow-black/20 cursor-pointer group",
                className,
            )}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <motion.img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover"
                    variants={imageVariants}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Price Tag (Floating) */}
                <div className="absolute bottom-4 left-4 z-10">
                    <div className="flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-md px-3 py-1.5 border border-border">
                        <span className="text-lg font-medium text-primary">
                            {price}
                        </span>
                        {originalPrice && (
                            <span className="text-sm text-muted-foreground line-through opacity-70">
                                {originalPrice}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    "w-3.5 h-3.5",
                                    i < Math.floor(rating)
                                        ? "text-primary fill-current"
                                        : "text-muted",
                                )}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground tracking-wider uppercase">
                        {rating} ({reviewCount})
                    </span>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                    <h3 className="text-xl font-serif tracking-tight text-foreground leading-tight">
                        {name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                        {description}
                    </p>
                </div>
            </div>

            {/* Reveal Overlay */}
            <motion.div
                variants={overlayVariants}
                className="absolute inset-0 z-30 bg-background/95 backdrop-blur-xl flex flex-col justify-end"
            >
                <div className="p-6 space-y-6">
                    {/* Product Description */}
                    <motion.div variants={contentVariants}>
                        <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                            Product Details
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        variants={contentVariants}
                        className="space-y-3"
                    >
                        <motion.div
                            variants={buttonVariants_motion}
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onAdd?.();
                                }}
                                className="w-full h-12 rounded-full bg-primary text-white hover:bg-primary/90 font-sans text-xs uppercase tracking-[0.2em]"
                            >
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Add to Basket
                            </Button>
                        </motion.div>

                        <motion.div
                            variants={buttonVariants_motion}
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Button
                                variant="outline"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onViewDetails?.();
                                }}
                                className="w-full h-12 rounded-full border-border bg-secondary/50 hover:bg-secondary/50 hover:text-[#d1a74c] text-foreground font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300"
                            >
                                View Details
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
