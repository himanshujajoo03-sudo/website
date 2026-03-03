"use client";

import { motion } from "framer-motion";

export const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Audit & Discovery",
            desc: "We analyze your current systems and identify automation opportunities."
        },
        {
            number: "02",
            title: "Strategy & Planning",
            desc: "We design a custom AI automation roadmap tailored to your goals."
        },
        {
            number: "03",
            title: "Build & Integration",
            desc: "We build and deploy intelligent automation systems into your business."
        },
        {
            number: "04",
            title: "Launch & Optimization",
            desc: "Continuous optimization and monitoring for maximum results."
        }
    ];

    return (
        <section id="process" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -ml-48" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 font-secondary"
                    >
                        Our 4-Step Process
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="relative p-8 glass-card border-white/5 hover:border-[var(--color-primary)]/30 transition-colors group"
                        >
                            {/* Connector line for desktop */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-[var(--color-primary)]/50 to-transparent z-0" />
                            )}

                            <div className="text-5xl font-bold text-white/5 group-hover:text-[var(--color-primary)]/20 transition-colors duration-500 mb-6 font-secondary">
                                {step.number}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
