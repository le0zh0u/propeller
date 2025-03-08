import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InnovationHero from "../../components/InnovationHero";

const InnovationPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section - 全屏宽度 */}
      <InnovationHero />

      {/* 内容部分使用 max-w-5xl 限制宽度 */}
      <main className="max-w-5xl mx-auto px-4">
        {/* Innovation Services Sections */}
        <section className="py-20">
          <div className="mx-auto">
            {/* Service 1 */}
            <div className="mb-24">
              <div className="flex items-start mb-6">
                <div className="text-5xl font-bold text-primary-purple mr-4">
                  01
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    China&apos;s Sci-Tech Startup Database
                  </h2>
                  <p className="text-xl text-primary-green font-semibold mb-6">
                    Stay Ahead.
                  </p>
                </div>
              </div>
              <p className="text-gray-300 max-w-3xl mb-6">
                Tap into the pulse of China&apos;s innovation with our
                meticulously curated database. Explore cutting-edge enterprises
                from the nation&apos;s three major innovation corridors—Yangtze
                River Delta, Beijing-Tianjin-Hebei, and Pearl River Delta. Stay
                ahead with real-time updates and unparalleled insights.
              </p>
            </div>

            {/* Service 2 */}
            <div className="mb-24">
              <div className="flex items-start mb-6">
                <div className="text-5xl font-bold text-primary-purple mr-4">
                  02
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    China Innovation Immersive Tour
                  </h2>
                  <p className="text-xl text-primary-green font-semibold mb-6">
                    Experience Tomorrow, Today.
                  </p>
                </div>
              </div>
              <p className="text-gray-300 max-w-3xl mb-6">
                Curious about China&apos;s game-changing advancements in AI,
                renewable energy, or photovoltaics? Let us take you on an
                unforgettable journey into the heart of innovation. From
                ESG-focused expeditions to robotics and EV showcases, we design
                bespoke experiences that connect you with the future.
              </p>
            </div>

            {/* Service 3 */}
            <div className="mb-24">
              <div className="flex items-start mb-6">
                <div className="text-5xl font-bold text-primary-purple mr-4">
                  03
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Point-to-Point Match-Making
                  </h2>
                  <p className="text-xl text-primary-green font-semibold mb-6">
                    Tailored Solutions, Seamless Connections.
                  </p>
                </div>
              </div>
              <p className="text-gray-300 max-w-3xl mb-6">
                Your transformation starts here. Whether it&apos;s digital
                evolution or sustainable solutions, we bridge the gap between
                your business needs and China&apos;s most innovative tech
                providers. Tailored, efficient, and impactful—get the solutions
                you need, when you need them.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InnovationPage;
