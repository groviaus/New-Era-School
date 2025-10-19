"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  Users,
  School,
  Volleyball,
  BookOpen,
  FlaskConical,
} from "lucide-react";
import Heading from "../../../components/Heading"; // Adjust the import path as necessary
import EducationalJourney from "../EducationalJourney";
import { Button } from "../../../components/ui/button";
import { Parallax } from "react-parallax";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../../lib/utils";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const AdvancedPedagogy = () => {
  const [legacyRef, legacyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px 0px",
  });
  const [modernRef, modernInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px 0px",
  });
  const [journeyRef, journeyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px 0px",
  });
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px 0px",
  });
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px 0px",
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const initialStyle = {
    opacity: 0,
    y: 20,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <Parallax
        bgImageStyle={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        strength={200}
        bgImage="/assets/academics/pedagogy (6).webp"
      >
        <div className="relative h-[40vh] sm:h-[80vh]">
          <div className="absolute inset-0 flex items-center justify-center bg-green-950 bg-opacity-50">
            <div className="m-5 sm:m-0 py-5 sm:p-10 text-center rounded bg-black/50">
              <h1 className="mb-4 text-3xl sm:text-5xl font-bold text-white">
                Col Brown School
              </h1>

              <p className="text-lg sm:text-2xl text-gray-50">
                Nurturing Young Minds, Shaping Future Leaders
              </p>
              <a href="#legacy">
                <Button className="mt-5 sm:mt-12 animate-bounce bg-white text-green-950 hover:bg-gray-200">
                  Explore More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Legacy of Teaching */}
      <section
        ref={legacyRef}
        className="px-4 py-10 sm:py-20 bg-yellow-50"
        id="legacy"
      >
        <div className="container mx-auto max-w-7xl">
          <Heading
            title="Our Legacy of Teaching Excellence"
            titleClassName="lg:text-5xl font-bold sm:mb-12 text-center text-green-900"
            className="fadeIn lg:pb-10 "
            inView={legacyInView}
            fadeIn={fadeIn}
          />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              initial={initialStyle}
              animate={legacyInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.3, delay: 0.1 }} // Reduced duration and delay
            >
              <p className="mb-6 text-lg text-gray-800 text-justify">
                For over a century, Col Brown School has been at the forefront
                of boys' education, fostering an environment of academic rigor,
                character development, and holistic growth.
              </p>
              <p className="text-lg text-gray-800 text-justify">
                Our time-honored traditions, combined with innovative teaching
                methods, ensure that every student receives a world-class
                education tailored to their unique potential.
              </p>
            </motion.div>
            <motion.div
              initial={initialStyle}
              animate={legacyInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.3, delay: 0.2 }} // Reduced duration and delay
            >
              <Image
                src="/assets/academics/Career&Teaching.webp"
                alt="Historical image of Col Brown School"
                width={600}
                height={400}
                className="object-cover w-full rounded-lg shadow-xl h-52 sm:h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Teaching Methods */}
      <section
        ref={modernRef}
        className="px-4 py-10 sm:py-20 bg-gradient-to-r from-green-950 via-green-900 to-green-950"
      >
        <div className="container mx-auto">
          <Heading
            title="Embracing Modern Pedagogy"
            titleClassName="lg:text-5xl font-bold sm:mb-12 text-center text-white"
            className="fadeIn lg:pb-10"
            inView={modernInView}
            fadeIn={fadeIn}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Project-Based Learning",
                description:
                  "Our students engage in real-world projects that foster critical thinking, collaboration, and problem-solving skills.",
              },
              {
                icon: Laptop,
                title: "Technology Integration",
                description:
                  "We leverage cutting-edge technology to enhance learning experiences and prepare students for the digital age.",
              },
              {
                icon: Users,
                title: "Personalized Learning Paths",
                description:
                  "Our adaptive curriculum ensures each student progresses at their own pace, maximizing their potential and fostering a love for learning.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-lg shadow-xl"
                initial={initialStyle}
                animate={modernInView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }} // Reduced duration and delay
              >
                <item.icon className="mb-4 text-5xl text-green-950" />
                <h3 className="mb-4 text-2xl font-semibold text-green-950">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Journey */}
      <EducationalJourney />

      {/* Image Gallery */}
      <section
        ref={galleryRef}
        className="px-4 py-10 sm:py-20 bg-white bg-gradient-to-r from-slate-200 via-slate-50 to-slate-200"
      >
        <div className="container mx-auto">
          <Heading
            title="Life at Col Brown School"
            titleClassName="lg:text-5xl font-bold sm:mb-12 text-center text-green-900"
            className="fadeIn lg:pb-10"
            inView={galleryInView}
            fadeIn={fadeIn}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              {
                src: "/assets/academics/Classroom-Banner.webp",
                alt: "Classroom",
                icon: <School className="w-6 h-6" />,
                link: "/boarding-life/classrooms",
              },
              {
                src: "/assets/academics/pedagogy (5).webp",
                alt: "Labs",
                icon: <FlaskConical className="w-6 h-6" />,
                link: "",
              },
              {
                src: "/assets/sports/Badminton/img (1).webp",
                alt: "Sports facilities",
                icon: <Volleyball className="w-6 h-6" />,
                link: "/boarding-life/sports-at-cbs",
              },
              {
                src: "/assets/boarding-life/Library-Banner.webp",
                alt: "Library",
                icon: <BookOpen className="w-6 h-6" />,
                link: "/boarding-life/library",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => window.scrollTo(0, 0)}
              >
                <motion.div
                  key={index}
                  className="relative overflow-hidden sm:rounded h-56 rounded shadow-lg"
                  initial={initialStyle}
                  animate={galleryInView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 0.3, delay: 0.05 * (index + 1) }} // Reduced duration and delay
                >
                  <Image
                    src={item.src || "https://v0.dev/placeholder.svg"}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute  flex sm:hidden items-center justify-center transition-opacity duration-300 bg-green-950 bg-opacity-70 hover:opacity-100 bottom-0 w-full p-4">
                    <p className="text-lg font-semibold text-white flex items-center gap-2">
                      {" "}
                      {item.icon} {item.alt}
                    </p>
                  </div>
                  <div className="hidden absolute inset-0 sm:flex items-center justify-center transition-opacity duration-300 opacity-0 bg-green-950 bg-opacity-70 hover:opacity-100">
                    <p className="text-2xl font-semibold text-white flex items-center gap-2 animate-bounce mt-5">
                      {" "}
                      {item.icon} {item.alt}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        ref={ctaRef}
        className="px-4 py-10 sm:py-20 text-white bg-gradient-to-r from-green-950 via-green-900 to-green-950"
      >
        <div className="container mx-auto text-center">
          <Heading
            title="Ready to Join Our Community?"
            titleClassName="lg:text-5xl font-bold mb-6"
            className="fadeIn lg:pb-10"
            inView={ctaInView}
            fadeIn={fadeIn}
          />
          <motion.p
            className="mb-8 text-xl"
            initial={initialStyle}
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.3, delay: 0.1 }} // Reduced duration and delay
          >
            Take the first step towards an exceptional education. Apply now!
          </motion.p>
          <Link
            href="/admission/registration"
            onClick={() => window.scrollTo(0, 0)}
          >
            <motion.button
              className="px-8 py-3 text-lg font-semibold transition-colors duration-300 bg-white rounded-full text-green-950 hover:bg-gray-200"
              initial={initialStyle}
              animate={ctaInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.3, delay: 0.2 }} // Reduced duration and delay
            >
              Apply Now
            </motion.button>
          </Link>
        </div>
      </section>
      <Feature />
    </div>
  );
};

