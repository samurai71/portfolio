import Frontendskills from "@/components/Skills/Frontendskills";
import Backendskills from "@/components/Skills/Backendskills";
import Fullstackskills from "@/components/SKills/Fullstackskills";
import Devopsskills from "@/components/Skills/Devopsskills";

export const metadata = {
  title: "Skills",
  description: "Skills that I have have learned and acquired over the years.",
};
const Skills = () => {
  return (
    <section className="container mx-auto px-2">
      <h1>Skills</h1>
      <p>Some of the skills that I have acquired over the years.</p>
      <Frontendskills />
      <Backendskills />
      <Fullstackskills />
      <Devopsskills />
    </section>
  );
};

export default Skills;
