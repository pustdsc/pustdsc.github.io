import Image from "next/image";
import Link from "next/link";

type BlogHeroProps = {
  title: string;
  author: string;
  image: string;
};

export default function BlogHero({ title, author, image }: BlogHeroProps) {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-slate-950">
      <Image src={image} alt="" fill className="object-cover opacity-60" priority />
      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="relative mx-auto grid min-h-[420px] max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <div className="text-white">
          <Link href="/blog" className="text-sm font-semibold text-blue-300 hover:text-blue-200">
            Back to blogs
          </Link>
          <h1 className="mt-8 font-space-grotesk text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="mt-6 space-y-2 text-sm font-semibold text-slate-200">
            <p>Author: {author}</p>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-sm bg-white shadow-2xl shadow-black/40">
          <Image src={image} alt={title} fill className="object-contain" priority />
        </div>
      </div>
    </section>
  );
}
