import BlogHero from "../components/BlogHero";

const everydayExamples = [
  ["YouTube & Netflix", "Recommend videos and shows you will probably enjoy based on your watch history, searches, and interests."],
  ["Facebook, Instagram & TikTok", "Decide which posts, reels, and stories appear first by analyzing your likes, comments, shares, and watch time."],
  ["Google Maps", "Predict traffic, estimate travel time, and suggest the fastest route using live location data and historical traffic patterns."],
  ["ChatGPT & AI Assistants", "Understand your questions, generate human-like responses, translate languages, summarize documents, and help solve problems using Artificial Intelligence."],
  ["Spotify", "Create personalized playlists and recommend songs based on your listening habits."],
  ["Online Shopping Platforms", "Suggest products you may want to buy based on your searches, clicks, purchases, and browsing behavior."],
  ["Food Delivery Apps", "Estimate delivery time by considering traffic conditions, restaurant preparation time, distance, and rider location."],
  ["Digital Payment & Banking Apps", "Detect unusual transactions and help protect users from fraud using machine learning."],
  ["Phone Face Unlock", "Recognize your facial features to securely unlock your device within seconds."],
  ["Weather Apps", "Forecast rainfall, temperature, storms, and weather changes using historical and real-time data."],
  ["Email Services", "Automatically filter spam and phishing emails to keep your inbox clean and secure."],
  ["Ride Sharing Apps", "Match passengers with nearby drivers, estimate fares, and predict arrival times."],
];

const learningBenefits = [
  "Develop critical thinking and problem-solving skills.",
  "Learn statistics, programming, data visualization, and machine learning.",
  "Make smarter, evidence-based decisions.",
  "Build intelligent systems that improve lives and solve real-world challenges.",
  "Prepare for one of the fastest-growing career fields in the world.",
];

export default function WhyLearnDataScienceBlog() {
  return (
    <div className="flex min-h-screen flex-col">
      <BlogHero
        title="Why Learn Data Science?"
        author="Tithi Rani Sorker "
        image="/images/blog images/Why learn data science.jpg"
      />

      <article className="mx-auto mt-10 w-full max-w-4xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-10">
          <p className="text-base leading-8 text-slate-500 md:text-lg">
            We live in a world where data influences almost every decision we make, often without us even realizing it.
          </p>
          <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-sm leading-relaxed text-slate-600 md:p-6">
            <p>
              From the moment you unlock your phone in the morning to the last video you watch before going to sleep, Data Science is quietly working behind the scenes.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-space-grotesk text-2xl font-extrabold text-blue-600">
              Data Science in Everyday Life
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Think about the apps and services you use every day:
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {everydayExamples.map(([title, body]) => (
                <section key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-space-grotesk text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{body}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-space-grotesk text-2xl font-extrabold text-blue-600">
              What Data Science Really Means
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base md:leading-8">
              <p>
                These are just a few examples. Behind almost every smart recommendation, prediction, or automated decision you see today, there is Data Science.
              </p>
              <p>
                But Data Science is not just about numbers, coding, or complex algorithms. It is about asking the right questions, discovering meaningful patterns, and transforming raw data into insights that help people make better decisions.
              </p>
              <p>
                As industries become increasingly data-driven, the demand for professionals who can analyze, interpret, and communicate data continues to grow. Whether your passion lies in healthcare, finance, business, agriculture, education, research, sports, environmental science, or Artificial Intelligence, Data Science offers opportunities to create real-world impact.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="font-space-grotesk text-2xl font-extrabold text-blue-600">
              Learning Data Science Helps You
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
              {learningBenefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 rounded-2xl bg-blue-600 p-6 text-white">
            <p className="font-space-grotesk text-2xl font-extrabold leading-snug">
              The future will not be defined by those who simply use technology.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-blue-50">
              It will be shaped by those who understand the data behind it.
            </p>
          </section>
      </article>
    </div>
  );
}
