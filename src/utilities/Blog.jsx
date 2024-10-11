import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

const Blog = ({ bloginfo }) => {
  return (
    <>
      {bloginfo.map((info, index) => (
        <div key={index} className="flex flex-col c-box rounded gap-2">
          <div className="h-[185px] w-[365px]">
            <img
              srcSet={info.image}
              className="flex items-center h-full w-full "
            />
          </div>
          <div className="px-7 py-5">
            <SectionTitle title={"codewar"} />
            <div className="text-c-white flex flex-col p-3 mt-2 gap-3 ">
              <h2 className="text-c-white font-semibold ">{info.title}</h2>
              <p className="text-sm text-[#AEAEAE]">{info.excerpt}</p>
              <div className="flex justify-center pt-5">
                <Link
                  className="text-c-white text-xs rounded c-box px-4 py-1 w-[fit-content]"
                  to={`${info.slug}`}
                >
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
