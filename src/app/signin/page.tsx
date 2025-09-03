"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
    router.push("/dashboard"); // ✅ redirect to dashboard
  };

  return (
    <main>
      <section className="section auth-section">
        <div className="container auth-card">
          <h1>Welcome Back</h1>
          <p className="lead">Sign in to continue to Scribes Consulting.</p>

          <form id="signinForm" className="auth-form" onSubmit={handleSubmit}>
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

            <label>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
            </label>

            <button type="submit" className="btn">
              Sign In
            </button>
          </form>

          <p className="auth-switch">
            Don’t have an account? <Link href="/signup">Sign Up</Link>
          </p>
        </div>
      </section>
    </main>
  );
}