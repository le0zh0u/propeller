const Operations = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-3 gap-4 relative">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-full ${
                  i === 4 ? "bg-gradient-primary" : "bg-gray-800"
                } transition-all hover:scale-110`}
              ></div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold mb-6">
            Iterative & Relentless Growth Operations
          </h2>
          <p className="text-gray-400 mb-8">
            We believe in hypothesis-driven growth and iterate until we get
            results. Our operations team works tirelessly to optimize and scale
            your success.
          </p>
          <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Explore Our Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default Operations;
