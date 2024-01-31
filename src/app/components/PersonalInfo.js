import React from "react";
import Link from "next/link";
import Image from "next/image";
import LinkedInIcon from "../icons/LinkedInIcon";
import GitHubIcon from "../icons/GitHubIcon";
import ArrowIcon from "../icons/ArrowIcon";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 relative">
      <Image
        src="https://media.licdn.com/dms/image/D5603AQH-OYiVjePn7g/profile-displayphoto-shrink_400_400/0/1705448168424?e=1712188800&v=beta&t=VwwyeXfM8YL7dSfVdxVNnpgaqkUbVTHG4FSaylbxdEI"
        height="64"
        width="64"
        alt="Your Face"
        className="w-64 h-64 object-cover rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">Amber Bhatt</h2>
      <p className="text-lg text-gray-500">
        Bioinformatics | FinTech | InfrastructureTech | Computer Science
      </p>
      <div className="flex space-x-4 mt-4">
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <div className="absolute bottom-8 rotate-180">
        <Link href="/#projects">
          <button aria-label="Scroll down" className="animate-bounce">
            <ArrowIcon height={8} width={8} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
