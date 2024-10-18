import { Figma, Github, Globe } from "lucide-react";

const iconComponents = {
  Figma: Figma,
  Github: Github,
  Globe: Globe,
};

const Project = ({ proyects }) => {
  return (
    <>
      {proyects.map((proyect, index) => (
        <div
          key={index}
          className="flex mr-7 h-full flex-col gap-5 my-8 xl:mb-2 xl:flex-row"
        >
          <div className="basis-1/2 w-full rounded bg-red">
            <img srcSet={proyect.image} className="w-full h-full" />
          </div>
          <div className="basis-1/2 flex flex-col gap-1 pt-4">
            <div className="flex justify-between gap-2">
              <h3 className="w-3/4 text-c-white font-semibold text-lg">
                {proyect.title}
              </h3>
              <div className="flex gap-2">
                {proyect.socials &&
                  proyect.socials.map(({ name, url }, index) => {
                    const IconComponent = iconComponents[name];
                    return IconComponent ? (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent
                          size={24}
                          color={"#EBEBEB"}
                          strokeWidth={0.5}
                        />
                      </a>
                    ) : null;
                  })}
              </div>
            </div>
            <p className="text-[#AEAEAE] pt-2">{proyect.content}</p>
            <div className="flex flex-wrap text-[#AEAEAE] w-3/4 pt-2">
              {proyect.tags &&
                proyect.tags.map((tag, index) => (
                  <span key={index} className="pr-2 py-2 px-0.5">
                    <div className="px-3 py-0.5 c-box rounded bg-[#3938271] text-sm">
                      {tag}
                    </div>
                  </span>
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Project;

{
  /* <Github size={24} color={"#EBEBEB"} strokeWidth={0.5} />
                <Figma size={24} color={"#EBEBEB"} strokeWidth={0.5} />
                <Globe size={24} color={"#EBEBEB"} strokeWidth={0.5} /> */
}

// <div className="flex mr-7 h-full flex-col gap-5 mb-8 xl:mb-2 xl:flex-row">
//   <div className="basis-1/2 w-full rounded bg-red">
//     <img srcSet="images/SMART-Project.png" className="w-full h-full" />
//   </div>
//   <div className="basis-1/2 flex flex-col gap-1 ">
//     <div className="flex justify-between gap-2">
//       <h3 className="w-3/4 text-c-white font-semibold text-lg">
//         Fallc: Ecommerce Modern concept
//       </h3>
//       <div className="flex gap-2">
//         <Github size={24} color={"#EBEBEB"} strokeWidth={0.5} />
//         <Figma size={24} color={"#EBEBEB"} strokeWidth={0.5} />
//         <Globe size={24} color={"#EBEBEB"} strokeWidth={0.5} />
//       </div>
//     </div>
//     <p className="text-[#AEAEAE]">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
//       tempus, velit quis elementum
//     </p>
//     <p className="flex flex-wrap text-[#AEAEAE] w-3/4">
//       <span className="pr-2">React</span>
//       <span className="pr-2">React</span>
//       <span className="pr-2">React</span>
//       <span className="pr-2">React</span>
//       <span className="pr-2">React</span>
//       <span className="pr-2">Tailwind</span>
//     </p>
//   </div>
// </div>
