"use client";

import { ReactNode } from "react";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="admin-layout">
      <AuthProvider>
        <Navbar />
        <main>{children}</main>
      </AuthProvider>
    </div>
  );
}