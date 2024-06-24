import { Linkedin } from "lucide-react";
import Job from "../utilities/Job";

import SectionTitle from "../utilities/SectionTitle";

const Jobs = () => {
  return (
    <div className="w-2/4 rounded c-box h-[400px] overflow-hidden relative flex flex-col gap-3 ">
      <div className=" mx-5 mt-8  flex h-[80%] flex-col gap-5 ">
        <SectionTitle title={"Experiencia"} />
        <div className="flex flex-col gap-5 overflow-y-auto px-5   h-full">
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
        </div>
      </div>
      <div className="text-c-text  justify-center mb-2 gap-5 h-10% flex items-center  w-full">
        <div className="fit-content px-5 mt-1 flex rounded  c-box">
          <span className="text-c-white">Descargar</span>
        </div>
        <div className="fit-content px-5 mt-1 flex rounded gap-3 c-box">
          <Linkedin />
          <span className="text-c-white">LinkedIn</span>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
