import Link from "next/link";

export const metadata = {
  title: "About",
  description: "About Mark Landeryou from Sarnia Ontario, Canada",
};

export default function Home() {
  return (
    <section className="container mx-auto px-3 mb-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 pt-3 pb-3">
      <h1 className="uppercase tracking-widest">About</h1>
      <h3 className="font-bold uppercase tracking-widest">Who I Am</h3>
      <p className="py-2">I am not your average developer</p>
      <p className="py-2">
        Hey, I am Mark Landeryou. A Full Stack Developer/Designer and IoT
        developer from Canada who loves to design and code. I use React.js or
        Next.js to build the web application interfaces and the functionalities.{" "}
      </p>
      <p className="py-2">
        As a person who is neurodivergent (ADHD, dyslexic, Asperger’s) I have
        the ability to see what others can’t see and think outside the box to
        come up with creative solutions for the issues at hand.
      </p>
      <p className="py-2">
        My interest in computers started at a very young age, and I was very
        eager to learn as much as I could about them. I remember my first
        website that I made years ago, which had a terrible interface and
        design. I started developing web sites in 1997. I have always had a
        knack for technology and working with computers. Fascinated with how
        intricate programming can be I was quickly drawn to learn more. I
        started learning JavaScript and was even more enthused with making
        websites interactive. I then started freelancing for companies. I am now
        spending my time building projects and learning new technologies.
      </p>
      <p className="py-2">
        From then I started to learn about web development through many video
        tutorials, documentations and articles. The first programming language I
        learned was Python. I also played around with databases.
      </p>
      <p className="py-2">
        Aside from coding, I write about web development stuff on my{" "}
        <Link href="/blog" className="text-blue-500 underline">
          blog
        </Link>{" "}
        as well. However, I also enjoy watching some Sci-Fi movies and web
        series whenever I have the chance. As well learning new things and
        technologies.
      </p>
      <p className="py-2">
        You can do anything you can think of with these three things. Next.js is
        an open-source web development framework built on top of Node.js
        enabling React-based web applications functionalities such as
        server-side rendering and generating static websites.
      </p>
      <p className="py-2">
        I love my work and enjoy each and every project as I get it. Feel free
        to look at my portfolio and don&apos;t hesitate to contact me.
      </p>
    </section>
  );
}
