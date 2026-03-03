"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Solutions = () => {
    const industries = [
        {
            name: "🏥 Clinics & Doctors",
            solutions: [
                {
                    title: "AI Receptionist System",
                    desc: "Intelligent WhatsApp-based receptionist handling queries and bookings 24/7.",
                    benefits: ["Automated patient handling", "24/7 appointment booking", "Zero missed inquiries"]
                },
                {
                    title: "Appointment & Follow-up",
                    desc: "Automated reminders and follow-ups to increase visits and reduce no-shows.",
                    benefits: ["Automated reminders", "Feedback collection", "Improved retention"]
                }
            ],
            outcome: "We automate patient communication and management so doctors focus entirely on treatment."
        },
        {
            name: "📚 Coaching Centres & Institutes",
            solutions: [
                {
                    title: "AI Lead Qualification Bot",
                    desc: "Instantly handles inquiries and filters high-intent leads for your team.",
                    benefits: ["Automated inquiries", "Smart qualification", "High-quality leads only"]
                },
                {
                    title: "Admission Funnel Automation",
                    desc: "Automates demo bookings, follow-ups, and admission reminders to maximize conversions.",
                    benefits: ["Demo class booking", "Admission reminders", "Higher conversion ratio"]
                }
            ],
            outcome: "We build automated admission systems that convert more inquiries into confirmed enrollments."
        },
        {
            name: "🍕 Restaurants & Cafes",
            solutions: [
                {
                    title: "WhatsApp Ordering & Booking",
                    desc: "Smart bot that takes food orders, manages reservations, and provides support.",
                    benefits: ["Automated orders", "Table booking", "Faster service"]
                },
                {
                    title: "Loyalty & Repeat Customer System",
                    desc: "AI-driven engagement system designed to increase repeat visits and lifetime value.",
                    benefits: ["Automated offers", "Review collection", "Repeat triggers"]
                }
            ],
            outcome: "We build automated ordering and loyalty systems that increase repeat customers and boost revenue."
        },
        {
            name: "🛒 Mega Marts & Retail Stores",
            solutions: [
                {
                    title: "Customer Loyalty Automation",
                    desc: "AI-powered loyalty system engaging customers through WhatsApp with automated offers.",
                    benefits: ["Loyalty automation", "Festival campaigns", "Offer broadcasting"]
                },
                {
                    title: "Smart Engagement System",
                    desc: "Intelligent system delivering personalized promotions based on customer data.",
                    benefits: ["Personalized offers", "Customer segmentation", "Increased lifetime value"]
                }
            ],
            outcome: "We build smart engagement systems that drive consistent, repeating sales."
        }
    ];

    return (
        <section id="solutions" className="py-24 relative bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 font-secondary"
                    >
                        Industry-Specific Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400"
                    >
                        Custom AI-powered automation systems tailored for specific business industries. Built to save time, reduce operational cost, and increase revenue.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="glass-card p-1 border-white/10 group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="bg-[#0f0f0f] rounded-xl p-8 h-full flex flex-col relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-shadow duration-300">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[var(--color-primary)]/10 transition-colors duration-500" />

                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 pb-4 border-b border-white/10">{industry.name}</h3>

                                <div className="grid grid-cols-1 gap-8 mb-8 flex-grow">
                                    {industry.solutions.map((sol, j) => (
                                        <div key={j}>
                                            <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-3">{sol.title}</h4>
                                            <p className="text-gray-400 mb-4">{sol.desc}</p>
                                            <ul className="space-y-2">
                                                {sol.benefits.map((benefit, k) => (
                                                    <li key={k} className="flex items-start text-sm text-gray-300">
                                                        <span className="text-[var(--color-secondary)] mr-2 mt-0.5">✦</span>
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-white/5 p-4 lg:p-6 rounded-lg mb-8 border border-white/5 mt-auto">
                                    <p className="font-semibold text-white/90 text-sm lg:text-base"><span className="text-[var(--color-accent)]">Outcome:</span> {industry.outcome}</p>
                                </div>

                                <div className="flex flex-col xl:flex-row items-stretch gap-4 mt-auto">
                                    <Button asChild className="flex-1 whitespace-nowrap">
                                        <a href="/contact">Book Free Demo</a>
                                    </Button>
                                    <Button variant="whatsapp" asChild className="flex-1 whitespace-nowrap">
                                        <a href={`https://wa.me/918668949851?text=${encodeURIComponent("Hi, I want AI automation for my business.\nName:\nBusiness:\nMain Problem:")}`} target="_blank" rel="noopener noreferrer">
                                            Chat on WhatsApp
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
