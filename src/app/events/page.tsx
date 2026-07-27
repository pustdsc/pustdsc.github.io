import Image from "next/image";

const pastEvents = [
  {
    title: "Statistics Week 2026",
    date: "April 2026",
    image: "/images/events/statweek26.png",
    desc: "An engaging sports week tournament featuring live fixtures, brackets, and interactive boards for Chess, Carrom, Ludu, Cricket, and Football events.",
    link: "https://adittoahosankabbo.github.io/statweek",
  },
  {
    title: "AI & Data Science Career Insights and Python Mastery",
    date: "May 20, 2025",
    image: "/images/events/career-mastery-banner.jpg",
    desc: "A career-focused session on AI and data science pathways with hands-on Python mastery for practical data work.",
  },
];

export default function Events() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-space-grotesk text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">
            Our Events
          </h1>
          <p className="mt-4 text-slate-500 font-medium">
            Join us for workshops, seminars, competitions and learning sessions.
          </p>
        </div>
      </section>

      <section className="w-full rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/70 via-white to-white px-5 py-12 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="inline-flex rounded-md bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
              Next Chapter
            </span>
            <h2 className="mt-4 font-space-grotesk text-3xl font-extrabold tracking-tight text-blue-600">
              Upcoming Events
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Fresh workshops, competitions and community sessions are being planned by the team.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-dashed border-blue-200 bg-white p-6 shadow-sm">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-50" />
            <div className="relative">
              <div>
                <span className="inline-flex rounded-full bg-blue-600 px-4 py-1.5 text-sm font-bold text-white">
                  Coming Soon
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Event details will appear here once registration opens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-space-grotesk text-3xl font-extrabold tracking-tight text-blue-600">
            Past Events
          </h2>
        </div>

        <div className="mx-auto max-w-5xl space-y-8">
          {pastEvents.map((event) => (
            <article key={event.title} className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-[1.1fr_0.9fr]">
              <div className={`relative min-h-[260px] overflow-hidden ${event.title === "Statistics Week 2026" ? "bg-white" : "bg-slate-100"}`}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className={`${event.title === "Statistics Week 2026" ? "object-contain p-3" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                />
                {event.title !== "Statistics Week 2026" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                )}
                <span className="absolute left-4 top-4 rounded-md bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                  Ended
                </span>
              </div>

              <div className="flex flex-col justify-center p-6 md:p-8">
                <span className="mb-4 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                  {event.date}
                </span>
                <h3 className="font-space-grotesk text-2xl font-extrabold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                  {event.link ? (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {event.title}
                    </a>
                  ) : (
                    event.title
                  )}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">{event.desc}</p>
                {event.link && (
                  <div className="mt-4">
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                    >
                      Visit Event Website
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
