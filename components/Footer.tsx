import { Home, Facebook, Instagram, Mail, Linkedin, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 font-serif">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
                {/* Brand Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                            <Home size={20} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Kas <span className="text-blue-500">Estate</span></span>
                    </div>
                
                    <p className="text-sm leading-relaxed text-slate-400">The most trusted real estate platform in Ghana. Find premium properties with ease and security.</p>
                <div className="flex gap-4">
                    <Facebook size={20} className="hover:text-blue-500 cursor-pointer transition" />
                    <Instagram size={20} className="hover:text-blue-500 cursor-pointer transition" />
                    <Linkedin size={20} className="hover:text-blue-500 cursor-pointer transition" />
                </div>
                </div>
                {/* Quick Links Section */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href='/' className="hover:text-white transition">Buy Properties</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Rent Properties</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Luxury Villa</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href='/' className="hover:text-white transition">Property Valuation</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Legal Consulting</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Interior Design</Link></li>
                        <li><Link href='/' className="hover:text-white transition">Agents Program</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-blue-500 shrink-0"/>
                            <span>East Legon, Accra, Ghana</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-blue-500 shrink-0" />
                            <span>+233 257 182 413</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-blue-500 shrink-0" />
                            <span>info@kasestate.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copy Right Section */}
            <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center tex-xs text-slate-500 gap-4">
                <p>© 2026 Kas Estate. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href='/' className="hover:text-white transition">Privacy Policy</Link>
                    <Link href='/' className="hover:text-white transition">Terms Of Service</Link>
                </div>
            </div>
        </footer>
    );
}