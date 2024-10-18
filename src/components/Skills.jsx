import SkillBox from "../utilities/SkillBox";
import { SKILLS } from "../api/blogContent";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <>
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
