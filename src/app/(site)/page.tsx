//import Image from "next/image";
import Topskills from "@/components/Skills/Topskills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="container mx-auto px-3 border-2">
      <Topskills />
      <h2 className="font-serif">Services</h2>
      <h2>Recent Blog Posts</h2>
      <Contact />
    </main>
  );
}
