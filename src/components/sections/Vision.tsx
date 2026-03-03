"use client";

import { motion } from "framer-motion";

export const Vision = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white/5 border-y border-white/10">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10 backdrop-blur-md">
                            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Our Core Belief</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 font-secondary leading-[1.1] tracking-tight">
                            Automation is not <span className="text-gray-500 line-through decoration-[var(--color-primary)] decoration-4">luxury</span>. <br />
                            <span className="text-gradient drop-shadow-[0_0_20px_rgba(0,255,255,0.2)]">It's necessity.</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto mb-10 rounded-full" />
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light">
                            Our mission is to simplify business operations using AI, enabling growth instead of manual work. We believe speed + systems = domination, and data-driven execution beats guesswork.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        {[
                            { title: "Necessity", desc: "Automation is not luxury." },
                            { title: "Domination", desc: "Speed + systems = domination." },
                            { title: "Execution", desc: "Data-driven execution beats guesswork." }
                        ].map((belief, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card p-6 border-white/10 hover:border-[var(--color-primary)]/50 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mb-4">
                                    <span className="w-4 h-4 rounded-full bg-[var(--color-primary)]" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">{belief.title}</h3>
                                <p className="text-gray-400">{belief.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
