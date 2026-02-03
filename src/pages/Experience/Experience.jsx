import { Code2, Layers, Network } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300 to-pink-300 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-600" />
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-white bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-pink-300">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <ul className="text-gray-300 mt-4 space-y-3 leading-relaxed">
          {description.map((item, index) => (
            <li key={index} className="border-l-4 border-blue-500/50 pl-4">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const EXPERIENCES = [
  {
    icon: Network,
    title: "Software Engineer Intern",
    company: "Sigma Computing",
    period: "May - Aug 2025",
    description: [
      "Designed reusable filtering APIs and backend schema logic using TypeScript and GraphQL to support type, owner, and badge filters, improving data accessibility across dashboards.",
      "Partnered with designers and product managers to optimize the Recents page, resolving edge cases around file source visibility and improving overall user experience.",
      "Built automated tests and feature flag controls using Jest and Cypress to ensure production stability and safe feature rollouts.",
    ],
  },
  {
    icon: Layers,
    title: "Frontend Software Engineer Intern",
    company: "Blibli.com",
    period: "June - Aug 2024",
    description: [
      "Built and optimized reusable UI components for the Click & Collect feature using Kotlin Jetpack Compose, delivering filter, sort, and date selection functionality while reducing rendering latency by 30%.",
      "Debugged and resolved UI/UX issues reported via Jira using Charles Proxy, eliminating incorrect error states and reducing related issues by 90%.",
      "Presented feature updates to a major client, receiving positive feedback for improving user adoption and app usability.",
    ],
  },
  {
    icon: Code2,
    title: "Student Helpdesk Data Analyst",
    company: "UC Berkeley Tech Services",
    period: "2025 - Present",
    description: [
      "Analyzed IT helpdesk performance data across multiple reporting sources to evaluate service utilization, customer experience, and process compliance.",
      "Generated performance and utilization reports to identify efficiency gaps, contributing to faster response times and improved customer satisfaction.",
      "Collaborated with the Technical Services Supervisor to monitor ticket queues, audit ticket accuracy, and inform training and support process improvements.",
    ],
  },
  {
    icon: Code2,
    title: "Product Management Intern",
    company: "PT Sehat Bersama Sejahtera",
    period: "May - Aug 2023",
    description: [
      "Led the development of an Android-based inventory tracking system, collaborating cross-functionally with business, engineering, and operations teams to identify workflow inefficiencies.",
      "Applied optimization and problem-solving techniques to improve stocking accuracy by 75% and reduce tracking errors by 60%.",
      "Analyzed KPIs and business metrics to monitor product adoption and guide safety and process improvements.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <div
      id="experience"
      className="min-h-screen bg-[#04081A] relative overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 mt-10">
        <div className="flex flex-col items-center space-y-8 mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-gradient-to-r from-pink-300 to-teal-300 bg-clip-text text-center">
            Professional Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>

      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
    </div>
  );
}
