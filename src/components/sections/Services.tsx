"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, Users, Workflow, Cpu } from "lucide-react";

export const Services = () => {
    const services = [
        {
            icon: <MessageSquare className="w-6 h-6 text-[var(--color-primary)]" />,
            title: "AI Chatbots",
            description: "Intelligent chatbots for WhatsApp and Websites that handle 24/7 queries, qualify leads, and book appointments.",
            impact: "Faster responses, higher lead conversions, and zero missed inquiries."
        },
        {
            icon: <Settings className="w-6 h-6 text-[var(--color-secondary)]" />,
            title: "Business Automation",
            description: "Automate repetitive tasks and workflows to reduce manual effort, errors, and operational costs.",
            impact: "Save time, reduce workload, and increase operational efficiency."
        },
        {
            icon: <Users className="w-6 h-6 text-[var(--color-accent)]" />,
            title: "Lead Qualification Systems",
            description: "Smart systems that filter low-quality leads and route only high-intent prospects to your team.",
            impact: "Better leads, faster closing, and higher ROI."
        },
        {
            icon: <Workflow className="w-6 h-6 text-blue-400" />,
            title: "CRM & System Integrations",
            description: "Integrate AI with your existing tools to create a centralized, automated business system.",
            impact: "Centralized data, better tracking, and smooth operations."
        },
        {
            icon: <Cpu className="w-6 h-6 text-purple-400" />,
            title: "Custom AI Tools",
            description: "Tailor-made AI tools designed specifically for your unique business problems and workflows.",
            impact: "Unique competitive advantage using AI."
        }
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[var(--color-primary)] mb-6"
                    >
                        What We Do
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-6 font-secondary"
                    >
                        Our Core <span className="text-gradient">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 font-light"
                    >
                        We focus on automation, intelligence, and growth — not just tools. We build complete AI-powered business systems.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent blur-3xl -z-10" />

                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glass-card p-8 group relative overflow-hidden border-white/5 hover:border-[var(--color-primary)]/30 transition-all duration-500 bg-[#0A0A0A]/80 backdrop-blur-xl"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-[var(--color-primary)]/10 transition-colors duration-500" />

                            <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--color-primary)]/10 group-hover:border-[var(--color-primary)]/20 transition-all duration-500">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors">{service.title}</h3>
                            <p className="text-gray-400 mb-8 flex-grow leading-relaxed font-light">{service.description}</p>

                            <div className="border-t border-white/10 pt-6 mt-auto">
                                <p className="text-sm font-medium text-[var(--color-primary)]">
                                    <span className="text-white/40 block mb-2 uppercase tracking-wider text-xs">Business Impact</span>
                                    {service.impact}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
