import Link from "next/link";
import Image from "next/image";
import CanadianFlag from "@public/assets/cdn.webp";

const FooterNav = () => {
  return (
    <>
      <div className="flex flex-row items-top justify-items-center container mx-auto px-3">
        <div className="basis-1/3 flex-col md:flex-row">
          <nav className="flex flex-col gap-y-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/utlities">Utilities</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/certificates">Certificates</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="basis-1/3 flex-col">
          <nav className="flex flex-col gap-y-2">
            <Link href="/stats">Stats</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/services">Services</Link>
            <Link href="/newsletter">Newsletter</Link>
            <Link href="/rss">RSS</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
        </div>
        <div className="basis-1/3">
          <h2>Proudly Canadian</h2>
          <Image
            src={CanadianFlag}
            alt="Animated image of a waving Canadian Flag"
          />
        </div>
      </div>
      {/* <nav className="space-x-4 container-md h-8 mt-3 mb-3 pb-2 text-center border-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/utlities">Utilities</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/certificates">Certificates</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/stats">Stats</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/services">Services</Link>
        <Link href="/newsletter">Newsletter</Link>
        <Link href="/rss">RSS</Link>
      </nav> */}
    </>
  );
};

export default FooterNav;
