"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/data";
import { BrainCircuit, FlaskConical, Network } from "lucide-react";

const gallerySlides = [
  // 1. Inauguration Ceremony (Feb 2025)
  {
    src: "/images/events/inaug-IMG20250226122024.jpg",
    title: "Inauguration Ceremony",
    date: "Feb 26, 2025",
    desc: "PUST DSC core executive team during the official inauguration ceremony.",
  },
  // 2. AI & Data Science Career Insights & Python Mastery (May 2025)
  {
    src: "/images/events/career-mastery-banner.jpg",
    title: "Career Insights & Python Mastery",
    date: "May 20, 2025",
    desc: "A seminar and masterclass focused on AI career routes and Python hands-on data operations.",
  },
  {
    src: "/images/events/career-mastery-1.jpg",
    title: "Career Insights & Python Mastery",
    date: "May 20, 2025",
    desc: "Industrial session mapping key career choices for data engineers and machine learning developers.",
  },
  // 4. Visit with Advisors (July 2026)
  {
    src: "/images/events/Visit with advisors.jpg",
    title: "Visit with Advisors",
    date: "July 23, 2026",
    desc: "Club members and faculty advisors during a special visit.",
  },
  // 5. Handover Ceremony (July 2026)
  {
    src: "/images/events/handover-IMG_20260715_140630.jpg",
    title: "1st Executive Committee Handover",
    date: "July 15, 2026",
    desc: "The 1st executive committee formally accepts their leadership roles.",
  },
  {
    src: "/images/events/handover-IMG_20260715_141039.jpg",
    title: "1st Executive Committee Handover",
    date: "July 15, 2026",
    desc: "A celebratory group photo concluding the handover meeting.",
  },
];

const skillShowcase = [
  { label: "Python", logo: "/images/skill icon/PYTHON (1).png" },
  { label: "R Programming", logo: "/images/skill icon/R.png" },
  { label: "Power BI", logo: "/images/skill icon/POWERBI.jpg" },
  { label: "Excel", logo: "/images/skill icon/EXCEL LOGO.png" },
  { label: "SQL", logo: "/images/skill icon/SQL LOGO.png" },
  { label: "SPSS", logo: "/images/skill icon/SPSS.png" },
  { label: "Jupyter", logo: "/images/skill icon/JUPYTER.png" },
  { label: "Git", logo: "/images/skill icon/Git_icon.svg.png" },
  { label: "Tableau", logo: "/images/skill icon/TABLEU.png" },
];

