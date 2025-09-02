"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        {/* Brand */}
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img
            src="/images/logo.png"
            alt="Scribes Consulting logo"
            className="brand-logo"
          />
          <span className="brand-name">Scribes Consulting</span>
        </Link>

        {/* Toggle button (mobile) */}
        <button
          className={'nav-toggle ${menuOpen ? "active" : ""}'}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((p) => !p)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Nav */}
        <nav className="nav" aria-label="Main navigation">
          <ul className={'nav-menu ${menuOpen ? "show" : ""}'}>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li className="divider" aria-hidden="true"></li>
            <li><Link href="/contact" className="btn btn-outline" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link href="/signup" className="btn" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
            <li><Link href="/signin" className="btn ghost" onClick={() => setMenuOpen(false)}>Sign In</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}