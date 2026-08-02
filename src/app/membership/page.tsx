import Image from "next/image";
import RecruitmentForm from "@/components/RecruitmentForm";

export default function Membership() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">

      {/* Banner Section */}
      <section className="w-full pt-4 sm:pt-6">
        <div className="mx-auto max-w-4xl px-2 sm:px-4">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-1.5 sm:p-3 shadow-sm">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center">
              <Image
                src="/images/recruitment banner.png"
                alt="PUST Data Science Club Member Recruitment"
                width={1200}
                height={600}
                className="w-full h-auto object-cover object-center scale-[1.05] block rounded-lg sm:rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Official Recruitment Form */}
      <section id="recruitment-form" className="w-full py-4 sm:py-8">
        <RecruitmentForm />
      </section>

    </div>
  );
}
