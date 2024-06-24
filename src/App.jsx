import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="sm:px-8 my-16 sm:mt-64 bg-regal-blue mx-auto max-w-7xl">
      <Hero />
      <div id="scrollBar" className="flex pt-20 gap-10">
        <Projects />
        <Jobs />
      </div>
      <div className="flex pt-5">
        <Skills />
      </div>
      <div className="flex pt-5 ">
        <Blogs />
      </div>
    </div>
  );
}

export default App;
