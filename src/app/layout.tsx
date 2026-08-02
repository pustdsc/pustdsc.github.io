import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import VisitorCounter from "../components/VisitorCounter";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-CNVV9GXQ65";

export const metadata: Metadata = {
  title: "PUST Data Science Club",
  description:
    "Official platform of the PUST Data Science Club at Pabna University of Science and Technology. Supporting student research, data analytics, ML/AI training, and career mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Lora:ital,wght@0,400..700;1,400..700&family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics 4 */}
        {GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen font-[Inter] text-[#0f172a] antialiased flex flex-col overflow-x-hidden">

        {/* ——— HEADER ——— */}
        <Header />

        {/* ——— MAIN ——— */}
        <main className="w-full min-h-screen px-0 sm:px-5 md:px-8 lg:px-10 py-4 sm:py-8">
          {children}
        </main>

        {/* ——— FOOTER ——— */}
        <footer className="mt-auto w-full overflow-hidden bg-gradient-to-b from-white via-blue-50/60 to-slate-50 text-slate-800">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_1.1fr_0.9fr] lg:px-8 lg:py-5">
            <div className="rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
              <div>
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/images/logo/logo.png"
                    alt="PUST DSC Logo"
                    width={34}
                    height={34}
                    className="h-9 w-9 object-contain"
                  />
                  <span className="font-space-grotesk text-xl font-extrabold tracking-tight">
                    PUST <span className="text-blue-600">Data Science Club</span>
                  </span>
                </div>
              </div>

              <div className="mt-3 grid gap-2 text-sm text-slate-600">
                <a href="mailto:pustdsc@gmail.com" className="inline-flex items-center gap-3 transition-colors hover:text-blue-600">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50">
                    <Image src="/icons/social/gmail.svg" alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                  </span>
                  Email: pustdsc@gmail.com
                </a>
                <a href="https://linktr.ee/pustdsc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 transition-colors hover:text-blue-600">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50">
                    <Image src="/icons/social/linktree.svg" alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                  </span>
                  Linktree: https://linktr.ee/pustdsc
                </a>
                <div className="inline-flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50">
                    <Image src="/icons/social/googlemaps.svg" alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                  </span>
                  <span>Pabna University of Science and Technology, Rajapur, Pabna-6600, Bangladesh</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-lg shadow-blue-950/5">
              <iframe
                title="PUST Data Science Club location map"
                src="https://maps.google.com/maps?q=Pabna%20University%20of%20Science%20and%20Technology%2C%20Rajapur%2C%20Pabna%206600%2C%20Bangladesh&z=15&output=embed"
                className="block h-full min-h-32 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-lg border border-blue-100 bg-white p-3 shadow-sm">
                <h3 className="font-space-grotesk text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Explore</h3>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-600">
                  {[
                    { label: "About", href: "/about" },
                    { label: "Events", href: "/events" },
                    { label: "Team", href: "/committee" },
                    { label: "Gallery", href: "/gallery" },
                    { label: "Resources", href: "/resources" },
                    { label: "Contact", href: "/contact" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="transition-colors hover:text-blue-600">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-blue-100 bg-white p-3 shadow-sm">
                <h3 className="font-space-grotesk text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Connect</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    { label: "Facebook", href: "https://facebook.com/pustdsc", icon: "/icons/social/facebook.svg" },
                    { label: "LinkedIn", href: "https://linkedin.com/company/pustdsc", icon: "/icons/social/linkedin.svg" },
                    { label: "GitHub", href: "https://github.com/pustdsc", icon: "/icons/social/github.svg" },
                    { label: "YouTube", href: "https://youtube.com/@pustdsc", icon: "/icons/social/youtube.svg" },
                    { label: "Email", href: "mailto:pustdsc@gmail.com", icon: "/icons/social/gmail.svg" },
                    { label: "Linktree", href: "https://linktr.ee/pustdsc", icon: "/icons/social/linktree.svg" },
                  ].map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Image src={s.icon} alt="" width={14} height={14} className="h-3.5 w-3.5 object-contain" />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-100/80 bg-white/80 backdrop-blur-xs">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 text-center text-xs text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <span className="font-medium text-slate-600">Powered by PUST Data Science Club</span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <VisitorCounter variant="compact" />
              </div>
              <a
                href="https://adittoahosankabbo.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                <span>Developed by Aditto Ahosan Kabbo</span>
                <Image
                  src="/images/executives/Aditto Ahosan.png"
                  alt="Aditto Ahosan Kabbo"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full object-cover ring-1 ring-blue-200"
                />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
