import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db from '@/lib/supabase/db';
import { ThemeProvider } from '@/lib/providers/next-theme-provider';
<<<<<<< HEAD
import Header from "@/components/landing-page/header";

import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = DM_Sans({ subsets: ["latin"] });
=======
import { DM_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import Header from "@/components/landing-page/header";

const inter = DM_Sans({ subsets: ['latin'] });
>>>>>>> e77342e0c499f3f16a6faccbdbc103fc22b66daf

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
<<<<<<< HEAD
      <body className={twMerge('bg-background')}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
         <Header/>
=======
      <body className={twMerge('bg-background', inter.className)}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <Header/>
>>>>>>> e77342e0c499f3f16a6faccbdbc103fc22b66daf
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
