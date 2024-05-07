import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarHub",
  description: "Discover the best cars out there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