export default AdvancedPedagogy;

const features = [
  {
    img: "/assets/academics/AI.webp",
    number: "Artificial Intelligence",
    title: "AI-Powered Learning",
    description:
      "Artificial Intelligence leverages advanced computational technologies to personalize learning, analyze data, and streamline educational processes. At our school, AI is not just a tool but a transformative force shaping the way students learn, engage, and grow.",
  },
  {
    img: "/assets/academics/Smart Classrooms.jpg",
    number: "Smart Classrooms",
    title: "Interactive Learning Environment",
    description:
      "Our classrooms are equipped with interactive smart boards and multimedia systems, bringing lessons to life through engaging visuals, videos, and simulations. These tools encourage active participation and make learning more dynamic and effective.",
  },
  {
    img: "/assets/about/colbrown.webp",
    number: "STEM Integration",
    title: "Innovation & Problem Solving",
    description:
      "Our school integrates Science, Technology, Engineering, and Mathematics (STEM) into the curriculum, encouraging students to develop innovative solutions to real-world problems. Robotics and coding workshops further enrich their technological knowledge.",
  },
  {
    img: "/assets/academics/pedagogy (5).webp",
    number: "Computer Labs",
    title: "Digital Skills Development",
    description:
      "We have modern computer labs with high-speed internet and updated software to help students develop essential digital skills. From coding to graphic design and data analysis, students gain hands-on experience that complements their academic pursuits.",
  },
  {
    img: "/assets/academics/elearning.webp",
    number: "e-Learning Platforms",
    title: "Global Learning Access",
    description:
      "We provide access to e-learning tools, online resources, and educational portals that support self-paced learning and global collaboration, ensuring students stay ahead in a competitive world. At New Era School, technology is not just a subject—it's a bridge to creativity, problem-solving, and global citizenship. We strive to ensure every student is equipped for a future driven by innovation.",
  },
];

