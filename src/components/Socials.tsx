"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

export default function Socials() {
    return (
        <section className="py-20 bg-background border-t border-zinc-900">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Follow The Journey</h2>
                <div className="flex justify-center gap-8">
                    <motion.a
                        href="https://instagram.com/thefuelhaustt"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-4 bg-zinc-900 rounded-full text-pink-500 hover:bg-zinc-800 transition-colors"
                    >
                        <Instagram className="w-8 h-8" />
                        <span className="sr-only">Instagram</span>
                    </motion.a>

                    <motion.a
                        href="https://tiktok.com/@thefuelhaustt" // Assuming handle
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="p-4 bg-zinc-900 rounded-full text-white hover:bg-zinc-800 transition-colors"
                    >
                        {/* Simple TikTok Icon SVG since Lucide might not have it or it varies */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-8 h-8"
                        >
                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                        <span className="sr-only">TikTok</span>
                    </motion.a>

                    <motion.a
                        href="https://facebook.com/thefuelhaustt"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-4 bg-zinc-900 rounded-full text-blue-500 hover:bg-zinc-800 transition-colors"
                    >
                        <Facebook className="w-8 h-8" />
                        <span className="sr-only">Facebook</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
