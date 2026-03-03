"use client";

import { motion } from "framer-motion";
import { CtaSection } from "@/components/sections/CtaSection";

export default function AboutPage() {
    const values = [
        { title: "Innovation", desc: "Pushing boundaries with cutting-edge AI." },
        { title: "Speed", desc: "Fast execution and rapid deployment." },
        { title: "Reliability", desc: "Systems that work seamlessly 24/7." },
        { title: "Results", desc: "Data-driven outcomes that impact the bottom line." },
        { title: "Integrity", desc: "Transparent, honest, and ethical solutions." }
    ];

    return (
        <div className="pt-32 pb-0">
            <div className="container mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-[var(--color-primary)]/30 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                        <span className="text-sm font-medium text-[var(--color-primary)]">About EvorraX</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-8 font-secondary leading-tight">
                        Building the Future of <br className="hidden md:block" />
                        <span className="text-gradient">Business Automation</span> with AI
                    </h1>

                    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                        We are an AI automation agency focused on building intelligent systems that help businesses operate faster, smarter, and more efficiently. Our mission is to replace manual processes with automation and intelligence so business owners can focus only on growth.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-24">
                        <div className="glass-card p-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-[50px] group-hover:bg-[var(--color-primary)]/20 transition-colors" />
                            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                            <p className="text-gray-400">
                                To simplify business operations using AI and automation, enabling business owners to focus on growth instead of manual work.
                            </p>
                        </div>

                        <div className="glass-card p-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)]/10 rounded-full blur-[50px] group-hover:bg-[var(--color-secondary)]/20 transition-colors" />
                            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                            <p className="text-gray-400">
                                To become one of India's most powerful AI automation agencies, helping thousands of businesses scale through intelligent systems.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-12 text-center font-secondary">Core Values</h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                        {values.map((v, i) => (
                            <div key={i} className="glass-card px-8 py-6 flex-1 min-w-[200px] text-center border-white/5 hover:border-[var(--color-primary)]/30 transition-colors">
                                <h4 className="font-bold text-white mb-2">{v.title}</h4>
                                <p className="text-sm text-gray-400">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <CtaSection />
        </div>
    );
}
