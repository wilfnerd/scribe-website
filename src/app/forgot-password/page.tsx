"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // For now: just simulate sending email
    setMessage(
      "If this email is registered, you’ll receive a password reset link shortly."
    );

    // Later: connect to backend (Supabase/Firebase)
  };

  return (
    <main>
      <section className="section auth-section">
        <div className="container auth-card">
          <h1>Forgot Password</h1>
          <p className="lead">Enter your email to reset your password.</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <button type="submit" className="btn">
              Send Reset Link
            </button>
          </form>

          {message && (
            <>
              <p className="success-message">{message}</p>

              {/* Demo reset link (remove once backend is connected) */}
              <p className="auth-switch">
                <Link href="/reset-password">Demo: Go to Reset Password</Link>
              </p>
            </>
          )}

          <p className="auth-switch">
            <Link href="/signin">Back to Sign In</Link>
          </p>
        </div>
      </section>
    </main>
  );
}