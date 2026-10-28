"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the processing time and requirement for the Albania Work Permit?",
      a: "The Albania work permit generally takes between 45 to 90 days from the date of submission. Requirements include a valid passport with at least 2 years validity, attested police clearance certificate from the Ministry of Foreign Affairs, white-background passport photos, and a certified medical fitness test. Our Feni office assists you with all documentation screening.",
    },
    {
      q: "How can I verify that my European work permit is genuine before final payment?",
      a: "We maintain 100% legal transparency. When your work permit is approved by the Albanian or European Ministry of Labour, an official government registration number and electronic verification document are issued. You can verify this number through the respective ministry portal or embassy channel before proceeding to the visa stamping phase.",
    },
    {
      q: "What is included in the Daily Fly Hajj & Umrah packages?",
      a: "Our Umrah packages include electronic Umrah visa processing, round-trip international flight tickets, hotel accommodations in Makkah & Madinah (choice of 3★, 4★, or 5★ Clock Tower proximity), air-conditioned inter-city transport, historic Ziyarah tours, complimentary 5L Zamzam water, and guidance by an experienced Bangla-speaking Moallim scholar.",
    },
    {
      q: "Can I book urgent domestic or international air tickets through WhatsApp?",
      a: "Yes! Simply message us at 01355-289399 or click the WhatsApp button with your travel dates, origin, destination, and passport copy. We hold seats, quote the lowest airline price, and issue confirmed e-tickets directly to your phone within minutes.",
    },
    {
      q: "Where is the Daily Fly Travel & Tours physical office located?",
      a: "Our registered office is located at Feni Center, 5th Floor, Lift (4), Post Office Road, Feni, Bangladesh (Postal Code 3900). We are open Saturday through Thursday from 9:30 AM to 8:00 PM. On Fridays, our telephone and WhatsApp emergency desks remain active.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A3A23] bg-[#edf7f1] border border-[#0A3A23]/20 px-3.5 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0A3A23]" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A3A23] font-serif tracking-tight mb-3">
            Common Questions &amp; Clear Answers
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Everything you need to know about our visa policies, work permits, and flight bookings.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-[#F9FAFB] hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0A3A23] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
