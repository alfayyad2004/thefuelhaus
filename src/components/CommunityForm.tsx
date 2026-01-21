"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Inputs = {
    name: string;
    email: string;
    phone: string;
    goals: string;
};

// Google Form IDs extracted
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc5Y4Ln9VXKP5wGd3tb7RmZojv2rns14_xn0hPEKUZ_70BIfQ/formResponse";
const ENTRY_IDS = {
    name: "entry.2005620554",
    email: "entry.1045781291",
    phone: "entry.1166974658",
    goals: "entry.839337160",
};

export default function CommunityForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsSubmitting(true);

        // Construct FormData for Google Forms
        const formData = new FormData();
        formData.append(ENTRY_IDS.name, data.name);
        formData.append(ENTRY_IDS.email, data.email);
        formData.append(ENTRY_IDS.phone, data.phone);
        formData.append(ENTRY_IDS.goals, data.goals);

        try {
            // Submit with no-cors to avoid CORS errors (we won't get a readable response)
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: "POST",
                body: formData,
                mode: "no-cors",
            });

            // Simulate a small delay for better UX if the fetch is instant
            await new Promise(resolve => setTimeout(resolve, 500));

            setIsSuccess(true);
            reset();
        } catch (error) {
            console.error("Submission error:", error);
            // In no-cors mode, we can't really catch errors easily, but safe to assume connection issues
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 px-6 text-center bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                    className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6"
                >
                    <motion.svg
                        viewBox="0 0 24 24"
                        className="w-10 h-10 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            d="M20 6L9 17l-5-5"
                        />
                    </motion.svg>
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-3xl font-bold text-white mb-2"
                >
                    Application Received
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-zinc-400 max-w-sm"
                >
                    Your commitment to change has been noted. We will review your application and contact you shortly.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <Button
                        variant="outline"
                        className="mt-8 border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white"
                        onClick={() => setIsSuccess(false)}
                    >
                        Start New Application
                    </Button>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-zinc-900/30 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold pl-1">Name</label>
                    <Input
                        placeholder="John Doe"
                        {...register("name", { required: true })}
                        className={cn(
                            "bg-zinc-950/50 border-zinc-800 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-300 h-12",
                            errors.name && "border-red-500 focus:ring-red-500/20"
                        )}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold pl-1">Email</label>
                    <Input
                        type="email"
                        placeholder="john@example.com"
                        {...register("email", { required: true })}
                        className={cn(
                            "bg-zinc-950/50 border-zinc-800 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-300 h-12",
                            errors.email && "border-red-500 focus:ring-red-500/20"
                        )}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold pl-1">Phone Number</label>
                <Input
                    type="tel"
                    placeholder="1(868)000-0000"
                    {...register("phone", { required: true })}
                    className={cn(
                        "bg-zinc-950/50 border-zinc-800 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-300 h-12",
                        errors.phone && "border-red-500 focus:ring-red-500/20"
                    )}
                />
            </div>

            <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500 font-semibold pl-1">Your Goals</label>
                <Textarea
                    placeholder="Tell us about your fitness journey and what you want to achieve..."
                    {...register("goals", { required: true })}
                    className={cn(
                        "bg-zinc-950/50 border-zinc-800 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-300 min-h-[120px] resize-none",
                        errors.goals && "border-red-500 focus:ring-red-500/20"
                    )}
                />
            </div>

            <Button
                type="submit"
                className={cn(
                    "w-full text-lg sm:text-xl md:text-2xl h-16 font-sport italic font-bold tracking-wider uppercase transition-all duration-300 transform active:scale-95 rounded-full",
                    "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white shadow-lg shadow-orange-900/20 gap-2 sm:gap-3",
                    isSubmitting && "opacity-80"
                )}
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <div className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                    </div>
                ) : (
                    <>
                        Join The Movement <div className="inline-block transform rotate-[-45deg]"><ArrowRight className="w-6 h-6 rotate-45" /></div>
                    </>
                )}
            </Button>
        </form>
    );
}
