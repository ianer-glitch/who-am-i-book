"use client";

import {
  Geist,
  Geist_Mono,
  Londrina_Shadow,
  Nunito,
  Playwrite_US_Trad,
  Love_Ya_Like_A_Sister,
} from "next/font/google";
import "./globals.css";
import "primeicons/primeicons.css";
import { useThemeStore } from "@/shared/state/useThemeStore";
import { Header } from "./portfolio/components/header/Header";
import { useEffect } from "react";
import { useTranslation } from "@/shared/locales";

const londrinaShadow = Londrina_Shadow({
  variable: "--font-londrina-shadow",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
   subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playwrite = Playwrite_US_Trad({
  variable: "--font-playwrite",
  
});

const loveYaLikeASister = Love_Ya_Like_A_Sister({
  variable: "--font-love-you",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = useThemeStore();
  const { changeLanguage } = useTranslation();

  useEffect(() => {
    const browserDefaultLanguage = navigator.language.toLowerCase();
    if (browserDefaultLanguage == "ptbr") {
      changeLanguage("ptBr");
    } else {
      changeLanguage("enUs");
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      store.setCurrentTheme("dark");
    } else {
      store.setCurrentTheme("dark");
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`
            ${geistSans.variable} 
            ${geistMono.variable}store.p
            ${nunito.variable} 
            ${londrinaShadow.variable} 
            ${store.currentTheme} 
            ${playwrite.variable}
            ${loveYaLikeASister.variable}
            
            antialiased  `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
