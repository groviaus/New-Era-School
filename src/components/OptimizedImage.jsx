"use client";

import { useState, useEffect } from "react";

export const OptimizedImage = ({ src, alt, className, width, height }) => {
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Check if src is valid (not empty, null, or undefined)
    if (!src || src === "") {
      setLoading(false);
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setLoading(false);
    };
    img.onerror = () => {
      setLoading(false);
    };
  }, [src]);

  // Don't render anything if src is empty or invalid
  if (!src || src === "") {
    return null;
  }

  return (
    <>
      {loading && (
        <div
          className={`animate-pulse bg-gray-200 ${className}`}
          style={{ width, height }}
        />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${loading ? "hidden" : "block"}`}
          loading="lazy"
          width={width}
          height={height}
        />
      )}
    </>
  );
};
