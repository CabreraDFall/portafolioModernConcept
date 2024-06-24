import SkillBox from "../utilities/SkillBox";

const Skills = () => {
  return (
    <div className="bg-background relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg py-20">
      <div className="flex w-max animate-marquee items-stretch gap-[--gap] hover:[animation-play-state:paused]">
        <SkillBox skill={"React"} />
        <SkillBox skill={"Javascript"} />
        <SkillBox skill={"WordPress"} />
        <SkillBox skill={"React"} />
        <SkillBox skill={"React"} />
        <SkillBox skill={"React1"} />
      </div>
    </div>
  );
};

export default Skills;
