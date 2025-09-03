"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();
  const [category, setCategory] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [consultationDate, setConsultationDate] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Your request has been submitted!");
    // 🔗 later: send this data to backend
  };

  return (
    <main className="dashboard">
      <section className="container">
        <h1>Welcome back, {user?.name || "Client"}!</h1>
        <p className="lead">Let’s get started on your writing project.</p>

        {/* Home button */}
        <p>
          <Link href="/" className="btn btn-secondary">
            ← Back to Home
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="dashboard-form">
          <label>
            Select Category
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">-- Choose a category --</option>
              <option value="academic">Academic Writing</option>
              <option value="petition">Petition</option>
              <option value="business">Business Proposal</option>
              <option value="resume">Resume & Cover Letter</option>
            </select>
          </label>

          <label>
            Make an Enquiry
            <textarea
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
              placeholder="Type your enquiry here..."
              required
            />
          </label>

          <label>
            Book Consultation
            <input
              type="datetime-local"
              value={consultationDate}
              onChange={(e) => setConsultationDate(e.target.value)}
              required
            />
          </label>

          <label>
            Upload Files
            <input
              type="file"
              multiple
              accept=".doc,.docx,.pdf"
              onChange={handleFileChange}
            />
          </label>

          {files.length > 0 && (
            <ul className="file-list">
              {files.map((file, i) => (
                <li key={i}>{file.name}</li>
              ))}
            </ul>
          )}

          <button type="submit" className="btn">
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}