export default function Resources() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-space-grotesk text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">
            Learning Resources
          </h1>
          <p className="mt-4 text-slate-500 font-medium">
            Curated guides, roadmaps and learning materials will be available here soon.
          </p>
        </div>
      </section>

      <section className="w-full rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-blue-200 bg-white p-10 text-center shadow-sm">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-600">
            Coming Soon
          </span>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            We are preparing data science resources, roadmaps, cheat sheets and useful references for PUST DSC members.
          </p>
        </div>
      </section>
    </div>
  );
}
