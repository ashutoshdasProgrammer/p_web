import React from 'react';
import { ExternalLink, Code2, Sparkles, Layers, ShieldCheck, MessageSquare } from 'lucide-react';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: 'AI Code Reviewer',
      description: 'An interactive online code editor where developers write or paste code to receive a detailed, AI-driven review covering security concerns, code optimization, and logic errors on the fly.',
      icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
      tags: ['React', 'Express', 'MongoDB', 'Gemini API', 'Groq API', 'Prism.js'],
      github: 'https://github.com/ashutoshdasProgrammer/ai_code_reviewer',
      live: 'https://ai-app-frontend-eight.vercel.app/',
    },
    {
      title: 'Data Processing ETL Pipeline',
      description: 'A high-performance pipeline featuring background queuing to handle bulk data uploads. It cleans, deduplicates, and validates dataset files, compressing 20 minutes of processing time down to under a minute.',
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      tags: ['React', 'Express', 'BullMQ', 'csv-parser', 'Joi', 'Redis'],
      github: 'https://github.com/ashutoshdasProgrammer/data_processing_etl_pipeline_platform',
      live: null,
    },
    {
      title: 'VS Code Vulnerability Finder',
      description: 'A custom VS Code extension that scans developer code files, highlights security bugs in real-time using native VS Code Diagnostics, and automatically suggests/applies AI corrections.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      tags: ['VS Code Extension API', 'JavaScript', 'Node.js', 'AI Integration'],
      github: 'https://github.com/ashutoshdasProgrammer/VulnerabilityFinder',
      live: null,
    },
    {
      title: 'Real-time Chess Engine',
      description: 'A multiplayer online chess engine utilizing WebSockets to connect players instantly. Features official chess rules validation and active session management.',
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      tags: ['Node.js', 'Express', 'Socket.io', 'Chess.js', 'EJS'],
      github: 'https://github.com/ashutoshdasProgrammer/chess_game',
      live: null,
    },
    {
      title: 'Secure Chat Application',
      description: 'A WhatsApp-inspired instant messaging app utilizing real-time events. Implements robust, secure authentication protocols with JSON Web Tokens and salted password hashing.',
      icon: <MessageSquare className="w-6 h-6 text-pink-400" />,
      tags: ['React', 'Node.js', 'Express', 'WebSockets', 'JWT', 'bcrypt'],
      github: 'https://github.com/ashutoshdasProgrammer/vercel_whatsapp_frontend',
      backendGithub: 'https://github.com/ashutoshdasProgrammer/vercel_whatsapp_backend',
      live: null,
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080d1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            A selection of key applications I have designed and engineered, demonstrating backend performance, real-time sync, and security tools.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between h-full p-6 rounded-2xl bg-[#0e1626]/60 border border-gray-800/80 hover:border-gray-750/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Top gradient highlights */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-gray-900/80 border border-gray-850 group-hover:scale-105 transition-transform duration-300">
                    {project.icon}
                  </div>
                  
                  {/* Repo / Live Links */}
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/60 border border-transparent hover:border-gray-700/50 transition-all"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4.5 h-4.5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/60 border border-transparent hover:border-gray-700/50 transition-all"
                        title="View Live Site"
                      >
                        <ExternalLink className="w-4.5 h-4.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Row */}
              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-gray-900/60 border border-gray-850 text-gray-400 text-[11px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Specific details (like backend code link for Chat App) */}
                {project.backendGithub && (
                  <div className="mt-4 pt-3 border-t border-gray-800/50 flex justify-between items-center text-xs">
                    <span className="text-gray-500 font-medium">Backend Source:</span>
                    <a
                      href={project.backendGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                    >
                      <Github className="w-3.5 h-3.5" />
                      View Backend
                    </a>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
