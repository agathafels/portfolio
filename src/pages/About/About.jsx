import HeroImg from "@/assets/images/hero.jpg";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-8 md:py-16 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 text-2xl font-medium lg:text-4xl text-white pb-4 inline-block">
          About Me
          <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-200 via-yellow-300 to-pink-400 rounded-full"></span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24 items-center">
          <div className="relative mb-6 sm:mb-0 flex justify-center sm:justify-start">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent max-w-[200px] sm:max-w-[250px]">
              <img
                src={HeroImg}
                className="rounded-[15px] shadow block w-full h-auto"
                alt="Agatha Santoso"
              />
            </div>
          </div>

          <div className="relative space-y-6">
            <p className="text-white text-md md:text-lg">
              Hi! I&apos;m Agatha Santoso, a passionate{" "}
              <span className="font-bold">Full-Stack Developer</span> with
              Computer Science background from UC Berkeley🐻. I&apos;m
              passionate about frontend engineering & building reliable software
              with <span className="font-bold">product-driven</span> mindset
              that delivers great{" "}
              <span className="font-bold">user experiences.</span>
            </p>

            <div className="group relative bg-gray-900/80 border border-gray-700 rounded-lg p-6 hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 transition-all duration-500" />
                  <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 relative z-10" />
                </div>

                <div className="flex-1 space-y-2">
                  <h4 className="text-lg md:text-xl font-bold text-transparent bg-white bg-clip-text">
                    B.A Computer Science
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 text-gray-300 text-sm">
                    <span className="font-semibold text-pink-300">
                      University of California, Berkeley
                    </span>
                    <span className="text-xs font-mono bg-blue-500/10 px-2 py-1 rounded-full">
                      2024 - 2026
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Relevant Coursework: Algorithm & Data Structures,
                    Object-oriented Programming, Database System, Internet and
                    Networking, AI, Computer Security, Computer Graphics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
