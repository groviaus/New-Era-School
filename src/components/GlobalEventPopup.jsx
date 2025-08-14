"use client";

import { useEffect, useState, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function GlobalEventPopup() {
  const [open, setOpen] = useState(false);

  // Show popup 5s after mount (once per page load)
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChange = useCallback((nextOpen) => {
    setOpen(nextOpen);
  }, []);

  // Fire side-cannon confetti when popup opens (relative to the viewport)
  useEffect(() => {
    if (!open) return;

    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
        zIndex: 100,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
        zIndex: 100,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="p-0 max-w-[92vw] sm:max-w-[920px] bg-transparent border-none shadow-none">
        {/* Desktop image */}
        <div className="hidden sm:block shimmer w-full rounded-md">
          <Image
            src="/assets/beyond-classroom/news-events/events/suron_ka_sangam.jpg"
            alt="Suron Ka Sangam - Music Workshop"
            width={1200}
            height={675}
            className="w-full h-auto rounded-md"
            sizes="(min-width: 640px) 920px, 100vw"
            priority
          />
        </div>

        {/* Mobile image */}
        <div className="block sm:hidden shimmer w-full rounded-md">
          <Image
            src="/assets/beyond-classroom/news-events/events/suron_ka_sangam_popup.jpg"
            alt="Suron Ka Sangam - Music Workshop"
            width={900}
            height={1200}
            className="w-full h-auto rounded-md"
            sizes="(max-width: 639px) 92vw, 0px"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
