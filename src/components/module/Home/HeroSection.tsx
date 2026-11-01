"use client";

import React from "react";
import Image from "next/image";
import {
  Plane,
  Compass,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F7F3] via-[#F9FAFB] to-white pt-10 sm:pt-16 pb-16 lg:pb-24">
      {/* Decorative background vectors / subtle travel elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#0A3A23]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#D9822B]/10 blur-3xl pointer-events-none" />

      {/* Subtle world map grid line svg overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0A3A23_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0A3A23]/15 shadow-sm text-xs sm:text-sm text-[#0A3A23] font-semibold mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <span className="flex h-2 w-2 rounded-full bg-[#D9822B] animate-ping" />
              <span className="flex h-2 w-2 rounded-full bg-[#0A3A23]" />
              <span>Certified &amp; Trusted Travel Agency in Feni</span>
            </div>

            {/* Main Headline matching brand tagline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A3A23] tracking-tight leading-[1.18] sm:leading-[1.14] font-serif mb-6 text-balance">
              Explore the World{" "}
              <span className="relative inline-block text-[#D9822B]">
                With Us
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#D9822B]/40"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C50 1.5 150 1.5 199 5.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-normal leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 text-pretty">
              Trusted agency for <strong className="text-gray-900 font-semibold">Air Ticket Booking</strong>,{" "}
              <strong className="text-gray-900 font-semibold">Visa Assistance</strong>,{" "}
              <strong className="text-[#0A3A23] font-semibold">Europe Work Permits</strong>, and sacred{" "}
              <strong className="text-[#D9822B] font-semibold">Hajj &amp; Umrah</strong> packages. Located at Feni Center, Feni.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              {/* Primary Gold CTA */}
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D9822B] hover:bg-[#BF6F1E] text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-[#D9822B]/25 hover:shadow-xl hover:shadow-[#D9822B]/35 transition-all duration-200 transform hover:-translate-y-0.5 text-base tracking-wide"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Secondary Green Outline CTA */}
              <a
                href="https://wa.me/8801355289399?text=Hello%20Daily%20Fly%20Travel,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border-2 border-[#0A3A23] text-[#0A3A23] hover:bg-[#0A3A23] hover:text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 text-base"
              >
                <PhoneCall className="w-5 h-5 text-[#D9822B] group-hover:text-white" />
                <span>Inbox / Call Now</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-6 border-t border-gray-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0A3A23] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">100% Legal Permits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0A3A23] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">Best Airfares</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0A3A23] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">VIP Umrah Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0A3A23] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700">Feni Center Office</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Travel Graphics */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0A3A23]/10 to-[#D9822B]/20 rounded-3xl blur-xl transform rotate-1" />

              {/* Main Visual Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
                {/* Header of the visual card */}
                <div className="flex items-center justify-between pb-5 border-b border-gray-100 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0A3A23] flex items-center justify-center text-white shadow-sm">
                      <Plane className="w-5 h-5 transform -rotate-45" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Live Travel Desk</h4>
                      <p className="text-xs text-gray-500">Daily Fly &bull; Feni Branch</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#0A3A23]/10 text-[#0A3A23]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today
                  </span>
                </div>

                {/* Europe Work Permit Banner Highlight */}
                <div className="bg-gradient-to-br from-[#0A3A23] to-[#062416] text-white rounded-xl p-4 mb-5 relative overflow-hidden shadow-inner">
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-20 h-20 bg-[#D9822B]/20 rounded-full blur-xl" />
                  <div className="flex items-start justify-between mb-2">
                    <span className="bg-[#D9822B] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider">
                      Hot Requirement
                    </span>
                    <span className="text-xs text-white/80 font-mono">Quota 2026</span>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-1">
                    Albania Europe Work Permit
                  </h3>
                  <p className="text-xs text-slate-200 mb-3">
                    Construction, Hospitality, Drivers &amp; Warehouse vacancies open for Bangladeshi workers.
                  </p>
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                    <span className="text-[#F7D29E] font-medium">Processing: 45 - 90 Days</span>
                    <a
                      href="#work-permits"
                      className="text-white hover:text-[#F7D29E] font-bold underline underline-offset-2 flex items-center gap-1"
                    >
                      View Details &rarr;
                    </a>
                  </div>
                </div>

                {/* Interactive Flight Route Snippet */}
                <div className="bg-[#F9FAFB] rounded-xl p-4 border border-gray-100 mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span className="font-semibold text-gray-700">Popular Route</span>
                    <span className="text-[#D9822B] font-bold">Best Fare Guaranteed</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-extrabold text-[#0A3A23]">DAC</p>
                      <p className="text-xs text-gray-500">Dhaka, BD</p>
                    </div>

                    <div className="flex flex-col items-center px-4 flex-1">
                      <div className="w-full flex items-center justify-center relative">
                        <div className="w-full h-0.5 bg-gray-300 border-dashed border-t" />
                        <Plane className="w-4 h-4 text-[#D9822B] absolute" />
                      </div>
                      <span className="text-[10px] text-gray-400 mt-1">Direct / 1-Stop</span>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-extrabold text-[#0A3A23]">TIA / JED</p>
                      <p className="text-xs text-gray-500">Albania / Jeddah</p>
                    </div>
                  </div>
                </div>

                {/* Quick Trust Bar */}
                <div className="flex items-center justify-between text-xs text-gray-600 bg-white rounded-lg p-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0A3A23]" />
                    <span>Govt. Verified Filings</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#D9822B] font-bold">
                    <span>★ 4.9/5</span>
                    <span className="text-gray-400 font-normal">(Feni Clients)</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Sacred Umrah */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white rounded-xl shadow-lg border border-gray-100 p-3 items-center gap-3 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-10 h-10 rounded-lg bg-[#FEF3E2] flex items-center justify-center text-[#D9822B]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Hajj &amp; Umrah Packages</p>
                  <p className="text-[11px] text-[#0A3A23] font-semibold">VIP 5★ Hotels near Haram</p>
                </div>
              </div>

              {/* Floating Badge 2: IATA Ticketing */}
              <div className="hidden sm:flex absolute -top-5 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 items-center gap-2 animate-in fade-in zoom-in-95 duration-700">
                <span className="text-base">🎫</span>
                <span className="text-xs font-bold text-[#0A3A23]">Lowest Airfare Promise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
