interface Project {
  name: string;
  description: string;
}

const Projects = () => {
  const projects: Project[] = [
    { name: "TechGiant", description: "Digital Transformation" },
    { name: "StartupX", description: "Growth Strategy" },
    { name: "GlobalCorp", description: "Content Innovation" },
    { name: "FutureNow", description: "Brand Development" },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          We are behind some of the most innovative projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Transforming ideas into digital success stories
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-transparent transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="relative">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary transition-all duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-primary-end"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
