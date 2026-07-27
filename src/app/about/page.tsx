import Image from "next/image";

const aboutCards = [
  {
    label: "01",
    title: "Who We Are",
    body: "PUST Data Science Club brings together students interested in statistics, data analytics, machine learning and artificial intelligence. We help students move beyond theory through practical workshops, collaborative projects, research, competitions, mentorship and industry engagement.",
  },
  {
    label: "02",
    title: "Our Vision",
    body: "To build an inclusive and innovative data science community at PUST that prepares students for research, higher education and meaningful careers in data and AI.",
  },
  {
    label: "03",
    title: "Our Mission",
    body: "To make data science accessible through practical learning, collaboration and real-world exposure - empowering students to develop relevant skills, explore new ideas and create responsible, data-driven solutions.",
  },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">

          <h1 className="font-space-grotesk text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">
            About PUST Data Science Club
          </h1>
          <p className="mt-4 text-slate-500 font-medium leading-relaxed">
            Learn about our mission, vision, and what drives us forward.
          </p>
        </div>
      </section>

      <section className="w-full rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {aboutCards.map((item) => (
            <article key={item.title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg">
              <span className="font-space-grotesk text-sm font-bold text-blue-600/60">{item.label}</span>
              <h2 className="mt-4 font-space-grotesk text-xl font-bold text-slate-900 group-hover:text-blue-600">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[300px] overflow-hidden p-8 text-white md:p-10">
            <Image
              src="/images/events/inaug-IMG_20250226_215804.jpg"
              alt="PUST DSC inauguration ceremony"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-blue-950/25" />
            <div className="relative z-10 flex h-full min-h-[236px] flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-100">Since February 2025</span>
                <h2 className="mt-4 font-space-grotesk text-3xl font-extrabold tracking-tight">
                  Our Story
                </h2>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                <div>
                  <span className="font-space-grotesk text-3xl font-extrabold">120+</span>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-blue-100">Members</p>
                </div>
                <div>
                  <span className="font-space-grotesk text-3xl font-extrabold">2025</span>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-blue-100">Founded</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <div className="space-y-5 text-sm leading-relaxed text-slate-500 md:text-base md:leading-8">
              <p>
                Our journey began in February 2025, when a group of PUST students came together with a shared belief: data science is best learned not only through theory, but also by solving real problems, exchanging ideas and building together.
              </p>
              <p>
                What started as a student initiative has grown into a multidisciplinary community of more than 120 members. Through workshops, collaborative projects, competitions, research and industry engagement, we continue to create opportunities for students to learn, connect and grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
