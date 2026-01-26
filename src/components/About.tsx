"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl">
                            <Image
                                src="/radha.jpg"
                                alt="Radha Edoo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decoration */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            More Than Just <span className="text-primary">Movement</span>.
                        </h2>
                        <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                            Hi, I’m Radha 👋
                            <br /><br />
                            I started my fitness journey feeling overwhelmed, unsure, and sometimes discouraged — just like many beginners do. Over time, I realized that true transformation isn’t about perfection or extremes, but about showing up consistently, learning as you go, and celebrating every small win. This led me to pursue my certification as an ACE Personal Trainer and to dive deep into nutrition and mindset coaching.
                        </p>
                        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                            I created The Fuel Haus TT to share this journey with others, especially women who want to build strong, healthy habits that last. This space is all about progress over perfection, empowerment, and community — because I truly believe that when we fuel our bodies and fire our lives, amazing things happen, one step at a time.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">500+</span>
                                <span className="text-sm text-zinc-500">Lives Changed</span>
                            </div>
                            <div className="w-px h-12 bg-zinc-800 mx-4" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">100%</span>
                                <span className="text-sm text-zinc-500">Commitment</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col md:flex-row gap-6 items-start md:items-center">
                            {/* ACE Badge */}
                            <div className="relative w-32 h-32 shrink-0 bg-white/5 rounded-full p-2">
                                <Image
                                    src="/badge-pt.webp"
                                    alt="ACE Personal Trainer Badge"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>

                            <a
                                href="/cpr-certificate.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors text-sm uppercase tracking-wider font-bold"
                            >
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <div>
                                    <div className="text-white">Certified Personal Trainer & Nutrition Specialist</div>
                                    <div className="text-xs text-zinc-500 font-normal mt-0.5">First Aid • CPR • AED Certified <span className="underline ml-1">View Certificate</span></div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
