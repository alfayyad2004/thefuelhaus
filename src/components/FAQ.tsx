"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Is The Fuel Haus TT exclusively for women?",
        answer: "Yes. We are a women-only fitness community designed to provide a safe, supportive, and empowering environment. Our programs are specifically tailored to the unique physiological and lifestyle needs of women."
    },
    {
        question: "Who is Radha Edoo?",
        answer: "Radha Edoo is the founder of The Fuel Haus TT and an ACE Certified Personal Trainer based in Trinidad & Tobago. She specializes in women's strength training, nutrition coaching, and mindset development to help clients achieve sustainable transformation."
    },
    {
        question: "What makes The Fuel Haus TT difference?",
        answer: "The Fuel Haus TT goes beyond generic workouts by combining three essential pillars: Fitness, Nutrition, and Mindset. We don't just focus on the gym; we focus on building a lifestyle that fuels your body and fires your life."
    },
    {
        question: "Is The Fuel Haus TT suitable for beginners?",
        answer: "Absolutely. Radha Edoo specializes in helping beginners build confidence and strength from the ground up. Whether you have never lifted a weight or are restarting your journey, our programs are designed to meet you where you are."
    },
    {
        question: "Does Radha offer nutrition coaching?",
        answer: "Yes. As a certified Nutrition Specialist, Radha provides guidance on fueling your body correctly without restrictive diets. The focus is on education and sustainable habits rather than quick fixes."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 bg-zinc-950 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-sport font-bold italic uppercase tracking-tighter mb-4 text-white">
                        Common <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-zinc-400">Everything you need to know about starting your journey.</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-white/5 rounded-2xl bg-zinc-900/50 backdrop-blur-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-lg text-zinc-200">{faq.question}</span>
                                <span className={cn("p-2 rounded-full bg-white/5 transition-transform duration-300", openIndex === index && "rotate-180 bg-primary/20 text-primary")}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>
                            <div
                                className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                )}
                            >
                                <div className="overflow-hidden">
                                    <p className="p-6 pt-0 text-zinc-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
