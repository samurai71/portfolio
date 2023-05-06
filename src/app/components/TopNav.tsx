import Link from "next/link";

const TopNav = () => {
  return (
    <nav className="space-x-4 container-md h-8 mt-3 mb-3 pb-2 text-center border-2">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default TopNav;
