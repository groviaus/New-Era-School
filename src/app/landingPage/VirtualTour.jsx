"use client";

import Container from "../../components/wrappers/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const VirtualTour = () => {
  const cardVariants = (delay) => ({
    initial: { rotateY: 0 },
    animate: {
      rotateY: 360,
      transition: {
        duration: 1.2,
        delay,
        ease: "easeInOut",
      },
    },
  });

  return (
    <section className="relative z-10 bg-white">
      <Container className="pb-0 lg:pb-0">
        <div className="grid sm:grid-cols-4">
          <Link
            href="/boarding-life/hostel"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              className="relative overflow-hidden h-60 hover:scale-95 duration-200 transition-all"
              variants={cardVariants(0)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src="/assets/boarding-life/Hostel (2).webp"
                alt=""
                fill
                className="object-cover scale-105"
              />
            </motion.div>
          </Link>

          <Link
            href="/boarding-life/hostel"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              className="relative overflow-hidden bg-green-900 h-60 flex items-center justify-center"
              variants={cardVariants(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h1 className="text-white text-4xl font-light font-mono">
                Hostel
              </h1>
            </motion.div>
          </Link>

          <Link
            href="/boarding-life/sports-at-cbs"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              className="relative overflow-hidden h-60 hover:scale-95 duration-200 transition-all"
              variants={cardVariants(0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src="/assets/landing/Athelete.webp"
                alt=""
                fill
                className="object-cover scale-105"
              />
            </motion.div>
          </Link>

          <Link
            href="/boarding-life/sports-at-cbs"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              className="relative overflow-hidden bg-red-900 h-60 flex items-center justify-center"
              variants={cardVariants(0.6)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h1 className="text-white text-4xl font-light font-mono">
                Atheletics
              </h1>
            </motion.div>
          </Link>

          <Link
            href="/about/infrastructure"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              className="relative overflow-hidden bg-gray-800 h-60 flex items-center justify-center"
              variants={cardVariants(0.8)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h1 className="text-white text-4xl font-light font-mono">
                Facilities
              </h1>
            </motion.div>
          </Link>

          <motion.div
            className="relative sm:col-span-2 overflow-hidden grid justify-center items-center"
            variants={cardVariants(1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src="/assets/landing/360-view.gif"
                alt=""
                width={128}
                height={128}
                className="h-32"
              />
              <p className="sm:text-2xl font-semibold text-center font-mon p-6">
                Take a Virtual Tour 360° view
              </p>
            </div>
          </motion.div>
          <Link
            href="/beyond-classroom/news-and-events"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              className="relative overflow-hidden h-60 hover:scale-95 duration-200 transition-all"
              variants={cardVariants(1.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src="/assets/landing/news-events.jpg"
                alt=""
                fill
                className="object-cover scale-105"
              />
            </motion.div>
          </Link>

          <Link
            href="/about/infrastructure"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              className="relative overflow-hidden h-60 hover:scale-95 duration-200 transition-all"
              variants={cardVariants(1.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src="/assets/landing/Facility.webp"
                alt=""
                fill
                className="object-cover scale-105"
              />
            </motion.div>
          </Link>

          <Link
            href="/notable-alumni"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              className="relative overflow-hidden bg-red-900 h-60 flex items-center justify-center"
              variants={cardVariants(1.6)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h1 className="text-white text-4xl font-light font-mono">
                Alumni
              </h1>
            </motion.div>
          </Link>
          <Link
            href="/alma-mater"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              className="relative overflow-hidden h-60 hover:scale-95 duration-200 transition-all"
              variants={cardVariants(1.8)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src="/assets/landing/Alumni.jpg"
                alt=""
                fill
                className="object-cover scale-105"
              />
            </motion.div>
          </Link>
          <Link
            href="/beyond-classroom/news-and-events"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              className="relative overflow-hidden bg-green-800 h-60 flex items-center text-center justify-center"
              variants={cardVariants(2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h1 className="text-white text-4xl font-light font-mono">
                School <br /> News & Updates
              </h1>
            </motion.div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default VirtualTour;
