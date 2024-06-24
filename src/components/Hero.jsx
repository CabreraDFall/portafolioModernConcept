import { Figma, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="">
      <h1 className="text-c-white text-3xl font-bold mb-2">Abraham Cabrera</h1>
      <h2 className="text-6xl font-bold bg-gradient-to-r from-c-yellow to-55% to-c-white py-4   bg-clip-text text-transparent ">
        Web Developer && <br /> Ui Designer
      </h2>
      <div className="mt-4 flex gap-5">
        <span className="text-c-white text-xs px-2 py-1 rounded c-box inline-flex items-center">
          <span className="mr-1.5 flex h-3 w-3 items-center">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full opacity-75 bg-lime-400"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400"></span>
          </span>
          Busqueda de empleo
        </span>
        <span className="text-c-white text-xs px-2 py-1 rounded c-box inline-flex items-center">
          <span className="mr-1.5 flex h-3 w-3 items-center">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full opacity-75 bg-lime-400"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400"></span>
          </span>
          Disponible para proyectos
        </span>
        <div className="flex gap-2 items-end">
          <Github size={24} color={"#EBEBEB"} strokeWidth={0.5} />
          <Figma size={24} color={"#EBEBEB"} strokeWidth={0.5} />
          <Linkedin size={24} color={"#EBEBEB"} strokeWidth={0.5} />
          <Mail size={24} color={"#EBEBEB"} strokeWidth={0.5} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
