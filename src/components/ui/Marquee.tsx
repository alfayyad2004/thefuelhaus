"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    children?: React.ReactNode;
}

export default function Marquee({ className, reverse, children }: MarqueeProps) {
    return (
        <div className={cn("flex overflow-hidden whitespace-nowrap select-none", className)}>
            <motion.div
                initial={{ x: reverse ? "-100%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-100%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                className="flex min-w-full shrink-0 items-center justify-around gap-10"
            >
                {children}
            </motion.div>
            <motion.div
                initial={{ x: reverse ? "-100%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-100%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                className="flex min-w-full shrink-0 items-center justify-around gap-10"
            >
                {children}
            </motion.div>
        </div>
    );
}

export function HeroBanner() {
    return (
        <div className="w-full bg-secondary/90 py-3 border-y border-white/10 backdrop-blur-md z-20">
            <Marquee className="gap-10" reverse={false}>
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8">
                        <span className="text-xl md:text-2xl font-sport font-bold italic uppercase tracking-widest text-white">
                            Fuel Your Body
                        </span>
                        <span className="text-xl md:text-2xl font-sport font-bold italic uppercase tracking-widest text-background/80">
                            Fire Your Life
                        </span>
                        <span className="text-xl md:text-2xl font-sport font-bold italic uppercase tracking-widest text-white">
                            Transform Today
                        </span>
                        <span className="w-2 h-2 rounded-full bg-white/50" />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
