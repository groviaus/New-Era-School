"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const timelineData = {
  1968: {
    year: "1968",
    title: "Foundation of New Era School",
    description:
      "Dr. Saeed Ansari, an eminent educationist, patronized the Nai Taleem Society and established NEW ERA SCHOOL with a vision to 'Reach out and Help Others.'",
    image: "/assets/landing/nes-history-1968.png",
  },
  1970: {
    year: "1970s",
    title: "Era of Growth",
    description:
      "The 1970s marked significant growth under Dr. Saeed Ansari's leadership, establishing the school's reputation for value-based education and academic excellence.",
    image: "/assets/landing/nes-history-1970s.png",
  },
  1980: {
    year: "1980s",
    title: "Expanding Vision",
    description:
      "During the 1980s, the school continued to grow and develop its educational programs, maintaining high standards and increasing student strength year after year.",
    image: "/assets/landing/nes-history-1980s.png",
  },
  1990: {
    year: "1990s",
    title: "Leadership Transition",
    description:
      "The 1990s brought leadership transition as Mr. Mahmood Saeed Ansari and Mrs. Shamroz Ansari took over, continuing the founder's vision and mission.",
    image: "/assets/landing/nes-history-1990s.png",
  },
  2000: {
    year: "2000s",
    title: "Modern Development",
    description:
      "Entering the 2000s, New Era School continued to modernize its facilities and enhance its educational offerings, maintaining its commitment to child-centered learning.",
    image: "/assets/landing/nes-history-2000s.png",
  },
  2020: {
    year: "2020s",
    title: "DOE Recognition",
    description:
      "The 2020s brought official recognition from the Department of Education with School ID-1925454, marking a new milestone in the school's journey of excellence.",
    image: "/assets/landing/nes-history-2020s.png",
  },
};

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState(1968);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const years = Object.keys(timelineData).map(Number);

  useEffect(() => {
    if (isInView && !isHovered) {
      intervalRef.current = setInterval(() => {
        setSelectedYear((currentYear) => {
          const currentIndex = years.indexOf(currentYear);
          const nextIndex = (currentIndex + 1) % years.length;
          return years[nextIndex];
        });
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isInView, isHovered]);

  const handleTimelineClick = (year) => {
    setSelectedYear(Number(year));
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 3000); // Resume autoplay after 3 seconds
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-black via-gray-900/90 to-black"
    >
      <div className="max-w-6xl mx-auto px-6 sm:py-20 py-8 pb-16">
        <div className="grid md:grid-cols-2 sm:gap-12 gap-8 mb-16 h-[520px] sm:h-[400px]">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-6xl font-bold text-white">
              {timelineData[selectedYear].year}
            </h1>
            <h2 className="text-3xl font-semibold leading-tight text-white">
              {timelineData[selectedYear].title}
            </h2>
            <p className="text-gray-300 text-lg">
              {timelineData[selectedYear].description}
            </p>
            {/* <div className="flex items-center gap-4">
              <button className="border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-colors">
                Explore
              </button>
              <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                View <ArrowRight className="w-4 h-4" />
              </button>
            </div> */}
          </motion.div>

          <motion.div
            key={`image-${selectedYear}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-auto bg-gray-800"
          >
            {timelineData[selectedYear].image &&
            timelineData[selectedYear].image !== "" ? (
              <>
                <Image
                  src={timelineData[selectedYear].image}
                  alt={`Historical image from ${selectedYear}`}
                  height={400}
                  width={600}
                  className="object-cover rounded md:hidden"
                />
                <Image
                  src={timelineData[selectedYear].image}
                  alt={`Historical image from ${selectedYear}`}
                  fill
                  className="object-cover rounded hidden md:block"
                />
              </>
            ) : (
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400">No Image Available</span>
              </div>
            )}
          </motion.div>
        </div>

        <div className="relative">
          <div className="h-px bg-gray-600 absolute top-1/2 left-0 right-0 -translate-y-1/2" />
          <div className="flex justify-between relative">
            {Object.keys(timelineData).map((year) => (
              <button
                key={year}
                onClick={() => handleTimelineClick(year)}
                className="relative group"
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    selectedYear === Number(year)
                      ? "bg-white border-white"
                      : "bg-gray-800 border-gray-400 group-hover:border-white"
                  }`}
                />
                <span
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm transition-colors ${
                    selectedYear === Number(year)
                      ? "text-white font-medium"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {year + "s"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
