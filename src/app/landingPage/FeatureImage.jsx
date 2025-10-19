"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/wrappers/Container";
import { Button } from "../../components/ui/button";
import { School, BookOpen, Volleyball, ClipboardList } from "lucide-react";

const FeatureImage = () => {
  const data = [
    {
      title: "Boarding Life",
      image: "/assets/nes-assets/gallery (3).jpeg",
      path: "/boarding-life/overview",
      icon: <School className="w-6 h-6 text-white" />,
    },
    {
      title: "Academics",
      image: "/assets/nes-assets/gallery (4).jpeg",
      path: "/academics/curriculum",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
    {
      title: "Sports",
      image: "/assets/nes-assets/gallery (5).jpeg",
      path: "/boarding-life/sports-at-cbs",
      icon: <Volleyball className="w-6 h-6 text-white" />,
    },
    {
      title: "Co-Curricular",
      image: "/assets/nes-assets/gallery (6).jpeg",
      path: "/beyond-classroom/clubs-at-cbs",
      icon: <ClipboardList className="w-6 h-6 text-white" />,
    },
  ];

  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const index = itemRefs.current.indexOf(target);
            target.style.opacity = "1";
            target.style.transform = "translateX(0)";
            if (target.children[2]) {
              target.children[2].style.opacity = "1";
              target.children[2].style.transform = "translateY(0)";
            }
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container className="relative z-10 -mt-20 md:-mt-40">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 group lg:grid-cols-4 sm:gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="relative aspect-[3/4] duration-300 transition-all hover:scale-[0.99] overflow-hidden rounded-t-2xl shadow-2xl sm:drop-shadow-2xl"
            style={{
              opacity: 0,
              transform: `translateX(${index % 2 === 0 ? "-20px" : "20px"})`,
              transition: "opacity 0.6s ease, transform 0.6s ease",
              willChange: "opacity, transform",
            }}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-left object-cover transition-all duration-300 hover:scale-110"
            />
            <div
              className={`absolute transition-all bottom-0 left-0 right-0 h-1/3 duration-300 ${
                index % 2 === 0
                  ? "bg-gradient-to-t from-green-900 via-green/80 to-green/70"
                  : "bg-gradient-to-t from-red-900 via-red/80 to-red/70"
              }`}
            />
            <div
              className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center gap-4 p-4 transition-all duration-300 -mb-14 group-hover:mb-0"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                willChange: "opacity, transform",
              }}
            >
              <p className="flex items-center gap-2 text-lg font-bold tracking-wider text-white sm:text-2xl">
                {item.icon} {item.title}
              </p>

              <Link
                href={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Button className="group">
                  <p className="text-base font-medium text-white sm:text-lg sm:font-bold">
                    Learn More
                  </p>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeatureImage;
