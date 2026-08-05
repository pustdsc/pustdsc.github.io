"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/data";
import { BrainCircuit, FlaskConical, Network, Search, Database, FileText, Cpu, ExternalLink, Sparkles, Globe, Eye, Mic, Bot, Gamepad2, Smartphone, ArrowUpRight, Layers, Gift, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const gallerySlides = [
  // 1. Member Recruitment 2026
  {
    src: "/images/recruitment banner.png",
    title: "Member Recruitment 2026 (Extended)",
    date: "August 3–8, 2026",
    desc: "Join PUST Data Science Club! Get 1 year of free DataCamp Premium and hands-on workshops.",
    category: "RECRUITMENT",
  },
  // 2. Statistics Week 2026
  {
    src: "/images/events/statweek26.png",
    title: "Statistics Week 2026",
    date: "April 2026",
    desc: "Sports week tournament featuring live fixtures and boards for Chess, Carrom, Cricket, and Football.",
    category: "TOURNAMENT",
  },
  // 3. AI & Data Science Career Insights & Python Mastery
  {
    src: "/images/events/career-mastery-banner.jpg",
    title: "Career Insights & Python Mastery",
    date: "May 20, 2025",
    desc: "A seminar and masterclass focused on AI career routes and Python hands-on data operations.",
    category: "WORKSHOP",
  },
  // 4. Inauguration Ceremony
  {
    src: "/images/events/inaug-IMG20250226122024.jpg",
    title: "Inauguration Ceremony",
    date: "Feb 26, 2025",
    desc: "PUST DSC core executive team during the official inauguration ceremony.",
    category: "CEREMONY",
  },
  // 5. Visit with Advisors
  {
    src: "/images/events/Visit with advisors.jpg",
    title: "Visit with Faculty Advisors",
    date: "July 23, 2026",
    desc: "Club members and faculty advisors during a special strategic visit.",
    category: "MEETUP",
  },
  // 6. Executive Committee Handover
  {
    src: "/images/events/handover-IMG_20260715_140630.jpg",
    title: "1st Executive Committee Handover",
    date: "July 15, 2026",
    desc: "The 1st executive committee formally accepts their leadership roles.",
    category: "HANDOVER",
  },
];

const skillShowcase = [
  { label: "Python", logo: "/images/skill icon/PYTHON (1).png" },
  { label: "R Programming", logo: "/images/skill icon/R.png" },
  { label: "Power BI", logo: "/images/skill icon/POWERBI.jpg" },
  { label: "Excel", logo: "/images/skill icon/EXCEL LOGO.png" },
  { label: "SQL", logo: "/images/skill icon/SQL LOGO.png" },
  { label: "SPSS", logo: "/images/skill icon/SPSS.png" },
  { label: "Jupyter", logo: "/images/skill icon/JUPYTER.png" },
  { label: "Git", logo: "/images/skill icon/Git_icon.svg.png" },
  { label: "Tableau", logo: "/images/skill icon/TABLEU.png" },
];

const pastEvents = [
  {
    title: "AI & Data Science Career Insights and Python Mastery",
    date: "May 20, 2025",
    image: "/images/events/career-mastery-banner.jpg",
    desc: "A career-focused session on AI and data science pathways with hands-on Python mastery for practical data work.",
  },
];

const resourceHub = {
  datasets: [
    { title: "Kaggle Datasets", url: "https://www.kaggle.com/datasets", badge: "Top Pick", bestFor: "Community datasets & ML models", desc: "Explore, analyze, and download over 350,000 high-quality community datasets." },
    { title: "Google Dataset Search", url: "https://datasetsearch.research.google.com", badge: "Google", bestFor: "Cross-repo search", desc: "Locate datasets hosted across thousands of repositories on the web." },
    { title: "UCI Machine Learning Repo", url: "https://archive.ics.uci.edu", badge: "Classic", bestFor: "Benchmark datasets", desc: "Over 600 datasets for classification, regression, and clustering algorithms." },
    { title: "Our World in Data", url: "https://ourworldindata.org", badge: "Insights", bestFor: "Global & social trends", desc: "Global research and open-source datasets covering climate, energy, and health." },
    { title: "Hugging Face Datasets", url: "https://huggingface.co/datasets", badge: "AI & NLP", bestFor: "Large ML datasets", desc: "Thousands of collaborative datasets for NLP, machine translation, and vision." },
    { title: "NASA Open Data Portal", url: "https://data.nasa.gov/dataset/", badge: "Space & Earth", bestFor: "Aerospace & Earth sciences", desc: "Access thousands of earth science, aerospace, and space exploration datasets." },
    { title: "UN Data", url: "https://data.un.org/", badge: "UN Stats", bestFor: "Global demographics & trade", desc: "A global statistical database covering statistics on trade, environment, and demographics." },
    { title: "Harvard Dataverse", url: "https://dataverse.harvard.edu/", badge: "Academic", bestFor: "Replication materials & data", desc: "An open research data repository to share, cite, and analyze research data across all disciplines." },
  ],
  papers: [
    {
      title: "Google Scholar",
      url: "https://scholar.google.com",
      badge: "Start Here",
      bestFor: "General academic searching",
      subCategory: "Search for Research Papers",
      desc: "Google Scholar searches across scholarly literature and considers publication source, authorship, full text, and citation relationships when ranking results."
    },
    {
      title: "Semantic Scholar",
      url: "https://www.semanticscholar.org",
      badge: "AI Search",
      bestFor: "Fast paper discovery",
      subCategory: "Search for Research Papers",
      desc: "A more beginner-friendly, AI-supported alternative for finding influential papers, related studies, and citation information."
    },
    {
      title: "CORE",
      url: "https://core.ac.uk",
      badge: "Free Full Text",
      bestFor: "Finding open-access full text",
      subCategory: "Search for Research Papers",
      desc: "CORE aggregates open-access research from repositories, preprint servers, and journals worldwide."
    },
    {
      title: "IEEE Xplore",
      url: "https://ieeexplore.ieee.org",
      badge: "Tech Papers",
      bestFor: "Electrical engineering & CS",
      subCategory: "Search for Research Papers",
      desc: "A digital library providing access to scientific and technical content published by the IEEE and its partners."
    },
    {
      title: "DOAJ",
      url: "https://doaj.org",
      badge: "Open Access",
      bestFor: "Open-access journal articles",
      subCategory: "Open-Access Journals",
      desc: "DOAJ indexes open-access journals and works to improve the visibility of quality, peer-reviewed open-access research."
    },
    {
      title: "PubMed Central",
      url: "https://www.ncbi.nlm.nih.gov/pmc/",
      badge: "Health Research",
      bestFor: "Free health and biomedical papers",
      subCategory: "Open-Access Journals",
      desc: "Very important for statistics students working with health, epidemiology, survival analysis, mental health, biology, and public-health topics."
    },
    {
      title: "arXiv",
      url: "https://arxiv.org",
      badge: "Preprint",
      bestFor: "Recent technical research",
      subCategory: "Preprints and Recent Research",
      desc: "Essential for statistics, mathematics, computer science, machine learning, AI, and data science."
    },
    {
      title: "SSRN",
      url: "https://www.ssrn.com",
      badge: "Working Papers",
      bestFor: "Economics and social science",
      subCategory: "Preprints and Recent Research",
      desc: "Useful for economics, finance, business, law, social science, and working papers."
    },
    {
      title: "medRxiv",
      url: "https://www.medrxiv.org",
      badge: "Medical Preprint",
      bestFor: "Recent medical studies",
      subCategory: "Preprints and Recent Research",
      desc: "Include this because statistics students may work on medical and public-health research."
    },
    {
      title: "Zenodo",
      url: "https://zenodo.org",
      badge: "Research Repository",
      bestFor: "Research files, code, and datasets",
      subCategory: "Research Outputs & Repositories",
      desc: "Provides papers, datasets, code, presentations, reports, and other research outputs. It can preserve GitHub repositories."
    },
    {
      title: "Harvard Dataverse",
      url: "https://dataverse.harvard.edu",
      badge: "Research Data",
      bestFor: "Research datasets and replication materials",
      subCategory: "Research Outputs & Repositories",
      desc: "An open research data repository to share, cite, and analyze research data across all disciplines."
    },
    {
      title: "OATD",
      url: "https://oatd.org",
      badge: "Thesis Finder",
      bestFor: "Thesis literature reviews",
      subCategory: "Thesis and Dissertation",
      desc: "The best specialised option for discovering open-access theses and dissertations."
    },
    {
      title: "EThOS",
      url: "https://ethos.bl.uk",
      badge: "UK Theses",
      bestFor: "UK doctoral research",
      subCategory: "Thesis and Dissertation",
      desc: "Useful for doctoral theses from UK universities."
    },
    {
      title: "Unpaywall",
      url: "https://unpaywall.org",
      badge: "Legal Access",
      bestFor: "Finding a free legal version",
      subCategory: "Legal Access & Research Networks",
      desc: "Helps students locate legally available open-access copies of papers."
    },
    {
      title: "ResearchGate",
      url: "https://www.researchgate.net",
      badge: "Research Network",
      bestFor: "Connecting with researchers",
      subCategory: "Legal Access & Research Networks",
      desc: "Useful for author profiles, uploaded papers, research projects, and requesting full text from authors."
    },
    {
      title: "JSTOR",
      url: "https://www.jstor.org",
      badge: "Partly Free",
      bestFor: "Archived academic literature",
      subCategory: "Legal Access & Research Networks",
      desc: "Useful for social science, history, economics, humanities, and interdisciplinary research. Note: Some content may require institutional access."
    },
  ],
  learning: [
    { title: "Seeing Theory", url: "https://seeing-theory.brown.edu/", badge: "Stats Visuals", bestFor: "Interactive probability & statistics", desc: "A beautiful visual introduction to probability and statistics concepts from Brown University." },
    { title: "Captain Viz Inspirations", url: "https://captainviz.com/inspirations", badge: "Data Viz", bestFor: "Data visualization designs", desc: "Curated dashboard designs and data visualization inspirations." },
    { title: "Workout Wednesday", url: "https://www.workout-wednesday.com/power-bi-challenges/", badge: "Power BI", bestFor: "Weekly business intelligence challenges", desc: "Weekly hands-on challenges to test and improve your Power BI and Tableau skills." },
    { title: "MLU-Explain", url: "https://mlu-explain.github.io/", badge: "ML Visuals", bestFor: "Visual machine learning concepts", desc: "Visual and interactive explainers of core machine learning concepts by Amazon's ML University." },
    { title: "ML Visualized", url: "https://mlvisualized.com/", badge: "ML Math", bestFor: "Visual machine learning mathematics", desc: "Beautifully visualized math foundations behind machine learning models." },
    { title: "Stats Kingdom Visualization", url: "https://www.statskingdom.com/visualization.html", badge: "Stats Tools", bestFor: "Interactive stats calculators", desc: "Interactive statistical calculators and distribution visualizations." },
    { title: "PyNative", url: "https://pynative.com/python/", badge: "Python Code", bestFor: "Python exercises & quizzes", desc: "Hands-on Python programming tutorials, exercises, and interactive quizzes." },
    { title: "R-Coder", url: "https://r-coder.com/", badge: "R Code", bestFor: "R statistics tutorials", desc: "Complete guides and tutorials for stats and data science in R." },
    { title: "GeeksforGeeks Data Science", url: "https://www.geeksforgeeks.org/data-science/data-science-for-beginners/", badge: "DS Basics", bestFor: "Data science tutorials", desc: "A comprehensive beginner-friendly road map for learning data science basics." },
    { title: "Melbourne Applets", url: "https://melbapplets.ms.unimelb.edu.au/", badge: "Interactive Math", bestFor: "Mathematical applets", desc: "Interactive mathematical and statistical applets by University of Melbourne." },
    { title: "Teachable Machine", url: "https://teachablemachine.withgoogle.com/", badge: "AI Builder", bestFor: "No-code model training", desc: "A fast, easy way to create machine learning models for your sites, apps, and more with no code." },
    { title: "SQLZoo", url: "https://www.sqlzoo.net/wiki/SQL_Tutorial", badge: "SQL Tutorials", bestFor: "Interactive database queries", desc: "Interactive online SQL tutorials and quizzes to learn database programming." },
    { title: "CNN Explainer", url: "https://poloclub.github.io/cnn-explainer/", badge: "Deep Learning", bestFor: "Convolutional neural network visualization", desc: "Interactive visualization of how convolutional neural networks (CNNs) process images." },
    { title: "Transformer Explainer", url: "https://poloclub.github.io/transformer-explainer/", badge: "Transformers", bestFor: "LLM architecture visualization", desc: "Interactive visual explainer of how transformer models like GPT work, step by step." },
    { title: "TensorFlow Playground", url: "https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.38855&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false", badge: "Neural Network", bestFor: "Interactive neural net tuning", desc: "An interactive browser-based visualization of neural networks training in real-time." }
  ],
  tools: [
    { title: "Tesla Autopilot", url: "https://www.tesla.com/autopilot", badge: "Autonomous", bestFor: "Object detection, lane recognition and driving assistance", subCategory: "Data Science in Everyday Life", desc: "" },
    { title: "Google Maps", url: "https://maps.google.com/", badge: "Prediction", bestFor: "Traffic prediction, route optimisation and ETA estimation", subCategory: "Data Science in Everyday Life", desc: "" },
    { title: "YouTube", url: "https://www.youtube.com/", badge: "Recommender", bestFor: "Video ranking and content recommendations", subCategory: "Data Science in Everyday Life", desc: "" },
    { title: "Amazon", url: "https://www.amazon.com/", badge: "Personalisation", bestFor: "Product recommendations and personalised search", subCategory: "Data Science in Everyday Life", desc: "" },
    { title: "Google Translate", url: "https://translate.google.com/", badge: "Translation", bestFor: "NLP and neural machine translation", subCategory: "Translation & Language", desc: "" },
    { title: "DeepL Translator", url: "https://www.deepl.com/translator", badge: "Deep Learning", bestFor: "Deep learning–based translation", subCategory: "Translation & Language", desc: "" },
    { title: "Grammarly", url: "https://www.grammarly.com/", badge: "NLP", bestFor: "Grammar checking, rewriting and writing suggestions", subCategory: "Translation & Language", desc: "" },
    { title: "Google Lens", url: "https://lens.google/", badge: "Vision", bestFor: "Visual search, OCR and object recognition", subCategory: "Computer Vision & Imaging", desc: "" },
    { title: "MediaPipe", url: "https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/object_detector", badge: "Real-time", bestFor: "Face, hand and pose detection", subCategory: "Computer Vision & Imaging", desc: "" },
    { title: "remove.bg", url: "https://www.remove.bg/", badge: "Segmentation", bestFor: "Image segmentation and background removal", subCategory: "Computer Vision & Imaging", desc: "" },
    { title: "ElevenLabs", url: "https://elevenlabs.io/text-to-speech", badge: "Text-to-Speech", bestFor: "Text-to-Speech", subCategory: "Speech & Audio", desc: "" },
    { title: "Deepgram Playground", url: "https://playground.deepgram.com/", badge: "Speech-to-Text", bestFor: "Speech-to-Text, Automatic Speech Recognition", subCategory: "Speech & Audio", desc: "" },
    { title: "ChatGPT", url: "https://chatgpt.com/", badge: "LLM", bestFor: "Generative AI, LLMs, NLP", subCategory: "Create with Generative Models", desc: "" },
    { title: "Google Gemini", url: "https://gemini.google.com/", badge: "Multimodal", bestFor: "Multimodal AI, LLMs", subCategory: "Create with Generative Models", desc: "" },
    { title: "Runway", url: "https://runway.com/", badge: "Video Gen", bestFor: "Generative AI, Text-to-Video", subCategory: "Create with Generative Models", desc: "" },
    { title: "MusicFX", url: "https://labs.google/fx/tools/music-fx", badge: "Music Gen", bestFor: "Generative AI, Text-to-Music", subCategory: "Create with Generative Models", desc: "" },
    { title: "Teachable Machine", url: "https://teachablemachine.withgoogle.com/", badge: "No-Code AI", bestFor: "No-code image, sound and pose classification", subCategory: "Train & Test Models", desc: "" },
    { title: "Roboflow Playground", url: "https://playground.roboflow.com/models", badge: "Computer Vision", bestFor: "Object detection and image classification", subCategory: "Train & Test Models", desc: "" },
    { title: "Semantris", url: "https://research.google.com/semantris/", badge: "NLP Game", bestFor: "NLP, Word Embeddings and Semantic Similarity", subCategory: "Play & Experiment", desc: "" },
    { title: "AutoDraw", url: "https://www.autodraw.com/", badge: "Vision", bestFor: "Sketch Recognition and Computer Vision", subCategory: "Play & Experiment", desc: "" },
    { title: "Infinite Drum Machine", url: "https://experiments.withgoogle.com/ai/drum-machine/view/", badge: "Audio ML", bestFor: "Audio embeddings and clustering", subCategory: "Play & Experiment", desc: "" },
  ],
};

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<"datasets" | "papers" | "learning" | "tools">("tools");
  const [searchQuery, setSearchQuery] = useState("");

  const groupedPapers = resourceHub.papers
    .filter(r =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.desc.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .reduce((acc, curr) => {
      const cat = curr.subCategory || "General";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(curr);
      return acc;
    }, {} as Record<string, typeof resourceHub.papers>);

  const groupedTools = resourceHub.tools
    .filter(r =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.bestFor.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .reduce((acc, curr) => {
      const cat = curr.subCategory || "General";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(curr);
      return acc;
    }, {} as Record<string, typeof resourceHub.tools>);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % gallerySlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % gallerySlides.length);
  };

  // Homepage Recruitment Countdown Banner State & Logic (100% Synced with RecruitmentForm)
  const [recruitmentBannerState, setRecruitmentBannerState] = useState<"upcoming" | "open" | "ended">("upcoming");
  const [bannerTimeLeft, setBannerTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const startDate = new Date("2026-08-02T22:00:00+06:00").getTime();
      const endDate = new Date("2026-08-08T23:59:59+06:00").getTime();
      const now = new Date().getTime();

      if (now > endDate) {
        setRecruitmentBannerState("ended");
        setBannerTimeLeft(null);
        return;
      }

      if (now >= startDate && now <= endDate) {
        const diff = endDate - now;
        setRecruitmentBannerState("open");
        setBannerTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        const diff = startDate - now;
        setRecruitmentBannerState("upcoming");
        setBannerTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col space-y-20 md:space-y-28">

      {/* ═══ HERO ═══ */}
      <section className="relative -mx-[16px] sm:-mx-[20px] lg:-mx-[32px] -mt-8 pb-4 pt-0">
        <div className="w-full relative bg-slate-950 min-h-[85vh] md:min-h-[520px] md:aspect-[21/9] md:overflow-hidden flex flex-col md:block py-12 md:py-0">
          {/* Background Image */}
          <Image
            src="/images/events/inaug-IMG20250226122024.jpg"
            alt="PUST Data Science Club"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Transparent dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent z-0"></div>

          {/* Content Area */}
          <div className="relative md:absolute md:inset-0 z-10 flex-1 flex flex-col justify-between">
            <div className="mx-auto max-w-[1440px] w-full h-full flex flex-col justify-between p-5 sm:p-10 md:p-12 lg:px-8 xl:px-0 lg:py-16 gap-12 md:gap-0 flex-1">

              {/* Top Text Badge & Content */}
              <div className="space-y-4 md:space-y-6">
                <div>
                  <span className="inline-flex items-center text-[10px] sm:text-xs font-bold tracking-[0.18em] text-blue-400 uppercase">
                    Pabna University of Science & Technology
                  </span>
                </div>
                <h1 className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.14] tracking-tight">
                  From Data Science to AI, <br className="hidden sm:inline" />
                  We Learn by <span className="text-blue-400 font-extrabold">Building</span>.
                </h1>
                <div className="w-20 h-[1.5px] bg-blue-500 rounded"></div>
                <p className="max-w-2xl text-sm md:text-base text-slate-100 leading-[1.6] font-normal">
                  A student-driven community exploring statistics, data analytics, machine learning and AI through workshops, projects, competitions, research and industry engagement, turning data into meaningful insights and fostering an innovative data culture at PUST.
                </p>
              </div>

              {/* Bottom Section: Buttons & Stats grouped close together */}
              <div className="space-y-6 w-full lg:max-w-2xl">
                {/* Buttons (first) */}
                <div className="relative z-20 pointer-events-auto flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Link
                    href="/committee"
                    className="relative z-20 cursor-pointer w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 shadow-sm"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/membership"
                    className="relative z-20 cursor-pointer w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-6 text-sm font-semibold text-white transition-all hover:bg-white/20 active:scale-95"
                  >
                    Join Us
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 w-full">
                  {siteData.stats.slice(0, 3).map((s, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white leading-none tracking-tighter">{s.value}{s.suffix}</span>
                      <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wide leading-none mt-1.5">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═══ RECRUITMENT COUNTDOWN BANNER (Below Hero, Vanishes after 8 Aug 23:59) ═══ */}
      {recruitmentBannerState !== "ended" && bannerTimeLeft && (
        <section className="-mx-[16px] sm:-mx-[20px] lg:-mx-[32px] -mt-16 sm:-mt-20 bg-slate-900 border-y border-blue-900/50 text-white relative z-30 shadow-md">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            {/* Status Indicator & Text */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${recruitmentBannerState === "open" ? "bg-emerald-400" : "bg-blue-400"}`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${recruitmentBannerState === "open" ? "bg-emerald-500" : "bg-blue-500"}`}></span>
              </span>

              <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded border ${recruitmentBannerState === "open"
                  ? "bg-emerald-950/80 text-emerald-300 border-emerald-800/80"
                  : "bg-blue-950/80 text-blue-300 border-blue-800/80"
                }`}>
                {recruitmentBannerState === "open" ? "Recruitment Ongoing" : "Member Recruitment 2026"}
              </span>

              <p className="text-xs sm:text-sm font-semibold text-slate-200">
                {recruitmentBannerState === "open"
                  ? "Official Registration Extended! LIVE & ONGOING till 8 August"
                  : "Official Member Registration Starts 3–8 August 2026"}
              </p>
            </div>

            {/* Countdown Digits & Link */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1 font-mono text-xs sm:text-sm font-extrabold">
                <span className="text-[10px] text-slate-400 font-sans uppercase font-bold mr-1">
                  {recruitmentBannerState === "open" ? "Closes In:" : "Starts In:"}
                </span>
                <div className="bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-white min-w-[26px] text-center">{String(bannerTimeLeft.days).padStart(2, "0")}d</div>
                <span>:</span>
                <div className="bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-white min-w-[26px] text-center">{String(bannerTimeLeft.hours).padStart(2, "0")}h</div>
                <span>:</span>
                <div className="bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-white min-w-[26px] text-center">{String(bannerTimeLeft.minutes).padStart(2, "0")}m</div>
                <span>:</span>
                <div className="bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-blue-400 min-w-[26px] text-center">{String(bannerTimeLeft.seconds).padStart(2, "0")}s</div>
              </div>

              <Link
                href="/membership#recruitment-form"
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all active:scale-95 shadow-2xs cursor-pointer select-none"
              >
                <span>{recruitmentBannerState === "open" ? "Apply Now" : "Register"}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══ OFFICIAL EDUCATION PARTNER: DATACAMP (Balanced Layout) ═══ */}
      <section className="-mx-[16px] sm:-mx-[20px] lg:-mx-[32px] my-6 border-y border-slate-200/80 bg-slate-50/70 py-6 sm:py-7 md:py-8 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">

          {/* Left Column: Exact Partnership Logo Card */}
          <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-start">
            <div className="inline-flex items-center justify-center bg-white border border-slate-200/90 rounded-2xl shadow-2xs px-5 py-3.5 sm:px-6 sm:py-4 gap-4 sm:gap-5 max-w-full overflow-x-auto">
              {/* Left: PUST DSC Logo + Red Line + Stacked Name */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md overflow-hidden bg-[#0a192f] p-1 flex items-center justify-center shrink-0">
                  <Image
                    src="/images/logo/logo.png"
                    alt="PUST DSC Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="h-7 sm:h-8 w-[2px] bg-[#c02626] shrink-0 rounded-full" />
                <div className="text-left font-space-grotesk font-black text-slate-900 leading-[1.1] tracking-tight uppercase text-[10px] sm:text-[11px] md:text-xs select-none">
                  <p>PUST</p>
                  <p>DATA SCIENCE</p>
                  <p>CLUB</p>
                </div>
              </div>

              {/* Middle: Partnership Cross Symbol */}
              <div className="text-slate-700 text-base sm:text-lg md:text-xl font-light px-0.5 select-none shrink-0">
                ✕
              </div>

              {/* Right: DataCamp Donates Logo */}
              <div className="shrink-0 flex items-center">
                <Image
                  src="/images/logo/DC_Donates_logo_regular.png"
                  alt="DataCamp Donates"
                  width={150}
                  height={40}
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Label, Title & Description (Balanced Alignment) */}
          <div className="space-y-2 text-center md:text-left flex-1 max-w-2xl">
            <div>
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-[11px] md:text-xs font-extrabold uppercase tracking-widest shadow-2xs">
                Official Education Partner
              </span>
            </div>
            <h2 className="font-space-grotesk text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              1 Year of Free <span className="text-blue-600 font-black">DataCamp Premium</span> Access
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              PUST Data Science Club has officially partnered with <strong className="text-slate-900 font-semibold">DataCamp Donates</strong> to provide all registered members with 1 year of free DataCamp Premium access.
            </p>
          </div>

        </div>
      </section>

      {/* ═══ PAST EVENTS & HIGHLIGHTS (Visual Studio YouTube Hub 3D Coverflow Style) ═══ */}
      <section className="w-full py-12 md:py-16 overflow-hidden flex flex-col items-center">
        
        {/* Header Title & Button (Matching Visual Studio Hub Screenshot) */}
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-space-grotesk text-slate-900">
            Past Events &amp; Highlights
          </h2>
          <div>
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#3b2e58] hover:bg-[#4d3c72] px-6 py-2 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:scale-105"
            >
              <span>Explore All Events</span>
            </Link>
          </div>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div className="relative w-full max-w-6xl mt-10 min-h-[260px] sm:min-h-[380px] md:min-h-[440px] flex items-center justify-center px-4">
          
          {/* Left Arrow Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 lg:left-12 z-30 p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-lg border border-slate-200 transition-all hover:scale-110"
            aria-label="Previous event"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* 3D Cards Frame */}
          <div className="relative w-full max-w-4xl h-[240px] sm:h-[340px] md:h-[400px] flex items-center justify-center">
            {gallerySlides.map((slide, i) => {
              const isCenter = slideIndex === i;
              const isLeft = (slideIndex - 1 + gallerySlides.length) % gallerySlides.length === i;
              const isRight = (slideIndex + 1) % gallerySlides.length === i;

              if (!isCenter && !isLeft && !isRight) return null;

              return (
                <div
                  key={i}
                  onClick={() => {
                    if (!isCenter) {
                      setSlideIndex(i);
                      setIsPlaying(false);
                    }
                  }}
                  className={`absolute top-0 bottom-0 aspect-[16/9] transition-all duration-500 ease-out rounded-2xl overflow-hidden cursor-pointer ${
                    isCenter
                      ? "z-20 scale-100 opacity-100 shadow-2xl border-2 border-white/80 translate-x-0"
                      : isLeft
                      ? "z-10 scale-[0.82] sm:scale-85 opacity-70 border border-slate-200 -translate-x-[35%] sm:-translate-x-[45%] md:-translate-x-[55%]"
                      : "z-10 scale-[0.82] sm:scale-85 opacity-70 border border-slate-200 translate-x-[35%] sm:translate-x-[45%] md:translate-x-[55%]"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={isCenter}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Category Pill Tag */}
                  {slide.category && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-widest shadow-2xs">
                      {slide.category}
                    </span>
                  )}

                  {/* Center Translucent Play Icon Overlay (Matching Visual Studio Hub Screenshot) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 border border-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 text-white text-left z-10">
                    <span className="text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-wider block mb-1">
                      {slide.date}
                    </span>
                    <h3 className="font-space-grotesk text-sm sm:text-lg md:text-xl font-extrabold line-clamp-1 leading-snug">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Navigation */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 lg:right-12 z-30 p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-lg border border-slate-200 transition-all hover:scale-110"
            aria-label="Next event"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Center Play/Pause Toggle Button (Matching Visual Studio Hub || / ▶ button) */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-xl bg-[#2b2738] hover:bg-[#3b354d] text-white flex items-center justify-center shadow-md transition-colors border border-white/10"
            aria-label={isPlaying ? "Pause slideshow" : "Start slideshow"}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {gallerySlides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setSlideIndex(i);
                  setIsPlaying(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  slideIndex === i ? "w-6 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </section>

      {/* ═══ WHY JOIN ═══ */}
      <section className="w-auto -mx-[16px] md:mx-0 md:w-full rounded-none md:rounded-2xl bg-gradient-to-b from-slate-50 to-white border-y md:border border-slate-100/80 px-4 py-16 md:p-12 md:py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-space-grotesk text-slate-900">
            Why Join <span className="text-blue-600 font-extrabold">PUST Data Science Club</span>?
          </h2>
          <p className="mt-4 text-slate-500 font-normal leading-[1.6]">
            Start your data science journey with us.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              Icon: BrainCircuit,
              title: "Build In-Demand Skills",
              desc: "Learn Statistics, Python, R, SQL, Data Visualization, Machine Learning, Deep Learning and AI through practical workshops and peer learning.",
            },
            {
              Icon: FlaskConical,
              title: "Apply What You Learn",
              desc: "Work with real data through collaborative projects, research, datathons and competitions while building a strong portfolio.",
            },
            {
              Icon: Network,
              title: "Connect and Grow",
              desc: "Collaborate with students across departments and connect with seniors, alumni, researchers and industry professionals for mentorship and career insights.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold text-slate-800 font-space-grotesk leading-snug">{title}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">{desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ═══ SKILLS SHOWCASE ═══ */}
      <section className="w-auto -mx-[16px] md:mx-0 md:w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-8 xl:px-0">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-space-grotesk text-blue-600">
              Skills We Cover
            </h2>
            <p className="mt-4 text-slate-500 font-medium">
              A visual tour of the tools, methods and thinking patterns we practice in workshops, projects and research sessions.
            </p>
          </div>

          <div className="marquee-wrapper flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee-track marquee-left">
              {[...skillShowcase, ...skillShowcase].map(({ label, logo }, i) => (
                <div key={`${label}-${i}`} className="mx-2 md:mx-3 flex min-w-[120px] md:min-w-[168px] shrink-0 items-center gap-2 md:gap-3 rounded-lg md:rounded-xl border border-slate-200 bg-white px-2.5 py-2 md:px-4 md:py-3 shadow-sm">
                  <span className="relative flex h-8 w-8 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-md md:rounded-lg bg-slate-50">
                    <Image src={logo} alt={`${label} logo`} width={32} height={32} className="h-5 w-5 md:h-8 md:w-8 object-contain" />
                  </span>
                  <span className="text-xs md:text-sm font-bold text-slate-800 font-space-grotesk whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ═══ EXPLORER HUB ═══ */}
      <section className="relative w-auto -mx-[16px] overflow-hidden border-y border-slate-200 bg-[#f4f4f4] px-4 py-16 md:mx-0 md:w-full md:rounded-2xl md:border md:px-10 md:py-24 lg:px-14">
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div>
              <h2 className="font-space-grotesk text-3xl font-bold tracking-[-0.035em] text-[#171a20] sm:text-4xl md:text-5xl">
                Explore the World of{" "}
                <span className="text-blue-600">Data Science</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm font-normal leading-7 text-slate-600 md:text-base">
                Discover datasets, research tools, learning platforms, and real-world applications designed to help you learn, practise, and build.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-1.5 shadow-sm sm:rounded-xl">
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-4">
              {([
                { key: "tools", label: "Try Technology", icon: Cpu },
                { key: "learning", label: "Learning Pathway", icon: BrainCircuit },
                { key: "datasets", label: "Datasets", icon: Database },
                { key: "papers", label: "Research", icon: FileText },
              ] as const).map(({ key, label, icon: Icon }) => {
                const isTabActive = activeTab === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setActiveTab(key);
                      setSearchQuery("");
                    }}
                    aria-pressed={isTabActive}
                    className={`group flex min-w-0 items-center gap-1.5 rounded px-2 py-1.5 text-left transition-all duration-200 sm:gap-2 sm:rounded-md sm:px-3 sm:py-2.5 ${isTabActive ? "bg-[#171a20] text-white" : "text-slate-700 hover:bg-slate-100"
                      }`}
                  >
                    <span className={`flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded transition-colors sm:h-8 sm:w-8 sm:rounded-md ${isTabActive ? "bg-white/10 text-white" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                      }`}>
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                    <span className="whitespace-nowrap text-[10px] font-bold sm:text-[11px] md:text-xs">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#171a20]">Curated for students</p>
              <p className="mt-1 text-xs text-slate-500">{resourceHub[activeTab].length} resources in this collection</p>
            </div>
            <label className="relative block w-full sm:w-72">
              <span className="sr-only">Search resources</span>
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="search"
                placeholder="Search this collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11 w-full rounded-md border border-slate-300 bg-white pl-11 pr-4 text-xs font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </label>
          </div>

          {/* Resources Grid */}
          <div className="mt-7 w-full min-h-[260px]">
            <AnimatePresence mode="popLayout">
              {activeTab === "papers" ? (
                <div className="space-y-8 w-full">
                  {Object.entries(groupedPapers).map(([categoryName, items]) => (
                    <div key={categoryName} className="space-y-4">
                      <h3 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        <span className="h-px w-8 bg-slate-300" />
                        {categoryName}
                      </h3>
                      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 xl:grid-cols-5">
                        {items.map((resource) => (
                          <motion.a
                            key={resource.title}
                            href={resource.url}
                            target="_blank"
                            rel="noreferrer"
                            layout
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            className="group flex items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm"
                          >
                            <h4 className="truncate font-space-grotesk text-xs font-bold text-[#171a20] transition-colors group-hover:text-blue-600">
                              {resource.title}
                            </h4>
                            <ExternalLink className="ml-2 h-3 w-3 shrink-0 text-slate-400 transition-colors group-hover:text-blue-600" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  ))}
                  {Object.keys(groupedPapers).length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="py-12 text-center text-xs text-slate-400 font-semibold"
                    >
                      No matching resources found.
                    </motion.div>
                  )}
                </div>
              ) : activeTab === "tools" ? (
                <div className="space-y-4 w-full">
                  {Object.entries(groupedTools).map(([categoryName, items]) => (
                    <div key={categoryName} className="space-y-2">
                      <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        <span className="h-px w-6 bg-slate-300" />
                        {categoryName}
                      </h3>
                      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 xl:grid-cols-5">
                        {items.map((resource) => (
                          <motion.a
                            key={resource.title}
                            href={resource.url}
                            target="_blank"
                            rel="noreferrer"
                            layout
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            className="group flex items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm"
                          >
                            <div className="min-w-0 pr-1.5">
                              <span className="block truncate font-space-grotesk text-xs font-bold text-[#171a20] transition-colors group-hover:text-blue-600">
                                {resource.title}
                              </span>
                              <span className="block truncate text-[10px] text-slate-400 font-medium leading-tight">
                                {resource.bestFor}
                              </span>
                            </div>
                            <ExternalLink className="h-3 w-3 shrink-0 text-slate-400 transition-colors group-hover:text-blue-600" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  ))}
                  {Object.keys(groupedTools).length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="py-12 text-center text-xs text-slate-400 font-semibold"
                    >
                      No matching resources found.
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className={`grid w-full gap-2 ${activeTab === "learning"
                  ? "grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
                  : "sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
                  }`}>
                  {resourceHub[activeTab]
                    .filter(r =>
                      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      r.desc.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((resource) => (
                      <motion.a
                        key={resource.title}
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer"
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="group flex items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm"
                      >
                        <h4 className="truncate font-space-grotesk text-xs font-bold text-[#171a20] transition-colors group-hover:text-blue-600">
                          {resource.title}
                        </h4>
                        <ExternalLink className="ml-2 h-3 w-3 shrink-0 text-slate-400 transition-colors group-hover:text-blue-600" />
                      </motion.a>
                    ))
                  }
                  {resourceHub[activeTab].filter(r =>
                    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    r.desc.toLowerCase().includes(searchQuery.toLowerCase())
                  ).length === 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-2 lg:col-span-3 py-12 text-center text-xs text-slate-400 font-semibold"
                      >
                        No matching resources found.
                      </motion.div>
                    )}
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="w-full py-4 flex flex-col items-center">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-space-grotesk text-blue-600">
            Past Events
          </h2>
          <p className="mt-4 text-slate-500 font-medium">
            A look back at the sessions and activities that shaped our learning community.
          </p>
        </div>

        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
          {pastEvents.map((event) => (
            <article key={event.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-md bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                  Ended
                </span>
                <span className="absolute bottom-4 left-4 rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-blue-600 backdrop-blur-sm">
                  {event.date}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-space-grotesk text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{event.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full py-20 rounded-2xl bg-gradient-to-r from-blue-50/40 via-indigo-50/40 to-slate-50 border border-slate-100/80 my-8">
        <div className="mx-auto max-w-3xl text-center px-6">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Become Part of PUST DSC</span>
          <h2 className="mt-3 mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight font-space-grotesk text-blue-600">Build Your Data Journey with Us</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base md:text-lg text-slate-500 font-medium">
            Whether you are a beginner or already exploring data science, join PUST DSC to learn through workshops, projects, competitions, research and industry connections.
          </p>
          <div className="relative z-20 pointer-events-auto flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/membership"
              className="relative z-20 cursor-pointer w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:scale-95 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Join PUST DSC
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link
              href="/contact"
              className="relative z-20 cursor-pointer w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 active:scale-95 hover:bg-slate-50 hover:text-slate-950"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

