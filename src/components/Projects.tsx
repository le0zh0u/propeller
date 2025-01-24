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
              className="group relative overflow-hidden bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-primary-purple transition-all duration-300"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <div className="h-2 w-2 rounded-full bg-primary-purple" />
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
