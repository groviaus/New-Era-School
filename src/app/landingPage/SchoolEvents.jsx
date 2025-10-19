"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoPreview } from "./VideoPreview";
import { NewsCard } from "./NewsCard";
import { EventCard } from "./EventCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SchoolEvents() {
  const newsItems = [
    {
      date: "AUGUST 11, 2025",
      title:
        "MUFC, New Era School score wins in St George's College Heritage Cup",
      image: "/assets/beyond-classroom/news-events/news/news_soccer3.jpg",
      type: "NEWS",
    },
    {
      date: "AUGUST 11, 2025",
      title: "St George's College Heritage Cup enters semi-final stage",
      image: "/assets/beyond-classroom/news-events/news/news_soccer2.jpg",
      type: "NEWS",
    },
    {
      date: "AUGUST 1, 2025",
      title:
        "St George's Heritage Cup begins; NES wins on penalties after 4–4 draw",
      image: "/assets/beyond-classroom/news-events/news/news_soccer1.jpg",
      type: "NEWS",
    },
    // {
    //   date: "APRIL 9, 2024",
    //   title: "Farewell Party Report for Class 12th at Col. Brown Cambridge",
    //   image: "https://v0.dev/placeholder.svg?height=60&width=60",
    //   type: "NEWS & EVENTS",
    // },
  ];

  const events = [
    {
      date: { day: "15", month: "AUG" },
      title: "Suron Ka Sangam – Music Workshop",
      year: "2025",
      location: "New Era School",
      description:
        "Music workshop by Pt. Vishwanath Ji and Pt. Rajendra Prasad Banarjee. 15–17 August 2025, 10:30 AM to 12:30 PM.",
    },
    {
      date: { day: "18", month: "MAY" },
      title: "Wipro Earthian Award Ceremony",
      year: "2024",
      location: "Him Jyoti School",
      description:
        "Wipro Earthian Ceremony and Open day was organized by Nature Science Initiative at Him Jyoti School on Saturday 11th May 2024",
    },
    {
      date: { day: "5", month: "APR" },
      title: "Farewell Party Report for Class 12th at New Era School",
      year: "2024",
      location: "New Era School",
      description:
        "The farewell party for the Class 12th students of New Era School was held on January 25, 2024",
    },
    // {
    //   date: { day: "19", month: "FEB" },
    //   title: "Migratory Bird Watching at Asan Barrage",
    //   year: "2024",
    //   location: "Asan Barrage",
    //   description: "Join us for a day of bird watching at Asan Barrage.",
    // },
  ];

  const pastEvents = [
    {
      date: { day: "31", month: "OCT" },
      title: "NES'MUN Report 2023",
      year: "2023",
      location: "New Era School",
      description:
        "It is a great pleasure to bring a report of the second edition of NES'MUN 2023.",
    },
    {
      date: { day: "2", month: "OCT" },
      title: "Butterfly Walk",
      year: "2023",
      location: "New Era School",
      description:
        "On 2nd October 2023, the School organized a programme of Biodiversity. Mr. Sanjai Sondhi graced the occasion.",
    },
    {
      date: { day: "1", month: "OCT" },
      title: "SUPW Activity",
      year: "2023",
      location: "New Era School",
      description: "Details about the SUPW activity will be provided soon.",
    },
  ];

  return (
    <div className="h-min py-6 lg:py-12">
      <div className="max-w-[90vw] mx-auto sm:p-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 space-y-8 sm:space-y-0 sm:gap-12">
          {/* Left Column - News Section */}
          <motion.div
            className="space-y-8 col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl sm:text-5xl text-center sm:text-left font-bold bg-gradient-to-r from-gray-800 to-black/30 bg-clip-text text-transparent py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What&apos;s Coming Next ?
            </motion.h2>
            <div className="grid sm:grid-cols-3 space-y-5 sm:space-y-0 sm:gap-5">
              <motion.div
                className="col-span-2 grid sm:h-[430px] overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <VideoPreview />
              </motion.div>

              <div className="grid grid-cols-1 gap-4 sm:gap-2">
                {newsItems.map((item, index) => (
                  <Link href="/beyond-classroom/news-and-events" key={index}>
                    <NewsCard item={item} index={index} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Events Section */}
          <motion.div
            className="space-y-8 col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.h2
              className="text-3xl sm:text-5xl text-center sm:text-left font-bold bg-gradient-to-r from-gray-800 to-black/30 bg-clip-text text-transparent py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              School Events
            </motion.h2>

            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 ">
                <TabsTrigger value="upcoming" className="">
                  Upcoming
                </TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="grid grid-cols-1 gap-4">
                {events.map((event, index) => (
                  <Link href="/beyond-classroom/news-and-events" key={index}>
                    <EventCard key={index} event={event} index={index} />
                  </Link>
                ))}
              </TabsContent>
              <TabsContent value="past" className="grid grid-cols-1 gap-4">
                {pastEvents.map((event, index) => (
                  <Link href="/beyond-classroom/news-and-events" key={index}>
                    <EventCard key={index} event={event} index={index} />
                  </Link>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
