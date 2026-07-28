import Image from "next/image";
import { BookOpenCheck, CalendarCheck, FlaskConical, Network, Sparkles, UsersRound } from "lucide-react";

const benefits = [
  {
    title: "Learning Resources",
    text: "Access exclusive learning resources, tutorial guides and curated materials.",
    icon: BookOpenCheck,
  },
  {
    title: "Priority Events",
    text: "Get priority entry to workshops, seminars and hands-on learning sessions.",
    icon: CalendarCheck,
  },
  {
    title: "Mentorship",
    text: "Learn from faculty advisors, seniors and experienced community members.",
    icon: UsersRound,
  },
  {
    title: "Projects & Research",
    text: "Contribute to projects, research, competitions and club initiatives.",
    icon: FlaskConical,
  },
  {
    title: "Community Network",
    text: "Grow with a supportive network for collaboration and career development.",
    icon: Network,
  },
];

export default function Membership() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-blue-100 bg-[linear-gradient(135deg,#f0f7ff_0%,#ffffff_45%,#eefcff_100%)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-18 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Join PUST Data Science Club
            </span>
            <h1 className="mt-6 font-space-grotesk text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Be Part of PUST&apos;s Growing Data Community
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-slate-600 md:text-lg">
              Whether you are taking your first step or already building projects, join a community where you can learn,
              collaborate and contribute.
            </p>
            <div className="mt-8 h-px w-28 bg-gradient-to-r from-blue-600 to-cyan-400" />
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-blue-200/60 via-cyan-100/50 to-white blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-3 shadow-2xl shadow-blue-100/80">
              <div className="relative overflow-hidden rounded-[1.35rem] border border-blue-100 bg-slate-100">
                <Image
                  src="/images/banners/join us.png"
                  alt="Join PUST Data Science Club"
                  width={468}
                  height={377}
                  className="aspect-[468/377] w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center px-5 py-14 md:px-8 md:py-18">
        <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 text-center shadow-sm md:p-10">
          <span className="inline-flex rounded-md border border-blue-100 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Coming Soon
          </span>
          <h2 className="mt-5 font-space-grotesk text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
            New Member Joining Form
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:text-base">
            The official membership application form will be available soon. Stay connected with PUST DSC for updates.
          </p>
        </div>
      </section>

      <section id="membership-benefits" className="w-full bg-slate-50/70 px-5 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Benefits
              </span>
              <h2 className="mt-4 font-space-grotesk text-3xl font-extrabold tracking-tight text-blue-600 md:text-4xl">
                Membership Benefits
              </h2>
            </div>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-slate-500">
              Practical support for students who want to learn seriously and grow with a focused community.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      0{index + 1}
                    </span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="font-space-grotesk text-lg font-extrabold text-slate-900">{benefit.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
