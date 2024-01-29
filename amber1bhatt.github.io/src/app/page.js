// pages/index.js

import React from "react";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/Projects";

const projectsData = [
  {
    imageUrl: "/imgs/spc-ezgif.com-video-to-gif-converter.gif",
    name: "Samurai Pizza Cats",
    description:
      "The cats got their paws into the code and started building a pretty basic menu management app for their pizza joint. It’s not great...it’s not even good. They are master pizza makers, not app makers, and thus have enlisted the help of the human hands. Having a thumb helps a lot when typing...",
    githubLink: "https://github.com/amber1bhatt/Samurai-Pizza-Cats",
  },
  {
    imageUrl: "/imgs/risk_segmentation.png",
    name: "Credit Risk Data Analysis",
    description:
      "Our goal with this analysis is to build a model to help determine whether or not a person will default on their credit loan.",
    githubLink:
      "https://github.com/amber1bhatt/Kaggle-Datasets/blob/master/Credit%20Risk/Credit%20Risk%20Analysis.ipynb",
  },
  {
    imageUrl: "/imgs/confusion_matrix.png",
    name: "Insurance Data Analysis",
    description:
      "Our goal with this analysis is to predict whether or not a customer is interested in Vehicle Insurance given that they already have Health Insurance.",
    githubLink:
      "https://github.com/amber1bhatt/Kaggle-Datasets/blob/master/Health%20Insurance/health_insurance.ipynb",
  },
];

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center h-screen relative">
        <PersonalInfo />
      </div>
      <Projects projects={projectsData} />
    </>
  );
};

export default Home;