const pastEvents = [
  {
    title: "AI & Data Science Career Insights and Python Mastery",
    date: "May 20, 2025",
    image: "/images/events/career-mastery-banner.jpg",
    desc: "A career-focused session on AI and data science pathways with hands-on Python mastery for practical data work.",
  },
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % gallerySlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % gallerySlides.length);
  };

  return (
    <div className="flex min-h-screen flex-col space-y-20 md:space-y-28">

      {/* ═══ HERO ═══ */}
      <section className="w-screen relative left-1/2 -translate-x-1/2 -mt-8 pt-0 pb-12">
        <div className="w-full relative bg-slate-950 min-h-[100vh] md:min-h-[520px] md:aspect-[21/9] md:overflow-hidden flex flex-col md:block py-16 md:py-0">
          {/* Background Image */}
          <Image
            src="/images/events/inaug-IMG20250226122024.jpg"
            alt="PUST Data Science Club"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Transparent dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent z-0"></div>

          {/* Content Area */}
          <div className="relative md:absolute md:inset-0 z-10 flex-1 flex flex-col justify-between">
            <div className="mx-auto max-w-[1440px] w-full h-full flex flex-col justify-between p-5 sm:p-10 md:p-12 lg:px-8 xl:px-0 lg:py-16 gap-12 md:gap-0 flex-1">

              {/* Top Text Badge & Content */}
              <div className="space-y-4 md:space-y-6">
                <div>
                  <span className="inline-flex items-center text-[10px] sm:text-xs font-bold tracking-[0.18em] text-blue-400 uppercase">
                    Pabna University of Science & Technology
                  </span>
                </div>
                <h1 className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.14] tracking-tight">
                  From Statistics to AI, <br className="hidden sm:inline" />
                  We Learn by <span className="text-blue-400 font-extrabold">Building</span>.
                </h1>
                <div className="w-20 h-[1.5px] bg-blue-500 rounded"></div>
                <p className="max-w-2xl text-sm md:text-base text-slate-100 leading-[1.6] font-normal">
                  A student-driven community exploring statistics, data analytics, machine learning and AI through workshops, projects, competitions, research and industry engagement, turning data into meaningful insights and fostering an innovative data culture at PUST.
                </p>
              </div>

              {/* Bottom Section: Buttons & Stats grouped close together */}
              <div className="space-y-6 w-full lg:max-w-2xl">
                {/* Buttons (first) */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Link
                    href="/committee"
                    className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700 shadow-sm"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/membership"
                    className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-xs px-6 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  >
                    Join Us
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 w-full">
                  {siteData.stats.slice(0, 3).map((s, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white leading-none tracking-tighter">{s.value}{s.suffix}</span>
                      <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wide leading-none mt-1.5">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═══ GALLERY SLIDESHOW ═══ */}
      <section className="w-full py-4 flex flex-col items-center">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-space-grotesk text-blue-600">
            Our Journey
          </h2>
          <p className="mt-4 text-slate-500 font-medium">A glimpse of the moments shaping our club’s journey.</p>
        </div>

        {/* Slide Frame */}
        <div className="relative w-full max-w-4xl aspect-[16/9] bg-[#090d16] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
          <div className="relative w-full h-full">
            <Image
              src={gallerySlides[slideIndex].src}
              alt={gallerySlides[slideIndex].title}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
            {/* Stronger gradient so caption text is always readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          </div>

          {/* Top-Right Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-colors border border-white/10"
            aria-label={isPlaying ? "Pause slideshow" : "Start slideshow"}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            )}
          </button>

          {/* Left Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-colors border border-white/10"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right Navigation */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-colors border border-white/10"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 text-white z-10 select-none text-left">
            <span className="mb-1.5 inline-flex items-center rounded bg-blue-600/30 border border-blue-500/20 px-2 py-0.5 text-[10px] sm:text-xs font-bold text-blue-300">
              {gallerySlides[slideIndex].date}
            </span>
            <h3 className="text-base sm:text-xl md:text-2xl font-extrabold mb-1 tracking-tight font-space-grotesk leading-snug">
              {gallerySlides[slideIndex].title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed line-clamp-2">
              {gallerySlides[slideIndex].desc}
            </p>
          </div>
        </div>

        {/* Thumbnail Preview Strip */}
        <div className="mt-6 w-full max-w-4xl px-2">
          <div className="grid grid-cols-6 gap-2.5 md:gap-3.5">
            {gallerySlides.map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  setSlideIndex(i);
                  setIsPlaying(false);
                }}
                className={`relative aspect-[16/9] rounded-lg overflow-hidden border-2 bg-slate-200 transition-all ${slideIndex === i
                  ? "border-blue-600 ring-2 ring-blue-600/35 scale-[1.03]"
                  : "border-transparent opacity-65 hover:opacity-100"
                  }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Sliding Dot Indicators */}
        <div className="mt-5 flex gap-2">
          {gallerySlides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setSlideIndex(i);
                setIsPlaying(false);
              }}
              className={`h-2.5 rounded-full transition-all ${slideIndex === i ? "w-7 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
          >
            View Full Gallery
            <svg className="ml-2 h-4 w-4 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* ═══ WHY JOIN ═══ */}
      <section className="w-full rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-100/80 p-8 md:p-12 py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-space-grotesk text-slate-900">
            Why Join <span className="text-blue-600 font-extrabold">PUST Data Science Club</span>?
          </h2>
          <p className="mt-4 text-slate-500 font-normal leading-[1.6]">
            Start your data science journey with us.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              Icon: BrainCircuit,
              title: "Build In-Demand Skills",
              desc: "Learn Statistics, Python, R, SQL, Data Visualization, Machine Learning, Deep Learning and AI through practical workshops and peer learning.",
            },
            {
              Icon: FlaskConical,
              title: "Apply What You Learn",
              desc: "Work with real data through collaborative projects, research, datathons and competitions while building a strong portfolio.",
            },
            {
              Icon: Network,
              title: "Connect and Grow",
              desc: "Collaborate with students across departments and connect with seniors, alumni, researchers and industry professionals for mentorship and career insights.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold text-slate-800 font-space-grotesk leading-snug">{title}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SKILLS SHOWCASE ═══ */}
      <section className="w-screen relative left-1/2 -translate-x-1/2 py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-8 xl:px-0">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-space-grotesk text-blue-600">
            Skills We Cover
          </h2>
          <p className="mt-4 text-slate-500 font-medium">
            A visual tour of the tools, methods and thinking patterns we practice in workshops, projects and research sessions.
          </p>
        </div>

        <div className="marquee-wrapper flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track marquee-left">
            {[...skillShowcase, ...skillShowcase].map(({ label, logo }, i) => (
              <div key={`${label}-${i}`} className="mx-3 flex min-w-[168px] shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                  <Image src={logo} alt={`${label} logo`} width={32} height={32} className="h-8 w-8 object-contain" />
                </span>
                <span className="text-sm font-bold text-slate-800 font-space-grotesk whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>


      {/* ═══ CTA ═══ */}
      <section className="w-full py-4 flex flex-col items-center">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-space-grotesk text-blue-600">
            Past Events
          </h2>
          <p className="mt-4 text-slate-500 font-medium">
            A look back at the sessions and activities that shaped our learning community.
          </p>
        </div>

        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
          {pastEvents.map((event) => (
            <article key={event.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-md bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                  Ended
                </span>
                <span className="absolute bottom-4 left-4 rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-blue-600 backdrop-blur-sm">
                  {event.date}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-space-grotesk text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{event.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full py-20 rounded-2xl bg-gradient-to-r from-blue-50/40 via-indigo-50/40 to-slate-50 border border-slate-100/80 my-8">
        <div className="mx-auto max-w-3xl text-center px-6">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Become Part of PUST DSC</span>
          <h2 className="mt-3 mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-space-grotesk text-blue-600">Build Your Data Journey with Us</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base md:text-lg text-slate-500 font-medium">
            Whether you are a beginner or already exploring data science, join PUST DSC to learn through workshops, projects, competitions, research and industry connections.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/membership"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Join PUST DSC
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:text-slate-950"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

