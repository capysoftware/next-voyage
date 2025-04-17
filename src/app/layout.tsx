import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Kalam, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Next Voyage",
  description: "Travel Planner for Your Next Adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          inter.className,
          kalam.variable,
          `flex min-h-dvh flex-col gap-4 antialiased`,
        )}
      >
        <div className="pointer-events-none fixed inset-0 z-[-1] opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#e7a221_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <Header />
        <main className="mx-auto max-w-7xl p-8 pb-20">{children}</main>
        <Toaster richColors />
      </body>
    </html>
  );
}
