import BlogHero from "../components/BlogHero";

const offerLinks: Record<string, string> = {
  "GitHub Student Developer Pack": "https://education.github.com/pack",
  "GitHub Pro": "https://education.github.com/pack",
  "GitHub Codespaces": "https://education.github.com/pack",
  "JetBrains IDEs": "https://www.jetbrains.com/academy/student-pack",
  "JetBrains Student Pack": "https://www.jetbrains.com/academy/student-pack",
  PyCharm: "https://www.jetbrains.com/academy/student-pack",
  DataSpell: "https://www.jetbrains.com/academy/student-pack",
  "IntelliJ IDEA": "https://www.jetbrains.com/academy/student-pack",
  DataCamp: "https://www.datacamp.com/github-students",
  Educative: "https://www.educative.io/github-students",
  "Frontend Masters": "https://frontendmasters.com/github-student-developer-pack/",
  "Boot.dev": "https://www.boot.dev/github-student-developer-pack",
  "MongoDB Atlas": "https://www.mongodb.com/students",
  "MongoDB Certification": "https://www.mongodb.com/students",
  "Deepnote Team Plan": "https://deepnote.com/education",
  DigitalOcean: "https://www.digitalocean.com/github-students",
  "Microsoft Azure": "https://azure.microsoft.com/free/students",
  Heroku: "https://www.heroku.com/github-students",
  Namecheap: "https://nc.me",
  ".TECH": "https://get.tech/github-student-developer-pack",
  "GitHub Pages": "https://pages.github.com/",
  "Notion Education": "https://www.notion.so/product/notion-for-education",
  "Notion for Education": "https://www.notion.so/product/notion-for-education",
  "1Password": "https://1password.com/developers/students",
  "Microsoft 365 Education": "https://www.microsoft.com/education/products/office",
  "Figma for Education": "https://www.figma.com/education/",
  "Adobe Express for Education": "https://www.adobe.com/education/express/",
  "PUST Webmail Opening Form": "https://pust.ac.bd/academic/form_download",
};

const developerPack = [
  {
    title: "Development Tools",
    offers: [
      ["GitHub Pro", "Free while enrolled"],
      ["JetBrains IDEs", "Free with yearly renewal"],
      ["GitHub Codespaces", "Pro access"],
    ],
  },
  {
    title: "Learning Platforms",
    offers: [
      ["DataCamp", "3 months free"],
      ["Educative", "6 months free"],
      ["Frontend Masters", "6 months free"],
      ["Boot.dev", "3 months free"],
    ],
  },
  {
    title: "Data Science Tools",
    offers: [
      ["MongoDB Atlas", "$50 credit"],
      ["MongoDB Certification", "Worth $150"],
      ["Deepnote Team Plan", "Free while enrolled"],
    ],
  },
  {
    title: "Cloud Services",
    offers: [
      ["DigitalOcean", "Up to $200 credit"],
      ["Microsoft Azure", "$100 credit"],
      ["Heroku", "Monthly credit for 24 months"],
    ],
  },
  {
    title: "Domains and Website Services",
    offers: [
      ["Namecheap", "Free .me domain and SSL for one year"],
      [".TECH", "Free domain for one year"],
      ["GitHub Pages", "Free website hosting"],
    ],
  },
  {
    title: "Productivity and Security",
    offers: [
      ["Notion Education", "Free student plan"],
      ["1Password", "Free for one year"],
    ],
  },
];

const studentBenefits = [
  ["Microsoft 365 Education", "Eligible students may access Word, Excel, PowerPoint, Teams, and other tools."],
  ["Notion for Education", "Organize notes, research, assignments, projects, and learning plans."],
  ["Figma for Education", "Design interfaces, prototypes, presentations, diagrams, and team projects."],
  ["JetBrains Student Pack", "Free access to PyCharm, DataSpell, IntelliJ IDEA and more."],
  ["Adobe Express for Education", "Create posters, presentations, videos, certificates, resumes, and social media content."],
];

