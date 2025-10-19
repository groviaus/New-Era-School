"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const achievementsData = {
  education: {
    content:
      "Dr. Saeed Ansari's approach to education was revolutionary for its time. He believed in value-based education and equal opportunities for all students, regardless of their background. The school is committed to impart value-based education to students with a mission of producing excellent human beings.",
    images: [
      "/assets/nes-assets/gallery (1).jpeg",
      "/assets/nes-assets/gallery (2).jpeg",
    ],
  },
  recognition: {
    content:
      "New Era School has been recognized by the Department of Education with School ID-1925454 wef 2024-25. The school is consistently maintaining its high standards and increasing its strength year after year, earning considerable appreciation for providing value-based education.",
    images: [
      "/assets/nes-assets/school.jpeg",
      "/assets/nes-assets/gallery (3).jpeg",
    ],
  },
  facilities: {
    content:
      "NES has an attractive new building with all modern educational facilities. It offers a stimulating environment with CCTV cameras, a big library stocked with specially selected books, and a computer lab equipped with the latest computers providing computer education from std 1.",
    images: [
      "/assets/nes-assets/gallery (4).jpeg",
      "/assets/nes-assets/gallery (5).jpeg",
    ],
  },
};

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl font-semibold mb-8 text-center">
          Achievements and Legacy
        </h2>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 bg-gray-200">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="recognition">Recognition</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
          </TabsList>
          {Object.entries(achievementsData).map(
            ([key, { content, images }]) => (
              <TabsContent key={key} value={key}>
                <Card>
                  <CardContent className="pt-6 relative">
                    <p className="mb-6">{content}</p>
                    <Carousel>
                      <CarouselContent>
                        {images.map((src, index) => (
                          <CarouselItem key={index}>
                            <div className="relative w-full aspect-video sm:h-96">
                              <Image
                                src={src || "/placeholder.svg"}
                                alt={`${key} image ${index + 1}`}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-[2%] z-10" />
                      <CarouselNext className="absolute right-[2%] z-10" />
                    </Carousel>
                  </CardContent>
                </Card>
              </TabsContent>
            )
          )}
        </Tabs>
      </div>
    </section>
  );
};

export default AchievementsSection;
