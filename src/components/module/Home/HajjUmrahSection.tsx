"use client";

import React from "react";
import { Moon, Sparkles, Check, Phone, ShieldCheck, HeartHandshake, Compass } from "lucide-react";

export default function HajjUmrahSection() {
  const packages = [
    {
      title: "Economy Umrah Package",
      duration: "14 Days / 13 Nights",
      priceTag: "Affordable & Comfortable",
      hotels: "3-Star Hotel (500m from Haram with 24/7 shuttle)",
      features: [
        "Umrah Electronic Visa processing included",
        "Direct round-trip air ticket (DAC-JED-DAC)",
        "Dedicated Islamic scholar / Moallim guide",
        "Full AC transport between Makkah & Madinah",
        "Historical Ziyarah tours in both holy cities",
        "Complimentary 5 Litre Zamzam water",
      ],
      ctaText: "Inquire Economy Package",
      recommended: false,
    },
    {
      title: "VIP Executive Umrah Package",
      duration: "15 Days / 14 Nights",
      priceTag: "Luxury Kaaba / Haram Proximity",
      hotels: "5-Star Hotel (Swissôtel / Clock Tower or equivalent)",
      features: [
        "Express VIP Umrah Visa approval",
        "Premium airline tickets with luggage allowance",
        "Direct walking distance (0 meters) to Haram",
        "Private VIP GMC / Luxury Coach transfers",
        "Dedicated senior scholar for all rituals & Duas",
        "Daily buffet breakfast & dinner options",
        "Special Ziyarah including Jabal al-Nour & Uhud",
      ],
      ctaText: "Book VIP Package",
      recommended: true,
    },
    {
      title: "Family & Custom Umrah",
      duration: "Customized Itinerary",
      priceTag: "Flexible Dates & Hotels",
      hotels: "Selected 4-Star / 5-Star Family Suites",
      features: [
        "Tailored for elderly pilgrims and children",
        "Wheelchair & personal assistance arrangements",
        "Choice of Makkah-first or Madinah-first routing",
        "Private family transport throughout Saudi Arabia",
        "Special Ramadan & holiday departures",
        "Direct guidance from Feni Center office",
      ],
      ctaText: "Customize My Umrah",
      recommended: false,
    },
  ];

  return (
    <section id="hajj-umrah" className="py-20 bg-[#0A3A23] text-white relative overflow-hidden">
      {/* Decorative Islamic motif pattern & golden blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9822B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9822B]/20 text-[#F7D29E] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D9822B]/40">
            <Moon className="w-3.5 h-3.5 text-[#D9822B]" />
            Sacred Pilgrimages &bull; Makkah &amp; Madinah
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white mb-4">
            Hajj &amp; Umrah Packages
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Perform your sacred pilgrimage with utmost comfort, religious guidance, and verified luxury or economy accommodations managed end-to-end by Daily Fly Travel.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.recommended
                  ? "bg-gradient-to-b from-white to-[#F9FAFB] text-gray-900 shadow-2xl ring-4 ring-[#D9822B] transform lg:-translate-y-2"
                  : "bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/15"
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#D9822B] text-white text-[11px] font-extrabold uppercase px-4 py-1 rounded-full shadow-md tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold font-serif mb-1 ${
                      pkg.recommended ? "text-[#0A3A23]" : "text-white"
                    }`}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    className={`text-xs font-semibold ${
                      pkg.recommended ? "text-[#D9822B]" : "text-[#F7D29E]"
                    }`}
                  >
                    {pkg.duration} &bull; {pkg.priceTag}
                  </p>
                </div>

                <div
                  className={`p-3 rounded-xl mb-6 text-xs font-medium ${
                    pkg.recommended
                      ? "bg-[#edf7f1] text-[#0A3A23] border border-[#0A3A23]/15"
                      : "bg-white/10 text-slate-200 border border-white/10"
                  }`}
                >
                  <span className="font-bold block mb-0.5">Hotel Accommodation:</span>
                  <span>{pkg.hotels}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                        pkg.recommended ? "text-gray-700" : "text-slate-200"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.recommended
                            ? "bg-[#0A3A23] text-white"
                            : "bg-[#D9822B] text-white"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={`https://wa.me/8801355289399?text=Assalamu%20Alaikum%20Daily%20Fly%20Travel!%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                  pkg.title
                )}.%20Please%20share%20departure%20dates%20and%20full%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 font-bold py-3.5 px-4 rounded-xl transition-all shadow-md text-sm ${
                  pkg.recommended
                    ? "bg-[#D9822B] hover:bg-[#BF6F1E] text-white shadow-[#D9822B]/30 hover:shadow-lg"
                    : "bg-white hover:bg-slate-100 text-[#0A3A23]"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>{pkg.ctaText}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Pilgrimage Guarantees */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="w-12 h-12 rounded-xl bg-[#D9822B]/20 text-[#D9822B] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Govt. Authorized Agent</h4>
              <p className="text-xs text-slate-300">Registered Hajj &amp; Umrah facilitator</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="w-12 h-12 rounded-xl bg-[#D9822B]/20 text-[#D9822B] flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Experienced Moallim</h4>
              <p className="text-xs text-slate-300">Bangla-speaking scholar throughout rituals</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="w-12 h-12 rounded-xl bg-[#D9822B]/20 text-[#D9822B] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Full Family Care</h4>
              <p className="text-xs text-slate-300">Special attention for seniors &amp; children</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
