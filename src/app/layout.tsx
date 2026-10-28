import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dailyflytravel.com"),
  title: "Daily Fly Travel & Tours | Explore The World With Us",
  description:
    "Daily Fly Travel & Tours - Trusted agency for Air Ticket Booking, Visa Assistance, Europe Work Permits (Albania & more), and sacred Hajj & Umrah packages. Located at Feni Center, Feni, Bangladesh. Call: 01355-289399.",
  keywords: [
    "Daily Fly Travel & Tours",
    "Air Ticket Feni",
    "Europe Work Permit Bangladesh",
    "Albania Work Permit Visa",
    "Hajj Umrah Agency Feni",
    "Feni Travel Agency",
    "Visa Assistance Feni",
    "Softilo Agency",
  ],
  authors: [{ name: "Daily Fly Travel & Tours" }, { name: "Softilo" }],
  openGraph: {
    title: "Daily Fly Travel & Tours | Explore The World With Us",
    description:
      "Premier travel and visa consultancy in Feni. Air Tickets, Europe Work Permits (Albania), Hajj & Umrah packages.",
    url: "https://dailyflytravel.com",
    siteName: "Daily Fly Travel & Tours",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Daily Fly Travel & Tours Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#1F2937] bg-[#F9FAFB] selection:bg-[#0A3A23] selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
