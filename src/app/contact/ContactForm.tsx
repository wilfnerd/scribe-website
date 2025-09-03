"use client"; // ← MUST be the very first line

import { useEffect } from "react";
import emailjs from "@emailjs/browser"; // npm i @emailjs/browser

export default function ContactForm() {
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // replace with your EmailJS public key
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
      .then(
        () => {
          alert("Message sent successfully! We'll get back to you soon.");
          form.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact section">
      <div className="container">
        <h2>Get In Touch</h2>
        <form id="contactForm" className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />

          <button type="submit" className="btn">Send</button>
        </form>

        <div className="info">
          <p><i className="fas fa-envelope"></i> writepathconsultinglimited@gmail.com</p>
          <p><i className="fas fa-phone"></i> +234-800-123-4567</p>
          <p><i className="fas fa-map-marker-alt"></i> Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );
}
