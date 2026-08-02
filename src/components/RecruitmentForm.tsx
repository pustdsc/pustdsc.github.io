"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Copy, Sparkles, Send, CreditCard, ShieldCheck, ArrowRight, Check, Clock, Rocket, ChevronDown, Calendar, RotateCcw, ExternalLink, Download, Printer, Globe, Mail } from "lucide-react";

interface CustomSelectProps {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  name?: string;
  required?: boolean;
}

function CustomSelect({ value, onChange, options, placeholder, required }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMoreBelow, setHasMoreBelow] = useState(options.length > 5);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      setHasMoreBelow(scrollHeight - scrollTop - clientHeight > 15);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Native hidden select to enforce browser HTML required validation if needed */}
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
        tabIndex={-1}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setHasMoreBelow(options.length > 5);
        }}
        className={`w-full rounded-xl border bg-white px-4 py-3 pr-10 text-left text-sm transition-all shadow-2xs flex items-center justify-between cursor-pointer select-none touch-action-manipulation ${isOpen ? "border-slate-900 ring-1 ring-slate-900 shadow-sm" : "border-slate-200 hover:border-slate-300"
          } ${value ? "text-slate-900 font-medium" : "text-slate-400"}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-slate-900" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1.5 w-full rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-1.5 shadow-xl animate-in fade-in-50 zoom-in-95 duration-150 overflow-hidden">
          {options.length > 5 && (
            <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 flex items-center justify-between mb-1">
              <span>{options.length} Options available</span>
              <span className="text-blue-600 font-bold lowercase tracking-normal">scroll ↓</span>
            </div>
          )}
          <div
            ref={listRef}
            onScroll={handleScroll}
            className="max-h-60 overflow-y-auto space-y-0.5 pr-1"
          >
            {options.map((option) => {
              const isSelected = value === option;
              return (
                <div
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm cursor-pointer transition-colors ${isSelected
                    ? "bg-slate-900 text-white font-medium shadow-2xs"
                    : "hover:bg-slate-100 text-slate-800"
                    }`}
                >
                  <span className="truncate">{option}</span>
                  {isSelected && <Check className="h-4 w-4 shrink-0 text-white ml-2" />}
                </div>
              );
            })}
          </div>

          {options.length > 5 && hasMoreBelow && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-9 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center pb-1">
              <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50/95 px-2.5 py-0.5 rounded-full border border-blue-200/80 shadow-2xs flex items-center gap-1 animate-pulse">
                More options below ↓
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf0wlwpBFEhRsqx2Y0GNBtBReoafXVyglN82lwHDpeGBi76KQ/formResponse";

const ENTRY_MAP = {
  fullName: "entry.1836143626",
  studentId: "entry.517811992",
  department: "entry.1961903475",
  session: "entry.1237334625",
  mobile: "entry.705206698",
  email: "entry.2088038581",
  gender: "entry.1831701418",
  dob: "entry.925058032",
  district: "entry.1077381950",
  bloodGroup: "entry.323572058",
  exploreFields: "entry.880505496",
  valuableSkill: "entry.1330922699",
  clubExperiences: "entry.1497964552",
  paymentMethod: "entry.155590427",
  trxId: "entry.2040556401",
  agreedTerms: "entry.907743926",
};

const EXPLORE_FIELD_OPTIONS = [
  "Programming & Data Analysis: Python, R, SQL",
  "Business Intelligence & Visualization: Microsoft Excel, Power BI, Tableau, Looker Studio",
  "Machine Learning & AI: Scikit-learn, TensorFlow / PyTorch, Generative AI & LLMs, Kaggle",
  "Research: SPSS, R, LaTeX, Zotero / Mendeley, Research Methodology",
  "Career Development: CV, Resume, LinkedIn, Portfolio & Interview Preparation",
];

const VALUABLE_SKILL_OPTIONS = [
  "Python",
  "R Programming",
  "SPSS",
  "Excel",
  "SQL",
  "Power Bi / Tableu / Looker Studio",
  "Machine Learning, Deep Learning, NLP",
  "Computer Vision",
];

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Don't Know"];

const PUST_DEPARTMENTS = [
  "Computer Science and Engineering",
  "Information and Communication Engineering",
  "Statistics and Data Science",
  "Electrical, Electronic and Communication Engineering",
  "Electrical and Electronic Engineering",
  "Civil Engineering",
  "Mathematics",
  "Economics",
  "Physics",
  "Architecture",
  "Urban and Regional Planning",
  "Chemistry",
  "Business Administration",
  "Tourism and Hospitality Management",
  "Pharmacy",
  "Bangla",
  "Social Work",
  "English",
  "Public Administration",
  "History",
  "Geography and Environment",
];

export default function RecruitmentForm() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activePaymentTab, setActivePaymentTab] = useState<"online" | "offline">("online");
  const [recruitmentStatus, setRecruitmentStatus] = useState<"upcoming" | "open" | "closed">("upcoming");
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Bangladesh Time GMT+6 (Starts 2 hours before midnight: 2 August 10:00 PM GMT+6)
      const startDate = new Date("2026-08-02T22:00:00+06:00").getTime();
      const endDate = new Date("2026-08-05T23:59:59+06:00").getTime();
      const now = new Date().getTime();

      if (now < startDate) {
        const diff = startDate - now;
        setRecruitmentStatus("upcoming");
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else if (now >= startDate && now <= endDate) {
        const diff = endDate - now;
        setRecruitmentStatus("open");
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setRecruitmentStatus("closed");
        setTimeLeft(null);
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    department: "",
    session: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    district: "",
    bloodGroup: "",
    exploreFields: [] as string[],
    valuableSkill: "",
    clubExperiences: "",
    paymentMethod: "",
    trxId: "",
    agreedTerms: false,
  });

  const handleResetForm = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setFormData({
      fullName: "",
      studentId: "",
      department: "",
      session: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      district: "",
      bloodGroup: "",
      exploreFields: [],
      valuableSkill: "",
      clubExperiences: "",
      paymentMethod: "",
      trxId: "",
      agreedTerms: false,
    });
    setIsSubmitted(false);
    setIsSubmitting(false);

    const formElement = document.getElementById("recruitment-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadPDF = () => {
    const printWindow = window.open("", "_blank", "width=800,height=900");
    if (!printWindow) return;

    const currentDate = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>PUST DSC Recruitment Slip - ${formData.studentId || "Application"}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            * { box-sizing: border-box; }
            body {
              font-family: 'Inter', sans-serif;
              color: #0f172a;
              margin: 0;
              padding: 30px;
              background-color: #ffffff;
            }
            .slip-card {
              max-width: 650px;
              margin: 0 auto;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              padding: 24px 28px;
            }
            .header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 1.5px solid #f1f5f9;
              padding-bottom: 16px;
              margin-bottom: 20px;
            }
            .logo-title {
              display: flex;
              align-items: center;
              gap: 12px;
            }
            .logo {
              height: 44px;
              width: auto;
            }
            .club-title {
              font-size: 17px;
              font-weight: 700;
              color: #0f172a;
              margin: 0;
            }
            .club-sub {
              font-size: 11px;
              color: #64748b;
              margin-top: 2px;
            }
            .date-badge {
              font-size: 11px;
              color: #64748b;
              font-weight: 500;
            }
            .title-bar {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              color: #0f172a;
              padding: 10px 14px;
              border-radius: 8px;
              margin-bottom: 18px;
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0.5px;
              text-transform: uppercase;
              text-align: center;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            th, td {
              padding: 9px 12px;
              text-align: left;
              border-bottom: 1px solid #f1f5f9;
              font-size: 12px;
            }
            th {
              color: #64748b;
              font-weight: 500;
              width: 38%;
            }
            td {
              font-weight: 600;
              color: #0f172a;
            }
            .highlight {
              font-family: monospace;
              font-weight: 700;
              color: #0f172a;
            }
            .footer-social {
              border-top: 1px solid #f1f5f9;
              padding-top: 14px;
              margin-top: 16px;
              display: flex;
              justify-content: space-between;
              font-size: 11px;
              color: #475569;
              font-weight: 500;
            }
            @media print {
              body { padding: 0; }
              .slip-card { border: none; padding: 0; }
            }
          </style>
        </head>
        <body>
          <div class="slip-card">
            <div class="header">
              <div class="logo-title">
                <img src="/images/logo/logo.png" class="logo" alt="PUST DSC Logo" onerror="this.style.display='none'" />
                <div>
                  <h1 class="club-title">PUST Data Science Club</h1>
                  <div class="club-sub">Pabna University of Science and Technology</div>
                </div>
              </div>
              <div class="date-badge">Date: ${currentDate}</div>
            </div>

            <div class="title-bar">
              Recruitment Application Slip 2026
            </div>

            <table>
              <tr>
                <th>Full Name</th>
                <td>${formData.fullName}</td>
              </tr>
              <tr>
                <th>Student ID / Roll No</th>
                <td>${formData.studentId}</td>
              </tr>
              <tr>
                <th>Department</th>
                <td>${formData.department}</td>
              </tr>
              <tr>
                <th>Academic Session</th>
                <td>${formData.session}</td>
              </tr>
              <tr>
                <th>Mobile Number</th>
                <td>${formData.mobile}</td>
              </tr>
              <tr>
                <th>Email Address</th>
                <td>${formData.email}</td>
              </tr>
              <tr>
                <th>Gender & Blood Group</th>
                <td>${formData.gender || "N/A"} | Blood Group: ${formData.bloodGroup || "N/A"}</td>
              </tr>
              <tr>
                <th>Home District</th>
                <td>${formData.district || "N/A"}</td>
              </tr>
              <tr>
                <th>Exploration Fields</th>
                <td>${formData.exploreFields.length > 0 ? formData.exploreFields.join(", ") : "N/A"}</td>
              </tr>
              <tr>
                <th>Target Skill</th>
                <td>${formData.valuableSkill || "N/A"}</td>
              </tr>
              <tr>
                <th>Payment Method</th>
                <td>${formData.paymentMethod}</td>
              </tr>
              <tr>
                <th>Transaction ID (TrxID)</th>
                <td><span class="highlight">${formData.trxId}</span></td>
              </tr>
            </table>

            <div class="footer-social">
              <span>🌐 pustdsc.github.io</span>
              <span>📘 facebook.com/pustdsc</span>
              <span>✉️ pustdsc@gmail.com</span>
            </div>
          </div>

          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 300);
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const handleCopyPayment = async (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const textToCopy = "01572908929";

    const fallbackCopy = () => {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        return successful;
      } catch {
        return false;
      }
    };

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } else {
        const res = fallbackCopy();
        if (res) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        }
      }
    } catch {
      const res = fallbackCopy();
      if (res) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    }
  };

  const handleCheckboxChange = (field: string) => {
    setFormData((prev) => {
      const exists = prev.exploreFields.includes(field);
      return {
        ...prev,
        exploreFields: exists
          ? prev.exploreFields.filter((f) => f !== field)
          : [...prev.exploreFields, field],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedTerms) {
      alert("Please accept the Terms & Conditions to proceed.");
      return;
    }

    if (formData.exploreFields.length === 0) {
      alert("Please select at least one field you want to explore.");
      return;
    }

    setIsSubmitting(true);

    try {
      const body = new FormData();
      body.append(ENTRY_MAP.fullName, formData.fullName);
      body.append(ENTRY_MAP.studentId, formData.studentId);
      body.append(ENTRY_MAP.department, formData.department);
      body.append(ENTRY_MAP.session, formData.session);
      body.append(ENTRY_MAP.mobile, formData.mobile);
      body.append(ENTRY_MAP.email, formData.email);
      body.append(ENTRY_MAP.gender, formData.gender);
      body.append(ENTRY_MAP.dob, formData.dob);
      body.append(ENTRY_MAP.district, formData.district);
      body.append(ENTRY_MAP.bloodGroup, formData.bloodGroup);

      formData.exploreFields.forEach((item) => {
        body.append(ENTRY_MAP.exploreFields, item);
      });

      body.append(ENTRY_MAP.valuableSkill, formData.valuableSkill);
      body.append(ENTRY_MAP.clubExperiences, formData.clubExperiences);
      body.append(ENTRY_MAP.paymentMethod, formData.paymentMethod);
      body.append(ENTRY_MAP.trxId, formData.trxId);
      body.append(
        ENTRY_MAP.agreedTerms,
        "I accept and agree to abide by all the terms and conditions of PUST Data Science Club."
      );

      await fetch(FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Form submission error:", err);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto my-4 sm:my-12 p-5 sm:p-10 bg-white rounded-none sm:rounded-3xl border-x-0 sm:border-x border-y border-slate-200/80 shadow-xl text-center animate-in fade-in duration-300">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-5 border border-emerald-100">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-4 py-1 text-xs font-semibold tracking-wider uppercase">
          Application Received
        </span>
        <h2 className="mt-4 font-space-grotesk text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Welcome to PUST DSC
        </h2>
        <p className="mt-3 text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>! Your recruitment application has been successfully recorded into our system.
        </p>

        {/* Receipt Details Box */}
        <div className="mt-7 p-5 sm:p-6 bg-slate-50/80 rounded-2xl border border-slate-200/70 text-left max-w-md mx-auto space-y-2.5 text-sm text-slate-700">
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500 font-medium">Student ID</span>
            <span className="font-semibold text-slate-900">{formData.studentId}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500 font-medium">Department</span>
            <span className="font-semibold text-slate-900">{formData.department} ({formData.session})</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-slate-500 font-medium">Payment Method</span>
            <span className="font-semibold text-slate-900">{formData.paymentMethod}</span>
          </div>
          <div className="flex justify-between items-center pt-0.5">
            <span className="text-slate-500 font-medium">TrxID</span>
            <code className="font-mono bg-white px-2.5 py-1 rounded-lg border border-slate-200 font-bold text-xs text-slate-900">{formData.trxId}</code>
          </div>
        </div>

        {/* Download PDF Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all active:scale-95 shadow-md cursor-pointer touch-manipulation"
          >
            <Download className="h-4.5 w-4.5" />
            Download Application Slip (PDF)
          </button>
        </div>

        {/* Follow & Connect Section */}
        <div className="mt-8 pt-6 border-t border-slate-100 max-w-md mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Stay Connected with PUST DSC
          </p>
          <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
            <a
              href="https://facebook.com/pustdsc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>

            <a
              href="https://pustdsc.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              <Globe className="h-4.5 w-4.5" />
              <span>Website</span>
            </a>

            <a
              href="mailto:pustdsc@gmail.com"
              className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-purple-600 hover:bg-purple-50 transition-colors"
            >
              <Mail className="h-4.5 w-4.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                studentId: "",
                department: "",
                session: "",
                mobile: "",
                email: "",
                gender: "",
                dob: "",
                district: "",
                bloodGroup: "",
                exploreFields: [],
                valuableSkill: "",
                clubExperiences: "",
                paymentMethod: "",
                trxId: "",
                agreedTerms: false,
              });
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-medium hover:bg-slate-200 transition-colors text-sm"
          >
            Submit Another Application
          </button>
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all text-sm shadow-sm"
          >
            Return Home <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-2 sm:my-8 px-0 sm:px-4 font-sans">

      {/* ─── Ultra-Premium Glassmorphic Countdown Banner ─── */}
      {(recruitmentStatus === "upcoming" || recruitmentStatus === "open") && timeLeft && (
        <div className={`mb-5 overflow-hidden rounded-none sm:rounded-2xl border-x-0 sm:border p-3.5 sm:p-4.5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3.5 ${recruitmentStatus === "open"
          ? "border-emerald-200/90 bg-gradient-to-r from-emerald-50/80 via-white to-teal-50/60"
          : "border-slate-200/90 bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/60"
          }`}>
          {/* Left Brand Badge & Live Status */}
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="shrink-0 flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${recruitmentStatus === "open" ? "bg-emerald-400" : "bg-blue-400"}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${recruitmentStatus === "open" ? "bg-emerald-600" : "bg-blue-600"}`}></span>
            </span>
            <span className={`text-xs font-black tracking-[0.2em] uppercase ${recruitmentStatus === "open" ? "text-emerald-950" : "text-slate-900"}`}>
              {recruitmentStatus === "open" ? "Recruitment Closes In" : "Recruitment Countdown"}
            </span>
          </div>

          {/* Right Sleek Ultra-Premium Glass Digit Cards */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {[
              { label: "DAYS", val: timeLeft.days },
              { label: "HOURS", val: timeLeft.hours },
              { label: "MINS", val: timeLeft.minutes },
              { label: "SECS", val: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={item.label} className="flex items-center gap-2 sm:gap-2.5">
                <div className={`flex flex-col items-center justify-center bg-white/90 backdrop-blur-md border shadow-2xs rounded-xl px-3 sm:px-3.5 py-2 min-w-[50px] sm:min-w-[58px] transition-all duration-300 ${recruitmentStatus === "open"
                  ? "border-emerald-200/90 hover:border-emerald-400"
                  : "border-slate-200/90 hover:border-blue-300"
                  }`}>
                  <span className="font-mono text-lg sm:text-2xl font-black text-slate-950 leading-none tracking-tight">
                    {String(item.val).padStart(2, "0")}
                  </span>
                  <span className={`text-[8.5px] font-extrabold tracking-[0.18em] mt-1 uppercase ${recruitmentStatus === "open" ? "text-emerald-600" : "text-blue-600"
                    }`}>
                    {item.label}
                  </span>
                </div>
                {idx < 3 && <span className="font-mono font-bold text-slate-300 text-sm sm:text-base animate-pulse">:</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── Ultra-Clean Hero Banner ─── */}
      <div className="mb-6 overflow-hidden rounded-none sm:rounded-2xl border-x-0 sm:border-x border-y border-slate-200 bg-white shadow-sm">

        {/* Top Header */}
        <div className="p-4 sm:p-6 pb-3.5 sm:pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <span className="inline-flex items-center rounded-md bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-white tracking-widest uppercase">
              Official Registration
            </span>

            {recruitmentStatus === "upcoming" ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/80">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Launching 3 August 2026
              </span>
            ) : recruitmentStatus === "open" ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Recruitment Open: 3–5 August 2026
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                Recruitment Closed
              </span>
            )}
          </div>

          <h1 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            PUST Data Science Club
          </h1>
          <p className="text-sm sm:text-base font-bold text-blue-600 mt-0.5 mb-2">
            Member Recruitment 2026
          </p>

          <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed w-full">
            Ready to explore Data Science, AI, and Machine Learning through hands-on projects, programming, research, competition and career-ready skills?
          </p>
        </div>

        {/* ─── Structured Info Split ─── */}
        <div className="grid lg:grid-cols-2 border-t border-slate-100 bg-slate-50/40">

          {/* Left Column: Overview & Steps */}
          <div className="p-4 sm:p-5 space-y-3.5 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between">
            {/* Top Group */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between h-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Registration Details</p>
              </div>

              {/* Period & Fee 2-card grid (matches height of Send Money box) */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Registration Period</p>
                  <p className="font-sans text-xs sm:text-sm font-bold text-slate-900 mt-0.5">3–5 August 2026</p>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Registration Fee</p>
                  <p className="font-sans text-xs sm:text-sm font-bold text-slate-900 mt-0.5">BDT 100</p>
                </div>
              </div>
            </div>

            {/* Bottom Group: Steps */}
            <div className="space-y-2 pt-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">How to Register</p>
              <div className="space-y-1.5 text-xs text-slate-700">
                {[
                  { n: "01", text: "Send BDT 100 via bKash or Nagad (Send Money)" },
                  { n: "02", text: "Set reference as your PUST Roll Number" },
                  { n: "03", text: "Submit this form with your Transaction ID" },
                ].map(({ n, text }) => (
                  <div key={n} className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-blue-600 shrink-0">{n}.</span>
                    <span className="font-medium text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Payment Method & Instructions */}
          <div className="p-4 sm:p-5 space-y-4 flex flex-col justify-between">
            {/* Top Group */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between h-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Payment Method</p>
                <div className="flex items-center gap-2">
                  <img src="/icons/bkash.png" alt="bKash" className="h-4 sm:h-5 w-auto opacity-90" />
                  <img src="/icons/nagad.png" alt="Nagad" className="h-4 sm:h-5 w-auto opacity-90" />
                </div>
              </div>

              {/* Send Money Number Card (matches height of left grid) */}
              <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div>
                  <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">bKash / Nagad Send Money</p>
                  <p className="font-mono text-sm sm:text-base font-extrabold text-slate-900 mt-0.5 tracking-tight">01572908929</p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPayment}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    handleCopyPayment(e);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all active:scale-95 cursor-pointer touch-manipulation select-none shrink-0 ${copied
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-slate-900 text-white hover:bg-blue-600 active:bg-blue-700"
                    }`}
                >
                  {copied ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy</>}
                </button>
              </div>
            </div>

            {/* Bottom Group: Reference & Offline */}
            <div className="space-y-2 pt-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Important Instructions</p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <p className="flex items-center gap-2">
                  <span className="font-bold text-slate-800 shrink-0">Reference:</span>
                  <span>PUST Roll Number <code className="font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 text-[11px]">(e.g. 221650)</code></span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-bold text-slate-800 shrink-0">Offline Booth:</span>
                  <span>In front of Auditorium, PUST campus.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info note */}
        <div className="px-5 sm:px-7 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Fields marked with <span className="text-rose-500 font-bold">*</span> are required</span>
          <span className="font-medium">PUST DSC</span>
        </div>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10">
        {/* Section 01 - Academic Profile */}
        <section className="rounded-none sm:rounded-3xl border-x-0 sm:border-x border-y border-slate-200/80 bg-white p-4 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                01
              </span>
              <h2 className="font-space-grotesk text-xl font-bold text-slate-900 tracking-tight">
                Academic Profile
              </h2>
            </div>

            <button
              type="button"
              onClick={(e) => handleResetForm(e)}
              onTouchEnd={(e) => {
                e.preventDefault();
                handleResetForm(e);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold hover:bg-slate-50 hover:text-slate-900 transition-all active:scale-95 text-xs shadow-2xs cursor-pointer select-none touch-action-manipulation"
            >
              <RotateCcw className="h-3.5 w-3.5 text-slate-400" />
              Clear Form
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Student ID / Roll No <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                placeholder="e.g. 221650"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Department <span className="text-rose-500">*</span>
              </label>
              <CustomSelect
                required
                value={formData.department}
                onChange={(val) => setFormData({ ...formData, department: val })}
                options={PUST_DEPARTMENTS}
                placeholder="Select Your Department"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Session <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.session}
                onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                placeholder="e.g. 2022–23"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
              />
            </div>
          </div>
        </section>

        {/* Section 02 - Contact & Personal Details */}
        <section className="rounded-none sm:rounded-3xl border-x-0 sm:border-x border-y border-slate-200/80 bg-white p-4 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
            <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
              02
            </span>
            <h2 className="font-space-grotesk text-xl font-bold text-slate-900 tracking-tight">
              Contact & Personal Details
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Mobile No (WhatsApp) <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="e.g. 01700000000"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. example@gmail.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Gender <span className="text-rose-500">*</span>
              </label>
              <div className="flex items-center gap-6 py-2.5">
                <label className="inline-flex items-center gap-2.5 cursor-pointer touch-action-manipulation">
                  <input
                    type="radio"
                    name="gender"
                    required
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="h-4 w-4 accent-slate-900"
                  />
                  <span className="text-sm font-medium text-slate-800">Male</span>
                </label>
                <label className="inline-flex items-center gap-2.5 cursor-pointer touch-action-manipulation">
                  <input
                    type="radio"
                    name="gender"
                    required
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="h-4 w-4 accent-slate-900"
                  />
                  <span className="text-sm font-medium text-slate-800">Female</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Date of Birth <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                required
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Home District
              </label>
              <input
                type="text"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                placeholder="e.g. Pabna"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Blood Group <span className="text-rose-500">*</span>
              </label>
              <CustomSelect
                required
                value={formData.bloodGroup}
                onChange={(val) => setFormData({ ...formData, bloodGroup: val })}
                options={BLOOD_GROUPS}
                placeholder="Select Blood Group"
              />
            </div>
          </div>
        </section>

        {/* Section 03 - Skills & Interests */}
        <section className="rounded-none sm:rounded-3xl border-x-0 sm:border-x border-y border-slate-200/80 bg-white p-4 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
            <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
              03
            </span>
            <h2 className="font-space-grotesk text-xl font-bold text-slate-900 tracking-tight">
              Skills & Interests
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
                Fields You Want to Explore (Multi-select) <span className="text-rose-500">*</span>
              </label>
              <div className="space-y-2.5">
                {EXPLORE_FIELD_OPTIONS.map((field) => {
                  const checked = formData.exploreFields.includes(field);
                  return (
                    <label
                      key={field}
                      className={`flex items-start gap-3.5 p-4 rounded-2xl border transition-all cursor-pointer select-none touch-action-manipulation ${checked
                        ? "border-slate-900 bg-slate-900 text-white font-medium shadow-sm"
                        : "border-slate-200/80 bg-white hover:bg-slate-50 text-slate-800"
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleCheckboxChange(field)}
                        className="mt-0.5 h-5 w-5 rounded accent-white shrink-0 cursor-pointer"
                      />
                      <span className="text-sm leading-snug">{field}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Which one skill would be most valuable for you to learn right now? <span className="text-rose-500">*</span>
              </label>
              <CustomSelect
                required
                value={formData.valuableSkill}
                onChange={(val) => setFormData({ ...formData, valuableSkill: val })}
                options={VALUABLE_SKILL_OPTIONS}
                placeholder="Select your top target skill"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Other Club Experiences
              </label>
              <textarea
                rows={3}
                value={formData.clubExperiences}
                onChange={(e) => setFormData({ ...formData, clubExperiences: e.target.value })}
                placeholder="Mention any past roles, memberships or activities in other university clubs..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs"
              />
            </div>
          </div>
        </section>

        {/* Section 04 - Payment & Declaration */}
        <section className="rounded-none sm:rounded-3xl border-x-0 sm:border-x border-y border-slate-200/80 bg-white p-4 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
            <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
              04
            </span>
            <h2 className="font-space-grotesk text-xl font-bold text-slate-900 tracking-tight">
              Payment & Declaration
            </h2>
          </div>

          {/* bKash & Nagad Payment Instruction Box (Compact & Small) */}
          <div className="mb-5 rounded-xl border border-slate-200/90 bg-gradient-to-r from-slate-50/80 via-white to-blue-50/30 p-3 sm:p-4 shadow-2xs">
            {/* Header with bKash & Nagad Image Logos */}
            <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Payment Details</h3>
              </div>

              {/* Exact bKash & Nagad Image Logos from /icons/ */}
              <div className="flex items-center gap-2">
                <img src="/icons/bkash.png" alt="bKash" className="h-5 sm:h-6 w-auto object-contain" />
                <img src="/icons/nagad.png" alt="Nagad" className="h-5 sm:h-6 w-auto object-contain" />
              </div>
            </div>

            <p className="text-xs text-slate-700 font-medium mb-2.5 leading-snug">
              Please send a <strong className="text-slate-950 font-bold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200/60">100 BDT</strong> registration fee via bKash/Nagad and enter your Transaction ID below.
            </p>

            <div className="grid gap-2 sm:grid-cols-2">
              {/* Number Card (Strictly 2 lines) */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="min-w-0 pr-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Send Money</span>
                    <span className="text-[9px] font-bold text-rose-600">(bKash/Nagad Only)</span>
                  </div>
                  <p className="font-mono text-sm sm:text-base font-black text-slate-950 tracking-wide mt-0.5">01572908929</p>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleCopyPayment(e)}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    handleCopyPayment(e);
                  }}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer touch-manipulation select-none shrink-0 ${copied
                      ? "bg-emerald-600 text-white shadow-2xs"
                      : "bg-slate-900 text-white hover:bg-blue-600 active:bg-blue-700 shadow-2xs"
                    }`}
                >
                  {copied ? <><Check className="h-3.5 w-3.5 text-emerald-300" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy</>}
                </button>
              </div>

              {/* Reference Card (Strictly 2 lines) */}
              <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-center">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Payment Reference</span>
                <p className="text-xs sm:text-sm font-bold text-slate-950 mt-0.5">
                  PUST Roll Number <span className="text-blue-700 font-bold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 font-mono text-[11px]">(e.g. 221650)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 mb-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Payment Method <span className="text-rose-500">*</span>
              </label>
              <CustomSelect
                required
                value={formData.paymentMethod}
                onChange={(val) => setFormData({ ...formData, paymentMethod: val })}
                options={[
                  "Bkash",
                  "Nagad",
                  "Hand Cash (Offline Booth- (If you pay offline, collect your Trx ID from our booth volunteers)"
                ]}
                placeholder="Select Payment Method"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Transaction ID <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.trxId}
                onChange={(e) => setFormData({ ...formData, trxId: e.target.value })}
                placeholder="e.g. BlX9872a1"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-all shadow-2xs tracking-wider font-semibold"
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="pt-4 border-t border-slate-100">
            <label className="flex items-start gap-3 cursor-pointer select-none touch-action-manipulation">
              <input
                type="checkbox"
                required
                checked={formData.agreedTerms}
                onChange={(e) => setFormData({ ...formData, agreedTerms: e.target.checked })}
                className="mt-0.5 h-5 w-5 rounded accent-slate-900 shrink-0 cursor-pointer"
              />
              <span className="text-sm font-medium text-slate-700 leading-normal">
                I accept and agree to abide by all the terms and conditions of PUST Data Science Club.
              </span>
            </label>
          </div>
        </section>

        {/* Submit & Backup Options */}
        <div className="flex flex-col items-center justify-center pt-2 px-4 sm:px-0 space-y-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-w-[280px] inline-flex h-13 items-center justify-center gap-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 px-8 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 active:scale-98 disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <span>Submitting Application...</span>
            ) : (
              <>
                <Send className="h-4.5 w-4.5" />
                Submit Application
              </>
            )}
          </button>

          {/* Alternative Google Form Fallback Message */}
          <div className="pt-2 text-center max-w-md px-4">
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              If any problem appears here, you can use the alternative link to fill out the form directly:{" "}
              <a
                href="https://forms.gle/yxMZGDXmpDTh5iWY6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors cursor-pointer"
              >
                <span>Google Form Link</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

