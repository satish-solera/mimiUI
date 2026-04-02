
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ui works",
  description: "Accessible and keyboard supportable ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
      <ThemeProvider
      defaultTheme="system"
      enableSystem
      attribute="class">
        <div className="py-2 pl-20 border-b dark:border-b-gray-500 border-b-gray-200">
        <Navbar/>
        </div>
        <div className="">
          {children}
        </div>
      </ThemeProvider>
      </body>
    </html>
  );
}
