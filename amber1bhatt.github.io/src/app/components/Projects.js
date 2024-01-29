// components/Projects.js

import React from "react";
import Card from "./Card";
import Link from "next/link";

const Projects = ({ projects }) => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center h-screen bg-gray-100 relative"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <button aria-label="Scroll to Top" className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
