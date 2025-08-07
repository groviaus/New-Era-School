"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LazyLoadYouTube({ videoId, title }) {
  const [isInView, setIsInView] = useState(false);
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Disconnect once video starts playing
        }
      },
      { threshold: 0.1 } // Reduced threshold for better visibility
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220px] sm:min-h-[400px] rounded-2xl overflow-hidden bg-gray-200"
    >
      {!isInView ? (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={
                imageError
                  ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                  : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
              }
              alt={`${title} Thumbnail`}
              fill
              className="object-cover"
              onError={handleImageError}
              priority
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={title}
          className="w-full h-full"
        />
      )}
    </div>
  );
}
