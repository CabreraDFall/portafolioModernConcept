import { Figma, Github, Globe } from "lucide-react";

const Project = () => {
  return (
    <div className="flex mr-7 h-full flex-col gap-5 mb-8 xl:mb-2 xl:flex-row">
      <div className="basis-1/2 w-full rounded bg-red">
        <img srcSet="images/project1.png" className="w-full h-full" />
      </div>
      <div className="basis-1/2 flex flex-col gap-1 ">
        <div className="flex justify-between gap-2">
          <h3 className="w-3/4 text-c-white font-semibold text-lg">
            Fall: Ecommerce Modern concept
          </h3>
          <div className="flex gap-2">
            <Github size={24} color={"#EBEBEB"} strokeWidth={0.5} />
            <Figma size={24} color={"#EBEBEB"} strokeWidth={0.5} />
            <Globe size={24} color={"#EBEBEB"} strokeWidth={0.5} />
          </div>
        </div>
        <p className="text-[#AEAEAE]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tempus, velit quis elementum
        </p>
        <p className="flex flex-wrap text-[#AEAEAE] w-3/4">
          <span className="pr-2">React</span>
          <span className="pr-2">React</span>
          <span className="pr-2">React</span>
          <span className="pr-2">React</span>
          <span className="pr-2">React</span>
          <span className="pr-2">Tailwind</span>
        </p>
      </div>
    </div>
  );
};
export default Project;
