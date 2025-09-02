// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Guiding you to the right path.</h1>
            <p className="lead">
              We turn complex stories into compelling documents — from{" "}
              <strong>EB-class petitions (EB1A, EB2-NIW, O-1)</strong> to{" "}
              <strong>academic manuscripts</strong>,{" "}
              <strong>media features</strong>, and{" "}
              <strong>expert & recommendation letters</strong>. Clear.
              Persuasive. On time.
            </p>
            <div className="cta-row">
              <Link href="/services" className="btn">
                Explore Services
              </Link>
              <Link href="/contact" className="btn btn-light">
                Get a Free Review
              </Link>
            </div>
            <p className="micro">
              Prefer email?{" "}
              <a href="mailto:writepathconsultinglimited@gmail.com">
                writepathconsultinglimited@gmail.com
              </a>
            </p>
          </div>

          <div className="hero-media">
            <div className="hero-card">
              <Image
                src="/images/hero-writing.jpg"
                alt="Professional writing and strategy"
                width={600}
                height={400}
              />
            </div>
            <ul className="trust-badges">
              <li>
                <i className="fas fa-pen-nib"></i> Professional writing &
                strategy
              </li>
              <li>
                <i className="fas fa-users"></i> Client-first process
              </li>
              <li>
                <i className="fas fa-lock"></i> Confidential & secure
              </li>
              <li>
                <i className="fas fa-clock"></i> On-time delivery
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <header className="section-head">
            <h2>What we do</h2>
            <p>Six focused service pillars designed to support your goals end-to-end.</p>
          </header>

          <div className="cards grid-3">
            <article className="card">
              <h3>Immigration Petitions</h3>
              <p className="card-sub">EB1A • EB2-NIW • O-1</p>
              <p>
                Strategic drafting of petition letters, personal statements,
                expert letters, and exhibits — researched, organized, and
                written for clarity and impact.
              </p>
              <Link href="/services#immigration" className="link">
                Learn more →
              </Link>
            </article>

            <article className="card">
              <h3>Academic Writing</h3>
              <p className="card-sub">Research • Papers • Theses</p>
              <p>
                Manuscript development, literature structuring, clarity edits,
                and formatting that meets journal and institutional standards.
              </p>
              <Link href="/services#academic" className="link">
                Learn more →
              </Link>
            </article>

            <article className="card">
              <h3>Recommendation & Expert Letters</h3>
              <p className="card-sub">Faculty • Industry • Government</p>
              <p>
                Credible, evidence-anchored letters tailored to the reviewer,
                with voice matching and document packaging for petitions or
                applications.
              </p>
              <Link href="/services#letters" className="link">
                Learn more →
              </Link>
            </article>

            <article className="card">
              <h3>Media Piece Drafting</h3>
              <p className="card-sub">Features • Op-eds • Profiles</p>
              <p>
                Publication-ready narratives that communicate your value to the
                public — crisp angles, quotable lines, and editorial polish.
              </p>
              <Link href="/services#media" className="link">
                Learn more →
              </Link>
            </article>

            <article className="card">
              <h3>Editing & Proofreading</h3>
              <p className="card-sub">Technical • Professional</p>
              <p>
                Line edits, structural edits, and final-pass proofreading to
                ensure tone, style, and compliance with the target guideline.
              </p>
              <Link href="/services#editing" className="link">
                Learn more →
              </Link>
            </article>

            <article className="card">
              <h3>Business Plans & Proposals</h3>
              <p className="card-sub">Startups • SMEs • Projects</p>
              <p>
                Professional business plans and persuasive proposals tailored to
                investors, partners, or stakeholders — structured, data-driven,
                and polished for impact.
              </p>
              <Link href="/services#business" className="link">
                Learn more →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process">
        <div className="container">
          <header className="section-head">
            <h2>How we work</h2>
            <p>A transparent, collaborative process that respects your time.</p>
          </header>

          <ul className="steps">
            <li><strong>Discovery:</strong> We review your goals, background, and timelines, then outline an approach.</li>
            <li><strong>Evidence Map:</strong> We structure proofs, references, and exhibits in a coherent narrative.</li>
            <li><strong>Drafting:</strong> We write with precision, aligning with adjudicator or editorial expectations.</li>
            <li><strong>Refinement:</strong> You review; we iterate quickly with tracked feedback.</li>
            <li><strong>Delivery:</strong> Final documents packaged, formatted, and ready to submit or publish.</li>
          </ul>
        </div>
      </section>

      {/* Results / Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <header className="section-head">
            <h2>Results that speak</h2>
            <p>Selected notes from clients across academia, tech, and the arts.</p>
          </header>

          <div className="quotes grid-3">
            <blockquote className="quote">
              <p>“They turned my scattered materials into a sharp EB2-NIW petition. The structure and exhibits were spot-on.”</p>
              <cite>— Research Scientist</cite>
            </blockquote>
            <blockquote className="quote">
              <p>“Editorially excellent. Our op-ed got picked up in two outlets and drove real attention to our work.”</p>
              <cite>— Nonprofit Director</cite>
            </blockquote>
            <blockquote className="quote">
              <p>“Clear deadlines, thoughtful feedback, and a final letter that read authentically like me.”</p>
              <cite>— University Faculty</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section blog-preview">
        <div className="container">
          <header className="section-head">
            <h2>From our blog</h2>
            <p>Guides and insights for stronger applications and publishing.</p>
          </header>

          <div className="cards grid-3">
            <article className="card">
              <h3><Link href="/blog">EB2-NIW: What Reviewers Look For</Link></h3>
              <p>Signals of impact, evidence structuring, and common pitfalls to avoid.</p>
              <Link href="/blog" className="link">Read more →</Link>
            </article>
            <article className="card">
              <h3><Link href="/blog">Writing Strong Expert Letters</Link></h3>
              <p>Voice, credibility, and how to anchor claims without over-stating.</p>
              <Link href="/blog" className="link">Read more →</Link>
            </article>
            <article className="card">
              <h3><Link href="/blog">Academic Editing: A Practical Checklist</Link></h3>
              <p>From structure to references — steps to a cleaner, faster acceptance.</p>
              <Link href="/blog" className="link">Read more →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta">
        <div className="container cta-wrap">
          <h2>Ready to move forward?</h2>
          <p>
            Send your brief for a free, no-obligation review. We’ll advise on
            scope, timeline, and best next steps.
          </p>
          <div className="cta-row">
            <Link href="/contact" className="btn">Start a Project</Link>
            <a className="btn btn-light" href="mailto:writepathconsultinglimited@gmail.com">Email Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}