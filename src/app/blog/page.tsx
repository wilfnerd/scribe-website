// src/app/blog/page.tsx
import Image from "next/image";
import './blog.css';

export const metadata = {
  title: "Blog | WritePath Consulting",
  description:
    "Insights and resources from WritePath Consulting — guiding you with expert advice on immigration petitions, academic writing, media drafting, and more.",
};

// Blog posts data
const blogPosts = [
  {
    title: "Top 5 Mistakes to Avoid in Your Immigration Application",
    description:
      "Our experts share the common pitfalls applicants face and how WritePath can guide you through a smoother journey.",
    image: "/images/blog-immigration.jpg",
    link: "#",
    alt: "Immigration Consultation",
  },
  {
    title: "How Strong Academic Writing Opens Global Opportunities",
    description:
      "Learn how professional academic writing services can boost your research visibility and impact.",
    image: "/images/blog-academic.jpg",
    link: "#",
    alt: "Academic Writing",
  },
  {
    title: "Crafting a CV That Stands Out Internationally",
    description:
      "Strategies from WritePath consultants to position your skills for competitive global markets.",
    image: "/images/blog-cv.jpg",
    link: "#",
    alt: "Career Coaching",
  },
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero section">
        <div className="container hero-center">
          <h1>Insights & Resources</h1>
          <p className="lead">
            Stay updated with expert advice, immigration insights, academic guidance, and more —
            curated by WritePath Consulting.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section blog-list">
        <div className="container grid-3">
          {blogPosts.map((post, index) => (
            <article key={index} className="card reveal">
              <Image
                src={post.image}
                alt={post.alt}
                width={800}
                height={180}
                style={{ objectFit: "cover", width: "100%", height: "180px" }}
              />
              <h3>
                <a href={post.link}>{post.title}</a>
              </h3>
              <p>{post.description}</p>
              <a className="link" href={post.link}>
                Show more →
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
