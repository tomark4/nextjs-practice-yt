import "./globals.css";
import { Inter } from "next/font/google";
import AuthNextProvider from "@/providers/AuthNextProvider";
import type { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix clone",
  description: "Whatever",
};

interface Props {
  children: React.ReactNode;
  session: Session | null;
}

export default function RootLayout({ children, session }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthNextProvider session={session}>{children}</AuthNextProvider>
      </body>
    </html>
  );
}
