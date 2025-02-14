const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight ">
          Content & Innovation Studio
          <br />
          <br />
          <span className="inline-block bg-gradient-primary text-white px-4 transform -skew-x-12">
            Innovate. Create. Amplify.
          </span>
        </h1>
        <p className="text-normal text-gray-400 mb-12 max-w-2xl mx-auto text-tight text-left">
          Igniting global impact through strategic storytelling and cross-border
          innovation. <br />
          From content creation to viral campaigns, China growth strategies to
          worldwide digital reach—we’re your end-to-end dream team. Bridging
          markets, sparking connections.
        </p>
        {/* <div className="relative max-w-4xl mx-auto">
          <div className="w-full h-64 md:h-96 relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
