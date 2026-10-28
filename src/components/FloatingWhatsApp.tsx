"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Quick Tooltip / Chat Prompt */}
      <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-gray-200 text-xs text-gray-800 font-semibold hidden sm:flex items-center gap-2 animate-bounce">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Chat with Feni Desk</span>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/8801355289399?text=Hello%20Daily%20Fly%20Travel!%20I%20need%20assistance%20with%20travel%20or%20visa."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative w-14 h-14 rounded-full bg-[#0A3A23] hover:bg-[#062416] text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-900/50 transition-all duration-300 transform hover:scale-110 group border-2 border-[#D9822B]"
        aria-label="Direct WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#D9822B] text-white flex items-center justify-center text-[9px] font-bold ring-2 ring-white">
          1
        </span>
        <MessageCircle className="w-7 h-7 text-[#F7D29E] group-hover:text-white transition-colors" />
      </a>
    </div>
  );
}
