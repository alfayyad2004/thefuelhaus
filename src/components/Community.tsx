"use client";

import { motion } from "framer-motion";
import CommunityForm from "./CommunityForm";

export default function Community() {
    return (
        <section id="community" className="py-20 md:py-32 bg-zinc-900/30 relative">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Join The Movement</h2>
                    <p className="text-zinc-400">
                        Ready to ignite your potential? Fill out the form below to get started with your personalized plan.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full bg-zinc-950 p-1 md:p-2 rounded-xl shadow-2xl border border-zinc-800"
                >
                    {/* Custom Form Integrated with Google Sheets */}
                    <CommunityForm />
                </motion.div>
            </div>
        </section>
    );
}
