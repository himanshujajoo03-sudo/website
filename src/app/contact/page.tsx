"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        businessName: "",
        industry: "",
        phone: "",
        city: "",
        challenge: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const formDataEvent = new FormData(e.currentTarget);
            formDataEvent.append("access_key", "2491a140-fcaf-4431-b304-9f3ea8764266");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataEvent
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                setFormData({
                    name: "",
                    email: "",
                    businessName: "",
                    industry: "",
                    phone: "",
                    city: "",
                    challenge: ""
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const baseMessage = encodeURIComponent("Hi, I want AI automation for my business.\nName:\nBusiness:\nMain Problem:");

    return (
        <div className="pt-32 pb-24 relative overflow-hidden min-h-screen">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--color-secondary)]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-[var(--color-primary)]/30 backdrop-blur-md self-start">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                            <span className="text-sm font-medium text-[var(--color-primary)]">Contact Us</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-secondary leading-tight">
                            Book Your Free AI <br />
                            <span className="text-gradient">Automation Demo</span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            Discover how AI systems can automate your operations, reduce costs, and increase revenue. We build tailor-made solutions for your unique bottlenecks.
                        </p>

                        <div className="glass-card p-6 border-white/5 border-l-4 border-l-[var(--color-primary)] mb-8">
                            <h3 className="font-bold text-white mb-2">Direct Email Connection</h3>
                            <p className="text-gray-400 text-sm">Fill out the form to instantly send your request straight to our inbox. We will get back to you shortly.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-md">
                            <Button size="lg" className="flex-1 whitespace-nowrap" asChild>
                                <a href="#form-section">Book Demo</a>
                            </Button>
                            <Button size="lg" variant="whatsapp" className="flex-1 whitespace-nowrap" asChild>
                                <a href={`https://wa.me/918668949851?text=${baseMessage}`} target="_blank" rel="noopener noreferrer">
                                    Chat on WhatsApp
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        id="form-section"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass-card p-8 md:p-10 border-[var(--color-primary)]/20 shadow-[0_0_40px_rgba(0,255,255,0.05)]">
                            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Tell us about your business</h3>

                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            minLength={2}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Business Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="businessName"
                                            value={formData.businessName}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Industry</label>
                                        <input
                                            required
                                            type="text"
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                                            placeholder="e.g. Clinic, Retail, Coaching"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            pattern="[0-9]{10,15}"
                                            title="Please enter a valid phone number (10-15 digits)"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                                            placeholder="9876543210"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">City</label>
                                    <input
                                        required
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                                        placeholder="e.g. Mumbai, Delhi"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Biggest Challenge / Main Problem</label>
                                    <textarea
                                        required
                                        name="challenge"
                                        value={formData.challenge}
                                        rows={4}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
                                        placeholder="What manual processes are slowing you down?"
                                    ></textarea>
                                </div>

                                <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                            Sending...
                                        </span>
                                    ) : "Submit Setup Request"}
                                </Button>

                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center">
                                        Message sent successfully! We will contact you soon.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
                                        Something went wrong. Please try again or use the WhatsApp button instead.
                                    </div>
                                )}
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
