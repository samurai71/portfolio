"use client";
import Link from "next/link";
//import { FiMoon, FiSun } from "react-icons/fi";
import DarkModeToggle from "./ThemeToggle";
/* todo: refactor out the nav list */

const TopNav = () => {
  return (
    <header className="container sticky left-0  top-0 z-10 mx-auto mb-3 flex h-8 flex-row flex-wrap pb-3 pt-3 print:hidden">
      <div className="basis-1/4 px-2">
        {/* <FiSun className="h-6 w-6 select-none transition active:scale-75 sm:h-7 sm:w-7" /> */}
      </div>
      <nav className="basis-1/2 space-x-3 text-2xl text-indigo-600">
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
      <div className="z-30 cursor-pointer rounded-full transition active:scale-75">
        <DarkModeToggle />
        {/* <FiMoon className="h-6 w-6 select-none transition active:scale-75 sm:h-7 sm:w-7" /> */}

        {/* <FiSun className="w-6 h-6 transition select-none sm:h-7 sm:w-7 active:scale-75" /> */}
      </div>
    </header>
  );
};

export default TopNav;
