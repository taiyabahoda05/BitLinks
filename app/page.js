import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold">The best URL shortener in the Market</p>
          <p className="px-35 text-center">
            We are the most straightforward URL shortener in the market. Create and manage your links with ease. No more long URLs!
          </p>
            <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-500 text-white shadow-lg rounded-lg p-3 py-1 font-bold cursor-pointer'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 text-white rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer'>GitHub</button></Link>
            </div>
        </div>

        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt='vector image'
            src={"/vector.jpg"}
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
