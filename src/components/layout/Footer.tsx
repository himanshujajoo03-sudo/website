import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#0A0A0A] pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold font-secondary tracking-tighter text-white mb-4 block">
                            Evorra<span className="text-[var(--color-primary)]">X</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6">
                            AI Systems for Real Business Growth. We build AI-powered automation systems that help businesses save time, reduce operational cost, and increase revenue.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white cursor-pointer transition-colors">
                                𝕏
                            </div>
                            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white cursor-pointer transition-colors">
                                in
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">Services</Link></li>
                            <li><Link href="/solutions" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">Solutions</Link></li>
                            <li><Link href="/process" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">Process</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Ready to automate?</h4>
                        <Link href="/contact">
                            <Button variant="outline" className="w-full mb-4">Book Free Demo</Button>
                        </Link>
                        <a href="https://wa.me/918668949851?text=Hi,%20I%20want%20AI%20automation%20for%20my%20business.%0AName:%0ABusiness:%0AMain%20Problem:" target="_blank" rel="noopener noreferrer">
                            <Button variant="whatsapp" className="w-full">Chat on WhatsApp</Button>
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} EvorraX. All rights reserved.</p>
                    <div className="flex gap-6 text-sm">
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
