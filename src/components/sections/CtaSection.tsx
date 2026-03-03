"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const CtaSection = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-black border-t border-white/10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto glass-card border border-[var(--color-primary)]/20 p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-secondary)]/10 rounded-full blur-[80px] pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-secondary leading-tight text-white">
                        Want a Custom AI System for Your Business?
                    </h2>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Book a free AI automation demo and see how intelligent systems can transform your operations, save time, and scale growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button size="lg" asChild className="w-full sm:w-auto h-14 text-lg">
                            <a href="/contact">Book Free Demo</a>
                        </Button>
                        <Button size="lg" variant="whatsapp" asChild className="w-full sm:w-auto h-14 text-lg">
                            <a href={`https://wa.me/918668949851?text=${encodeURIComponent("Hi, I want AI automation for my business.\nName:\nBusiness:\nMain Problem:")}`} target="_blank" rel="noopener noreferrer">
                                Chat on WhatsApp
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
