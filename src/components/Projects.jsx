import Project from "../utilities/Project";
import SectionTitle from "../utilities/SectionTitle";

const Projects = () => {
  return (
    <div className="w-3/4 rounded c-box h-[400px] overflow-hidden ">
      <div className=" ml-5 my-8  flex flex-col gap-5 h-full ">
        <SectionTitle title={"Portafolio"} />
        <div className="relative flex flex-col overflow-y-auto gap-4  mx-5 mb-[3rem]">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Projects;
