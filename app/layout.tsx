import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export const metadata: Metadata = {
    title: "Élysée Tea — Artisanal Luxury Teas",
    description:
        "Discover the world's most exquisite artisanal teas, meticulously sourced from legendary estates and crafted for the discerning connoisseur.",
    generator: "v0.app",
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${playfair.variable} bg-background`}
            suppressHydrationWarning
        >
            <body className="font-sans antialiased" suppressHydrationWarning>
                <CartProvider>
                    {children}
                    <CartDrawer />
                    {process.env.NODE_ENV === "production" && <Analytics />}
                </CartProvider>
            </body>
        </html>
    );
}
