"use client";

import { motion } from "framer-motion";
import Container from "../../components/wrappers/Container";
import Image from "next/image";

export default function Spotlight() {
  return (
    <section className="bg-[#E4E4E4]">
      <Container>
        <div className="relative">
          <div className="grid md:grid-cols-2 sm:gap-16 gap-5 items-start">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="aspect-square max-h-[450px] mx-auto relative rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src="/assets/landing/spotlight.webp"
                    alt="Aerial view of New Era School campus"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6 max-w-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                className="space-y-1 after:h-[3px] after:w-10/12 after:bg-green-700/90 after:rounded-full after:inline-block after:mr-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.span
                  className="block sm:text-3xl text-xl font-serif"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  A Spotlight on
                </motion.span>
                <motion.span
                  className="block sm:text-4xl text-3xl   font-bold text-red-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  New Era School Excellence
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-gray-600 leading-relaxed sm:text-xl text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Dr. Saeed Ansari, a man with great accomplishments to his
                credit, an eminent educationist of his time patronized the Nai
                Taleem Society in 1968 and established NEW ERA SCHOOL with a
                vision to "Reach out and Help Others."
              </motion.p>

              <motion.p
                className="text-gray-600 leading-relaxed sm:text-xl text-justify"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                The school is recognized by DOE with School Id-1925454 wef
                2024-25 and is consistently maintaining its high standards &
                increasing its strength year after year. The school is committed
                to impart value based education to the students.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
