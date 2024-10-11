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
    <div className="my-16 sm:mt-32 bg-regal-blue mx-auto max-w-7xl text-white flex gap-48">
      <Link to="/" className="text-xs text-[#AEAEAE]">
        <div className="flex items-center justify-center">
          <ChevronLeft className="" strokeWidth="1" /> <span>Inicio</span>
        </div>
      </Link>

      <div>
        <div className="text-xs text-[#AEAEAE] pt-2">{post.date}</div>
        <h1 className="text-4xl font-bold py-6">{post.title}</h1>
        <div data-color-mode="dark">
          <MarkdownPreview source={post.content} />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
