"use client";

import { useEffect, useState } from "react";

type CountUpProps = {
  end: number;
  suffix?: string;
  duration?: number;
  id: string;
};

export const CountUp = ({ end, suffix = "", duration = 1.5, id }: CountUpProps): JSX.Element => {
  const [count, setCount] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const elementId = `pmv2-count-${id}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    const element = document.getElementById(elementId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementId, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | undefined;
    const animate = (currentTime: number) => {
      if (startTime === undefined) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  const displayValue = count ?? end;

  return (
    <span className="relative inline-block">
      <span className="invisible">
        {end}
        {suffix}
      </span>
      <span
        id={elementId}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
      >
        {displayValue}
        {suffix}
      </span>
    </span>
  );
};
