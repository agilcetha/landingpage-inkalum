import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Breadcrumb from "@/components/Breadcrumb"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inkalum Finished Goods",
  icons: {
    icon: "/images/logo-tab-light.png",  
    shortcut: "/images/logo-tab-light.png",
    apple: "/images/logo-tab-light.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="id">
      <body>
        <Navbar />
        
        <main className="pt-12">
         
          {children}</main>
        <Footer />
      </body>
    </html>
  );
}
