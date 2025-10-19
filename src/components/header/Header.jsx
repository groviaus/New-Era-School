"use client";

import TopBar from "./TopBar";
import MainNav from "./MainNav";
import Drawer from "./Drawer";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Add delay using setTimeout
      setTimeout(() => {
        setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      }, 100); // 100ms delay
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={` shadow-sm z-50 bg-white/70 backdrop-blur-sm transition-all duration-500 ${
        isVisible ? "sticky top-0 translate-y-0" : "relative -translate-y-full"
      }`}
    >
      <TopBar />
      <div className="sm:container md:max-w-6xl lg:max-w-[1400px]  mx-auto py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-4">
            <Image
              src="/assets/nes-assets/logo.jpeg"
              alt="New Era School"
              width={80}
              height={80}
              className="object-contain rounded-md"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-800 leading-tight">
                NEW ERA SCHOOL
              </h1>
              <p className="text-sm text-gray-600 font-medium">Estd. 1968</p>
            </div>
          </a>
          <MainNav />
          <Drawer />
        </div>
      </div>
    </header>
  );
}
