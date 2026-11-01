"use client";

import React from "react";
import { AlertCircle, PhoneCall, ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#0A3A23] text-white border-b border-[#062416] py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium relative z-50 overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Ticker / Urgent Alert */}
        <div className="flex items-center gap-2 overflow-hidden w-full md:w-auto">
          <span className="inline-flex items-center gap-1.5 bg-[#D9822B] text-white font-bold px-2.5 py-0.5 rounded-full text-[11px] tracking-wide uppercase shrink-0 shadow-sm animate-pulse">
            <AlertCircle className="w-3.5 h-3.5" />
            Urgent Notice
          </span>
          <p className="truncate text-slate-100 font-medium">
            <span className="text-[#F7D29E] font-semibold">Europe Work Permit Visa Open</span>{" "}
            (Albania & More)! Limited quotas available for 2026.
          </p>
        </div>

        {/* Right: Quick CTA Buttons */}
        <div className="flex items-center gap-3 shrink-0 self-end md:self-auto text-xs">
          <a
            href="tel:01355289399"
            className="inline-flex items-center gap-1.5 text-[#F7D29E] hover:text-white transition-colors font-semibold"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#D9822B]" />
            <span>01355-289399</span>
          </a>
          <span className="text-white/30 hidden sm:inline">|</span>
          <a
            href="#work-permits"
            className="hidden sm:inline-flex items-center gap-1 bg-[#D9822B]/20 hover:bg-[#D9822B] text-[#F7D29E] hover:text-white px-2.5 py-1 rounded transition-all duration-200 border border-[#D9822B]/40 hover:border-[#D9822B]"
          >
            <span>Apply for Albania</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
