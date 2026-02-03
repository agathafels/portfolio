import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { Linkedin, Github, Mail } from "lucide-react";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

const PROFILE_CODE = `
const profile = {
    name: 'Agatha Felisitas Santoso',
    title: 'Full-Stack Developer & Frontend Engineer',
    skills: [
        'Typescript','React', 'Python', 
        'JavaScript', 'NodeJS', 'NextJS',
        'MySQL', 'MongoDB', 'REST APIs', 'GraphQL',
        'Tailwind', 'HTML', 'CSS', 'Kotlin'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    excitedToCollaborate: true,
};
`;

const ROLE_WORDS = [
  "Full-Stack Developer",
  "Frontend Engineer",
  "UI/UX Enthusiast",
  "Web Developer",
];

export default function Hero() {
  useEffect(() => {
    Prism.highlightAll();

    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main id="home" className="bg-[#020617] text-white min-h-screen">
      <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0">
        <div className="absolute inset-0"></div>

        <GridBackground />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span className="relative inline-block">
                  I&apos;m
                  <span className="typing-effect gradient-text">
                    {" "}
                    Agatha Santoso
                  </span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
              <i className="fas fa-rocket text-cyan-400 animate-bounce text-sm sm:text-base"></i>
              <span>
                <FlipWords
                  className={"text-lg sm:text-xl text-cyan-300 font-medium"}
                  words={ROLE_WORDS}
                />
              </span>
            </div>

            <div className="flex flex-row gap-4 animate__animated animate__fadeInUp animate__delay-2s">
              <a
                href="https://www.linkedin.com/in/agathasantoso/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-14 h-14 bg-blue-200 p-0.5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                aria-label="Visit LinkedIn profile"
              >
                <span className="flex items-center justify-center w-full h-full rounded-full bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-600">
                  <Linkedin className="w-6 h-6 text-white" aria-hidden="true" />
                </span>
              </a>

              <a
                href="https://github.com/agathafels"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-14 h-14 bg-blue-200 p-0.5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_2rem_-0.5rem_#9CA3AF]"
                aria-label="Visit GitHub profile"
              >
                <span className="flex items-center justify-center w-full h-full rounded-full bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-800">
                  <Github className="w-6 h-6 text-white" aria-hidden="true" />
                </span>
              </a>

              <a
                href="mailto:agatha.felisitas@gmail.com"
                className="group relative inline-flex items-center justify-center w-14 h-14 bg-blue-200 p-0.5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_2rem_-0.5rem_#34D399]"
                aria-label="Send email"
              >
                <span className="flex items-center justify-center w-full h-full rounded-full bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-500">
                  <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                </span>
              </a>
            </div>

            <div className="hidden lg:block absolute left-[5.5rem] top-[-2.6rem] animate-float-slow">
              <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;UI
                Magic
              </div>
            </div>
            <div className="hidden lg:block absolute left-[22.4rem] top-[3.4rem] animate-float">
              <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
            <div className="gradient-border">
              <div className="code-window bg-[#091121]">
                <div className="window-header">
                  <div className="window-dot bg-red-500"></div>
                  <div className="window-dot bg-yellow-500"></div>
                  <div className="window-dot bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                    <i className="fas fa-code"></i>
                    agatha.js
                  </span>
                </div>
                <pre className="language-javascript">
                  <code className="language-javascript">{PROFILE_CODE}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
