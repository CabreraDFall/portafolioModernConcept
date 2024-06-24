const SkillBox = ({ skill }) => {
  return (
    <div className="h-20 flex items-center border px-20 c-box rounded">
      <span className="text-c-white text-3xl font-bold">{skill}</span>
    </div>
  );
};

export default SkillBox;
