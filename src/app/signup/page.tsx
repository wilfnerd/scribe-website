"use client";

import Link from "next/link";
import { useState, FormEvent, ChangeEvent } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { signup } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [strength, setStrength] = useState(0);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    let score = 0;
    if (/[a-z]/.test(value)) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;
    if (value.length >= 6) score++;

    setStrength(score);

    if (score < 5) {
      setPasswordError("Password does not meet all requirements.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (strength < 5) {
      setPasswordError("Password does not meet all requirements.");
      valid = false;
    }

    if (password !== confirm) {
      setConfirmError("Passwords do not match.");
      valid = false;
    }

    if (valid) {
      signup(name, email, password);
      router.push("/dashboard"); // ✅ redirect to dashboard
    }
  };

  return (
    <main>
      <section className="section auth-section">
        <div className="container auth-card">
          <h1>Create an Account</h1>
          <p className="lead">Sign up to get started with Scribes Consulting.</p>

          <form id="signupForm" className="auth-form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                className={emailError ? "input-error" : ""}
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                minLength={6}
                required
                className={strength < 5 ? "input-error" : ""}
              />
              <div className="strength-meter">
                <div
                  style={{
                    width: '${(strength / 5) * 100}%',
                    background:
                      strength <= 2 ? "red" : strength === 3 ? "orange" : "green",
                  }}
                />
              </div>
              <div className={'hint ${strength < 5 ? "hint-error" : ""}'}>
                Use 6+ characters with uppercase, lowercase, number, and symbol.
              </div>
              {passwordError && <div className="error-message">{passwordError}</div>}
            </label>

            <label>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                className={confirmError ? "input-error" : ""}
              />
              {confirmError && <div className="error-message">{confirmError}</div>}
            </label>

            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link href="/signin">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  );
}