"use client";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiMysql,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Topskills = () => {
  return (
    <section className="mx-5">
      <h2>My Top Skills</h2>
      {/* <div className="grid grid-cols-3 gap-4 my-10">
        {skills.map((skill, index) => {
          const Icon = chooseIcon(skill.name.toLowerCase());
          return (
            <div
              key={index}
              title={skill.name}
              onMouseMove={(e) =>
                WindowsAnimation.showHoverAnimation(e, isDarkMode)
              }
              onMouseLeave={(e) => WindowsAnimation.removeHoverAnimation(e)}
              className="flex items-center justify-center gap-4 p-4 origin-center transform border border-gray-300 rounded-sm sm:justify-start bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary dark:border-neutral-700 md:origin-top group"
            >
              <div className="relative transition pointer-events-none select-none group-hover:scale-110 sm:group-hover:scale-100">
                <Icon className="w-8 h-8" />
              </div>
              <p className="hidden text-sm font-semibold pointer-events-none select-none sm:inline-flex md:text-base">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default Topskills;
