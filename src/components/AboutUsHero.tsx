"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUsHero = () => {
  // 使用Unsplash的团队协作相关图片
  const heroBackgroundImage =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <>
      <div className="h-24"></div>

      <div className="relative w-[100vw] left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] cursor-default">
        {/* 背景图片 */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={heroBackgroundImage}
            alt="Propeller Team Collaboration"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="opacity-30"
          />
          {/* 叠加渐变 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/30 to-primary-green/30 mix-blend-overlay"></div>
        </div>

        <section className="pt-36 md:pt-40 pb-24 relative z-10 mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Where Global Ambitions Meet{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-green">
                    Local Expertise
                  </span>
                </h1>
                <p className="text-xl text-gray-300">
                  At Propeller, we&apos;ve seen it time and again: brands with
                  groundbreaking ideas stall at the intersection of
                  &ldquo;what&apos;s next&rdquo; and &ldquo;how to get
                  there.&rdquo;
                </p>
              </motion.div>
            </div>

            <div className="md:w-5/12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative p-1 bg-gradient-to-r from-primary-purple to-primary-green rounded-lg overflow-hidden"
              >
                <div className="bg-black p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-gray-300 mb-4">
                    Breaking down barriers between markets through strategic
                    storytelling and cross-border innovation.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-primary-green">
                    <span className="inline-block w-10 h-0.5 bg-primary-green"></span>
                    <span>GLOBAL PROPELLER</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsHero;
