import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Medical Voice Agent",
  description: "Intelligent AI-powered medical voice assistant to improve patient care",
  keywords: ["AI", "Medical", "Voice Assistant", "Healthcare", "Doctor"],
  authors: [{ name: "Your Name", url: "https://ai-voice-agent-for-medical.vercel.app/" }],
  // Open Graph / social sharing
  openGraph: {
    title: "AI Medical Voice Agent",
    description: "Intelligent AI-powered medical voice assistant to improve patient care",
    url: "https://ai-voice-agent-for-medical.vercel.app/",
    siteName: "AI Medical Voice Agent",
    images: [
      {
        url: "/consultation-tech.png", // Public folder path
        width: 1200,
        height: 630,
        alt: "AI Medical Voice Assistant",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
