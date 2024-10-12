import React from "react";
import { useParams } from "react-router-dom";
import POSTS from "../api/blogContent";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((post) => post.slug === slug);

  if (!post) {
    return <h2>Artículo no encontrado</h2>;
  }

  return (
    <div className="my-8 sm:my-16 bg-regal-blue mx-auto max-w-3xl sm:max-w-5xl lg:max-w-7xl px-4 sm:px-8 text-white">
      <Link to="/" className="text-xs text-[#AEAEAE]">
        <div className="flex items-center space-x-1">
          <ChevronLeft strokeWidth="1" />
          <span>Inicio</span>
        </div>
      </Link>

      <div className="mt-6 sm:mt-12">
        <div className="text-xs text-[#AEAEAE]">{post.date}</div>
        <h1 className="text-2xl sm:text-4xl font-bold py-4 sm:py-6">
          {post.title}
        </h1>
        <div data-color-mode="dark">
          <MarkdownPreview className="markdown-preview" source={post.content} />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
