const Job = () => {
  return (
    <div className="flex w-full items-center">
      <div className="w-1/5">
        <img
          srcSet="/public/images/jobs1.png"
          className="flex items-center h-full w-full pr-5"
        />
      </div>
      <div className="text-c-white flex flex-col flex-1">
        <div className="flex justify-between">
          <h3 className="w-1/2 font-semibold">
            {" "}
            Data Analyst & CRM Specialist
          </h3>
          <h4 className="text-sm">sept. 2023 - mar. 2024 </h4>
        </div>
        <span className="text-sm text-[#AEAEAE]">
          Ipanema Comunicación, España
        </span>
      </div>
    </div>
  );
};

export default Job;
