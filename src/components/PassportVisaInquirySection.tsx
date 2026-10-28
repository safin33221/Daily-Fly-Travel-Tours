"use client";

import React, { useState, useEffect } from "react";
import {
  PlaneTakeoff,
  Globe2,
  Briefcase,
  User,
  Phone,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

// ─────────────────────────────────────────────
// Data Layer
// ─────────────────────────────────────────────
const DEPARTURE_CITIES = [
  { value: "Dhaka [DAC]", label: "✈️ Dhaka [DAC]" },
  { value: "Chattogram [CGP]", label: "✈️ Chattogram [CGP]" },
  { value: "Sylhet [ZYL]", label: "✈️ Sylhet [ZYL]" },
  { value: "Jashore [JSR]", label: "✈️ Jashore [JSR]" },
  { value: "Cox's Bazar [CXB]", label: "✈️ Cox's Bazar [CXB]" },
  { value: "Barishal [BZL]", label: "✈️ Barishal [BZL]" },
];

interface DestinationOption {
  value: string;
  label: string;
  flag: string;
  status: "urgent" | "open";
  statusLabel: string;
}

const DESTINATIONS: DestinationOption[] = [
  { value: "Albania", label: "Albania", flag: "🇦🇱", status: "urgent", statusLabel: "Urgent Requirement" },
  { value: "Romania", label: "Romania", flag: "🇷🇴", status: "open", statusLabel: "Open Application" },
  { value: "Croatia", label: "Croatia", flag: "🇭🇷", status: "open", statusLabel: "Open Application" },
  { value: "Serbia & Poland", label: "Serbia & Poland", flag: "🇷🇸", status: "open", statusLabel: "Open Application" },
];

const TRADE_BY_DESTINATION: Record<string, { value: string; label: string; icon: string }[]> = {
  Albania: [
    { value: "Construction & Civil Mason", label: "Construction & Civil Mason", icon: "🏗️" },
    { value: "Heavy & Light Vehicle Driver", label: "Heavy & Light Vehicle Driver", icon: "🚛" },
    { value: "Hotel, Restaurant & Chef Staff", label: "Hotel, Restaurant & Chef Staff", icon: "🍽️" },
    { value: "Warehouse & Logistics", label: "Warehouse & Logistics", icon: "📦" },
    { value: "Agriculture & Greenhouse Worker", label: "Agriculture & Greenhouse Worker", icon: "🌾" },
    { value: "General Labour & Welder", label: "General Labour & Welder", icon: "🔧" },
  ],
  Romania: [
    { value: "Food Manufacturing Worker", label: "Food Manufacturing Worker", icon: "🏭" },
    { value: "Commercial Truck Driver (CE)", label: "Commercial Truck Driver (CE)", icon: "🚚" },
    { value: "Carpenter, Plumber & Electrician", label: "Carpenter, Plumber & Electrician", icon: "🔌" },
    { value: "Restaurant Staff & Line Cook", label: "Restaurant Staff & Line Cook", icon: "🍽️" },
    { value: "Warehouse & Logistics", label: "Warehouse & Logistics", icon: "📦" },
  ],
  Croatia: [
    { value: "Coastal Hotel & Resort Hospitality", label: "Coastal Hotel & Resort Hospitality", icon: "🏨" },
    { value: "Civil & Infrastructure Construction", label: "Civil & Infrastructure Construction", icon: "🏗️" },
    { value: "Forklift Driver & Warehouse Staff", label: "Forklift Driver & Warehouse Staff", icon: "🏭" },
    { value: "Agriculture & Greenhouse Worker", label: "Agriculture & Greenhouse Worker", icon: "🌾" },
  ],
  "Serbia & Poland": [
    { value: "Structural Steel & MIG/TIG Welder", label: "Structural Steel & MIG/TIG Welder", icon: "⚙️" },
    { value: "Agricultural Greenhouse Cultivator", label: "Agricultural Greenhouse Cultivator", icon: "🌱" },
    { value: "Auto Mechanic & Assembly Worker", label: "Auto Mechanic & Assembly Worker", icon: "🔧" },
    { value: "Heavy & Light Vehicle Driver", label: "Heavy & Light Vehicle Driver", icon: "🚛" },
  ],
};

// ─────────────────────────────────────────────
// Step Indicator
// ─────────────────────────────────────────────
interface StepIndicatorProps {
  currentStep: number;
}

const STEPS = [
  { label: "Journey Details", icon: Globe2 },
  { label: "Your Information", icon: User },
  { label: "Send via WhatsApp", icon: MessageSquare },
];

function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8 sm:mb-10">
      {STEPS.map((step, idx) => {
        const Icon = step.icon;
        const stepNum = idx + 1;
        const isActive = currentStep === stepNum;
        const isDone = currentStep > stepNum;

        return (
          <React.Fragment key={stepNum}>
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2 ${
                  isDone
                    ? "bg-[#0A3A23] border-[#0A3A23] text-white shadow-md shadow-[#0A3A23]/30"
                    : isActive
                    ? "bg-[#D9822B] border-[#D9822B] text-white shadow-md shadow-[#D9822B]/40 scale-110"
                    : "bg-white border-gray-200 text-gray-400"
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </div>
              <span
                className={`text-[10px] sm:text-xs font-bold text-center hidden sm:block transition-colors ${
                  isActive ? "text-[#D9822B]" : isDone ? "text-[#0A3A23]" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>

            {idx < STEPS.length - 1 && (
              <div
                className={`h-0.5 flex-1 mx-2 sm:mx-3 mt-[-16px] sm:mt-[-18px] transition-all duration-500 ${
                  currentStep > stepNum ? "bg-[#0A3A23]" : "bg-gray-200"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// Custom Select Component
// ─────────────────────────────────────────────
interface SelectFieldProps {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
}

function SelectField({ label, icon, value, onChange, options, placeholder = "Select an option", error }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
        <span className="text-[#D9822B]">{icon}</span>
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none bg-white border-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-800 transition-all cursor-pointer pr-10 focus:outline-none focus:ring-2 focus:ring-[#D9822B]/30 ${
            error
              ? "border-red-400 focus:border-red-500"
              : value
              ? "border-[#0A3A23]/40 focus:border-[#0A3A23]"
              : "border-gray-200 focus:border-[#0A3A23]"
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
      {error && <p className="text-[11px] text-red-500 font-semibold">{error}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export default function PassportVisaInquirySection() {
  const [step, setStep] = useState(1);

  // Form state
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [trade, setTrade] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  // Error state
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset trade when destination changes
  useEffect(() => {
    setTrade("");
  }, [destination]);

  const destinationData = DESTINATIONS.find((d) => d.value === destination);
  const tradeOptions = destination ? TRADE_BY_DESTINATION[destination] || [] : [];

  // Validation
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!departure) newErrors.departure = "Please select your departure city.";
    if (!destination) newErrors.destination = "Please select a destination country.";
    if (!trade) newErrors.trade = "Please select a job sector.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 3)
      newErrors.fullName = "Please enter your full name (minimum 3 characters).";
    if (!phone.trim() || !/^[0-9+\-\s]{7,15}$/.test(phone.trim()))
      newErrors.phone = "Please enter a valid phone / WhatsApp number.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  };

  const buildWhatsAppUrl = () => {
    const message =
      `As-salamu alaykum! My name is ${fullName.trim()}. I want to apply for a work permit.\n` +
      `🛫 From: ${departure}\n` +
      `🌍 Destination: ${destinationData?.flag ?? ""} ${destination}\n` +
      `💼 Job Sector: ${trade}\n` +
      `📞 Contact: ${phone.trim()}`;
    return `https://wa.me/8801355289399?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="passport-visa-inquiry" className="py-20 bg-[#F9FAFB] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D9822B]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0A3A23]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9822B] bg-[#FEF3E2] border border-[#F7D29E] px-3.5 py-1.5 rounded-full mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            Passport & Visa Inquiry / Booking
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A3A23] font-serif tracking-tight mb-4">
            Apply for Your Work Permit{" "}
            <span className="text-[#D9822B]">in 3 Easy Steps</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Fill in the quick form below and connect directly with our team via WhatsApp. No waiting — get real answers within minutes.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ──────────── Left Info Panel ──────────── */}
          <div className="lg:col-span-4 space-y-5">
            {/* Trust Signals */}
            <div className="bg-gradient-to-br from-[#0A3A23] to-[#062416] rounded-2xl p-6 sm:p-7 text-white relative overflow-hidden shadow-lg">
              <div className="absolute -top-8 -right-8 w-36 h-36 bg-[#D9822B]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#D9822B]" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#F7D29E]">
                    Official Government Permits
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif mb-3 leading-snug">
                  Real Jobs. Real Visas.<br />
                  <span className="text-[#D9822B]">Zero Fraud Guarantee.</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  Every employer and work permit in our network is verified with the Ministry of Labour and authenticated through official embassy channels.
                </p>

                <div className="space-y-3">
                  {[
                    "100% Ministry of Labour Registered",
                    "Direct verified employer contracts",
                    "Embassy filing & bio-metric support",
                    "Pre-departure orientation included",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D9822B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-[11px] text-[#F7D29E] font-bold uppercase tracking-wider mb-1">Work Permit Hotline</p>
                  <a
                    href="tel:01355289399"
                    className="text-lg font-extrabold text-white hover:text-[#D9822B] transition-colors"
                  >
                    01355-289399
                  </a>
                </div>
              </div>
            </div>

            {/* Active Country Cards */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#D9822B]" />
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-700">
                  Active Work Permit Countries
                </h4>
              </div>
              <div className="space-y-2.5">
                {DESTINATIONS.map((dest) => (
                  <button
                    key={dest.value}
                    type="button"
                    onClick={() => {
                      setDestination(dest.value);
                      if (step > 1) setStep(1);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-left text-sm font-semibold transition-all duration-200 ${
                      destination === dest.value
                        ? "bg-[#0A3A23] text-white border-[#0A3A23]"
                        : "bg-[#F9FAFB] text-gray-700 border-gray-200 hover:border-[#0A3A23]/30 hover:bg-[#edf7f1]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{dest.flag}</span>
                      <span>{dest.label}</span>
                    </span>
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wide ${
                        dest.status === "urgent"
                          ? destination === dest.value
                            ? "bg-[#D9822B] text-white"
                            : "bg-[#FEF3E2] text-[#D9822B]"
                          : destination === dest.value
                          ? "bg-white/20 text-white"
                          : "bg-[#edf7f1] text-[#0A3A23]"
                      } ${dest.status === "urgent" ? "animate-pulse" : ""}`}
                    >
                      {dest.statusLabel}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/8801355289399"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-2xl p-4 sm:p-5 shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold">Chat on WhatsApp Now</p>
                <p className="text-xs text-green-100">+880 1355-289399 · Instant Reply</p>
              </div>
              <ArrowRight className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* ──────────── Right Form Panel ──────────── */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-8 lg:p-10">
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gray-100 mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A3A23] font-serif">
                    Work Permit Inquiry Form
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Step {step} of 3 &mdash;{" "}
                    {step === 1
                      ? "Select Journey & Job Details"
                      : step === 2
                      ? "Enter Your Contact Information"
                      : "Review & Send via WhatsApp"}
                  </p>
                </div>
                <span className="inline-block bg-[#FEF3E2] text-[#BF6F1E] text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-full border border-[#F7D29E]">
                  Free Consultation
                </span>
              </div>

              {/* Step Indicator */}
              <StepIndicator currentStep={step} />

              <form onSubmit={handleSubmit} noValidate>
                {/* ── STEP 1: Journey Details ── */}
                {step === 1 && (
                  <div className="space-y-5 animate-in fade-in duration-300">
                    <SelectField
                      label="Departure City / From"
                      icon={<PlaneTakeoff className="w-3.5 h-3.5" />}
                      value={departure}
                      onChange={setDeparture}
                      options={DEPARTURE_CITIES}
                      placeholder="Select your departure city"
                      error={errors.departure}
                    />

                    <div className="flex flex-col gap-1.5">
                      <label className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <Globe2 className="w-3.5 h-3.5 text-[#D9822B]" />
                        Destination Country
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {DESTINATIONS.map((dest) => (
                          <button
                            key={dest.value}
                            type="button"
                            onClick={() => setDestination(dest.value)}
                            className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl border-2 text-center text-xs font-bold transition-all duration-200 ${
                              destination === dest.value
                                ? "bg-[#0A3A23] border-[#0A3A23] text-white shadow-md shadow-[#0A3A23]/20"
                                : "bg-[#F9FAFB] border-gray-200 text-gray-700 hover:border-[#0A3A23]/40 hover:bg-[#edf7f1]"
                            }`}
                          >
                            <span className="text-2xl sm:text-3xl leading-none">{dest.flag}</span>
                            <span className="leading-tight">{dest.label}</span>
                            {dest.status === "urgent" && (
                              <span
                                className={`text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded tracking-wider ${
                                  destination === dest.value
                                    ? "bg-[#D9822B] text-white"
                                    : "bg-[#FEF3E2] text-[#D9822B]"
                                }`}
                              >
                                Urgent
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                      {errors.destination && (
                        <p className="text-[11px] text-red-500 font-semibold">{errors.destination}</p>
                      )}
                    </div>

                    {/* Trades dropdown (animated in when destination selected) */}
                    {destination && (
                      <div className="animate-in slide-in-from-top-2 duration-300">
                        <SelectField
                          label="Work Trade / Job Sector"
                          icon={<Briefcase className="w-3.5 h-3.5" />}
                          value={trade}
                          onChange={setTrade}
                          options={tradeOptions.map((t) => ({
                            value: t.value,
                            label: `${t.icon}  ${t.label}`,
                          }))}
                          placeholder={`Select a trade in ${destination}`}
                          error={errors.trade}
                        />
                      </div>
                    )}

                    {!destination && (
                      <div className="bg-[#FEF3E2] border border-[#F7D29E] rounded-xl px-4 py-3 text-xs text-[#BF6F1E] font-semibold flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        Select a destination country above to see available job sectors.
                      </div>
                    )}

                    {/* Selection Summary */}
                    {departure && destination && trade && (
                      <div className="bg-[#edf7f1] border border-[#0A3A23]/20 rounded-xl p-4 text-xs space-y-2 text-gray-700">
                        <p className="font-extrabold text-[#0A3A23] text-sm mb-1">✅ Your Selection Summary</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div>
                            <span className="text-gray-500 block">Departure</span>
                            <span className="font-bold">{departure}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">Destination</span>
                            <span className="font-bold">
                              {destinationData?.flag} {destination}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500 block">Job Sector</span>
                            <span className="font-bold">{trade}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ── STEP 2: Personal Info ── */}
                {step === 2 && (
                  <div className="space-y-5 animate-in fade-in duration-300">
                    <div className="flex flex-col gap-1.5">
                      <label className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <User className="w-3.5 h-3.5 text-[#D9822B]" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name (as in passport)"
                        className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-[#D9822B]/30 placeholder:text-gray-400 placeholder:font-normal ${
                          errors.fullName
                            ? "border-red-400 focus:border-red-500"
                            : fullName
                            ? "border-[#0A3A23]/40 focus:border-[#0A3A23]"
                            : "border-gray-200 focus:border-[#0A3A23]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 font-semibold">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <Phone className="w-3.5 h-3.5 text-[#D9822B]" />
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 01712-345678"
                        className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-[#D9822B]/30 placeholder:text-gray-400 placeholder:font-normal ${
                          errors.phone
                            ? "border-red-400 focus:border-red-500"
                            : phone
                            ? "border-[#0A3A23]/40 focus:border-[#0A3A23]"
                            : "border-gray-200 focus:border-[#0A3A23]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 font-semibold">{errors.phone}</p>
                      )}
                    </div>

                    {/* Review selected details */}
                    <div className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-5 text-sm space-y-3">
                      <p className="text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-3">
                        Confirming Your Journey Details
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-white rounded-lg p-3 border border-gray-100">
                          <p className="text-[10px] text-gray-400 font-semibold uppercase mb-1">From</p>
                          <p className="text-xs font-bold text-gray-800">{departure}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-100">
                          <p className="text-[10px] text-gray-400 font-semibold uppercase mb-1">Destination</p>
                          <p className="text-xs font-bold text-gray-800">
                            {destinationData?.flag} {destination}
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-100">
                          <p className="text-[10px] text-gray-400 font-semibold uppercase mb-1">Job Sector</p>
                          <p className="text-xs font-bold text-gray-800">{trade}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      <ShieldCheck className="inline w-3 h-3 text-[#0A3A23] mr-1" />
                      Your information is only shared with Daily Fly Travel &amp; Tours for the purpose of your visa application.
                    </p>
                  </div>
                )}

                {/* ── STEP 3: Preview & Send ── */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="bg-gradient-to-br from-[#0A3A23] to-[#062416] rounded-2xl p-5 sm:p-6 text-white">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#F7D29E] mb-3">
                        Your WhatsApp Message Preview
                      </p>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-sm text-slate-100 leading-relaxed font-mono whitespace-pre-wrap border border-white/10">
                        {`As-salamu alaykum! My name is ${fullName || "[Name]"}. I want to apply for a work permit.\n🛫 From: ${departure}\n🌍 Destination: ${destinationData?.flag ?? ""} ${destination}\n💼 Job Sector: ${trade}\n📞 Contact: ${phone || "[Phone]"}`}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="bg-[#F9FAFB] rounded-xl p-4 border border-gray-100">
                        <p className="text-gray-400 font-semibold mb-0.5">Sending To</p>
                        <p className="font-extrabold text-[#0A3A23]">Daily Fly Travel & Tours</p>
                        <p className="text-gray-500">+8801355289399</p>
                      </div>
                      <div className="bg-[#F9FAFB] rounded-xl p-4 border border-gray-100">
                        <p className="text-gray-400 font-semibold mb-0.5">Response Time</p>
                        <p className="font-extrabold text-[#0A3A23]">Within Minutes</p>
                        <p className="text-gray-500">Office hours: 9am – 9pm</p>
                      </div>
                    </div>

                    <div className="bg-[#FEF3E2] border border-[#F7D29E] rounded-xl px-4 py-3 text-xs text-[#BF6F1E] font-semibold flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>
                        Clicking the button below will open WhatsApp with the message pre-filled. Simply press &ldquo;Send&rdquo; to connect with our team.
                      </span>
                    </div>

                    {/* WhatsApp Submit Button */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] active:scale-[0.98] text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-green-500/30 transition-all duration-200 text-base group"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>Send Inquiry via WhatsApp</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-center text-[11px] text-gray-400">
                      You&apos;ll be redirected to WhatsApp with your message pre-filled.
                      <br />
                      Not on WhatsApp?{" "}
                      <a href="tel:01355289399" className="text-[#0A3A23] font-bold hover:underline">
                        Call us directly
                      </a>
                    </p>
                  </div>
                )}

                {/* ── Navigation Buttons ── */}
                <div
                  className={`mt-8 pt-6 border-t border-gray-100 flex items-center gap-3 ${
                    step === 1 ? "justify-end" : "justify-between"
                  }`}
                >
                  {step > 1 && step < 3 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-[#0A3A23] hover:text-[#0A3A23] transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>
                  )}

                  {step === 3 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-[#0A3A23] hover:text-[#0A3A23] transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Edit Details
                    </button>
                  )}

                  {step < 3 && (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 bg-[#D9822B] hover:bg-[#BF6F1E] active:scale-[0.98] text-white font-extrabold px-7 py-3.5 rounded-xl shadow-md shadow-[#D9822B]/30 transition-all text-sm group"
                    >
                      <span>
                        {step === 1 ? "Continue to Contact Info" : "Review & Preview Message"}
                      </span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

