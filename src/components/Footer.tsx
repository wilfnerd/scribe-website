// src/components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid py-8">
        <div className="foot-brand">
          <Link href="/" className="brand">
            <img src="/images/logo.png" alt="Scribes Consulting logo" className="brand-logo" />
            <span className="brand-name">Scribes Consulting</span>
          </Link>
          <p className="foot-tag">Precision writing for petitions, academia, and media.</p>
          <p className="foot-mail"><a href="mailto:info@scribesconsulting.com">info@scribesconsulting.com</a></p>
        </div>

        <div className="foot-links">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="foot-social">
          <h4>Social</h4>
          <div className="social-row">
            <a className="social" href="#" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              {/* small inline LinkedIn SVG */}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7 19H4V9h3v10zM5.5 7.7C4.54 7.7 3.75 6.91 3.75 5.95 3.75 4.99 4.54 4.2 5.5 4.2s1.75.79 1.75 1.75c0 .96-.79 1.75-1.75 1.75zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V19h-3V9h2.9v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6V19z"/></svg>
            </a>

            <a className="social" href="#" aria-label="Twitter" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48C6.72 8.9 4.09 6.93 1.66 3.95a4.92 4.92 0 0 0 1.52 6.57c-.8-.03-1.55-.25-2.2-.61v.06a4.92 4.92 0 0 0 3.95 4.83c-.39.1-.81.15-1.24.15-.3 0-.6-.03-.89-.08a4.93 4.93 0 0 0 4.6 3.42 9.86 9.86 0 0 1-6.1 2.1c-.4 0-.79-.02-1.17-.07A13.9 13.9 0 0 0 7.56 21c9.05 0 14-7.5 14-14v-.64c.96-.7 1.8-1.56 2.46-2.55z"/></svg>
            </a>

            <a className="social" href="#" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.07 1.95.25 2.4.42.6.23 1.03.5 1.48.95.45.45.72.88.95 1.48.17.45.35 1.23.42 2.4.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.07 1.17-.25 1.95-.42 2.4-.23.6-.5 1.03-.95 1.48-.45.45-.88.72-1.48.95-.45.17-1.23.35-2.4.42-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.07-1.95-.25-2.4-.42-.6-.23-1.03-.5-1.48-.95-.45-.45-.72-.88-.95-1.48-.17-.45-.35-1.23-.42-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.07-1.17.25-1.95.42-2.4.23-.6.5-1.03.95-1.48.45-.45.88-.72 1.48-.95.45-.17 1.23-.35 2.4-.42C8.4 2.2 8.8 2.2 12 2.2z"/></svg>
            </a>

            <a className="social" href="#" aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99H8.1v-2.89h2.34V9.41c0-2.32 1.38-3.61 3.49-3.61.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.89h-2.1v6.99C18.34 21.12 22 17 22 12z"/>
                </svg> </a>
          </div>
        </div>
      </div>

      <div className="container foot-base">
        <p>© {new Date().getFullYear()} Scribes Consulting. All rights reserved.</p>
        <nav className="foot-legal">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
