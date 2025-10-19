"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-[40vh] sm:h-[70vh] flex items-center justify-center text-center text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-center"
        style={{
          backgroundImage: `url(/assets/nes-assets/school.jpeg)`,
        }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 bg-black/50 py-5 sm:py-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl sm:text-6xl font-semibold mb-4"
        >
          A Legacy of Vision: The Founders of NES
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg sm:text-2xl mb-4 sm:mb-8"
        >
          Celebrating the journey of Dr. Saeed Ansari and the Ansari family in
          shaping generations since 1968.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            size="lg"
            onClick={() => {
              document
                .getElementById("visionary-couple")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore the Journey
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroBanner;
