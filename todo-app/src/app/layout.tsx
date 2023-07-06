import ToasterProvider from "@/providers/ToasterProvider";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Todo task app",
  description: "Todo task app with fastapi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ToasterProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
