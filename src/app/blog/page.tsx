"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero section">
        <div className="container hero-center">
          <h1>Insights &amp; Resources</h1>
          <p className="lead">
            Stay updated with expert advice, immigration insights, academic
            guidance, and more — curated by WritePath Consulting.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section blog-list">
        <div className="container grid-3">
          {/* Blog Post 1 */}
          <article className="card">
            <Image
              src="/images/blog-immigration.jpg"
              alt="Immigration Consultation"
              width={800}
              height={600}
            />
            <h3>
              <Link href="#">Top 5 Mistakes to Avoid in Your Immigration Application</Link>
            </h3>
            <p>
              Our experts share the common pitfalls applicants face and how
              WritePath can guide you through a smoother journey.
            </p>
            <Link className="link" href="#">
              Read more →
            </Link>
          </article>

          {/* Blog Post 2 */}
          <article className="card">
            <Image
              src="/images/blog-academic.jpg"
              alt="Academic Writing"
              width={800}
              height={600}
            />
            <h3>
              <Link href="#">How Strong Academic Writing Opens Global Opportunities</Link>
            </h3>
            <p>
              Learn how professional academic writing services can boost your
              research visibility and impact.
            </p>
            <Link className="link" href="#">
              Read more →
            </Link>
          </article>

          {/* Blog Post 3 */}
          <article className="card">
            <Image
              src="/images/blog-cv.jpg"
              alt="Career Coaching"
              width={800}
              height={600}
            />
            <h3>
              <Link href="#">Crafting a CV That Stands Out Internationally</Link>
            </h3>
            <p>
              Strategies from WritePath consultants to position your skills for
              competitive global markets.
            </p>
            <Link className="link" href="#">
              Read more →
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}