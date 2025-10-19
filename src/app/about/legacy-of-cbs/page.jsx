"use client";

import React, { useState } from "react";
import ImgAndBreadcrumb from "../../../components/ImgAndBreadcrumb";
import Container from "../../../components/wrappers/Container";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../../lib/utils";
import PropTypes from "prop-types";
import { Button } from "../../../components/ui/button";
import Image from "next/image";

function ShapeOne() {
  return (
    <svg
      className="absolute bottom-5 -left-40 -z-[1]"
      width="404"
      height="572"
      viewBox="0 0 404 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="118"
        cy="286"
        r="265.5"
        stroke="#3B823A"
        strokeOpacity="0.2"
        strokeWidth="41"
      />
    </svg>
  );
}

function ShapeTwo() {
  return (
    <svg
      className="absolute top-5 -right-6 sm:-right-[119px] h-[200px] w-[200px] sm:h-[479px] sm:w-[269px] -z-[1]"
      width="269"
      height="479"
      viewBox="0 0 269 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="239.5"
        cy="239.5"
        r="239.5"
        fill="#B91C1C"
        fillOpacity="0.2"
      />
    </svg>
  );
}

const LegacyCBS = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about/legacy-of-cbs", label: "About" },
    { label: "Legacy NES" },
  ];
  return (
    <section className="overflow-hidden">
      <ImgAndBreadcrumb
        title="Legacy of NES"
        imageSrc="/assets/nes-assets/gallery (1).jpeg"
        imageAlt="New Era School Campus"
        breadcrumbItems={breadcrumbItems}
      />
      <Container>
        <AboutUs1 />
        <Feature />
      </Container>
    </section>
  );
};

export default LegacyCBS;

const AboutUs1 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="ezy__about4 relative z-[1] light py-14 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <ShapeOne />
      <ShapeTwo />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
          <div>
            <h2 className="mb-0 text-4xl font-bold text-green-950 leading-tight md:text-end md:text-6xl md:leading-tight">
              The School: A Legacy of Excellence Since 1968
            </h2>
          </div>
          <div className="my-6 lg:px-4 lg:my-0">
            <div
              className="min-h-[500px]  bg-center rounded bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(/assets/nes-assets/Dr_Saeed_Ansari.png)`,
              }}
            ></div>
          </div>
          <div
            className={cn(
              "px-2 sm:pr-7 line-clamp-5 sm:line-clamp-none",
              isExpanded ? "line-clamp-none" : "line-clamp-5"
            )}
          >
            <p className="mb-0 text-base leading-7 text-justify opacity-70">
              New Era School is a recognized unaided progressive English Medium
              School that has come a long way since its inception in 1968. The
              school has been recognized by DOE with School Id-1925454 wef
              2024-25 and is open to all students irrespective of caste, creed
              or social status.
            </p>

            <p className="mt-6 mb-0 text-base leading-7 text-justify opacity-70">
              The school is consistently maintaining its high standards &
              increasing its strength year after year. The school is committed
              to impart value based education to the students with a mission of
              producing excellent human beings who can contribute towards the
              progress of our Nation.
            </p>
            <p className="mt-6 mb-0 text-base leading-7 text-justify opacity-70">
              Founded by Dr. Saeed Ansari, an eminent educationist who
              patronized the Nai Taleem Society, New Era School was established
              with a vision to "Reach out and Help Others." The school offers a
              stimulating environment with modern educational facilities
              including CCTV cameras, a well-stocked library, and computer lab
              equipped with the latest technology.
            </p>
          </div>

          <Button
            className="sm:hidden flex items-center gap-2 mt-4"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? "Show less" : "Learn more"}</span>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    img: "/assets/nes-assets/school.jpeg",
    number: "1968",
    title: "Foundation of New Era School",
    description:
      "Dr. Saeed Ansari, an eminent educationist of his time, patronized the Nai Taleem Society and established NEW ERA SCHOOL with a vision to 'Reach out and Help Others.' A man with great accomplishments to his credit, Dr. Ansari was one of the first generations of Jamia students who had joined Aligarh and later completed his post-graduation from Columbia University, USA.",
  },
  {
    img: "/assets/nes-assets/Dr_Saeed_Ansari.png",
    number: "Dr. Saeed Ansari",
    title: "The Visionary Founder",
    description:
      "Dr. Saeed Ansari (January 1904 – January 1984) completed his graduation from Jamia Millia Islamia where he later joined as a teacher. On his return to India in 1934, he was appointed as Principal of newly established USTADON KA MADARSA (Teachers Training College) of Jamia Millia Islamia. He also served as Dy. Director of Education, Delhi in 1960s and devoted his whole life in promotion of Basic Education in the country.",
  },
  {
    img: "/assets/nes-assets/logo.jpeg",
    number: "REACH OUT HELP OTHERS",
    title: "Legacy of Excellence",
    description:
      "New Era School's foundation rests on timeless values embodied in our motto 'REACH OUT AND HELP OTHERS.' The school is committed to impart value-based education to students with a mission of producing excellent human beings who can contribute towards the progress of our Nation. Our educational programme is child-centered and activity-oriented, enabling children to relate to practical life.",
  },
];

const FeatureItem = ({ feature, index, isExpanded, onToggle }) => (
  <div className="grid grid-cols-12 mx-0 mb-6 md:mb-0">
    <div
      className={cn("col-span-12 md:col-span-6 relative z-20 p-0", {
        "md:order-2": index % 2,
      })}
    >
      <div className="relative h-full w-full z-20 p-0 overflow-hidden">
        <Image
          src={feature.img}
          alt={feature.title}
          fill
          className="object-cover blur-md w-full h-full relative transition-all duration-300 hover:scale-110 -z-10"
        />
        <Image
          src={feature.img}
          alt={feature.title}
          fill
          className="object-contain absolute top-0 left-0 w-full h-full transition-all duration-300 hover:scale-110 -z-10"
        />
      </div>
    </div>
    <div className="relative z-20 col-span-12 p-0 md:col-span-6">
      <div
        className={cn(
          "bg-slate-100 dark:bg-slate-800 h-full flex flex-col justify-center p-6 lg:p-12"
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
    <section className="sm:py-14 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container mx-auto">
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
