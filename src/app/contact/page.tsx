import Image from "next/image";

const contactItems = [
  {
    title: "Email Us",
    value: "pustdsc@gmail.com",
    helper: "We usually respond within 48 hours.",
    href: "mailto:pustdsc@gmail.com",
    icon: "/icons/social/gmail.svg",
  },
  {
    title: "Visit Us",
    value: "Pabna University of Science and Technology",
    helper: "Rajapur, Pabna 6600, Bangladesh",
    href: "https://maps.google.com/?q=Pabna%20University%20of%20Science%20and%20Technology%2C%20Rajapur%2C%20Pabna%206600%2C%20Bangladesh",
    icon: "/icons/social/googlemaps.svg",
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/pustdsc", icon: "/icons/social/facebook.svg" },
  { label: "LinkedIn", href: "https://linkedin.com/company/pustdsc", icon: "/icons/social/linkedin.svg" },
  { label: "GitHub", href: "https://github.com/pustdsc", icon: "/icons/social/github.svg" },
];

const contactFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfBqv-z8srxlfZFrXuMFIng6VWE5pXy364GlQVeNd2yrTBpZA/viewform?usp=send_form";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Contact
          </span>
          <h1 className="mt-5 font-space-grotesk text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-slate-500 font-medium leading-relaxed">
            Have a question, collaboration idea or opportunity to share? Contact us about membership, events, partnerships, research or any other enquiry.
          </p>
        </div>
      </section>

      <section className="w-auto -mx-[16px] md:mx-0 md:w-full rounded-none md:rounded-2xl border-y md:border border-slate-100 bg-gradient-to-b from-slate-50 via-white to-white px-0 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="overflow-hidden rounded-none md:rounded-2xl border-y md:border border-blue-100 bg-white shadow-sm">
            <div className="flex flex-col gap-5 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm">
                  <Image
                    src="/images/logo/logo.png"
                    alt="PUST DSC Logo"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-space-grotesk text-2xl font-extrabold">PUST Data Science Club</h2>
                  <p className="mt-1 text-sm font-medium text-blue-100">Mapping the Future Through Data</p>
                </div>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-blue-50 md:text-right">
                Reach out for membership, events, partnerships, research collaboration, speaker invitations or community opportunities.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {contactItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-start gap-4 rounded-none md:rounded-2xl border-y md:border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 shadow-sm">
                  <Image src={item.icon} alt="" width={22} height={22} className="h-5.5 w-5.5 object-contain" />
                </span>
                <span>
                  <span className="block font-space-grotesk text-lg font-bold text-blue-600">{item.title}</span>
                  <span className="mt-1 block text-sm font-semibold text-slate-700">{item.value}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-500">{item.helper}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="rounded-none md:rounded-2xl border-y md:border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-space-grotesk text-lg font-bold text-blue-600">Follow Our Community</h3>
                <p className="mt-1 text-sm text-slate-500">Stay connected with club updates, events and learning resources.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-600 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Image src={social.icon} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <section className="overflow-hidden rounded-none md:rounded-2xl border-y md:border border-blue-100 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-100 bg-gradient-to-r from-blue-50 via-white to-white p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <h2 className="font-space-grotesk text-2xl font-extrabold text-blue-600">Send Us a Message</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                  Fill out the form below with your enquiry details. The PUST DSC team will review your message and respond as soon as possible.
                </p>
              </div>
              <a
                href="https://forms.gle/dVpYLDJnLSzRfKgA6"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Open Form
              </a>
            </div>

            <div className="bg-white">
              <div className="h-[980px] md:h-[860px] overflow-hidden bg-white">
                <iframe
                  src={contactFormUrl}
                  title="PUST DSC Contact Form"
                  className="block h-full w-full border-0 bg-white"
                  loading="lazy"
                >
                  Loading...
                </iframe>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
