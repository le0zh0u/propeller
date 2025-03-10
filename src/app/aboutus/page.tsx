import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUsHero from "@/components/AboutUsHero";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Link from "next/link";

const AboutUsPage = () => {
  // 使用Unsplash的高质量商业和团队图片
  const carouselImages = [
    "/aboutus/image-1.png",
    "/aboutus/image-2.png",
    "/aboutus/image-3.png",
    "/aboutus/image-4.png",
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <AboutUsHero />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4">
        {/* Image Carousel - Using InfiniteSlider */}
        <div className="my-12">
          <InfiniteSlider
            gap={24}
            duration={25}
            durationOnHover={75}
            className="py-4"
          >
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`About us image ${index + 1}`}
                className="h-[150px] w-auto object-contain rounded-lg"
              />
            ))}
          </InfiniteSlider>
        </div>

        {/* Turnaround Section */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Your Turnaround Starts Here
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-center">
            Whether you&apos;re a scale-up eyeing China or a Chinese brand
            targeting global audiences, we tackle the pain points others gloss
            over:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-800 hover:border-primary-purple transition-all">
              <h3 className="text-xl font-bold mb-3 text-primary-green">
                Lost in Translation
              </h3>
              <p className="text-gray-300">
                Content that works locally but aligns with global branding
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-800 hover:border-primary-purple transition-all">
              <h3 className="text-xl font-bold mb-3 text-primary-green">
                Market Whiplash
              </h3>
              <p className="text-gray-300">
                China&apos;s trends move fast—we keep you ahead with real-time
                insights
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-800 hover:border-primary-purple transition-all">
              <h3 className="text-xl font-bold mb-3 text-primary-green">
                Connection Fatigue
              </h3>
              <p className="text-gray-300">
                No more cold outreach. Our match-making is warm introductions,
                engineered
              </p>
            </div>
          </div>
        </section>

        {/* Why Propeller Section */}
        <section className="py-16 border-t border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Propeller?
          </h2>
          <p className="text-gray-300 max-w-3xl mb-12">
            Because innovation isn&apos;t just about ideas—it&apos;s about
            execution across borders. We blend the scrappy energy of a creative
            studio with the precision of market architects. Let&apos;s write
            your next chapter, grounded in data, elevated by story.
          </p>

          <div className="bg-gradient-to-r from-primary-purple to-primary-green p-1 rounded-lg">
            <div className="bg-black p-8 rounded-lg">
              <p className="text-2xl font-semibold italic">
                Let&apos;s turn your &apos;What if?&apos; into &apos;What&apos;s
                next!&apos;
              </p>
              <div className="mt-8">
                <Link
                  href="mailto:business@globalpropeller.com"
                  className="bg-gradient-primary text-white px-8 py-3 rounded-lg inline-block hover:opacity-90 transition-opacity font-semibold"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
