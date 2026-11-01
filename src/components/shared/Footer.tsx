"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Heart,
  Plane,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#062416] text-white border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 shrink-0 bg-white rounded-xl p-1 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Daily Fly Travel & Tours"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-extrabold text-xl text-white tracking-tight font-serif">
                    Daily
                  </span>
                  <span className="font-extrabold text-xl text-[#D9822B] tracking-tight font-serif">
                    Fly
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-300 tracking-wider uppercase -mt-0.5">
                  Travel &amp; Tours
                </span>
                <span className="text-[10px] text-[#F7D29E] font-medium italic">
                  Explore the world with us
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
              Your premier registered travel consultancy in Feni. Specializing in low-cost air tickets, European work permit solutions (Albania, Romania), visa assistance, and sacred Hajj &amp; Umrah pilgrimages.
            </p>

            {/* Social & WhatsApp Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/8801355289399"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#D9822B] text-white flex items-center justify-center hover:bg-[#BF6F1E] transition-colors"
                aria-label="WhatsApp Daily Fly Travel"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-[#0A3A23] hover:text-white transition-colors"
                aria-label="Facebook Page"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="tel:01355289399"
                className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-[#0A3A23] hover:text-white transition-colors"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif border-b border-white/15 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#services" className="hover:text-[#F7D29E] transition-colors">
                  Air Ticket Booking
                </a>
              </li>
              <li>
                <a href="#work-permits" className="hover:text-[#F7D29E] transition-colors">
                  Europe Work Permits
                </a>
              </li>
              <li>
                <a href="#hajj-umrah" className="hover:text-[#F7D29E] transition-colors">
                  Hajj &amp; Umrah Packages
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#F7D29E] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F7D29E] transition-colors">
                  Feni Office &amp; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Europe Work Permits (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif border-b border-white/15 pb-2">
              Active Work Permits
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center justify-between">
                <a href="#work-permits" className="hover:text-[#F7D29E] transition-colors">
                  🇦🇱 Albania Work Permit
                </a>
                <span className="bg-[#D9822B] text-white text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">
                  Urgent
                </span>
              </li>
              <li className="flex items-center justify-between">
                <a href="#work-permits" className="hover:text-[#F7D29E] transition-colors">
                  🇷🇴 Romania Factory &amp; Driver
                </a>
                <span className="bg-white/20 text-slate-200 text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">
                  Open
                </span>
              </li>
              <li className="flex items-center justify-between">
                <a href="#work-permits" className="hover:text-[#F7D29E] transition-colors">
                  🇭🇷 Croatia Hospitality &amp; Civil
                </a>
                <span className="bg-white/20 text-slate-200 text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">
                  Open
                </span>
              </li>
              <li>
                <a href="#work-permits" className="hover:text-[#F7D29E] transition-colors">
                  🇷🇸 Serbia &amp; Poland Permits
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif border-b border-white/15 pb-2">
              Feni Center Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9822B] shrink-0 mt-0.5" />
                <p>
                  Feni Center, 5th floor, Lift (4), Post Office Road, Feni, Bangladesh, 3900.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D9822B] shrink-0" />
                <a href="tel:01355289399" className="hover:text-white font-bold text-slate-100">
                  01355-289399
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D9822B] shrink-0" />
                <a
                  href="mailto:dailyflytraveltours@gmail.com"
                  className="hover:text-white break-all"
                >
                  dailyflytraveltours@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <Clock className="w-4 h-4 text-[#D9822B] shrink-0 mt-0.5" />
                <span>Sat - Thu: 9:30 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 <strong>Daily Fly Travel &amp; Tours</strong>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-1.5 text-slate-300">
            <span>Designed &amp; Developed by</span>
            <a
              href="https://softilo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7D29E] hover:text-[#D9822B] font-extrabold underline underline-offset-4 decoration-[#D9822B]/50 transition-colors"
            >
              Softilo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
