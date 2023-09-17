"use client";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";

const TopNav = () => {
  return (
    <header className="sticky left-0 top-0  h-8 z-10 flex flex-row pb-3 mb-3 container mx-auto">
      <div className="px-2 basis-1/4"></div>
      <nav className="basis-1/2 space-x-2 text-2xl text-indigo-600">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/utlities">Utilities</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/certificates">Certificates</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        {/* <div className="z-30 transition rounded-full cursor-pointer active:scale-75">
        <FiMoon className="w-6 h-6 transition select-none sm:h-7 sm:w-7 active:scale-75" />

        <FiSun className="w-6 h-6 transition select-none sm:h-7 sm:w-7 active:scale-75" />
      </div> */}
      </nav>
      {/* <div className="basis-1/4 px-2">Column 3</div> */}
      <div className="z-30 transition rounded-full cursor-pointer active:scale-75">
        <FiMoon className="w-6 h-6 transition select-none sm:h-7 sm:w-7 active:scale-75" />

        {/* <FiSun className="w-6 h-6 transition select-none sm:h-7 sm:w-7 active:scale-75" /> */}
      </div>
    </header>
  );
};

export default TopNav;
