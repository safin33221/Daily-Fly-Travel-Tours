"use client";

import React, { useState } from "react";
import { Plane, Briefcase, Moon, Globe2, ArrowRight, MessageSquare } from "lucide-react";

type ServiceTab = "flights" | "work-permit" | "umrah" | "visa";

export default function QuickBookingWidget() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("work-permit");
  const [formData, setFormData] = useState({
    origin: "Dhaka (DAC)",
    destination: "Tirana, Albania (TIA)",
    country: "Albania",
    trade: "Construction & Heavy Driver",
    umrahPackage: "VIP Executive 5-Star",
    visaCountry: "Europe / Schengen",
    phone: "",
  });

  const getWhatsAppLink = () => {
    let msg = "";
    if (activeTab === "flights") {
      msg = `Hello Daily Fly Travel! I want to check flight fares from ${formData.origin} to ${formData.destination}.`;
    } else if (activeTab === "work-permit") {
      msg = `Hello Daily Fly Travel! I am interested in applying for Europe Work Permit for ${formData.country} in trade: ${formData.trade}. Please share requirements and processing details.`;
    } else if (activeTab === "umrah") {
      msg = `Assalamu Alaikum Daily Fly Travel! I want to inquire about the ${formData.umrahPackage} package.`;
    } else {
      msg = `Hello Daily Fly Travel! I need visa assistance for ${formData.visaCountry}. Please guide me on documentation.`;
    }
    return `https://wa.me/8801355289399?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 backdrop-blur-md">
        {/* Tab Headers */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-4 border-b border-gray-100 no-scrollbar">
          <button
            onClick={() => setActiveTab("work-permit")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shrink-0 ${
              activeTab === "work-permit"
                ? "bg-[#0A3A23] text-white shadow-md shadow-[#0A3A23]/20"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Briefcase className="w-4 h-4 text-[#D9822B]" />
            <span>Europe Work Permit</span>
            <span className="bg-[#D9822B] text-white text-[10px] px-1.5 py-0.2 rounded font-extrabold uppercase ml-1">
              Urgent
            </span>
          </button>

          <button
            onClick={() => setActiveTab("flights")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shrink-0 ${
              activeTab === "flights"
                ? "bg-[#0A3A23] text-white shadow-md shadow-[#0A3A23]/20"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Plane className="w-4 h-4 text-[#D9822B]" />
            <span>Air Tickets</span>
          </button>

          <button
            onClick={() => setActiveTab("umrah")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shrink-0 ${
              activeTab === "umrah"
                ? "bg-[#0A3A23] text-white shadow-md shadow-[#0A3A23]/20"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Moon className="w-4 h-4 text-[#D9822B]" />
            <span>Hajj &amp; Umrah</span>
          </button>

          <button
            onClick={() => setActiveTab("visa")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shrink-0 ${
              activeTab === "visa"
                ? "bg-[#0A3A23] text-white shadow-md shadow-[#0A3A23]/20"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Globe2 className="w-4 h-4 text-[#D9822B]" />
            <span>Visa Assistance</span>
          </button>
        </div>

        {/* Dynamic Fields */}
        <div className="pt-4 sm:pt-5 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {activeTab === "work-permit" && (
            <>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Target Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#0A3A23]"
                >
                  <option value="Albania">🇦🇱 Albania (Urgent Requirement)</option>
                  <option value="Romania">🇷🇴 Romania (Factory &amp; Logistics)</option>
                  <option value="Croatia">🇭🇷 Croatia (Construction &amp; Tourism)</option>
                  <option value="Serbia">🇷🇸 Serbia / Poland</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Job Trade / Sector
                </label>
                <select
                  value={formData.trade}
                  onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                  className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#0A3A23]"
                >
                  <option value="Construction & Mason">Construction &amp; Civil Mason</option>
                  <option value="Heavy & Light Driver">Driver (Heavy / Light / Forklift)</option>
                  <option value="Hospitality & Waiter/Chef">Hotel, Restaurant &amp; Chefs</option>
                  <option value="Warehouse & Packing">Warehouse &amp; Logistics Staff</option>
                  <option value="Agriculture & Farming">Agriculture &amp; Greenhouse</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Visa Status Check
                </label>
                <div className="bg-[#FEF3E2] border border-[#F7D29E] rounded-lg px-3 py-2.5 text-xs text-[#BF6F1E] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D9822B] animate-ping" />
                  <span>2026 Quota Open Now</span>
                </div>
              </div>
            </>
          )}

          {activeTab === "flights" && (
            <>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Departure From
                </label>
                <input
                  type="text"
                  value={formData.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#0A3A23]"
                  placeholder="e.g. Dhaka (DAC)"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Destination
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#0A3A23]"
                  placeholder="e.g. Tirana, Jeddah, London"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Ticket Class
                </label>
                <select className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#0A3A23]">
                  <option>Economy Class (Lowest Fare)</option>
                  <option>Premium Economy</option>
                  <option>Business Class</option>
                </select>
              </div>
            </>
          )}

          {activeTab === "umrah" && (
            <>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Package Type
                </label>
                <select
                  value={formData.umrahPackage}
                  onChange={(e) => setFormData({ ...formData, umrahPackage: e.target.value })}
                  className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#0A3A23]"
                >
                  <option value="VIP Executive 5-Star">VIP Executive 5-Star (Near Haram)</option>
                  <option value="Deluxe 4-Star Umrah">Deluxe 4-Star (Walking Distance)</option>
                  <option value="Economy Umrah (14 Days)">Economy Umrah (Budget Friendly)</option>
                  <option value="Ramadan Special Umrah">Ramadan Special 2026</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Pilgrim Travelers
                </label>
                <select className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#0A3A23]">
                  <option>1 Person (Individual)</option>
                  <option>2 Persons (Couple)</option>
                  <option>3-5 Persons (Family)</option>
                  <option>Group (6+ Persons)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Includes
                </label>
                <div className="bg-[#edf7f1] border border-[#0A3A23]/20 rounded-lg px-3 py-2.5 text-xs text-[#0A3A23] font-semibold">
                  ✓ Visa + Hotel + Moallim + Transport
                </div>
              </div>
            </>
          )}

          {activeTab === "visa" && (
            <>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Destination Country
                </label>
                <input
                  type="text"
                  value={formData.visaCountry}
                  onChange={(e) => setFormData({ ...formData, visaCountry: e.target.value })}
                  className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#0A3A23]"
                  placeholder="e.g. UK, USA, Schengen, Canada"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Visa Category
                </label>
                <select className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#0A3A23]">
                  <option>Tourist / Visit Visa</option>
                  <option>Business Visa</option>
                  <option>Student Visa Consultation</option>
                  <option>Medical Treatment Visa</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Consultation
                </label>
                <div className="bg-[#edf7f1] border border-[#0A3A23]/20 rounded-lg px-3 py-2.5 text-xs text-[#0A3A23] font-semibold">
                  ✓ Free Document Screening at Feni Office
                </div>
              </div>
            </>
          )}

          {/* Action Button */}
          <div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#D9822B] hover:bg-[#BF6F1E] text-white font-bold py-2.5 px-4 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Instant Quote</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
