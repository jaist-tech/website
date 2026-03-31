"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/path";

type Props = {
  imagePaths: readonly string[];
  slideDurationMs?: number;
};

const DEFAULT_SLIDE_DURATION_MS = 8000;

export const HeroBackgroundSlideshow = ({
  imagePaths,
  slideDurationMs = DEFAULT_SLIDE_DURATION_MS,
}: Props) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (imagePaths.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveImageIndex(
        (previousIndex) => (previousIndex + 1) % imagePaths.length,
      );
    }, slideDurationMs);

    return () => window.clearInterval(timer);
  }, [imagePaths.length, slideDurationMs]);

  if (imagePaths.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10">
      {imagePaths.map((imagePath, index) => {
        const isActive = index === activeImageIndex;

        return (
          <div
            key={imagePath}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${isActive ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={withBasePath(imagePath)}
              alt={`Hero Background ${index + 1}`}
              fill
              priority={index === 0}
              className={`object-cover object-center brightness-60 transition-transform ease-linear ${isActive ? "scale-105 duration-[8000ms]" : "scale-100 duration-[1200ms]"}`}
            />
          </div>
        );
      })}
    </div>
  );
};
