"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export default function LocationContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Europe Work Permit (Albania)",
    passportNo: "",
    destination: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate quick submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppDirectLink = () => {
    const text = `*New Inquiry from Website - Daily Fly Travel*%0A*Name:* ${encodeURIComponent(
      formData.name || "Client"
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(
      formData.service
    )}%0A*Destination/Country:* ${encodeURIComponent(
      formData.destination || "N/A"
    )}%0A*Passport No:* ${encodeURIComponent(
      formData.passportNo || "N/A"
    )}%0A*Message:* ${encodeURIComponent(formData.message || "Please contact me.")}`;
    return `https://wa.me/8801355289399?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#F9FAFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#D9822B] bg-[#FEF3E2] px-3.5 py-1 rounded-full mb-3">
            Visit Us or Inquire Online
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A3A23] font-serif tracking-tight mb-4">
            Office Location &amp; Inquiries
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Conveniently situated in the heart of Feni on Post Office Road. Drop by for a cup of tea and in-person consultation, or send your passport details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 Cols): Office Details & Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Office Card */}
            <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A3A23]/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0A3A23] text-white flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A3A23] font-serif">
                    Feni Center Office
                  </h3>
                  <p className="text-xs text-gray-500">
                    Daily Fly Travel &amp; Tours Headquarters
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-5 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D9822B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold mb-0.5">
                      Physical Address:
                    </strong>
                    <p className="leading-snug text-gray-600">
                      Feni Center, 5th floor, Lift (4),
                      <br />
                      Post Office Road, Feni, Bangladesh, 3900.
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0A3A23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold mb-0.5">
                      Phone &amp; WhatsApp:
                    </strong>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:01355289399"
                        className="text-base font-bold text-[#0A3A23] hover:text-[#D9822B] transition-colors"
                      >
                        01355-289399
                      </a>
                      <a
                        href="tel:+8801355289399"
                        className="text-xs text-gray-500 hover:text-[#0A3A23] font-mono"
                      >
                        +880 1355-289399 (International)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D9822B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold mb-0.5">
                      Official Email:
                    </strong>
                    <a
                      href="mailto:dailyflytraveltours@gmail.com"
                      className="text-gray-600 hover:text-[#0A3A23] transition-colors break-all"
                    >
                      dailyflytraveltours@gmail.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0A3A23] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900 font-semibold mb-0.5">
                      Visiting Hours:
                    </strong>
                    <p className="text-gray-600">
                      Saturday – Thursday: 9:30 AM – 8:00 PM
                      <br />
                      <span className="text-xs text-gray-400">
                        Friday: Closed (On-Call &amp; WhatsApp Support Available)
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 pt-5 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:01355289399"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0A3A23] hover:bg-[#062416] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call Feni Desk</span>
                </a>

                <a
                  href="https://wa.me/8801355289399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D9822B] hover:bg-[#BF6F1E] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Feni Center Landmarks Note Card */}
            <div className="bg-[#edf7f1] rounded-2xl p-5 border border-[#0A3A23]/15 text-xs text-gray-700">
              <strong className="text-[#0A3A23] font-bold block mb-1">
                📍 How to Reach Our Office:
              </strong>
              <p className="leading-relaxed">
                Take the elevator/lift to <strong>Lift (4) - 5th Floor</strong> at Feni Center on Post Office Road. We are directly accessible from Feni Sadar and all regional transport stations.
              </p>
            </div>
          </div>

          {/* Right Column (7 Cols): Interactive Submission Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-gray-100 shadow-xl relative">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D9822B] block mb-1">
                Fast Online Submission
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A3A23] font-serif">
                Passport &amp; Visa Inquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Fill out the form below. Our visa counselor will review your eligibility and respond within a few hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#edf7f1] border border-[#0A3A23]/20 rounded-2xl p-8 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#0A3A23] text-white flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-[#0A3A23] font-serif mb-2">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name || "valued client"}</strong>. Our team at Feni Center has received your details regarding <strong>{formData.service}</strong> and will call you at <strong>{formData.phone}</strong> shortly.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D9822B] hover:bg-[#BF6F1E] text-white font-bold py-3 px-6 rounded-xl transition-all text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send details to WhatsApp Now</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        service: "Europe Work Permit (Albania)",
                        passportNo: "",
                        destination: "",
                        message: "",
                      });
                    }}
                    className="w-full sm:w-auto text-xs font-semibold text-gray-600 hover:text-[#0A3A23] underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammad Rahim"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0A3A23] focus:ring-1 focus:ring-[#0A3A23] transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 018XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0A3A23] focus:ring-1 focus:ring-[#0A3A23] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Desired Service */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0A3A23] focus:ring-1 focus:ring-[#0A3A23] transition-colors bg-white font-medium"
                    >
                      <option value="Europe Work Permit (Albania)">
                        🛂 Europe Work Permit (Albania) - Urgent
                      </option>
                      <option value="Europe Work Permit (Romania/Croatia)">
                        🛂 Europe Work Permit (Romania / Croatia)
                      </option>
                      <option value="Air Ticket Booking">
                        🎫 Air Ticket Booking (Domestic / International)
                      </option>
                      <option value="Hajj & Umrah Packages">
                        🕋 Hajj &amp; Umrah Packages
                      </option>
                      <option value="Tourist / Visit Visa Assistance">
                        🌐 Tourist / Visit Visa Assistance
                      </option>
                      <option value="Hotel & Holiday Tour Package">
                        🏨 Hotel &amp; Holiday Tour Package
                      </option>
                    </select>
                  </div>

                  {/* Destination / Country */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Target Country / Destination
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Albania, Saudi Arabia, UK"
                      value={formData.destination}
                      onChange={(e) =>
                        setFormData({ ...formData, destination: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0A3A23] focus:ring-1 focus:ring-[#0A3A23] transition-colors"
                    />
                  </div>
                </div>

                {/* Passport Number (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Passport Number{" "}
                    <span className="text-gray-400 font-normal">(Optional for pre-check)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. A01234567"
                    value={formData.passportNo}
                    onChange={(e) => setFormData({ ...formData, passportNo: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0A3A23] focus:ring-1 focus:ring-[#0A3A23] transition-colors uppercase font-mono"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your travel dates, preferred profession/trade, or any questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0A3A23] focus:ring-1 focus:ring-[#0A3A23] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0A3A23] hover:bg-[#062416] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D9822B]" />
                        <span>Submit Inquiry to Feni Office</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-gray-400 mt-2">
                    🔒 Your personal details and passport number are held strictly confidential.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
