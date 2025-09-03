// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "../context/AuthContext";
import LayoutWrapper from "../components/LayoutWrapper"; // new client wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scribes Consulting",
  description: "Precision writing for petitions, academia, and media.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}