const resourceLinks = [
  "GitHub Student Developer Pack",
  "Microsoft 365 Education",
  "Notion for Education",
  "JetBrains Student Pack",
  "Figma for Education",
  "Adobe Express for Education",
  "PUST Webmail Opening Form",
];

function OfferRow({ label, detail }: { label: string; detail: string }) {
  return (
    <li className="flex items-start justify-between gap-4 border-b border-slate-100 py-2.5 last:border-b-0">
      <span className="font-semibold text-slate-800">{label}</span>
      <span className="text-right text-sm text-slate-500">{detail}</span>
    </li>
  );
}

export default function UniversityEmailBenefitsBlog() {
  return (
    <div className="flex min-h-screen flex-col">
      <BlogHero
        title="University Email Benefits for Students"
        author="Aditto Ahosan Kabbo"
        image="/images/blog images/PUST DSC University Email Benefits blog Post.png"
      />

      <article className="mx-auto mt-10 w-full max-w-4xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-10">
        <p className="text-base leading-8 text-slate-500 md:text-lg">
          A university email can provide valuable benefits for your studies, research, skill development, and career.
        </p>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-sm leading-relaxed text-slate-600 md:p-6">
            <p>
              Your student email is more than an inbox. It can unlock professional tools, learning platforms, cloud credits, design software, productivity apps, and student verification opportunities.
            </p>
          </div>

          <section className="mt-10">
            <h2 className="font-space-grotesk text-2xl font-extrabold text-blue-600">
              GitHub Student Developer Pack
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              A collection of developer, cloud, data science, design and learning offers available to eligible students.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {developerPack.map((group) => (
                <section key={group.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-space-grotesk text-lg font-bold text-slate-900">{group.title}</h3>
                  <ul className="mt-3">
                    {group.offers.map(([label, detail]) => (
                      <OfferRow key={label} label={label} detail={detail} />
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-space-grotesk text-2xl font-extrabold text-blue-600">
              Other Valuable Student Benefits
            </h2>
            <div className="mt-5 space-y-3">
              {studentBenefits.map(([label, detail]) => (
                <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm leading-relaxed text-slate-600">
                    <strong className="text-slate-900">{label}:</strong> {detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-space-grotesk text-2xl font-extrabold text-blue-600">
              Additional Advantages
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="font-space-grotesk text-lg font-bold text-slate-900">Professional Identity</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Using your university email when contacting teachers, researchers, companies, or event organizers makes your communication more professional and trustworthy.
                </p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="font-space-grotesk text-lg font-bold text-slate-900">Easy Student Verification</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  It can help verify your student status for courses, competitions, internships, discounts, and software offers.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-blue-600 p-6 text-white">
            <p className="font-semibold">Benefits may vary depending on platform eligibility, location, and university verification.</p>
            <p className="mt-4 text-sm leading-relaxed text-blue-50">
              Do not let your student email remain unused. Verify your account, explore the opportunities and start building your skills today!
            </p>
            <p className="mt-6 font-bold">- PUST Data Science Club</p>
            <p className="font-space-grotesk font-bold text-blue-100">Mapping the Future Through Data</p>
          </section>
      </article>

      <section className="mx-auto mt-8 w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="font-space-grotesk text-2xl font-extrabold text-blue-600">Student Mail Benefits Links</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          Use these official links to check eligibility and apply with your university email.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {resourceLinks.map((label) => (
            <a
              key={label}
              href={offerLinks[label]}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-500">
          <p className="font-semibold text-slate-700">For PUST students who do not yet have a university email:</p>
          <p className="mt-2">
            Visit the PUST website, download and print Form No. 21 - PUST Webmail Opening Form (Only for Students). Complete the form and submit it to the PUST ICT Cell. After verification, you will receive access to your official PUST webmail account.
          </p>
        </div>
      </section>
    </div>
  );
}
