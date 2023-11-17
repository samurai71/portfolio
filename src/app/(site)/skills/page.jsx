import Frontendskills from "@/components/Skills/Frontendskills";
import Backendskills from "@/components/Skills/Backendskills";
import Fullstackskills from "@/components/Skills/Fullstackskills";
import Devopsskills from "@/components/Skills/Devopsskills";

export const metadata = {
  title: "Skills",
  description: "Skills that I have have learned and acquired over the years.",
};
const Skills = () => {
  return (
    <main>
      <section className="container mx-auto px-2 py-3">
        <h1 className="uppercase tracking-widest">Skills</h1>
        <p>Some of the skills that I have acquired over the years.</p>
        <Frontendskills />
        <Backendskills />
        <Fullstackskills />
        <Devopsskills />
      </section>
    </main>
  );
};

export default Skills;
