"use client";

import { Mail, Phone, SquareUser } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white px-4 py-3 block">
      <div className="sm:container md:max-w-6xl lg:max-w-[1400px] mx-auto flex flex-wrap justify-between items-center text-sm">
        <div className="hidden sm:flex items-center flex-wrap sm:space-x-4 mb-2 sm:mb-0">
          <a
            href="mailto:newera540@gmail.com"
            className="flex items-center mr-2 sm:mr-0 hover:text-yellow-400"
          >
            <Mail className="h-4 w-4 mr-2" />
            newera540@gmail.com
          </a>
          <a
            href="tel:+919958715277"
            className="flex items-center hover:text-yellow-400"
          >
            <Phone className="h-4 w-4 mr-2" />
            Admission Helpline: +91 99587 15277
          </a>
        </div>
        <div className="flex items-center justify-center sm:justify-start flex-wrap space-x-4">
          {/* <Link to="/result" className="hover:text-yellow-400">
            View Result
          </Link> */}
          <a
            href="https://www.colbrownschool.com/cbs_prbms/login"
            className="hover:text-yellow-400"
            target="_blank"
          >
            View Result
          </a>
          <Link href="/notices" className="hover:text-yellow-400">
            Notice(s)
          </Link>
          {/* <Link to="/blog" className="hover:text-yellow-400">
            Blog
          </Link> */}
          <div className="grid grid-cols-2 gap-2 w-full sm:w-auto mt-2 sm:mt-0 sm:flex sm:space-x-4">
            <Link
              href="/contact-us"
              className="bg-green-600 flex items-center justify-center text-white px-4 py-1 rounded-md hover:bg-green-500"
            >
              <SquareUser className="h-4 w-4 mr-2" />
              Contact Us
            </Link>

            <Link
              href="/admission/registration"
              className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-md hover:bg-yellow-500 text-center sm:text-left"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
