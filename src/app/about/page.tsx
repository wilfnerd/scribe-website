export default function About() {
  return (
    <section className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">About Scribes Consulting</h1>
        <p className="text-slate-700">We help clients communicate with clarity, purpose, and influence across every stage of their journey.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="card">
            <h3>Our Beginning</h3>
            <p>Founded to transform how people communicate in a competitive world...</p>
          </div>
          <div className="card">
            <h3>What We Do</h3>
            <p>Immigration petitions, academic writing, expert letters, media...</p>
          </div>
          <div className="card">
            <h3>Why It Matters</h3>
            <p>Great communication is the foundation of leadership and influence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}