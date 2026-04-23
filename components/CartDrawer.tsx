"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CartDrawer() {
    const {
        isCartOpen,
        toggleCart,
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartSubtotal,
    } = useCart();

    // Lock body scroll when cart is open
    React.useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isCartOpen]);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 200,
                        }}
                        className="fixed right-0 top-0 z-[101] h-full w-full max-w-md border-l border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="h-5 w-5 text-primary" />
                                <h2 className="font-serif text-xl font-light tracking-wide text-foreground">
                                    Shopping Bag
                                </h2>
                            </div>
                            <button
                                onClick={toggleCart}
                                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                            {cartItems.length === 0 ? (
                                <div className="flex h-full flex-col items-center justify-center text-center">
                                    <div className="mb-6 rounded-full bg-white/5 p-6">
                                        <ShoppingBag className="h-12 w-12 text-muted-foreground/40" />
                                    </div>
                                    <h3 className="mb-2 font-serif text-xl font-light text-foreground">
                                        Your bag is empty
                                    </h3>
                                    <p className="mb-8 max-w-[240px] text-sm text-muted-foreground">
                                        Discover our premium selection of
                                        artisanal teas and find your next
                                        favorite.
                                    </p>
                                    <Button
                                        onClick={toggleCart}
                                        variant="outline"
                                        className="rounded-full border-white/10 px-8 hover:bg-white/5"
                                    >
                                        Continue Shopping
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {cartItems.map((item) => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.95,
                                                transition: { duration: 0.2 },
                                            }}
                                            key={item.id}
                                            className="flex gap-4"
                                        >
                                            {/* Thumbnail */}
                                            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            {/* Item Info */}
                                            <div className="flex flex-1 flex-col justify-between py-1">
                                                <div>
                                                    <div className="flex justify-between gap-2">
                                                        <h4 className="font-sans text-sm font-medium text-foreground">
                                                            {item.name}
                                                        </h4>
                                                        <button
                                                            onClick={() =>
                                                                removeFromCart(
                                                                    item.id,
                                                                )
                                                            }
                                                            className="-m-2 p-2 text-muted-foreground transition-colors hover:text-destructive"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                    <p className="mt-1 font-sans text-sm text-primary/90">
                                                        ${item.price}.00
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5">
                                                        <button
                                                            onClick={() =>
                                                                decreaseQuantity(
                                                                    item.id,
                                                                )
                                                            }
                                                            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                                                        >
                                                            <Minus className="h-3.5 w-3.5" />
                                                        </button>
                                                        <span className="min-w-[1.5rem] text-center text-xs font-medium">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                increaseQuantity(
                                                                    item.id,
                                                                )
                                                            }
                                                            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                                                        >
                                                            <Plus className="h-3.5 w-3.5" />
                                                        </button>
                                                    </div>
                                                    <p className="font-sans text-sm font-medium text-foreground">
                                                        $
                                                        {(
                                                            item.price *
                                                            item.quantity
                                                        ).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="border-t border-white/5 bg-zinc-900/50 p-6 backdrop-blur-md">
                                <div className="mb-6 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">
                                            Subtotal
                                        </span>
                                        <span className="text-foreground">
                                            ${cartSubtotal.toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">
                                            Shipping
                                        </span>
                                        <span className="text-foreground uppercase text-[10px] tracking-widest">
                                            Calculated at checkout
                                        </span>
                                    </div>
                                    <div className="pt-4 flex justify-between border-t border-white/5">
                                        <span className="font-serif text-lg font-light text-foreground">
                                            Total
                                        </span>
                                        <span className="font-sans text-xl font-medium text-primary">
                                            ${cartSubtotal.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <Button className="group h-14 w-full rounded-full bg-primary font-sans text-sm uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.02] active:scale-[0.98]">
                                    Checkout
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
