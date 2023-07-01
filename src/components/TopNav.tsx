import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";

const TopNav = () => {
  return (
    <nav className="space-x-4 container-md h-8 mt-3 mb-3 pb-2 text-center border-2">
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
  );
};

export default TopNav;
