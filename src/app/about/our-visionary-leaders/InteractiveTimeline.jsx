"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const timelineData = [
  {
    year: 1968,
    event: "Foundation of New Era School",
    description:
      "Dr. Saeed Ansari establishes New Era School with a vision to 'Reach out and Help Others.'",
  },
  {
    year: 1970,
    event: "Era of Growth",
    description:
      "The 1970s marked significant growth under Dr. Saeed Ansari's leadership, establishing the school's reputation for value-based education.",
  },
  {
    year: 1984,
    event: "Leadership Transition",
    description:
      "After Dr. Saeed Ansari's passing, Mr. Mahmood Saeed Ansari & Mrs. Shamroz Ansari take over the school's leadership.",
  },
  {
    year: 2024,
    event: "DOE Recognition",
    description:
      "New Era School receives official recognition from the Department of Education with School ID-1925454.",
  },
];

const TimelineItem = ({ item, isActive, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`cursor-pointer  ${
      isActive
        ? "sm:bg-primary text-primary-foreground bg-gray-900"
        : "sm:bg-background"
    }`}
    onClick={onClick}
  >
    <Card className="h-full ">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-green-900">{item.year}</h3>
        <p className="text-gray-900 line-clamp-">{item.event}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const InteractiveTimeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const timelineRef = useRef(null);

  return (
    <section className="py-16 bg-gray-800">
      <div className="md:max-w-7xl container mx-auto px-4">
        <h2 className="text-4xl text-white font-semibold mb-8 text-center">
          Timeline of Excellence
        </h2>
        <div className="relative">
          <div
            ref={timelineRef}
            className="grid sm:grid-cols-4 grid-cols-2 gap-4 sm:space-x-4 pb-8"
          >
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isActive={activeItem === index}
                onClick={() => setActiveItem(index)}
              />
            ))}
          </div>
        </div>
        {activeItem !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 text-center text-slate-50"
          >
            <h3 className="text-xl font-semibold  mb-2">
              {timelineData[activeItem].event}
            </h3>
            <p>{timelineData[activeItem].description}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InteractiveTimeline;
