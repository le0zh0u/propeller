"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  intervalOnHover?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 3000,
  intervalOnHover = 6000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentInterval, setCurrentInterval] = useState(interval);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const startTimer = (intervalTime: number) => {
    if (timerId) {
      clearInterval(timerId);
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    setTimerId(timer);
    return timer;
  };

  useEffect(() => {
    const timer = startTimer(currentInterval);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [images.length, currentInterval]);

  const handleMouseEnter = () => {
    setCurrentInterval(intervalOnHover);
  };

  const handleMouseLeave = () => {
    setCurrentInterval(interval);
  };

  return (
    <div
      className="w-full max-w-4xl mx-auto my-12 relative h-64 md:h-80 overflow-hidden rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Carousel image ${currentIndex + 1}`}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-lg"
            priority={currentIndex === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary-green w-4"
                : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
