"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const VisionaryCouple = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="visionary-couple" ref={ref} className="py-16 bg-yellow-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-semibold mb-4">
              The Visionary Leader
            </h2>
            <p className="mb-4">
              Dr. Saeed Ansari embarked on a remarkable journey in 1968,
              founding the New Era School. His vision of providing value-based
              education and shaping young minds has left an indelible mark on
              generations of students.
            </p>
            <p className="mb-4">
              His commitment to excellence and equality in education set the
              foundation for what NES represents today. Dr. Ansari believed in
              nurturing not just academic prowess, but also character and values
              through the mission "Reach out and Help Others."
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div className="text-center">
              <div className="relative w-96 h-96 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src="/assets/nes-assets/Dr_Saeed_Ansari.png"
                  alt="Dr. Saeed Ansari"
                  fill
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 font-semibold text-muted-foreground">
                Dr. Saeed Ansari
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-2xl font-handwriting text-gray-700">
            "Reach out and Help Others – A foundation for generations."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionaryCouple;
