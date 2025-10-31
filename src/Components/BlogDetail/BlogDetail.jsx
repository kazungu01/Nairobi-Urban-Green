import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="blog-detail">
      <img src={blog.image} alt={blog.title} className="blog-detail-img" />
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <Link to="/blog" className="back-link">← Back to Blogs</Link>
    </div>
  );
};

export default BlogDetail;