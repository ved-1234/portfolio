"use client";

import { useEffect, useState } from "react";
import { Github, Filter } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  description: string;
  tech_stack: string[];
  github_link?: string;
  category?: string;
}

export default function Projects() {

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("https://portfolio-backend-ynnm.onrender.com/api/projects");

      if (!res.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await res.json();

      console.log("Projects from backend:", data); // DEBUG

      setProjects(data);

    } catch (err: any) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Categories
  const categories = [
    "All",
    ...Array.from(new Set(projects.map(p => p.category || "Other")))
  ];

  // Filter projects
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(p => (p.category || "Other") === selectedCategory);

  // Loading state
  if (loading) {
    return (
      <section className="min-h-screen flex justify-center items-center bg-gray-950 text-white">
        Loading projects...
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="min-h-screen flex justify-center items-center bg-gray-950 text-red-500">
        {error}
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-950 text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">
          My <span className="text-orange-500">Projects</span>
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">

          <Filter className="text-orange-500 mt-2" size={20} />

          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-orange-500 text-black"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-400">
            No projects found.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProjects.map(project => (

              <div
                key={project._id}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition"
              >

                <h3 className="text-xl font-bold mb-2 text-orange-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">

                  {project.tech_stack?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 px-3 py-1 text-xs rounded-full text-orange-500"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Github */}
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded hover:bg-orange-500 hover:text-black transition"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}

              </div>

            ))}

          </div>
        )}

      </div>

    </section>
  );
}
