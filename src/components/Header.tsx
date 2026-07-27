"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Team", href: "/committee" },
    { label: "Blogs", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100/80 bg-white/80 backdrop-blur-lg">
      <div className="w-full flex h-16 items-center justify-between px-[16px] md:px-[20px] lg:px-[32px]">
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-all hover:opacity-90">
          <Image
            src="/images/logo/logo.png"
            alt="PUST DSC Logo"
            width={34}
            height={34}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-outfit text-base font-bold tracking-tight text-slate-900">
            PUST <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Data Science Club</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden h-full items-center md:flex md:gap-6">
          <ul className="flex h-full items-stretch gap-6">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <li key={l.href} className="relative h-full flex items-center">
                  <Link
                    href={l.href}
                    className={`font-outfit text-sm font-medium transition-all duration-200 h-full flex items-center relative ${isActive
                      ? "text-blue-600 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:rounded-t-full after:bg-blue-600"
                      : "text-slate-500 hover:text-blue-600"
                      }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Join Us Button */}
          <div className="h-full flex items-center border-l border-slate-100 pl-6 ml-2">
            <Link
              href="/membership"
              className="inline-flex h-9 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-sm font-semibold text-white shadow-md shadow-blue-500/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Join Us
            </Link>
          </div>
        </nav>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9.5 w-9.5 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 md:hidden focus:outline-hidden transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b shadow-xl border-slate-100 bg-white/95 backdrop-blur-lg md:hidden animate-in fade-in slide-in-from-top-5 duration-150">
          <nav className="flex flex-col py-4 px-4 gap-1">
            <ul>
              {navLinks.map((l) => {
                const isActive = pathname === l.href;
                return (
                  <li key={l.href} className="mb-1">
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={l.href}
                      className={`block px-3 py-2.5 rounded-xl font-outfit text-sm font-medium transition-all duration-150 ${isActive
                        ? "bg-blue-50/50 text-blue-600 font-bold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                        }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link
                onClick={() => setIsOpen(false)}
                href="/membership"
                className="flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white shadow-md shadow-blue-500/10 transition-all duration-200"
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
