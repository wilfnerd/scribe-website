"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  // detect desktop breakpoint
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 720);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const showMenu = isDesktop || menuOpen;

  return (
    <header className="site-header" role="banner">
      <div className="container nav-wrap">
        {/* Brand */}
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img
            src="/images/logo.png"
            alt="Scribes Consulting logo"
            className="brand-logo"
            width={48}
            height={48}
          />
          <span className="brand-name">Scribes Consulting</span>
        </Link>

        {/* Toggle (hamburger). CSS handles bars + X animation */}
        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={showMenu}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((s) => !s)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Navigation */}
        <nav className="nav" aria-label="Main navigation">
          <ul
            id="primary-navigation"
            className={`nav-menu ${showMenu ? "show" : ""}`}
          >
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li className="divider" aria-hidden="true" />
            <li><Link href="/contact" className="btn-outline" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link href="/signup" className="btn" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
            <li><Link href="/signin" className="btn ghost" onClick={() => setMenuOpen(false)}>Sign In</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
