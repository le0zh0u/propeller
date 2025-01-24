const Growth = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Result-Focused & Data-Driven Growth Strategies
          </h2>
          <p className="text-gray-400 mb-8">
            We combine data analytics with creative strategies to drive
            measurable growth. Our approach is systematic, scalable, and proven
            to deliver results.
          </p>
          <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Learn More
          </button>
        </div>
        <div className="relative">
          <div className="w-full aspect-square bg-gradient-primary rounded-lg transform rotate-3"></div>
          <div className="absolute inset-0 bg-black/20 rounded-lg transform -rotate-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
