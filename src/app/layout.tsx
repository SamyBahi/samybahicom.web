import { PropsWithChildren } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Providers from "./providers";
import axios from "axios";
axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.API_KEY}`,
};
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL + "/api";

const inter = Inter({ subsets: ["latin"] });

export type strapiImage = {
  data: {
    id: number;
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        };
        medium: {
          url: string;
        };
        thumbnail: {
          url: string;
        };
      };
    };
  };
};

export const metadata = {
  title: "Samy Bahi",
  description: "Software & Machine Learning engineer.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-primary text-secondary text-sm ${inter.className}`}
      >
        <Providers>
          <header className="relative md:sticky top-0 z-20 bg-primary">
            <Navbar></Navbar>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
