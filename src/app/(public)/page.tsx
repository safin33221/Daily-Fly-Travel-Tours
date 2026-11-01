import React from "react";
import AnnouncementBar from "@/components/module/Home/AnnouncementBar";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/module/Home/HeroSection";
import QuickBookingWidget from "@/components/module/Home/QuickBookingWidget";
import ServicesSection from "@/components/module/Home/ServicesSection";
import WorkPermitsSection from "@/components/module/Home/WorkPermitsSection";
import PassportVisaInquirySection from "@/components/module/Home/PassportVisaInquirySection";
import HajjUmrahSection from "@/components/module/Home/HajjUmrahSection";
import WhyChooseUs from "@/components/module/Home/WhyChooseUs";
import LocationContactSection from "@/components/module/Home/LocationContactSection";
import FaqSection from "@/components/module/Home/FaqSection";
import Footer from "@/components/shared/Footer";
import FloatingWhatsApp from "@/components/module/Home/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Brand Navbar */}
      <Navbar />

      {/* Main Landing Content */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection />

        {/* Quick Booking & Inquiry Bar */}
        <QuickBookingWidget />

        {/* 4. Core Services Grid */}
        <ServicesSection />

        {/* 5. Active Work Permits Section (Albania & Europe) */}
        <WorkPermitsSection />

        {/* 5b. Passport & Visa Inquiry / Booking — 3-Step WhatsApp Form */}
        <PassportVisaInquirySection />

        {/* Dedicated Hajj & Umrah Section */}
        <HajjUmrahSection />

        {/* Trust & Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Location & Interactive Contact Form */}
        <LocationContactSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
