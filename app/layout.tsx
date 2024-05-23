import React from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";
// import { JetBrainsMono, NotoSansSC } from "@/styles/fonts";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
