"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Utensils, Brain, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import FireSparks from "@/components/ui/FireSparks";
import Modal from "@/components/ui/Modal";
import CommunityForm from "@/components/CommunityForm";

const pillars = [
    {
        icon: Dumbbell,
        title: "FITNESS",
        description: "Move with purpose. Build strength that lasts.",
        coreFocus: [
            "Strength training for women",
            "Functional movement",
            "Consistency over perfection",
            "Progress, not comparison"
        ],
        teaches: [
            "How to move safely and confidently",
            "How to build strength at any level",
            "How fitness supports everyday life"
        ],
        gradient: "from-blue-500/20 to-cyan-500/5",
        hoverGradient: "group-hover:from-blue-500/30 group-hover:to-cyan-500/10",
        border: "group-hover:border-blue-500/50",
        iconColor: "text-blue-500",
        bulletColor: "bg-blue-500",
        shadow: "group-hover:shadow-blue-500/20"
    },
    {
        icon: Brain,
        title: "MINDSET",
        description: "Train the mind that carries the body.",
        coreFocus: [
            "Discipline over motivation",
            "Confidence through action",
            "Self-respect and boundaries",
            "Mental resilience"
        ],
        teaches: [
            "How to stay consistent even on hard days",
            "How to rebuild confidence through movement",
            "How mindset fuels long-term results"
        ],
        gradient: "from-secondary/20 to-purple-500/5",
        hoverGradient: "group-hover:from-secondary/30 group-hover:to-purple-500/10",
        border: "group-hover:border-secondary/50",
        iconColor: "text-secondary",
        bulletColor: "bg-secondary",
        shadow: "group-hover:shadow-secondary/20"
    },
    {
        icon: Utensils,
        title: "NUTRITION",
        description: "Fuel, don’t restrict. Nourish to thrive.",
        coreFocus: [
            "Balanced, realistic eating",
            "Food as fuel, not punishment",
            "Sustainability over extremes",
            "Education, not guilt"
        ],
        teaches: [
            "How to eat to support energy and workouts",
            "How to build healthy habits without restriction",
            "How nutrition supports mind and body"
        ],
        gradient: "from-orange-500/20 to-red-500/5",
        hoverGradient: "group-hover:from-orange-500/30 group-hover:to-red-500/10",
        border: "group-hover:border-orange-500/50",
        iconColor: "text-orange-500",
        bulletColor: "bg-orange-500",
        shadow: "group-hover:shadow-orange-500/20"
    },
];



export default function Pillars() {
    const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

    return (
        <section id="pillars" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Fire Animation Background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
                <FireSparks />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-sport font-bold italic uppercase tracking-tighter mb-6"
                    >
                        The Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pr-2">Power</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg"
                    >
                        A holistic approach to transformation. We focus on the three key elements that drive real, lasting change.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedPillar(pillar.title)}
                            className={cn(
                                "group relative p-1 rounded-2xl bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 cursor-pointer",
                                "hover:shadow-2xl", pillar.shadow
                            )}
                        >
                            {/* Gradient Border content */}
                            <div className={cn(
                                "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-500",
                                pillar.gradient
                            )} />

                            <div className="relative h-full bg-zinc-950/90 rounded-xl p-8 flex flex-col items-center text-center border border-white/5 group-hover:border-white/10 transition-colors">
                                <div className={cn(
                                    "p-4 rounded-full bg-zinc-900/80 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                                    pillar.iconColor
                                )}>
                                    <pillar.icon className="w-10 h-10" />
                                </div>

                                <h3 className="text-3xl font-sport font-bold italic uppercase mb-4 text-white group-hover:text-primary transition-colors">
                                    {pillar.title}
                                </h3>

                                <p className="text-zinc-400 leading-relaxed mb-8">
                                    {pillar.description}
                                </p>

                                <div className="space-y-6 mb-8 w-full">
                                    <div className="text-left bg-black/20 p-4 rounded-lg">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-2 border-b border-white/10 pb-2">Core Focus</h4>
                                        <ul className="space-y-1">
                                            {pillar.coreFocus.map((item, idx) => (
                                                <li key={idx} className="text-sm text-zinc-400 flex items-start">
                                                    <span className={cn("mt-1.5 mr-2 w-1.5 h-1.5 rounded-full shrink-0", pillar.bulletColor)} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="text-left bg-black/20 p-4 rounded-lg">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-2 border-b border-white/10 pb-2">What This Pillar Teaches</h4>
                                        <ul className="space-y-1">
                                            {pillar.teaches.map((item, idx) => (
                                                <li key={idx} className="text-sm text-zinc-400 flex items-start">
                                                    <span className={cn("mt-1.5 mr-2 w-1.5 h-1.5 rounded-full shrink-0", pillar.bulletColor)} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className={cn(
                                    "mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300",
                                    "opacity-100 translate-y-0", // Visible on mobile
                                    "md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0", // Hover effect on desktop
                                    pillar.iconColor
                                )}>
                                    <span className="md:hidden">Tap to Join</span>
                                    <span className="hidden md:inline">Join Now</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedPillar}
                onClose={() => setSelectedPillar(null)}
            >
                {selectedPillar && (
                    <CommunityForm pillarName={selectedPillar} className="border-none bg-transparent shadow-none" />
                )}
            </Modal>
        </section>
    );
}
