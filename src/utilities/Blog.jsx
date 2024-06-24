import SectionTitle from "./SectionTitle";

const Blog = () => {
  return (
    <div className="flex flex-col c-box rounded h-full gap-2">
      <div className="h-[185px]">
        <img
          srcSet="/public/images/project1.png"
          className="flex items-center h-full w-full "
        />
      </div>

      <div className="px-7 py-5">
        <SectionTitle title={"codewar"} />
        <div className="text-c-white flex flex-col p-3 mt-2 gap-3 ">
          <h2 className="text-c-white font-semibold ">
            LeedCode: Algoritmo basico
          </h2>
          <p className="text-sm text-[#AEAEAE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            tempus, velit quis elementum onsectetur adipiscing elit. Praesent
            tempus, velit quis elementum
          </p>
          <div className="flex justify-center pt-5">
            <SectionTitle title={"Ver solución"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
