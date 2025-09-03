"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="logo">
          Scribes Consulting
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <button onClick={logout} className="btn-logout">
                Log Out
            </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}