import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const montserrat_init = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Xplorers Gym",
  description: "Xplorers Fitness Website, Gym, Fitness, Recreational Facility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat_init.variable} montserrat text-gray-300 bg-cover bg-center h-screen bg-bulls-eye text-base/[1.7] overflow-x-hidden`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
