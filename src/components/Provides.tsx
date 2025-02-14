import Growth from "./Growth";
import Operations from "./Operations";

const Provides = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            We Provide
          </h2>
        </div>
      </div>
      <div>
        <Growth />
        <Operations />
      </div>
    </section>
  );
};

export default Provides;
