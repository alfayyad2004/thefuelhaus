"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 300); // Wait for menu to close
        }
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 inset-x-0 z-50 h-16 transition-colors duration-200 ${mobileMenuOpen
                ? "bg-[#0A0F1C]"
                : scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
                }`}
        >
            <div className="container h-full mx-auto px-4 md:px-6 flex items-center justify-between">
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="relative z-[70] flex items-center gap-2 text-xl font-bold tracking-tighter text-white font-sport italic"
                >
                    <Image
                        src="/logo.jpg"
                        alt="The Fuel Haus Logo"
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />
                    <span>THE <span className="text-primary">FUEL</span> HAUS TT</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 items-center text-sm font-medium text-zinc-300">
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-primary transition-colors cursor-pointer">About</a>
                    <a href="#pillars" onClick={(e) => { e.preventDefault(); scrollToSection('pillars'); }} className="hover:text-primary transition-colors cursor-pointer">Pillars</a>
                    <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="hover:text-primary transition-colors cursor-pointer">FAQ</a>
                    <a href="#community" onClick={(e) => { e.preventDefault(); scrollToSection('community'); }} className="hover:text-primary transition-colors cursor-pointer">Community</a>
                </div>

                <Button size="sm" onClick={() => scrollToSection('community')} className="hidden md:flex rounded-full bg-primary text-white hover:bg-primary/90 font-sport italic uppercase tracking-wider px-6">
                    Join Now
                </Button>

                {/* Mobile Hamburger Button */}
                <button
                    className="relative z-[70] p-2 md:hidden text-white focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className="w-6 h-5 flex flex-col justify-between items-center relative">
                        <motion.span
                            animate={mobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute top-0 origin-center"
                        />
                        <motion.span
                            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute top-1/2 -translate-y-1/2"
                        />
                        <motion.span
                            animate={mobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute bottom-0 origin-center"
                        />
                    </div>
                </button>

                {/* Mobile Full Screen Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[60] flex flex-col items-center justify-start pointer-events-auto pt-32 md:pt-24"
                        style={{ backgroundColor: "#0A0F1C" }}
                    >
                        {/* Background Elements */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="flex flex-col gap-8 text-center">
                            {['about', 'pillars', 'faq', 'community'].map((item, index) => (
                                <motion.a
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    onClick={() => scrollToSection(item)}
                                    className="text-4xl font-sport font-bold uppercase italic text-white hover:text-primary transition-colors cursor-pointer tracking-widest"
                                >
                                    {item}
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Button
                                    size="lg"
                                    onClick={() => scrollToSection('community')}
                                    className="mt-8 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-sport italic uppercase text-xl px-12 py-6 shadow-lg shadow-primary/25"
                                >
                                    Start Now
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
