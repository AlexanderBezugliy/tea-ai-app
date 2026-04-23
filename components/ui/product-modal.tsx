"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tea } from "@/components/collection";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

interface ProductModalProps {
    product: Tea | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    const { addToCart, toggleCart } = useCart();

    // Reset quantity when modal opens for a new product
    React.useEffect(() => {
        if (isOpen) {
            setQuantity(1);
            setIsAdding(false);
        }
    }, [isOpen, product]);

    if (!product) return null;

    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

    const handleAddToCart = () => {
        if (product) {
            setIsAdding(true);
            addToCart(product, quantity);

            // Show feedback for 0.8s then open drawer and close modal
            setTimeout(() => {
                onClose();
                setTimeout(() => {
                    toggleCart();
                }, 300);
            }, 800);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[95vw] h-[90vh] md:h-[750px] lg:h-[800px] overflow-hidden border-white/10 bg-zinc-950/90 p-0 text-foreground backdrop-blur-xl sm:max-w-[90vw] lg:max-w-7xl sm:rounded-3xl gap-0">
                <DialogTitle className="sr-only">{product.name}</DialogTitle>

                <div className="flex flex-col md:flex-row h-full w-full overflow-hidden">
                    {/* Image Column */}
                    <div className="relative h-[35%] md:h-full md:w-1/2 shrink-0 overflow-hidden bg-zinc-900">
                        <motion.img
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                    </div>

                    {/* Details Column */}
                    <div className="flex flex-col h-[65%] md:h-full md:w-1/2 bg-zinc-950/50 overflow-hidden">
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12 lg:p-20 pb-4">
                            <div className="min-h-full flex flex-col justify-center py-4">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <p className="mb-2 font-sans text-xs uppercase tracking-[0.3em] text-primary">
                                        Premium Selection
                                    </p>
                                    <h2
                                        className="mb-4 font-serif text-3xl font-light tracking-tight md:text-4xl"
                                        style={{
                                            fontFamily: "var(--font-playfair)",
                                        }}
                                    >
                                        {product.name}
                                    </h2>
                                    <p className="mb-8 font-sans text-2xl font-light text-primary/90">
                                        ${product.price}.00
                                    </p>
                                    <div className="mb-8 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                                    <p className="mb-8 font-sans text-base leading-relaxed text-muted-foreground">
                                        {product.description}
                                    </p>
                                </motion.div>

                                {/* Quantity Selector */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="mb-10"
                                >
                                    <p className="mb-4 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                                        Quantity
                                    </p>
                                    <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 px-2">
                                        <button
                                            onClick={handleDecrement}
                                            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-white/10 hover:text-foreground disabled:opacity-30"
                                            disabled={quantity <= 1}
                                        >
                                            <Minus className="h-5 w-5" />
                                        </button>
                                        <span className="min-w-[2.5rem] text-center font-sans text-xl font-light">
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={handleIncrement}
                                            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-white/10 hover:text-foreground"
                                        >
                                            <Plus className="h-5 w-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Action Button (Sticky Footer) */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="p-6 md:p-12 lg:p-16 pt-2 pb-6 border-t border-white/5 bg-zinc-950/80 backdrop-blur-md shrink-0"
                        >
                            <Button
                                onClick={handleAddToCart}
                                disabled={isAdding}
                                className="group relative h-14 w-full overflow-hidden rounded-full bg-primary font-sans text-sm uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-100"
                            >
                                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)] opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                                <AnimatePresence mode="wait">
                                    {isAdding ? (
                                        <motion.span
                                            key="added"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className="relative flex items-center justify-center gap-3"
                                        >
                                            <Check className="h-4 w-4" />
                                            Added to Basket!
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="add"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className="relative flex items-center justify-center gap-3"
                                        >
                                            <ShoppingBag className="h-4 w-4" />
                                            Add to Basket — $
                                            {(product.price * quantity).toFixed(
                                                2,
                                            )}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
