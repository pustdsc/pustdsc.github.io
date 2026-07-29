"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface VisitorCounterProps {
  variant?: "compact" | "hero";
  className?: string;
}

export default function VisitorCounter({
  variant = "compact",
  className = "",
}: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchVisitorCount = async () => {
      const NAMESPACE = "pustdsc-website";
      const KEY = "total-visitors";
      const STORAGE_KEY = "pustdsc_visited_session";

      // 1. Immediately hydrate cached value to prevent zero or layout shift
      const cached = localStorage.getItem("pustdsc_cached_visitor_count");
      if (cached && isMounted) {
        setCount(parseInt(cached, 10));
      }

      try {
        const hasVisited = sessionStorage.getItem(STORAGE_KEY);
        let endpoint = `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`;

        if (!hasVisited) {
          // Increment counter once per session
          endpoint += "/up";
          sessionStorage.setItem(STORAGE_KEY, "true");
        }

        const res = await fetch(endpoint, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (typeof data.count === "number" && isMounted) {
            setCount(data.count);
            localStorage.setItem("pustdsc_cached_visitor_count", String(data.count));
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn("Visitor counter sync using cached baseline:", err);
      }

      if (isMounted) {
        const finalCount = cached ? parseInt(cached, 10) : 35;
        setCount(finalCount);
        setIsLoading(false);
      }
    };

    fetchVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []);

  if (variant === "hero") {
    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        <div className="flex items-center gap-2">
          <span className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white leading-none tracking-tighter">
            {isLoading ? (
              <span className="inline-block h-8 w-16 animate-pulse rounded bg-slate-800" />
            ) : (
              (count ?? 1420).toLocaleString()
            )}
          </span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
        </div>
        <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wide leading-none mt-1.5 flex items-center gap-1">
          <Eye className="w-3 h-3 text-blue-400 inline" /> Site Visitors
        </span>
      </div>
    );
  }

  // Simple, Clean, & Minimalist Footer Visitor Badge
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/95 px-3 py-1 text-xs font-medium text-slate-600 shadow-xs transition-all duration-200 hover:border-blue-300 hover:shadow-sm select-none ${className}`}
    >
      {/* Tiny Live Indicator */}
      <span className="relative flex h-2 w-2 shrink-0" title="Live Counter">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>

      {/* Icon */}
      <Eye className="h-3.5 w-3.5 text-blue-600 shrink-0" />

      {/* Label */}
      <span className="text-slate-500 font-medium">Visitors:</span>

      {/* Number */}
      <span className="font-space-grotesk font-bold text-slate-900">
        {isLoading ? (
          <span className="inline-block h-3 w-10 animate-pulse rounded bg-slate-200" />
        ) : (
          (count ?? 1420).toLocaleString()
        )}
      </span>
    </div>
  );
}
