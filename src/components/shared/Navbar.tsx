"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, Plane, ShieldCheck, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work Permits", href: "#work-permits", badge: "Urgent" },
    { name: "Hajj & Umrah", href: "#hajj-umrah" },
    { name: "Why Us", href: "#why-us" },
    { name: "Office & Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
          : "bg-white border-b border-gray-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Daily Fly Travel & Tours Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-xl sm:text-2xl text-[#0A3A23] tracking-tight font-serif">
                  Daily
                </span>
                <span className="font-extrabold text-xl sm:text-2xl text-[#D9822B] tracking-tight font-serif">
                  Fly
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#0A3A23]/80 tracking-wider uppercase -mt-1">
                Travel &amp; Tours
              </span>
              <span className="text-[9px] text-[#D9822B] font-medium italic hidden sm:block">
                Explore the world with us
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-gray-700 hover:text-[#0A3A23] transition-colors relative py-1 group flex items-center gap-1.5"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="bg-[#D9822B] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider animate-bounce">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0A3A23] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action: Clickable Phone Button & Appointment */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:01355289399"
              className="inline-flex items-center gap-2 bg-[#D9822B] hover:bg-[#BF6F1E] text-white font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 text-sm"
              title="Call Daily Fly Travel & Tours Feni Office"
            >
              <Phone className="w-4 h-4 fill-white animate-pulse" />
              <span>01355-289399</span>
            </a>

            <a
              href="#contact"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A3A23] hover:text-[#062416] bg-[#0A3A23]/5 hover:bg-[#0A3A23]/10 px-3.5 py-2.5 rounded-lg transition-colors border border-[#0A3A23]/15"
            >
              <span>Feni Office</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0A3A23]" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:01355289399"
              className="inline-flex sm:hidden items-center justify-center w-9 h-9 rounded-lg bg-[#D9822B] text-white shadow-sm"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#0A3A23] hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#0A3A23]" />
              ) : (
                <Menu className="w-6 h-6 text-[#0A3A23]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-gray-800 hover:text-[#0A3A23] p-2.5 rounded-lg hover:bg-[#0A3A23]/5 transition-colors"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="bg-[#D9822B] text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href="tel:01355289399"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#D9822B] text-white font-bold py-3 rounded-lg text-base shadow-sm"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call 01355-289399</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 border border-[#0A3A23] text-[#0A3A23] font-bold py-3 rounded-lg text-base hover:bg-[#0A3A23]/5"
              >
                <span>Visit Feni Center Office</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
