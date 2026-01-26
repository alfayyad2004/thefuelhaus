"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import FireSparks from "@/components/ui/FireSparks";
import { HeroBanner } from "@/components/ui/Marquee";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
            {/* Background Gradient / Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/20 z-0" />

            {/* Animated Fire Sparks */}
            <FireSparks />

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30" />

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-primary mb-6 uppercase tracking-wider backdrop-blur-sm">
                        Exclusive Women's Fitness Coaching
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-6">
                        Fuel your body. <br className="hidden md:block" />
                        <span className="text-primary">Fire your life.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
                        Join the movement with Radha Edoo. Expert coaching tailored specifically for women to ignite your true potential through fitness, nutrition, and mindset.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex gap-4 flex-col sm:flex-row"
                >
                    <Button
                        size="lg"
                        className="rounded-full text-xl px-10 py-6 gap-2 bg-primary hover:bg-primary/90 text-white font-sport italic uppercase tracking-wider"
                        onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Join the Movement <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full text-lg px-8 border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Learn More
                    </Button>
                </motion.div>
            </div>

            {/* Animated Marquee Banner placed at the bottom */}
            <div className="absolute bottom-0 w-full z-20">
                <HeroBanner />
            </div>
        </section >
    );
}
