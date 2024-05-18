import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

const quickSand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Level Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quickSand.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
