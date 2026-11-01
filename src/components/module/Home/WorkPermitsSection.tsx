"use client";

import React, { useState } from "react";
import {
  Briefcase,
  AlertTriangle,
  Clock,
  CheckCircle,
  FileText,
  BadgeCheck,
  Send,
  PlaneTakeoff,
  Users,
  Building,
  ArrowRight,
} from "lucide-react";

interface CountryPermit {
  country: string;
  flag: string;
  status: "Urgent Requirement" | "Open Application" | "Upcoming";
  statusColor: string;
  processingTime: string;
  contractDuration: string;
  salaryRange: string;
  trades: string[];
  benefits: string[];
  featured?: boolean;
}

export default function WorkPermitsSection() {
  const [selectedCountry, setSelectedCountry] = useState("Albania");

  const permits: CountryPermit[] = [
    {
      country: "Albania",
      flag: "🇦🇱",
      status: "Urgent Requirement",
      statusColor: "bg-[#D9822B] text-white",
      processingTime: "45 - 90 Days",
      contractDuration: "1 Year (Renewable)",
      salaryRange: "€450 - €850 / month",
      trades: [
        "Construction & Civil Workers",
        "Heavy & Light Vehicle Drivers",
        "Hotel Waiters, Housekeeping & Chefs",
        "Warehouse Logistics & Packaging",
        "Agricultural & Greenhouse Workers",
        "General Laborers & Welders",
      ],
      benefits: [
        "Employer-provided accommodation & food/allowance",
        "Government work permit registered with Ministry of Labour",
        "Free health insurance coverage under Albanian labor law",
        "Pathway to Schengen/European residency eligibility",
      ],
      featured: true,
    },
    {
      country: "Romania",
      flag: "🇷🇴",
      status: "Open Application",
      statusColor: "bg-[#0A3A23] text-white",
      processingTime: "60 - 120 Days",
      contractDuration: "2 Years (Renewable)",
      salaryRange: "€550 - €950 / month",
      trades: [
        "Food Manufacturing Factory Workers",
        "Commercial Truck Drivers (CE)",
        "Carpenters, Plumbers & Electricians",
        "Restaurant Staff & Line Cooks",
      ],
      benefits: [
        "EU Member State standard working hours",
        "Accommodation provided by employer",
        "Overtime compensation provided",
      ],
    },
    {
      country: "Croatia",
      flag: "🇭🇷",
      status: "Open Application",
      statusColor: "bg-[#0A3A23] text-white",
      processingTime: "90 - 120 Days",
      contractDuration: "1 Year (Renewable)",
      salaryRange: "€650 - €1,100 / month",
      trades: [
        "Coastal Hotel & Resort Hospitality",
        "Civil & Infrastructure Construction",
        "Forklift Drivers & Warehouse Staff",
      ],
      benefits: [
        "Full Schengen area member",
        "Standard European social security",
        "Higher earning potential with summer bonuses",
      ],
    },
    {
      country: "Serbia & Poland",
      flag: "🇷🇸",
      status: "Open Application",
      statusColor: "bg-[#0A3A23] text-white",
      processingTime: "60 - 90 Days",
      contractDuration: "1 Year (Renewable)",
      salaryRange: "€500 - €850 / month",
      trades: [
        "Structural Steel & MIG/TIG Welders",
        "Agricultural Greenhouse Cultivators",
        "Auto Mechanics & Assembly Workers",
      ],
      benefits: [
        "Direct verified factory employment",
        "Accommodation & utility support included",
        "Legal embassy verification & visa stamping",
      ],
    },
  ];

  const currentPermit = permits.find((p) => p.country === selectedCountry) || permits[0];

  return (
    <section id="work-permits" className="py-20 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#0A3A23]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3E2] text-[#BF6F1E] text-xs font-bold uppercase tracking-wider mb-3">
              <AlertTriangle className="w-3.5 h-3.5 text-[#D9822B]" />
              Official Government Permits &bull; Verified Employers
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A3A23] font-serif tracking-tight">
              Active Europe Work Permits
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Daily Fly Travel &amp; Tours is the preferred gateway for legal European employment visas. Genuine embassy filings, transparent processing, and complete assistance in Feni.
            </p>
          </div>

          {/* Quick Contact Badge */}
          <div className="bg-[#edf7f1] border border-[#0A3A23]/15 rounded-xl p-4 flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#0A3A23] text-white flex items-center justify-center font-bold text-lg">
              📞
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Work Permit Hotline</p>
              <a
                href="tel:01355289399"
                className="text-base font-bold text-[#0A3A23] hover:text-[#D9822B] transition-colors"
              >
                01355-289399
              </a>
            </div>
          </div>
        </div>

        {/* Country Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {permits.map((item) => (
            <button
              key={item.country}
              onClick={() => setSelectedCountry(item.country)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 shrink-0 border ${
                selectedCountry === item.country
                  ? "bg-[#0A3A23] text-white border-[#0A3A23] shadow-md shadow-[#0A3A23]/20"
                  : "bg-[#F9FAFB] text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{item.flag}</span>
              <span>{item.country}</span>
              {item.featured && (
                <span className="bg-[#D9822B] text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                  Urgent
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Selected Country Spotlight Card */}
        <div className="bg-[#F9FAFB] rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: Details & Trades */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-3xl">{currentPermit.flag}</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A3A23] font-serif">
                  {currentPermit.country} Work Permit Visa
                </h3>
                <span
                  className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${currentPermit.statusColor}`}
                >
                  {currentPermit.status}
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                Legitimate employment opportunities approved by government ministries. All contracts are verified prior to embassy passport submission.
              </p>

              {/* Key Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#D9822B]" />
                    <span>Processing Time</span>
                  </div>
                  <p className="font-bold text-gray-900 text-sm">{currentPermit.processingTime}</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-[#0A3A23]" />
                    <span>Contract Period</span>
                  </div>
                  <p className="font-bold text-gray-900 text-sm">{currentPermit.contractDuration}</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                    <Building className="w-3.5 h-3.5 text-[#D9822B]" />
                    <span>Expected Salary</span>
                  </div>
                  <p className="font-bold text-[#0A3A23] text-sm">{currentPermit.salaryRange}</p>
                </div>
              </div>

              {/* Available Trades */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#0A3A23]" />
                  <span>Available Trades &amp; Job Categories</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentPermit.trades.map((trade, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-lg border border-gray-100 text-xs sm:text-sm font-medium text-gray-800"
                    >
                      <CheckCircle className="w-4 h-4 text-[#0A3A23] shrink-0" />
                      <span>{trade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#D9822B]" />
                  <span>Package &amp; Legal Inclusions</span>
                </h4>
                <ul className="space-y-2">
                  {currentPermit.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#D9822B] shrink-0 mt-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 5 Cols: Application Box */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-md">
              <div className="text-center pb-5 border-b border-gray-100 mb-5">
                <span className="inline-block bg-[#D9822B] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full mb-2">
                  Apply Today &bull; Quotas Filling Fast
                </span>
                <h4 className="text-xl font-bold text-[#0A3A23] font-serif">
                  Document Requirements
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Submit these documents to our Feni Center office
                </p>
              </div>

              <div className="space-y-3 mb-6 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#F9FAFB]">
                  <FileText className="w-4 h-4 text-[#0A3A23] shrink-0 mt-0.5" />
                  <span>
                    <strong>Original Passport</strong> (Minimum 2 years validity)
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#F9FAFB]">
                  <FileText className="w-4 h-4 text-[#0A3A23] shrink-0 mt-0.5" />
                  <span>
                    <strong>Police Clearance Certificate</strong> (Foreign Ministry attested)
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#F9FAFB]">
                  <FileText className="w-4 h-4 text-[#0A3A23] shrink-0 mt-0.5" />
                  <span>
                    <strong>Recent White Background Photos</strong> (35mm x 45mm)
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#F9FAFB]">
                  <FileText className="w-4 h-4 text-[#0A3A23] shrink-0 mt-0.5" />
                  <span>
                    <strong>Medical Fitness Report</strong> (From authorized diagnostic center)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/8801355289399?text=Hello%20Daily%20Fly%20Travel!%20I%20want%20to%20apply%20for%20the%20${currentPermit.country}%20Europe%20Work%20Permit.%20Please%20guide%20me.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#D9822B] hover:bg-[#BF6F1E] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Apply via WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#0A3A23] text-[#0A3A23] hover:bg-[#0A3A23] hover:text-white font-bold py-3 px-4 rounded-xl transition-all text-sm"
                >
                  <span>Book Consultation at Feni Office</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Step by Step Legal Transparency Roadmap */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-[#0A3A23] font-serif">
              Our 4-Stage Transparent Work Permit Process
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Zero ambiguity. Every milestone is verifiable directly by the applicant.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#0A3A23] text-white font-bold flex items-center justify-center text-sm mb-4">
                1
              </span>
              <h4 className="font-bold text-gray-900 text-base mb-2">Document Screening</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Physical passport verification, police clearance attestation, and CV evaluation at our Feni office.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#0A3A23] text-white font-bold flex items-center justify-center text-sm mb-4">
                2
              </span>
              <h4 className="font-bold text-gray-900 text-base mb-2">Permit Approval</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The foreign employer issues legal contract &amp; Ministry of Labour issues original work permit approval.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
              <span className="w-8 h-8 rounded-full bg-[#0A3A23] text-white font-bold flex items-center justify-center text-sm mb-4">
                3
              </span>
              <h4 className="font-bold text-gray-900 text-base mb-2">Embassy Stamping</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Submission to the designated European embassy, bio-metric appointment, and official visa sticker stamping.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative border-t-2 border-t-[#D9822B]">
              <span className="w-8 h-8 rounded-full bg-[#D9822B] text-white font-bold flex items-center justify-center text-sm mb-4">
                4
              </span>
              <h4 className="font-bold text-gray-900 text-base mb-2">Ticket &amp; Departure</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Airline flight ticketing, pre-departure orientation, and airport assistance until you arrive safely abroad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
