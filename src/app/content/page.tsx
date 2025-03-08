import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentHero from "@/components/ContentHero";
import Image from "next/image";

const ContentPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section - 全屏宽度 */}
      <ContentHero />

      {/* 内容部分使用 max-w-5xl 限制宽度 */}
      <main className="max-w-5xl mx-auto px-4">
        {/* Content Services Sections */}
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
                    Content Planning & Production
                  </h2>
                  <p className="text-xl text-primary-green font-semibold mb-6">
                    From Concept to Content That Clicks
                  </p>
                </div>
              </div>
              <p className="text-gray-300 max-w-3xl mb-6">
                We transform your ideas from &ldquo;Hmm...&rdquo; to
                &ldquo;Wow!&rdquo; across all mediums.
              </p>
              <ul className="text-gray-300 max-w-3xl mb-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>
                    Video: Visual storytelling that glues eyeballs to screens.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>
                    Audio: Podcasts and soundscapes that make ears perk up.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>
                    Written: Copy and articles that linger in minds long after
                    reading.
                  </span>
                </li>
              </ul>
              {/* Placeholder for image */}
              <div className="w-full bg-gradient-to-r from-primary-purple to-primary-green rounded-lg my-8">
                {/* Image will go here */}
                <Image
                  src="/4b4e6026-a7bc-467c-a554-3cb2c5b5f63c.png"
                  alt="Content 1"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            {/* Service 2 */}
            <div className="mb-24">
              <div className="flex items-start mb-6">
                <div className="text-5xl font-bold text-primary-purple mr-4">
                  02
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Global Digital Marketing
                  </h2>
                  <p className="text-xl text-primary-green font-semibold mb-6">
                    Go Global Without the Guesswork
                  </p>
                </div>
              </div>
              <p className="text-gray-300 max-w-3xl mb-6">
                Ready to make waves internationally? We navigate the
                complexities of YouTube and LinkedIn to amplify your global
                reach.
              </p>
              <ul className="text-gray-300 max-w-3xl mb-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>
                    Channel Optimization: Crafting profiles that attract and
                    retain.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>
                    Audience Engagement: Strategies that turn views into loyal
                    communities.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>
                    Insightful Analytics: Data-driven tweaks for continuous
                    growth.
                  </span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="mb-24">
              <div className="flex items-start mb-6">
                <div className="text-5xl font-bold text-primary-purple mr-4">
                  03
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    China Growth Marketing
                  </h2>
                  <p className="text-xl text-primary-green font-semibold mb-6">
                    Unlock China&apos;s Digital Potential
                  </p>
                </div>
              </div>
              <p className="text-gray-300 max-w-3xl mb-6">
                Tap into China&apos;s booming digital platforms with strategies
                that resonate locally and perform globally.
              </p>
              <ul className="text-gray-300 max-w-3xl mb-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>
                    Platform Navigation: From Douyin to WeChat—we&apos;ve got
                    you covered.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>
                    Content Localization: Tailoring your content to hit the
                    cultural sweet spot.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-purple mr-2">•</span>
                  <span>
                    Growth Strategies: Proven tactics to skyrocket your
                    visibility and engagement.
                  </span>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="mb-16 border-t border-gray-800 pt-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                One-Stop Service from Planning to Prosperity
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-center">
                Think of us as your content dream team. We handle everything
                from the first brainstorm to the moment your content goes
                viral—and beyond.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContentPage;
