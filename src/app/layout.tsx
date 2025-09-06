import type { Metadata } from "next";
import { Lora, JetBrains_Mono, Great_Vibes, Lato } from "next/font/google";
import "./globals.css";

import {ThemeProvider} from "@/components/theme-provider";
import {Navbar} from "@/components/global/navbar";
import Footer from "@/components/global/footer";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({ 
  subsets: ["latin"], 
  weight: "400" 
});

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

export const metadata: Metadata = {
  title: "SIWISDEM - Sistem Wisata Desa Sumberdem",
  description: "Website Sistem Wisata Desa Sumberdem Kabupaten Malang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.variable} ${lora.variable} ${lato.className} ${greatVibes.className} antialiased `}
      >
      <ThemeProvider attribute="class"
                      defaultTheme="light" // Set default theme to light
                      enableSystem disableTransitionOnChange>
        <div className="relative min-h-screen flex flex-col">
          <Navbar logo={{
            title: 'Siwisdem',
            url: '/',
            src: "/images/siwisdem.png",
            alt: "Logo Desa Sumberdem"
          }} />
          {children}
          <Footer />

        </div>

      </ThemeProvider>
      </body>
    </html>
);
}
