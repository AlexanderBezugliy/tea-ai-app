"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { ProductModal } from "@/components/ui/product-modal";
import { ProductRevealCard } from "@/components/ui/product-reveal-card";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

export interface Tea {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    reviewCount?: number;
}

const teas: Tea[] = [
    {
        id: "jade-dragon",
        name: "Imperial Jade Dragon",
        description:
            "A rare green tea from Hangzhou's misty mountains, with delicate vegetal notes and a silken finish.",
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=800&auto=format&fit=crop",
        price: 45,
        reviewCount: 124,
    },
    {
        id: "midnight-oolong",
        name: "Midnight Oolong",
        description:
            "Hand-rolled leaves from Taiwan's highest peaks, revealing layers of honey and orchid.",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=800&auto=format&fit=crop",
        price: 58,
        reviewCount: 89,
    },
    {
        id: "golden-yunnan",
        name: "Golden Yunnan",
        description:
            "Sun-dried black tea with whispers of cocoa and dried apricot, from ancient tea forests.",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800&auto=format&fit=crop",
        price: 38,
        reviewCount: 56,
    },
    {
        id: "white-peony",
        name: "White Peony Reserve",
        description:
            "Delicate silver needles paired with tender leaves, offering notes of fresh hay and melon.",
        image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=800&auto=format&fit=crop",
        price: 52,
        reviewCount: 42,
    },
    {
        id: "aged-puerh",
        name: "Aged Pu-erh Royale",
        description:
            "Twenty-year aged pu-erh with complex earthen depths and a smooth, lingering sweetness.",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
        price: 120,
        reviewCount: 156,
    },
    {
        id: "jasmine-pearl",
        name: "Jasmine Pearl Estate",
        description:
            "Hand-rolled pearls scented seven times with night-blooming jasmine blossoms.",
        image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?q=80&w=800&auto=format&fit=crop",
        price: 42,
        reviewCount: 92,
    },
    {
        id: "darjeeling",
        name: "Darjeeling First Flush",
        description:
            "The champagne of teas, with bright muscatel notes from Himalayan spring harvests.",
        image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=800&auto=format&fit=crop",
        price: 65,
        reviewCount: 74,
    },
    {
        id: "lapsang",
        name: "Smoked Lapsang Reserve",
        description:
            "Pine-smoked leaves from Fujian's Wuyi Mountains, offering bold, campfire warmth.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
        price: 35,
        reviewCount: 38,
    },
];

export function Collection() {
    const [selectedProduct, setSelectedProduct] = useState<Tea | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addToCart, toggleCart } = useCart();

    const handleOpenModal = (tea: Tea) => {
        setSelectedProduct(tea);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section
            id="collection"
            className="bg-background px-6 py-32 md:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <p className="mb-4 font-sans text-sm uppercase tracking-[0.3em] text-primary">
                        Curated Selection
                    </p>
                    <h2
                        className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        The Collection
                    </h2>
                    <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {teas.map((tea, index) => (
                        <motion.div
                            key={tea.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProductRevealCard
                                name={tea.name}
                                description={tea.description}
                                image={tea.image}
                                price={`$${tea.price}.00`}
                                rating={4.9}
                                reviewCount={tea.reviewCount}
                                onAdd={() => {
                                    addToCart(tea, 1);
                                    toggleCart();
                                    toast.success(
                                        `${tea.name} added to basket`,
                                    );
                                }}
                                onViewDetails={() => handleOpenModal(tea)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}
