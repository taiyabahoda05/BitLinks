import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 md:min-h-[calc(100svh-4rem)] md:grid-cols-2 md:gap-10 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="max-w-2xl text-center text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            The best URL shortener in the Market
          </h1>
          <p className="max-w-xl text-center leading-relaxed sm:text-lg">
            We are the most straightforward URL shortener in the market. Create and manage your links with ease. No more long URLs!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/shorten" className="rounded-lg bg-purple-500 px-4 py-2 font-bold text-white shadow-lg">
              Try Now
            </Link>
            <Link href="/github" className="rounded-lg bg-purple-500 px-4 py-2 font-bold text-white shadow-lg">
              GitHub
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-xl md:aspect-square md:max-w-none">
          <Image
            className="mix-blend-darken object-contain"
            alt="URL shortening illustration"
            src="/vector.jpg"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </main>
  );
}
