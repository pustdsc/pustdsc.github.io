import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "University Email Benefits for Students",
    excerpt: "A university email can provide valuable benefits for your studies, research, skill development, and career.",
    href: "/blog/university-email-benefits",
    image: "/images/blog images/PUST DSC University Email Benefits blog Post.png",
    category: "Student Resources",
  },
  {
    title: "Why Learn Data Science?",
    excerpt: "Data Science is quietly shaping recommendations, navigation, security, finance, healthcare, AI tools and everyday digital decisions.",
    href: "/blog/why-learn-data-science",
    image: "/images/blog images/Why learn data science.jpg",
    category: "Data Science",
  },
];

export default function Blog() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-space-grotesk text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">
            Blog & Insights
          </h1>
          <p className="mt-4 text-slate-500 font-medium">
            Practical learning opportunities shared by PUST DSC.
          </p>
        </div>
      </section>

      <section className="w-auto -mx-[16px] md:mx-0 md:w-full rounded-none md:rounded-2xl border-y md:border border-slate-100 bg-gradient-to-b from-slate-50 to-white px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-blue-50">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="p-5">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                  {post.category}
                </span>
                <h2 className="mt-4 font-space-grotesk text-xl font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                <span className="mt-5 inline-flex text-sm font-bold text-blue-600">
                  Read full blog
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
