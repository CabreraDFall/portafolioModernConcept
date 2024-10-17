import Blog from "../utilities/Blog";
import POSTS from "../api/blogContent";

const Blogs = () => {
  return (
    <div className="flex md:flex-row rounded h-[fit-content] gap-10 pb-2 pl-2 w-full overflow-hidden overflow-x-auto justify-between">
      <Blog bloginfo={POSTS} />
    </div>
  );
};

export default Blogs;
