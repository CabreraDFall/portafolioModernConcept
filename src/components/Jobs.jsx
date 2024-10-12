import { Linkedin } from "lucide-react";
import Job from "../utilities/Job";
import { Download } from "lucide-react";

import SectionTitle from "../utilities/SectionTitle";

const jobExperience = [
  {
    title: "Data Analyst & CRM Specialist",
    company: "Ipanema Comunicación",
    duration: "sept. 2023 - mar. 2024",
    country: "España",
    logo: "images/jobsLogo/ipanema_logo.jpg",
  },
  {
    title: "Becario de proyectos",
    company: "multiAnau Facility Services",
    duration: "feb. 2023 - ago. 2023",
    country: "España",
    logo: "images/jobsLogo/multianau_logo.jpg",
  },
  {
    title: "WordPress Develover",
    company: "Fall in Code",
    duration: "abr. 2021 - oct. 2022",
    country: "República Dominicana",
    logo: "images/jobsLogo/AC_logo.jpeg",
  },
  {
    title: "Coordinador de producción",
    company: "Sanut",
    duration: "ago. 2020 - feb. 2021",
    country: "República Dominicana",
    logo: "images/jobsLogo/sanut_logo.jpg",
  },
  {
    title: "Encargado de Redes Sociales",
    company: "Hospital Regional Dr. Antonio Musa",
    duration: "sept. 2019 - dic. 2020",
    country: "República Dominicana",
    logo: "images/jobsLogo/musa_logo.png",
  },
  {
    title: "Técnico de TI",
    company: "Hospital Regional Dr. Antonio Musa",
    duration: "sept. 2018 - dic. 2019",
    country: "República Dominicana",
    logo: "images/jobsLogo/musa_logo.png",
  },
];
const Jobs = () => {
  return (
    <div className="md:w-2/4 rounded c-box h-[400px] overflow-hidden relative flex flex-col gap-3 ">
      <div className=" mx-5 mt-8  flex h-[80%] flex-col gap-5 ">
        <SectionTitle title={"Experiencia"} />
        <div className="flex flex-col gap-5 overflow-y-auto px-5   h-full">
          <Job jobExperience={jobExperience} />
        </div>
      </div>
      <div className="text-c-text  justify-center mb-2 gap-5 h-10% flex items-center  w-full">
        <div className="fit-content px-5 mt-1 flex rounded gap-3 c-box">
          <a
            href="https://www.linkedin.com/in/abraham-cabrera/"
            className="text-c-white"
          >
            <div className="flex gap-2 text-xs text-[#AEAEAE] items-center">
              <Download width={16} />
              Descargar
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
