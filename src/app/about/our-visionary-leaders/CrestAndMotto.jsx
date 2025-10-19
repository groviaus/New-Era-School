"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const CrestElement = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        className="relative w-80 h-[300px]"
        style={{
          filter: isHovered
            ? "drop-shadow(0 0 5px #ffd700)"
            : "drop-shadow(0 0 5px #006400)",
        }}
      >
        <Image
          src="/assets/nes-assets/logo.jpeg"
          alt="New Era School Logo"
          fill
          className="transition-transform object-contain duration-300"
        />
      </motion.div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-black text-xs">{title}</span>
        </motion.div>
      )}
    </div>
  );
};

CrestElement.propTypes = {
  title: PropTypes.string.isRequired,
};

const CrestAndMotto = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl text-gray-800 font-semibold mb-4">
              The Vision and Mission
            </h2>
            <p className="mb-4">
              New Era School true to its name that is beginning of a new period
              that offers better opportunities in the field of education. The
              vision and mission of New Era School is "TO REACH OUT AND HELP
              OTHERS."
            </p>
            <ul className="list- list-inside mb-4 font-medium">
              <li>Value-based education</li>
              <li>Child-centered learning</li>
              <li>Modern facilities</li>
            </ul>
            <p className="mb-4">
              The committed and dedicated staff nurtures academic excellence
              along with human values to enable the children to become good
              human beings. Education is not just a process of giving knowledge
              for a limited time period, but a lifelong process which creates an
              understanding of moral and ethical values to guide one's life and
              make our students the future hope of our country.
            </p>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="relative flex flex-col items-center h-full w-full justify-center">
              <CrestElement
              // title="Lion"
              />
              <p className="text-black/80 text-base font-semibold mt-4">
                Reach Out and Help Others
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrestAndMotto;
