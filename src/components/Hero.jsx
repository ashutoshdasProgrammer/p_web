import React from "react";
import {
  Download,
  ArrowRight,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#080d1a]"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Profile Image (Grid Column 1-5) */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative group">
            {/* Glowing outer ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />

            {/* Image Wrapper */}
            {/* Image Wrapper */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gray-800 bg-gray-900 shadow-2xl flex justify-center items-center">
              <img
                src={profileImg}
                alt="Ashutosh Das"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-[55%] scale-110 transform-gpu transition-transform duration-500 ease-out group-hover:scale-125"
              />
            </div>
          </div>
        </div>

        {/* Text Content (Grid Column 6-12) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Freelance & Hiring
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Ashutosh Das
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300">
            Full Stack Web Developer & AI / ML Specialist
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Currently in my 4th year of college pursuing a B.Tech in Computer
            Science and Artificial Intelligence. I am a passionate developer
            focused on building robust, high-performance web applications and
            scalable real-time data pipelines. I love solving complex problems
            with modern backend tooling and crafting clean, responsive, and
            engaging user interfaces.
          </p>

          {/* Experience & Education Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/60 backdrop-blur-sm flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                  Education
                </h4>
                <p className="text-sm text-gray-300 font-medium">
                  B.Tech in CS & AI
                </p>
                <p className="text-xs text-gray-400 mt-0.5">NIST • 7.8 CGPA</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/60 backdrop-blur-sm flex items-start gap-3">
              <Briefcase className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                  Experience
                </h4>
                <p className="text-sm text-gray-300 font-medium">
                  ML Developer Intern
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Finesse Fleet Foundation
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/60 backdrop-blur-sm flex items-start gap-3">
              <Award className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                  Focus Areas
                </h4>
                <p className="text-sm text-gray-300 font-medium">
                  Real-time Pipelines
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  APIs, WebSockets & ML
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 group shadow-lg shadow-blue-900/20"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/ashutosh_das_professional_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white border border-gray-850 hover:border-gray-700 rounded-xl transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
