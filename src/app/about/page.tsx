import Link from "next/link";

export const metadata = {
  title: "About Us | Scribes Consulting",
  description:
    "Learn about Scribes Consulting’s story, mission, and approach to precision writing for petitions, academia, and media.",
  openGraph: {
    title: "About | Scribes Consulting",
    description: "Our story, mission, and approach to clear, persuasive writing.",
    type: "website",
    images: ["/images/og-cover.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#F8FAF8]">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-container">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Scribes Consulting
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-[#f1f7ec]">
            Guiding ideas into words—and words into impact. We help clients
            communicate with clarity, purpose, and influence across every stage
            of their journey.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-section">
        <div className="about-container">
          <header className="mb-10">
            <h2 className="text-3xl font-bold text-[#445030] mb-2">
              Our Story
            </h2>
            <p className="text-gray-600">Where we began, and why we exist.</p>
          </header>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {[
              {
                title: "Our Beginning",
                text: "Scribes Consulting was founded with a single mission: to transform how people communicate in a competitive world. While ideas are plentiful, articulating them with precision is hard. That’s where we come in.",
              },
              {
                title: "What We Do",
                text: "From immigration petitions and academic writing to recommendation letters, media features, and precision editing, we provide tailored solutions that elevate your message with clarity and impact.",
              },
              {
                title: "Why It Matters",
                text: "We believe great communication is the foundation of leadership, influence, and progress. This belief fuels everything we do and pushes us to keep raising the bar—for ourselves and for those we serve.",
              },
            ].map(({ title, text }) => (
              <article key={title} className="about-card text-center">
                <h3 className="text-xl font-semibold text-[#445030] mb-3">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="about-section bg-[#F3F8EE]">
        <div className="about-container">
          <header className="mb-10">
            <h2 className="text-3xl font-bold text-[#445030] mb-2">
              What We Stand For
            </h2>
            <p className="text-gray-600">
              Principles that shape our process and results.
            </p>
          </header>

          <div className="grid gap-10 md:grid-cols-3 justify-center">
            {[
              {
                title: "Clarity",
                text: "We make complex stories legible—removing noise, highlighting signal, and aligning to reviewer expectations.",
              },
              {
                title: "Credibility",
                text: "Evidence-led drafting and rigorous structuring ensure your claims land with authority.",
              },
              {
                title: "Care",
                text: "Client-first collaboration, transparent timelines, and meticulous delivery—every time.",
              },
            ].map(({ title, text }) => (
              <article key={title} className="about-card text-center">
                <h3 className="text-xl font-semibold text-[#445030] mb-3">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="about-container">
          <div className="about-cta">
            <h2 className="text-3xl font-semibold text-[#445030] mb-4">
              Ready to work together?
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
              Send your brief for a free review. We’ll advise on scope, timeline,
              and best next steps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn">
                Start a Project
              </Link>
              <a
                href="mailto:info@scribesconsultingltd.com"
                className="btn border border-[#445030] text-[#445030] bg-transparent hover:bg-[#f1f7ec]"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
