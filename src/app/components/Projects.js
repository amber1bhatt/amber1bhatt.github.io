"use client";

import React, { useRef, useEffect, useState } from "react";
import Card from "./Card";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ArrowIcon from "../icons/ArrowIcon";

const Projects = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.relativeSlide);
    },
    created() {
      setLoaded(true);
    },
  });

  const handlePrev = () => {
    instanceRef.current.prev();
  };

  const handleNext = () => {
    instanceRef.current.next();
  };

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center h-screen space-y-4 relative"
    >
      <div
        ref={sliderRef}
        className="keen-slider flex overflow-hidden w-full max-w-screen-xl"
      >
        {projects.map((project, index) => (
          <div key={index} className="keen-slider__slide flex-none w-1/3 px-4">
            <Card {...project} />
          </div>
        ))}
      </div>

      <div className="flex mt-4">
        <div className="-rotate-90">
          <button aria-label="Previous" onClick={handlePrev} className="p-2">
            <ArrowIcon height={6} width={6} />
          </button>
        </div>
        <div className=" rotate-90">
          <button aria-label="Next" onClick={handleNext} className="p-2">
            <ArrowIcon height={6} width={6} />
          </button>
        </div>
      </div>

      <div className=" absolute bottom-8 flex left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <button aria-label="Scroll to Top" className="animate-bounce">
            <ArrowIcon height={8} width={8} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
