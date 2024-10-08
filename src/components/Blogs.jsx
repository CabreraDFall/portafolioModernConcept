import Blog from "../utilities/Blog";
import Obras from "../utilities/Obras";
import SectionTitle from "../utilities/SectionTitle";

const Blogs = () => {
  return (
    <div className="flex flex-col md:flex-row rounded  h-[fit-content] gap-5  ">
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};

export default Blogs;
