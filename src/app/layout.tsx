import { PropsWithChildren } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samy Bahi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`bg-primaryl dark:bg-primaryd text-secondaryl ${inter.className}`}
      >
        <header className="md:sticky top-0 z-20">
          <Navbar></Navbar>
        </header>
        {children}
      </body>
    </html>
  );
}
