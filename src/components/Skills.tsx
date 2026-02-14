"use client";

import { Code, Database, Brain, Wrench } from "lucide-react";

export default function Skills() {

  const skillCategories = [
    {
      category: "Programming",
      icon: <Code className="text-orange-500" size={24} />,
      skills: ["Python", "Java", "C Programming"]
    },
    {
      category: "Web Development",
      icon: <Code className="text-orange-500" size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "NodeJS (ExpressJS)", "Flask"]
    },
    {
      category: "Database",
      icon: <Database className="text-orange-500" size={24} />,
      skills: ["MySQL", "phpMyAdmin"]
    },
    {
      category: "AI / ML",
      icon: <Brain className="text-orange-500" size={24} />,
      skills: ["Generative AI", "NLP", "PyTorch", "YOLO", "FAISS", "OpenCV"]
    },
    {
      category: "Tools",
      icon: <Wrench className="text-orange-500" size={24} />,
      skills: ["Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {skillCategories.map((categoryObj) => (

            <div
              key={categoryObj.category}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
            >

              <div className="flex items-center gap-3 mb-6">
                {categoryObj.icon}
                <h3 className="text-2xl font-bold">{categoryObj.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">

                {categoryObj.skills.map((skill) => (

                  <span
                    key={skill}
                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-black transition-all duration-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
