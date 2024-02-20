import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db from '@/lib/supabase/db';
import { ThemeProvider } from '@/lib/providers/next-theme-provider';
import Header from "@/components/landing-page/header";

import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(db);
  return (
    <html lang="en">
      <body className={twMerge('bg-background')}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
         <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
