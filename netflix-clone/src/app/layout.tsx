import "./globals.css";
import { Inter } from "next/font/google";
import AuthNextProvider from "@/providers/AuthNextProvider";
import MoviesProviders from "@/providers/MoviesProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix clone",
  description: "Whatever",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthNextProvider>
          <MoviesProviders>{children}</MoviesProviders>
        </AuthNextProvider>
      </body>
    </html>
  );
}
