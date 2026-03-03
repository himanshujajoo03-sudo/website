"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
    const whatsappMessage = encodeURIComponent(
        "Hi, I want AI automation for my business.\nName:\nBusiness:\nMain Problem:"
    );

    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-24 lg:pb-32">
            {/* Animated Background Gradients */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/15 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-secondary)]/15 rounded-full blur-[100px] pointer-events-none"
            />

            {/* Floating Tech Badges (Background) */}
            <motion.div
                animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[25%] left-[8%] hidden xl:flex items-center gap-3 glass p-4 rounded-2xl border border-[var(--color-primary)]/20 shadow-[0_0_30px_rgba(0,255,255,0.1)] z-10"
            >
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                    <span className="text-[var(--color-primary)] font-bold">24/7</span>
                </div>
                <div>
                    <p className="text-white font-bold text-sm">Always On</p>
                    <p className="text-gray-400 text-xs text-nowrap">Automated Operations</p>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 25, 0], x: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[25%] right-[8%] hidden xl:flex items-center gap-3 glass p-4 rounded-2xl border border-[var(--color-secondary)]/20 shadow-[0_0_30px_rgba(168,85,247,0.1)] z-10"
            >
                <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                    <span className="text-[var(--color-secondary)] font-bold text-xl">↗</span>
                </div>
                <div>
                    <p className="text-white font-bold text-sm">Revenue Scale</p>
                    <p className="text-gray-400 text-xs text-nowrap">AI-Driven Growth</p>
                </div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-10 border border-[var(--color-primary)]/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,255,0.1)]"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-primary)]"></span>
                        </span>
                        <span className="text-sm font-semibold tracking-wider text-[var(--color-primary)] uppercase">Intelligent AI Solutions</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 font-secondary leading-[1.1]">
                        Business Growth, <br className="hidden md:block" />
                        Powered by <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,255,255,0.3)]">AI Systems</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                        We build custom AI automation that replaces manual work, eliminates bottlenecks, and scales your revenue on complete autopilot.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto" asChild>
                            <a href="/contact">Book Free Demo</a>
                        </Button>
                        <Button size="lg" variant="whatsapp" className="h-14 px-8 text-lg w-full sm:w-auto" asChild>
                            <a href={`https://wa.me/918668949851?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                                Chat on WhatsApp
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Premium Moving Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03] pointer-events-none mix-blend-screen" />

            {/* Bottom fading edge */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
        </section>
    );
};
