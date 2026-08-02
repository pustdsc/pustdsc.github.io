import Image from "next/image";
import RecruitmentForm from "@/components/RecruitmentForm";

export default function Membership() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">

      {/* Banner Section */}
      <section className="w-full pt-4 sm:pt-6">
        <div className="mx-auto max-w-4xl px-0 sm:px-4">
          <div className="relative overflow-hidden rounded-none sm:rounded-3xl border-x-0 sm:border-x border-y border-slate-200/80 bg-white p-2 sm:p-3 shadow-xs">
            <div className="relative overflow-hidden rounded-none sm:rounded-2xl border border-slate-100 bg-slate-50">
              <Image
                src="/images/banners/join us.png"
                alt="Join PUST Data Science Club"
                width={1200}
                height={600}
                className="w-full h-auto object-cover max-h-[380px]"
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
