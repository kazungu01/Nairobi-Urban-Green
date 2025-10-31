import React from 'react'
import { Link } from 'react-router-dom'
import blogs from "../data/blogs";
import './Blog.css';
import summer_field from '../../assets/summer-field.jpg';


const Blog = () => {
  return (
    <div className="blog-list">
        <div className='blog-banner'>
                  <h2>Our Blogs</h2>
                  <h4>Insights, Updates, and Inspiration from Our Green Journey</h4>
        </div>
      <div className="blog-cards">
        {blogs.map((blog) => (
         <Link to={`/blog/${blog.id}`} className="blog-card" key={blog.id}>
  <img src={blog.image} alt={blog.title} className="blog-thumb" />
  <h3>{blog.title}</h3>
  <p>{blog.intro}</p>
</Link>

        ))}
      </div>
    </div>
  );
};

export default Blog;