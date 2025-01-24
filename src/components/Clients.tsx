const Clients = () => {
  const clients = [
    "SEQUOIA",
    "TIGER",
    "SoftBank",
    "a16z",
    "SEQUOIA",
    "TIGER",
    "SoftBank",
    "a16z",
  ];

  return (
    <section className="py-20 px-4 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl mb-12">
          Our clients are backed by trusted ventures
        </h2>
        <div className="clients-container">
          <div className="clients-track animate-scroll">
            {clients.map((client, index) => (
              <div
                key={index}
                className="px-12 text-gray-400 text-xl font-bold"
              >
                {client}
              </div>
            ))}
          </div>
          <div className="clients-track animate-scroll" aria-hidden="true">
            {clients.map((client, index) => (
              <div
                key={`clone-${index}`}
                className="px-12 text-gray-400 text-xl font-bold"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
