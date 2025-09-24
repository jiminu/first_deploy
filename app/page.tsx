import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/tom.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Hello World! I'm jiminu.
          </li>
          <li className="tracking-[-.01em]">
            수업이 재미있습니다!
          </li>
        </ol>
      
      <Link href="/resume">
        <button>Resume</button>
      </Link>
      <Link href="/portfolio">
        <button>Portfolio</button>
      </Link>

      </main>
    </div>
  );
}
