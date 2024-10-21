import { Figma, Github, Linkedin, Mail, Clipboard } from "lucide-react";
import { Link } from "react-router-dom";
import Tooltip from "../utilities/Tooltip";

const Hero = () => {
  return (
    <div className="mx-8 sm:mx-0">
      <h1 className="text-lg text-c-white md:text-3xl font-bold mb-2 sm:text-red">
        Abraham Cabrera
      </h1>
      <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-c-yellow to-55% to-c-white py-4   bg-clip-text text-transparent ">
        Web Developer && <br /> Ui Designer
      </h2>
      <div className="mt-4 flex flex-col md:flex-row gap-5 md:items-center">
        <div className="flex gap-5 my-2">
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
        </div>

        <div className="flex gap-2 items-end">
          <Link to={"https://github.com/CabreraDFall"}>
            <Github size={24} color={"#EBEBEB"} strokeWidth={0.5} />
          </Link>
          <Link to={"https://www.figma.com/@cabreradfall"}>
            <Figma size={24} color={"#EBEBEB"} strokeWidth={0.5} />
          </Link>
          <Link to={"https://www.linkedin.com/in/cabreradfall/"}>
            <Linkedin size={24} color={"#EBEBEB"} strokeWidth={0.5} />
          </Link>
          <Tooltip text="abraham@cabreradfall.dev" icon={Clipboard}>
            <Mail size={24} color={"#EBEBEB"} strokeWidth={0.5} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Hero;