const FeatureItem = ({ feature, index, isExpanded, onToggle }) => (
  <div className="grid grid-cols-12 mx-0 mb-6 md:mb-0 ">
    <div
      className={cn("col-span-12 md:col-span-6 relative z-20 p-0", {
        "md:order-2": index % 2,
      })}
    >
      <div className="relative z-20 p-0 overflow-hidden">
        <Image
          src={feature.img}
          alt={feature.title}
          width={600}
          height={400}
          className="object-cover w-full h-full  transition-all duration-300 hover:scale-110 -z-10"
        />
      </div>
    </div>
    <div className="relative z-20 col-span-12 p-0 md:col-span-6">
      <div
        className={cn(
          "bg-white dark:bg-slate-800 h-full flex flex-col justify-center p-6 lg:p-12"
        )}
      >
        <div className="mb-6">
          <span className="block text-4xl leading-none">{feature.number}</span>
          <span className="block mt-1 text-base uppercase">
            {feature.title}
          </span>
        </div>
        <p
          className={`mb-6 text-justify lg:mb-12 ${
            isExpanded ? "line-clamp-none" : "line-clamp-3"
          }`}
        >
          {feature.description}
        </p>
        <div>
          <button
            onClick={onToggle}
            className="flex items-center text-sm font-bold uppercase bg-transparent border-0 hover:text-green-900 group"
          >
            {isExpanded ? "Show less" : "Learn more"}{" "}
            <ArrowRight
              className={cn(
                "ml-2 group-hover:translate-x-1 transition-all duration-300",
                isExpanded ? "group-hover:-rotate-90" : "group-hover:rotate-90"
              )}
            />
          </button>
        </div>
      </div>
    </div>
  </div>
);

FeatureItem.propTypes = {
  feature: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Feature = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="sm:py-14   dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container mx-auto p-6 bg-slate-100 sm:p-0">
        {features.map((feature, i) => (
          <FeatureItem
            feature={feature}
            index={i + 1}
            key={i}
            isExpanded={expandedIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </section>
  );
};
