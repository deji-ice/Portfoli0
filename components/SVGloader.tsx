"use client";
import React, { useEffect, useRef } from "react";

const SVGLoader = () => {
  const loader = useRef<HTMLDivElement | null>(null);
  const path = useRef<SVGPathElement | null>(null);
  const initialCurve = 200;
  const duration = 600;
  let start: number | undefined;

  useEffect(() => {
    setPath(initialCurve);
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
  }, []);

  const animate = (timestamp: number | undefined) => {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = (timestamp as number) - (start as number);
    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
    setPath(newCurve);

    if (loader.current)
      loader.current.style.top =
        easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };
  const easeOutQuad = (
    time: number,
    start: number,
    end: number,
    duration: number
  ) => {
    return -end * (time /= duration) * (time - 2) + start;
  };
  const loaderHeight = () => {
    const loaderBounds = (
      loader.current as HTMLElement | null
    )?.getBoundingClientRect() || { height: 0 };

    return loaderBounds.height;
  };

  const setPath = (curve: number) => {
    const width = window.innerWidth;
    const height = loaderHeight();
    if (path.current) {
      path.current.setAttributeNS(
        null,
        "d",
        `M0 0
      L${width} 0
      L${width} ${height}
      Q${width / 2} ${height - curve} 0 ${height}
      L0 0`
      );
    }
  };

  return (
    <div ref={loader} className={`w-full z-50 fixed h-[calc(100vh+200px)]`}>
      <svg className="h-full w-full">
        <path
          className="stroke-[1px] stroke-black fill-slate-800 "
          ref={path}
        ></path>
      </svg>
    </div>
  );
};

export default SVGLoader;
