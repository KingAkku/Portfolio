import React from "react";
import { ExternalLink } from "lucide-react";
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Moon and Sun Cycle Design",
      description: "UI to showcase the daylight cycle & the creativity.",
      link: "https://example.com",
      technologies: ["Figma", "Lottifies"],
    },
    {
      id: 2,
      title: "Netflix clone",
      description: "A simple clone of the website Netflix.",
      link: "https://example.com",
      technologies: ["Figma", "Adobe Illustrator"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS.",
      link: "https://example.com",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-800 via-red-600 to-red-800 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            A showcase of all projects that I have made
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-red-400 transition-all duration-200 p-5"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-red-200 text-red-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold transition-all duration-200"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
