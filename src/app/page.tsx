import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickBookingWidget from "@/components/QuickBookingWidget";
import ServicesSection from "@/components/ServicesSection";
import WorkPermitsSection from "@/components/WorkPermitsSection";
import HajjUmrahSection from "@/components/HajjUmrahSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationContactSection from "@/components/LocationContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
