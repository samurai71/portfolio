import Image from "next/image";
import Topskills from "@/components/Skills/Topskills";
import Contact from "@/components/Contact";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import homeProfileImage from "@public/assets/Mark_blackshirt.jpg";

export default function Home() {
  return (
    <main className="container mx-auto px-3 pt-3">
      <div className="relative mx-auto flex w-full flex-col items-center gap-10">
        <div className="relative flex h-44 w-44 items-center justify-center rounded-full p-3 before:absolute before:inset-0 before:animate-photo-spin before:rounded-full before:border-t-4 before:border-b-4 before:border-black before:dark:border-white xs:h-52 xs:w-52">
          <Image
            src={homeProfileImage}
            className="rounded-full shadow"
            width={400}
            height={400}
            alt="Picture of Mark Landeryou"
            quality={75}
            priority={true}
          />
        </div>

        <div className="flex w-full select-none flex-col gap-3 p-5 text-center ">
          <div className="flex flex-col gap-1">
            <p className="text-md uppercase italic tracking-widest text-red-600">
              Let&apos;s build something together
            </p>
            <h1 className="text-5xl font-bold tracking-widest lg:text-6xl">
              Hi I&apos;m <span className="text-blue-700">Mark</span>
            </h1>
            <h1 className="text-5xl font-bold lg:text-6xl">
              A Full Stack Web Developer and IoT Developer
            </h1>
            {/* <motion.p
                  variants={opacityVariant}
                  className='text-xs font-medium text-gray-500 md:text-sm lg:text-lg'
                >
                  React Developer, Competitive Programmer
                </motion.p> */}
          </div>

          <p className="text-center text-sm font-medium text-slate-500 dark:text-gray-300 md:text-base">
            I’m focused on building responsive web applications while
            continually learning new technologies.
          </p>
          <div className="flex items-center justify-evenly">
            <a
              href="https://www.linkedin.com/in/marklanderyou/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-slate-500 dark:shadow-none">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/samurai71"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-slate-500 dark:shadow-none">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-md">
          {/* <button
            className="flex select-none items-center gap-2 rounded-md border border-gray-500 px-5 py-2 outline-none hover:bg-gray-100 dark:border-gray-400 dark:hover:bg-neutral-800"
            onClick={() => window.open("/resume")}
          >
            <FiDownload />
            <p>Resume</p>
          </button> */}
        </div>
      </div>
      <Topskills />
      <button className="btn-blue-grad pt-4 p-4 bg-sky-700 mx-auto">
        See more of my Skills
      </button>
      <h2 className="mx-5 mt-3">Services</h2>
      <button className="btn-blue-grad pt-4 p-4 bg-sky-700">
        More about Services
      </button>
      <h2 className="mx-5 mt-3">Recent Blog Posts</h2>
      <Contact />
    </main>
  );
}
