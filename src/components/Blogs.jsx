import Blog from "../utilities/Blog";
import POSTS from "../api/blogContent";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5  rounded h-[fit-content] pb-2 pl-2 w-full">
      <Blog bloginfo={POSTS} />
    </div>
  );
};

export default Blogs;
