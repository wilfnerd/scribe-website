"use client"; // required for useState

import { useState } from "react";

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Immigration Petitions",
      subtitle: "EB1A • EB2-NIW • O-1",
      content:
        "Strategic drafting of petition letters, personal statements, expert letters, and exhibits. Every argument is evidence-driven, structured, and aligned with adjudicator expectations.",
    },
    {
      title: "Academic Writing",
      subtitle: "Research • Papers • Theses",
      content:
        "Support at every stage of academic publishing — manuscript structuring, literature framing, editing for clarity, and journal-specific formatting.",
    },
    {
      title: "Recommendation & Expert Letters",
      subtitle: "Faculty • Industry • Government",
      content:
        "Tailored, credible letters that strengthen applications or petitions. We match voice and background to highlight authentic authority.",
    },
    {
      title: "Media Piece Drafting",
      subtitle: "Features • Op-eds • Profiles",
      content:
        "Publication-ready narratives for press, blogs, or organizational outlets. Sharp angles, quotable lines, and strong editorial polish.",
    },
    {
      title: "Editing & Proofreading",
      subtitle: "Technical • Professional",
      content:
        "Comprehensive editing from line to structure, plus proofreading to ensure clarity, accuracy, and compliance with target guidelines.",
    },
    {
      title: "Business Plans & Proposals",
      subtitle: "Startups • SMEs • Projects",
      content:
        "Investor-ready plans and persuasive proposals. Structured, data-driven, and polished to inspire confidence and action.",
    },
  ];

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      {/* Hero */}
      <section className="services-hero section">
        <div className="container services-hero-grid">
          <div className="services-hero-copy">
            <h1>Our Services</h1>
            <p className="lead">
              Six specialized pillars designed to strengthen your petitions, publications, and communications.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="section services-detail">
        <div className="container">
          {services.map((service, index) => (
            <article
              key={index}
              className={`card ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleCard(index)}
            >
              <h2>
                {service.title} <span className="card-toggle">▼</span>
              </h2>
              <p className="card-sub">{service.subtitle}</p>
              <div className="card-content">
                <p>{service.content}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container cta-wrap">
          <h2>Need help with your next project?</h2>
          <p>Get in touch and let’s design a path that works for your goals.</p>
          <div className="cta-row">
            <a className="btn" href="/contact">Start a Project</a>
            <a className="btn btn-light" href="mailto:writepathconsultinglimited@gmail.com">Email Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
