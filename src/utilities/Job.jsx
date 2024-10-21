const Job = ({ jobExperience }) => {
  return (
    <>
      {jobExperience.map((job, index) => (
        <div key={index} className="flex w-full items-center">
          <div className="hidden lg:flex w-1/5 rounded-sm pr-5">
            <img
              srcSet={job.logo}
              className="flex items-center h-full w-full rounded-sm "
            />
          </div>
          <div className="text-c-white flex flex-col flex-1">
            <div className="flex justify-between">
              <h3 className="w-1/2 font-semibold">{job.title}</h3>
              <h4 className="text-xs">{job.duration} </h4>
            </div>
            <span className="text-xs text-[#AEAEAE]">
              {job.company}, {job.country}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Job;
