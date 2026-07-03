import React from 'react';
import { Database, Layout, Brain, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend & Databases',
      icon: <Database className="w-6 h-6 text-blue-400" />,
      skills: [
        {name: 'Express.js' level: 'Expert'},
        { name: 'Node.js', level: 'Expert' },
        { name: 'Express.js', level: 'Expert' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'Redis', level: 'Intermediate' },
        { name: 'Kafka', level: 'Intermediate' },
        { name: 'Socket.io', level: 'Advanced' },
        { name: 'BullMQ', level: 'Advanced' },
        { name: 'SQL', level: 'Advanced' },
      ],
    },
    {
      title: 'Frontend & Styling',
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      skills: [
        { name: 'React', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Expert' },
        { name: 'JavaScript (ES6+)', level: 'Expert' },
        { name: 'HTML5 & CSS3', level: 'Expert' },
        { name: 'EJS Templates', level: 'Advanced' },
        { name: 'Responsive Web Design', level: 'Expert' },
      ],
    },
    {
      title: 'Machine Learning & NLP',
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      skills: [
        { name: 'Python', level: 'Expert' },
        { name: 'TensorFlow / Keras', level: 'Intermediate' },
        { name: 'PyTorch', level: 'Intermediate' },
        { name: 'Hugging Face LLMs', level: 'Advanced' },
        { name: 'OpenCV (Face Recog)', level: 'Advanced' },
        { name: 'NLP (NLTK, VADER)', level: 'Advanced' },
      ],
    },
    {
      title: 'DevOps & Testing Tools',
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      skills: [
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Git & GitHub', level: 'Expert' },
        { name: 'Selenium Testing', level: 'Advanced' },
        { name: 'VS Code Extension API', level: 'Advanced' },
        { name: 'C++', level: 'Advanced' },
        { name: 'MATLAB', level: 'Intermediate' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1d] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Technical Arsenal</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            A comprehensive list of the technologies, libraries, and frameworks I use to build scalable products and deep learning pipelines.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#0e1626]/60 border border-gray-800/80 hover:border-gray-700/60 backdrop-blur-sm transition-all duration-300 flex flex-col group relative"
            >
              {/* Card top border glow effect */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800/50">
                <div className="p-2.5 rounded-xl bg-gray-900/80 border border-gray-850 group-hover:scale-105 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-xl bg-gray-900/40 border border-gray-800/40 hover:bg-gray-900/90 hover:border-gray-750 transition-all duration-200 text-center"
                  >
                    <div className="text-sm font-semibold text-gray-200">
                      {skill.name}
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1">
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
