"use client";

import React from "react";
import {
  Ticket,
  Globe,
  Briefcase,
  Moon,
  Building2,
  Check,
  ArrowRight,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  badge?: string;
  badgeType?: "gold" | "green";
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
}

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      id: "air-tickets",
      icon: <Ticket className="w-6 h-6 text-[#D9822B]" />,
      title: "Air Ticket Booking",
      tagline: "Domestic & Worldwide Flights",
      description:
        "Guaranteed best market fares across major international airlines with instant issuance, date change assistance, and baggage support.",
      highlights: [
        "Special group and labor flight quotas",
        "Biman, Saudia, Emirates, Qatar & more",
        "24/7 reissuance and refund support",
        "Instant e-ticket delivery via WhatsApp & Email",
      ],
      ctaText: "Check Flight Fares",
      ctaHref: "#contact",
    },
    {
      id: "work-permits",
      icon: <Briefcase className="w-6 h-6 text-[#D9822B]" />,
      badge: "🔥 URGENT 2026",
      badgeType: "gold",
      title: "Europe Work Permit Visa",
      tagline: "Specialized in Albania & Eastern Europe",
      description:
        "Legitimate government-approved work permit contracts for European destinations. Complete contract vetting, document submission, and embassy support.",
      highlights: [
        "Albania 🇦🇱: Construction, Drivers & Chefs",
        "Romania 🇷🇴 & Croatia 🇭🇷 Work Permits",
        "100% Genuine Ministry of Labour approvals",
        "Pre-departure briefing & flight coordination",
      ],
      ctaText: "Apply For Work Permit",
      ctaHref: "#work-permits",
    },
    {
      id: "visa-assistance",
      icon: <Globe className="w-6 h-6 text-[#D9822B]" />,
      title: "Visa Services & Assistance",
      tagline: "Tourist, Visit, Business & Student",
      description:
        "Complete visa consultancy for Europe (Schengen), UK, USA, Canada, GCC, and Asian countries with expert file preparation and mock interviews.",
      highlights: [
        "High success rate document verification",
        "Embassy appointment booking & fees payment",
        "Schengen, Gulf, UK, and Asian country visas",
        "Transparent step-by-step application updates",
      ],
      ctaText: "Inquire Visa Requirements",
      ctaHref: "#contact",
    },
    {
      id: "hajj-umrah",
      icon: <Moon className="w-6 h-6 text-[#D9822B]" />,
      badge: "VIP PACKAGES",
      badgeType: "green",
      title: "Hajj & Umrah Packages",
      tagline: "Sacred Journeys with Peace of Mind",
      description:
        "Comprehensive Umrah and Hajj packages tailored for pilgrims from Feni and beyond. From 5-star luxury hotels near Haram to budget-friendly options.",
      highlights: [
        "Walking distance 3★/4★/5★ hotels in Makkah & Madinah",
        "Experienced Islamic Moallim guide for Ziyarah",
        "Direct flights with AC luxury coach transport",
        "Umrah visa approval within 24-48 hours",
      ],
      ctaText: "View Umrah Packages",
      ctaHref: "#hajj-umrah",
    },
    {
      id: "hotel-tours",
      icon: <Building2 className="w-6 h-6 text-[#D9822B]" />,
      title: "Hotel Booking & Tour Packages",
      tagline: "Tailor-made Leisure & Corporate Travel",
      description:
        "Personalized holiday experiences in Thailand, Malaysia, Maldives, Dubai, Singapore, and domestic gems like Cox's Bazar and Sylhet.",
      highlights: [
        "Worldwide hotel reservations at special partner rates",
        "Customized family vacation and honeymoon tours",
        "Sightseeing transfers & local tour guide services",
        "Corporate retreats & group event management",
      ],
      ctaText: "Explore Tour Itineraries",
      ctaHref: "#contact",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F9FAFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D9822B] bg-[#FEF3E2] px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Complete Travel Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A3A23] font-serif tracking-tight mb-4">
            Our Core Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Delivering trusted visa processing, reliable air travel ticketing, and sacred pilgrimage journeys with personalized care from our Feni office.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#0A3A23] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative ${
                idx === 1 ? "md:col-span-2 lg:col-span-1 ring-1 ring-[#D9822B]/20" : ""
              }`}
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#0A3A23] to-[#D9822B] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

              <div>
                {/* Icon & Badge Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0A3A23]/5 group-hover:bg-[#0A3A23] flex items-center justify-center transition-colors duration-300">
                    <span className="group-hover:brightness-200 transition-all">
                      {service.icon}
                    </span>
                  </div>

                  {service.badge && (
                    <span
                      className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        service.badgeType === "gold"
                          ? "bg-[#FEF3E2] text-[#BF6F1E] border border-[#F7D29E]"
                          : "bg-[#edf7f1] text-[#0A3A23] border border-[#0A3A23]/20"
                      }`}
                    >
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0A3A23] transition-colors mb-1 font-serif">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-[#D9822B] mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 mb-6">
                  {service.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-[#0A3A23]/10 text-[#0A3A23] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={service.ctaHref}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#0A3A23] group-hover:text-[#D9822B] transition-colors"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}

          {/* Quick Help / Direct Consultation Card */}
          <div className="bg-gradient-to-br from-[#0A3A23] to-[#062416] text-white rounded-2xl p-7 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D9822B]/20 rounded-full blur-2xl" />
            <div>
              <span className="inline-block bg-[#D9822B] text-white text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded tracking-wide mb-3">
                Direct Consultation
              </span>
              <h3 className="text-2xl font-bold font-serif mb-2">
                Need Customized Assistance?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                Not sure which visa or ticket fits your schedule? Speak directly with our chief consultant at the Feni Center office.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15 mb-6 text-xs space-y-1.5">
                <p className="text-[#F7D29E] font-bold">Office Address:</p>
                <p className="text-slate-200">
                  Feni Center, 5th floor, Lift(4), Post Office Road, Feni
                </p>
              </div>
            </div>

            <a
              href="tel:01355289399"
              className="inline-flex items-center justify-center gap-2 bg-[#D9822B] hover:bg-[#BF6F1E] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md text-sm"
            >
              <span>Call 01355-289399</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
