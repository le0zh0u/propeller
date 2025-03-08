"use client";

import { motion, LayoutGroup } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import { useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 为每个文本定义对应的背景颜色
  const backgroundColors = [
    "from-primary-purple to-primary-green", // 默认渐变 - 创新
    "from-blue-500 to-purple-600", // 创造
    "from-purple-600 to-pink-500", // 扩大
  ];

  // 处理文本变化的回调
  const handleTextChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Content & Innovation Studio
          <br />
          <LayoutGroup>
            <motion.div className="flex flex-wrap justify-center my-8" layout>
              <motion.div
                className={`bg-gradient-to-r ${backgroundColors[currentIndex]} px-4 py-2 transform -skew-x-12 overflow-hidden rounded-lg transition-colors duration-700 bg-gradient-animate`}
                animate={{
                  boxShadow: `0 0 15px 2px rgba(${
                    currentIndex === 0
                      ? "140, 82, 255"
                      : currentIndex === 1
                      ? "79, 70, 229"
                      : currentIndex === 2
                      ? "168, 85, 247"
                      : currentIndex === 3
                      ? "245, 158, 11"
                      : "16, 185, 129"
                  }, 0.5)`,
                  // 确保 skew 效果不会被动画过渡影响
                  transform: "skewX(-12deg)",
                }}
                transition={{
                  duration: 0.5,
                  // 禁用 transform 的自动布局变化，保持固定的 skew 角度
                  layout: { transform: false },
                }}
              >
                <TextRotate
                  texts={["Innovate.", "Create.", "Amplify."]}
                  mainClassName="text-white inline-flex"
                  staggerFrom="last"
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  onNext={handleTextChange}
                />
              </motion.div>
            </motion.div>
          </LayoutGroup>
        </h1>
        <p className="text-normal text-gray-400 mb-12 max-w-2xl mx-auto text-tight text-left">
          Igniting global impact through strategic storytelling and cross-border
          innovation. <br />
          From content creation to viral campaigns, China growth strategies to
          worldwide digital reach—we&apos;re your end-to-end dream team.
          Bridging markets, sparking connections.
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
