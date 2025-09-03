"use client";

import { ReactNode } from "react";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-layout">
      <AuthProvider>
        <Navbar />
        <main>{children}</main>
      </AuthProvider>
    </div>
  );
}