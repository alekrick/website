"use client";

import { useState } from "react";
import Image from "next/image";

type CaseStudySliderProps = {
  images: string[];
  altPrefix: string;
};

export const CaseStudySlider = ({
  images,
  altPrefix,
}: CaseStudySliderProps): JSX.Element | null => {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  if (images.length === 0) return null;

  const goTo = (nextIndex: number): void => {
    const total = images.length;
    const normalized = ((nextIndex % total) + total) % total;
    setIndex(normalized);
  };

  return (
    <div className="mt-6 pt-6 border-t border-gray-200/70 dark:border-gray-800">
      <div className="relative">
        <div className="relative h-56 sm:h-72 md:h-96 w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900">
          {images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className={`absolute inset-0 transition-opacity duration-300 ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`${altPrefix} slide ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="h-full w-full object-contain md:object-cover"
              />
            </div>
          ))}
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-200 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 p-1.5"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-200 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 p-1.5"
              aria-label="Next image"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              type="button"
              onClick={() => goTo(i)}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                i === index ? "bg-gray-700 dark:bg-gray-400" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
