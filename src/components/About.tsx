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
                        {/* Decorative background element */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2rem] blur-2xl opacity-40" />

                        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                            <Image
                                src="/radha.jpg"
                                alt="Radha Edoo"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />

                            {/* Inner vignette/border for polish */}
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Floating Badge/Accent */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-xl p-4 hidden md:flex">
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-white font-sport italic">ACE</span>
                                <span className="block text-[10px] text-zinc-400 uppercase tracking-widest">Certified</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                            More Than Just <span className="text-primary">Movement</span>.
                        </h2>



                        <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                            Hi, I’m Radha 👋
                            <br /><br />
                            I started my fitness journey feeling overwhelmed, unsure, and sometimes discouraged — just like many beginners do. Over time, I realized that true transformation isn’t about perfection or extremes, but about showing up consistently, learning as you go, and celebrating every small win. This led me to pursue my certification as an ACE Personal Trainer and to dive deep into nutrition and mindset coaching.
                        </p>
                        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                            I created The Fuel Haus TT to share this journey with others, creating a dedicated space exclusively for women who want to build strong, healthy habits that last. This space is all about progress over perfection, empowerment, and community — because I truly believe that when we fuel our bodies and fire our lives, amazing things happen, one step at a time.
                        </p>

                        <div className="mb-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                            {/* ACE Badge */}
                            <div className="relative w-28 h-28 shrink-0 bg-white/5 rounded-full p-2 ring-1 ring-white/10">
                                <Image
                                    src="/badge-pt.webp"
                                    alt="ACE Personal Trainer Badge"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>

                            <div className="flex flex-col gap-2 text-center sm:text-left">
                                <div>
                                    <h3 className="font-bold text-white text-lg leading-tight uppercase font-sport italic tracking-wide">
                                        Certified Personal Trainer <br /><span className="text-primary">& Nutrition Specialist</span>
                                    </h3>
                                    <p className="text-zinc-500 text-sm mt-1">American Council on Exercise (ACE)</p>
                                </div>

                                <a
                                    href="/cpr-certificate.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs uppercase tracking-wider font-semibold group justify-center sm:justify-start"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    First Aid • CPR • AED Certified
                                    <span className="border-b border-zinc-700 pb-0.5 group-hover:border-white transition-colors">View</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">1-on-1</span>
                                <span className="text-sm text-zinc-500">Coaching</span>
                            </div>
                            <div className="w-px h-12 bg-zinc-800 mx-4" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">100%</span>
                                <span className="text-sm text-zinc-500">Commitment</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
