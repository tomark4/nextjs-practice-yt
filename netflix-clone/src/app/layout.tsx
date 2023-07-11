"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  session: Session | null;
  children: React.ReactNode;
}

export default function RootLayout({ children, session }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
