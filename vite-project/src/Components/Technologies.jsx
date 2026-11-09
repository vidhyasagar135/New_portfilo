
import React from "react";

const techStack = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Core Java", icon: "devicon-java-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "SQL", icon: "devicon-mysql-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React.js", icon: "devicon-react-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
 { name: "n8n AI Agents", icon: "devicon-n8n-plain" },
];

export default function Technologies() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            My Technical Skills
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Technologies I Work With
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A collection of programming languages, frameworks and tools
            I use to build modern web applications and software solutions.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-7">

          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center min-h-[140px] rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 cursor-pointer"
            >
              <i
                className={`${tech.icon} text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300`}
                aria-hidden="true"
              ></i>

              <span className="mt-4 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
