"use client";

import { useState } from "react";
import ImgAndBreadcrumb from "../../../components/ImgAndBreadcrumb";
import Container from "../../../components/wrappers/Container";
import { Button } from "../../../components/ui/button";
import Heading from "../../../components/Heading";
import { MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const MessageFromManagement = () => {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about/message-from-management", label: "About" },
    { label: "Message From Management" },
  ];
  return (
    <section>
      <ImgAndBreadcrumb
        title="Message"
        imageSrc="/assets/about/message-banner.jpg"
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-gray-100">
        <Container>
          <Heading
            title="Leadership Insights"
            titleClassName="text-green-950 lg:text-5xl text-3xl font-bold"
            subtitle="Our leadership team is dedicated to creating an empowering environment that nurtures your potential and drives collective success."
            subtitleClassName="text-gray-700"
            className="pt-12 mx-auto"
          />
          <LeadershipMessage />
        </Container>
      </section>
    </section>
  );
};

export default MessageFromManagement;

const leadershipData = [
  {
    id: 1,
    name: "Mrs. Hina Adnan",
    position: "Head Mistress",
    image: "/assets/nes-assets/Hina_Adnan.png",
    message: `Education is a lifelong process and it begins at school. The purpose of education is to broaden a child's perspective and deepen the understanding of the world. Every child is a unique individual. Today, the role of the school is not only to pursue academic excellence but also to motivate and empower its students to be lifelong learners, critical thinkers, and productive members of an ever changing global society.

I feel proud to express that the school is moving towards excellence in all the aspects to ensure academic and human excellence with the blessings of Almighty Allah. I pray to Allah that our journey towards progress continues. "Everything that is done in the world is done by hope". As Educators we also ignite hope in the students to explore and fulfill their potentials.

With warm regards and good wishes,

Hina Adnan`,
  },
  {
    id: 2,
    name: "Mrs. Shamroz Ansari",
    position: "Owner & Director",
    image: "/assets/nes-assets/Shamroz_Ansari.jpeg",
    message: `The backbone of New Era School, Mrs. Shamroz Ansari is a true visionary in all respects right from infrastructure to academic achievements. Her contribution in the activities of the school is par excellence. The support provided by her in the day to day activities of the school deserves a special mention. Without mentioning her contribution, the vision of school is incomplete.

She has played a pivotal role in maintaining the high standards of the school and ensuring that the vision of Dr. Saeed Ansari continues to guide the institution. Her dedication to providing value-based education and creating an environment that nurtures young minds has been instrumental in the school's success and recognition by the Department of Education.`,
  },
  {
    id: 3,
    name: "Mr. Mahmood Ansari",
    position: "Owner & Director",
    image: "/assets/nes-assets/Mahmood_Ansari.jpeg",
    message: `Mahmood Saeed Ansari has played a pivotal role in the school activities after the death of his father, Dr. Saeed Ansari. He has seen the school grow with him. His tireless effort has reaped fruit and the school has received recognition from the DOE. The fraternity of NES always looks up to him for guidance and support. His mentorship is a boon to the school.

Under his leadership, New Era School has continued to maintain its high standards and increase its strength year after year. His commitment to the school's mission of "Reach out and Help Others" ensures that the institution remains true to its founding principles while adapting to modern educational needs.`,
  },
];

const LeadershipMessage = () => {
  const [openDrawer, setOpenDrawer] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {leadershipData.map((leader, index) => (
          <motion.div
            key={leader.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative w-full h-64 sm:h-80 duration-300 aspect-square"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={leader.image || "/placeholder.svg"}
                alt={leader.name}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
              <p className="text-gray-600 mb-4">{leader.position}</p>
              <Drawer
                open={openDrawer === leader.id}
                onOpenChange={(isOpen) =>
                  setOpenDrawer(isOpen ? leader.id : null)
                }
              >
                <DrawerTrigger asChild>
                  <Button className="w-full group">
                    <MessageCircle className="mr-1 h-4 w-4 mt-1 group-hover:rotate-[5deg] duration-300" />
                    Read Message
                    <motion.div
                      className="group-hover:ml-2 duration-300"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-4 w-4 mt-1" />
                    </motion.div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950 text-white h-[60vh]">
                  <motion.div
                    className="mx-auto w-full max-w-sm sm:max-w-2xl h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DrawerHeader>
                      <DrawerTitle className="text-2xl font-bold text-left sm:text-center text-white">
                        {leader.name}
                      </DrawerTitle>
                      <DrawerDescription className="text-lg font-semibold text-left sm:text-center text-white/80">
                        {leader.position}
                      </DrawerDescription>
                    </DrawerHeader>
                    <ScrollArea className="h-[32vh] px-4">
                      <div className="text-white/90">
                        <p className="text-justify">
                          {leader.message.split("\n").map((line, index) => (
                            <span key={index}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      </div>
                    </ScrollArea>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </motion.div>
                </DrawerContent>
              </Drawer>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
