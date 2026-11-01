"use client";

import React from "react";
import { ShieldCheck, MapPin, Award, Clock4, Users2, Banknote } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <MapPin className="w-6 h-6 text-[#D9822B]" />,
      title: "Physical Feni Center Office",
      description:
        "No faceless online brokers. Visit our comfortable 5th floor office at Feni Center for face-to-face consultation and physical passport safety.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D9822B]" />,
      title: "100% Legal & Verified Visas",
      description:
        "We submit directly to embassies and labor ministries. You receive authentic verification numbers to check your status online.",
    },
    {
      icon: <Banknote className="w-6 h-6 text-[#D9822B]" />,
      title: "Transparent & Honest Pricing",
      description:
        "Clear step-by-step cost breakdown with official company money receipts. No hidden fees or unexpected last-minute charges.",
    },
    {
      icon: <Clock4 className="w-6 h-6 text-[#D9822B]" />,
      title: "Fast Airfare & Instant Ticketing",
      description:
        "Direct IATA partner access enables us to hold seats, secure promotional fares, and process urgent flight date changes anytime.",
    },
    {
      icon: <Users2 className="w-6 h-6 text-[#D9822B]" />,
      title: "Dedicated Local Feni Team",
      description:
        "Our friendly staff assists you with documentation, police clearance attestation, medical bookings, and pre-flight orientations.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#D9822B]" />,
      title: "End-to-End Pilgrim Care",
      description:
        "Experienced Moallim scholars accompany your Umrah groups from departure in Dhaka to completion of all Manasik in the Holy Land.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0A3A23] bg-[#edf7f1] border border-[#0A3A23]/20 px-3.5 py-1 rounded-full mb-3">
            Why Travelers Choose Daily Fly
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A3A23] font-serif tracking-tight mb-4">
            Trust, Transparency &amp; Excellence
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Your foreign dreams and sacred journeys deserve genuine expertise. Here is why thousands of travelers across Feni trust Daily Fly Travel &amp; Tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#F9FAFB] border border-gray-100 hover:border-[#0A3A23]/30 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 group-hover:border-[#0A3A23] flex items-center justify-center mb-5 shadow-sm transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0A3A23] transition-colors mb-2 font-serif">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
