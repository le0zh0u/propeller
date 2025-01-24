interface Service {
  title: string;
  value: string;
  description: string;
}

const Services = () => {
  const services: Service[] = [
    {
      title: "Content Creation",
      value: "500+",
      description: "Creative Projects Delivered",
    },
    {
      title: "Digital Strategy",
      value: "100X",
      description: "Growth for Our Partners",
    },
    {
      title: "Brand Development",
      value: "50+",
      description: "Brands Transformed",
    },
    {
      title: "Innovation Labs",
      value: "25+",
      description: "Digital Solutions Launched",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What We Provide
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming ideas into digital realities through innovative
            solutions and strategic execution
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-primary-purple transition-all duration-300"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />

              {/* Content */}
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <div className="h-8 w-8 rounded-full bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity" />
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <p className="text-4xl font-bold text-white">
                      {service.value}
                    </p>
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </div>
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

export default Services;
