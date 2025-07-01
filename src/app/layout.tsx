'use client'

import { Geist, Geist_Mono,Londrina_Shadow } from "next/font/google";
import "./globals.css";
import 'primeicons/primeicons.css'
import { useThemeStore } from "@/shared/state/useThemeStore";
import { Header } from "./portfolio/components/header/Header";

const londrinaShadow = Londrina_Shadow({
  variable:"--font-londrina-shadow",
  subsets:["latin"],
  weight:"400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const store = useThemeStore()
  
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${londrinaShadow.variable} ${store.currentTheme} antialiased  `}
        >
        <Header/>
        {children}
      </body>
    </html>
  );
}
