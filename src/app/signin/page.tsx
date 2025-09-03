// src/app/signin/page.tsx
"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function SignInPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    alert("Sign in submitted!");
  };

  return (
    <main>
      {/* Hero / Auth Section */}
      <section className="section auth-section">
        <div className="container auth-card">
          <h1>Welcome Back</h1>
          <p className="lead">Sign in to continue to Scribes Consulting.</p>

          <form id="signinForm" className="auth-form" onSubmit={handleSubmit}>
            <label>
              Email
              <input type="email" name="email" required />
            </label>

            <label>
              Password
              <input type="password" name="password" minLength={6} required />
            </label>

            <button type="submit" className="btn">
              Sign In
            </button>
          </form>

          <p className="auth-switch">
            Don’t have an account?{" "}
            <Link href="/signup">Sign Up</Link>
          </p>
        </div>
      </section>
    </main>
  );
}