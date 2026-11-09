import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="text-center text-lg font-bold sm:text-left">
          BitLinks
        </Link>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:gap-5 sm:text-base">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/shorten">Shorten</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
          <div className="flex justify-center gap-2">
            <Link
              href="/shorten"
              className="rounded-lg bg-purple-500 px-3 py-1 font-bold shadow-lg"
            >
              Try Now
            </Link>
            <Link
              href="/github"
              className="rounded-lg bg-purple-500 px-3 py-1 font-bold shadow-lg"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
