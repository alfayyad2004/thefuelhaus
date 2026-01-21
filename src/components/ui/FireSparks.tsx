"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const generateSparks = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // percentage
        y: Math.random() * 100, // percentage
        size: Math.random() * 3 + 1, // 1-4px
        duration: Math.random() * 5 + 3, // 3-8s
        delay: Math.random() * 5,
    }));
};

export default function FireSparks() {
    const [sparks, setSparks] = useState<ReturnType<typeof generateSparks>>([]);

    useEffect(() => {
        setSparks(generateSparks(50));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {sparks.map((spark) => (
                <motion.div
                    key={spark.id}
                    className="absolute rounded-full bg-orange-500 blur-[2px]"
                    style={{
                        left: `${spark.x}%`,
                        width: spark.size * 2, // Double size
                        height: spark.size * 2,
                    }}
                    initial={{ bottom: "-10%", opacity: 0 }}
                    animate={{
                        bottom: "120%",
                        opacity: [0, 0.8, 0], // Higher max opacity
                    }}
                    transition={{
                        duration: spark.duration,
                        repeat: Infinity,
                        delay: spark.delay,
                        ease: "linear",
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        </div>
    );
}
