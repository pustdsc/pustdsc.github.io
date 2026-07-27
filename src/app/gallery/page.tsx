import Image from "next/image";

const eventsWithImages = [
  {
    title: "Inauguration Ceremony",
    date: "February 26, 2025",
    images: [
      { src: "/images/events/inaug-IMG20250226122024.jpg", caption: "Inauguration Stage Setup" },
      { src: "/images/events/inaug-IMG20250226124551.jpg", caption: "Core Committee Photo" },
      { src: "/images/events/inaug-IMG_20250226_215804.jpg", caption: "Advisory Panel Speech" },
      { src: "/images/events/inaug-IMG_20250226_220451.jpg", caption: "Certificate Distribution Session" },
      { src: "/images/events/inaug-IMG_20250226_220629.jpg", caption: "Closing Remarks by Organizers" },
    ],
  },
  {
    title: "AI & Data Science Career Insights and Python Mastery",
    date: "May 20, 2025",
    images: [
      { src: "/images/events/career-mastery-banner.jpg", caption: "Career Insights & Python Mastery Seminar Banner" },
      { src: "/images/events/career-mastery-1.jpg", caption: "Speaker Delivering Career Roadmap" },
      { src: "/images/events/career-mastery-2.jpg", caption: "Participants Doing Hands-on Coding" },
    ],
  },
  {
    title: "1st Executive Committee Handover",
    date: "July 15, 2026",
    images: [
      { src: "/images/events/handover-IMG_20260715_140630.jpg", caption: "Committee Handover Ceremony" },
      { src: "/images/events/handover-IMG_20260715_140725.jpg", caption: "Address by the Newly Appointed President" },
      { src: "/images/events/handover-IMG_20260715_140727_1.jpg", caption: "Handover Committee Group Photo" },
      { src: "/images/events/handover-IMG_20260715_140759.jpg", caption: "Formal Executive Handover Ceremony" },
      { src: "/images/events/handover-IMG_20260715_140806.jpg", caption: "Faculty Members with New Committee" },
      { src: "/images/events/handover-IMG_20260715_141039.jpg", caption: "Closing Committee Group Portrait" },
    ],
  },
];

export default function Gallery() {
  return (
    <div className="flex min-h-screen flex-col gap-12">
      {/* Page Header */}
      <section className="w-full py-12 text-center md:py-16">
        <h1 className="font-space-grotesk text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">Photo Gallery</h1>
        <p className="mt-4 text-slate-500 font-medium">Explore highlights from our events and community activities.</p>
      </section>

      {/* Event Group Sections */}
      {eventsWithImages.map((event) => (
        <section key={event.title} className="w-full rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white px-5 py-8 md:px-8">
          {/* Event Header */}
          <div className="mb-6 flex flex-col border-b border-blue-100 pb-3 md:flex-row md:items-baseline md:justify-between">
            <h2 className="font-space-grotesk text-xl font-extrabold tracking-tight text-blue-600">{event.title}</h2>
            <span className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 md:mt-0">{event.date}</span>
          </div>

          {/* Larger Event Images Grid (2 cols on md, 3 cols on lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.images.map((img, idx) => (
              <div key={idx} className="group relative aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                  <p className="font-space-grotesk text-sm font-bold text-white leading-snug">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
