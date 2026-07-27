import { siteData } from "@/data/data";
import Image from "next/image";

export default function Committee() {
  const faculty = siteData.advisors.filter((a) => a.type === "faculty");
  const alumni = siteData.advisors.filter((a) => a.type === "alumni");
  const socialIcons = [
    { key: "website", label: "Website", icon: "/icons/social/website.svg" },
    { key: "facebook", label: "Facebook", icon: "/icons/social/facebook.svg" },
    { key: "linkedin", label: "LinkedIn", icon: "/icons/social/linkedin.svg" },
    { key: "github", label: "GitHub", icon: "/icons/social/github.svg" },
    { key: "kaggle", label: "Kaggle", icon: "/icons/social/kaggle.svg" },
  ] as const;
  const facultyLinkIcons = [
    { key: "pust", label: "PUST Profile", icon: "/icons/social/pust.png" },
    { key: "website", label: "Website", icon: "/icons/social/website.svg" },
    { key: "scholar", label: "Google Scholar", icon: "/images/logo/google scholar.jpg" },
    { key: "researchgate", label: "ResearchGate", icon: "/icons/social/researchgate.svg" },
    { key: "linkedin", label: "LinkedIn", icon: "/icons/social/linkedin.svg" },
  ] as const;
  const alumniSocialIcons = [
    { key: "facebook", label: "Facebook", icon: "/icons/social/facebook.svg" },
    { key: "linkedin", label: "LinkedIn", icon: "/icons/social/linkedin.svg" },
  ] as const;

  return (
    <div className="flex min-h-screen flex-col">

      {/* Header */}
      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
  
          <h1 className="font-space-grotesk text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">Our Team</h1>
          <p className="mt-4 text-slate-500 font-medium leading-relaxed">
            Meet the team guiding the PUST Data Science Club
          </p>
        </div>
      </section>

      {/* ═══ EXECUTIVE COMMITTEE ═══ */}
      <section className="w-full rounded-lg bg-[#f8fafc] py-12 md:py-16">
        <div className="mb-10 text-center">
          <h2 className="font-space-grotesk text-2xl font-extrabold tracking-tight text-blue-600 sm:text-3xl">Executive Committee</h2>
          <p className="mt-2 text-sm text-slate-500 font-medium">2026 Academic Session</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {siteData.executives.map((exec) => (
            <div
              key={exec.id}
              className="group relative min-h-40 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_42px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_22px_50px_rgba(37,99,235,0.12)]"
            >
              <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-blue-50 via-white to-transparent" />
              <div className="relative z-10 flex min-h-40 items-stretch justify-between gap-5 p-5 pr-36">
                <div className="flex min-w-0 flex-1 flex-col justify-between py-2">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-space-grotesk text-2xl font-extrabold leading-tight text-slate-950">
                        {exec.name}
                      </h3>
                      <span className="font-space-grotesk text-base font-semibold text-blue-600">{exec.position}</span>
                    </div>
                  </div>
                  {exec.social && (
                    <div className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/80 p-1 shadow-sm">
                      {socialIcons.map((social) => {
                        const href = exec.social?.[social.key];
                        if (!href) return null;

                        return (
                          <a
                            key={social.key}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${exec.name} ${social.label}`}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-sm"
                          >
                            <Image src={social.icon} alt="" width={14} height={14} className="h-3.5 w-3.5 object-contain" />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute bottom-3 right-3 h-[146px] w-28 overflow-hidden rounded-2xl border border-white bg-slate-100 shadow-lg shadow-slate-200/70">
                <Image
                  src={exec.photo}
                  alt={exec.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FACULTY ADVISORS ═══ */}
      <section className="w-full py-12 md:py-16">
        <div className="mb-10 text-center">
          <h2 className="font-space-grotesk text-2xl font-extrabold tracking-tight text-blue-600 sm:text-3xl">Faculty Advisors</h2>
          <p className="mt-2 text-sm text-slate-500 font-medium">Advisory Panel providing academic guidance and institutional support</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {faculty.map((adv) => (
            <div
              key={adv.id}
              className="group rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-1 w-full rounded-t-xl bg-[#e2e8f0] transition-colors group-hover:bg-[#06b6d4]" />
              <div className="p-5 text-center">
                <div className="relative mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full border-4 border-[#f1f5f9] bg-[#f1f5f9] shadow-sm">
                  <Image
                    src={adv.photo}
                    alt={adv.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mb-2 inline-flex items-center rounded-md bg-[#f1f5f9] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#64748b]">
                  {adv.title}
                </div>
                <h3 className="font-space-grotesk font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">{adv.name}</h3>
                <p className="text-sm text-[#64748b]">{adv.designation}</p>
                <p className="text-xs text-[#94a3b8]">{adv.institution}</p>
                {adv.links && (
                  <div className="mt-4 flex justify-center gap-2">
                    {facultyLinkIcons.map((link) => {
                      const href = adv.links?.[link.key];
                      if (!href) return null;

                      return (
                        <a
                          key={link.key}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${adv.name} ${link.label}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
                        >
                          <Image src={link.icon} alt="" width={18} height={18} className="h-4.5 w-4.5 object-contain" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ALUMNI ADVISORS ═══ */}
      <section className="w-full rounded-lg bg-[#f8fafc] py-12 md:py-16">
        <div className="mb-10 text-center">
          <h2 className="font-space-grotesk text-2xl font-extrabold tracking-tight text-blue-600 sm:text-3xl">Alumni Advisors</h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {alumni.map((adv) => (
            <div
              key={adv.id}
              className="group rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-1 w-full rounded-t-xl bg-[#e2e8f0] transition-colors group-hover:bg-[#f59e0b]" />
              <div className="p-5 text-center">
                <div className="relative mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full border-4 border-[#f1f5f9] bg-[#f1f5f9] shadow-sm">
                  <Image
                    src={adv.photo}
                    alt={adv.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mb-2 inline-flex items-center rounded-md bg-[#fffbeb] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#d97706]">
                  {adv.title}
                </div>
                <h3 className="font-space-grotesk font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">{adv.name}</h3>
                {adv.social && (
                  <div className="mt-4 flex justify-center gap-2">
                    {alumniSocialIcons.map((social) => {
                      const href = adv.social?.[social.key];
                      if (!href) return null;

                      return (
                        <a
                          key={social.key}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${adv.name} ${social.label}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
                        >
                          <Image src={social.icon} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
