import React from "react";
import Blogs from "../components/Blogs";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="sm:px-8 my-16 sm:mt-64 bg-regal-blue mx-auto max-w-7xl">
      <Hero />
      <div className="flex flex-col md:flex-row m-8 md:mx-0 md:my-10 gap-10">
        <Projects />
        <Jobs />
      </div>
      <div className="flex pt-5">
        <Skills />
      </div>
      <div className="flex flex-row pt-5  ">
        <Blogs />
      </div>
    </div>
  );
}

export default Home;
