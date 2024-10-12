import SkillBox from "../utilities/SkillBox";
import { SKILLS } from "../api/blogContent";
import Marquee from "react-fast-marquee";

//https://play.tailwindcss.com/VJvK9YXBoB?layout=horizontal
//https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind-css
const Skills = () => {
  return (
    <>
      {/* <div className="bg-background relative flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg py-20">
        <div className="flex  w-max animate-marquee items-stretch gap-[--gap] hover:[animation-play-state:paused]">
          {SKILLS.map((skill, index) => (
            <div key={index} className=" px-2">
              <SkillBox skill={skill.skill} />
            </div>
          ))}
        </div>
      </div> */}

      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {SKILLS.map(({ skill }, index) => (
          <div key={index} className="p-2 mb-10">
            <SkillBox skill={skill}></SkillBox>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default Skills;
