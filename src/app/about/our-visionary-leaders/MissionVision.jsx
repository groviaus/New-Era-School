"use client";

import { useState } from "react";
// import ImgAndBreadcrumb from "../../../components/ImgAndBreadcrumb";
import Container from "../../../components/wrappers/Container";
import { Button } from "../../../components/ui/button";
import Heading from "../../../components/Heading";
import { MessageCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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
// import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
const MissionVision = () => {
  return (
    <section>
      {/* <Container> */}
      {/* <Heading
            title="Our Mission and Vision"
            titleClassName="text-green-950 lg:text-5xl text-3xl lg:font-semibold font-bold"
            // subtitle="We strive to foster an inclusive environment that empowers individuals and promotes shared success."
            subtitleClassName="text-gray-600"
            className="pt-12 mx-auto lg:pb-10"
          /> */}
      <LeadershipMessage />
      {/* </Container> */}
      {/* <div className="mx-auto bg-gray-50 py-12">
          <FacultyStaffSection />
        </div> */}
      {/* <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          )}
          width={40}
          height={40}
          squares={[80, 80]}
          squaresClassName="hover:fill-gray-500 -z-10"
        /> */}

      {/* <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        /> */}
    </section>
  );
};

export default MissionVision;

const leadershipData = [
  {
    id: 1,
    name: "Dr. Saeed Ansari",
    position: "Founder",
    image: "/assets/nes-assets/Dr_Saeed_Ansari.png",
    message: `Dr. Saeed Ansari, a man with great accomplishments to his credit, an eminent educationist of his time patronized the Nai Taleem Society in 1968 and established NEW ERA SCHOOL with a vision to "Reach out and Help Others."

    (Late) Dr. Saeed Ansari was one of the first generations of Jamia students who had joined Aligarh. He completed his graduation from Jamia Millia Islamia where he later joined as a teacher. After spending a few years here, he went to Columbia University U.S.A for obtaining his post-graduation.

    On his return to India in 1934, he was appointed as Principal of newly established USTADON KA MADARSA (Teachers Training College) of Jamia Millia Islamia. He also served as Dy. Director of Education, Delhi in 1960s. He devoted his whole life in promotion of Basic Education in the country.`,
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
    <div className="container mx-auto max-w-7xl px-4 py-8 relative z-1000">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
              className="relative w-full h-96 duration-300 aspect-square"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={leader.image || "/placeholder.svg"}
                alt={leader.name}
                fill
                className="object-cover object-top"
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
                <DrawerContent className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white max-h-[70vh]">
                  <motion.div
                    className="mx-auto w-full max-w-sm sm:max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DrawerHeader className="pb-2 sm:pb-0">
                      <DrawerTitle className="text-2xl font-bold text-left sm:text-center text-white">
                        {leader.name}
                      </DrawerTitle>
                      <DrawerDescription className="text-lg font-semibold text-left sm:text-center text-white/80">
                        {leader.position}
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4 text-white/90">
                      <ScrollArea className="h-[280px] sm:h-[300px] pr-4">
                        <p className="text-justify pb-4">
                          {leader.message.split("\n").map((line, index) => (
                            <span key={index}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      </ScrollArea>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button className="bg-white text-gray-950 hover:bg-gray-100 active:scale-95 duration-300">
                          Close
                        </Button>
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
