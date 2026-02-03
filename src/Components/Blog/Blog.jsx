import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchBlogs } from '../../services/blogService';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backend = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const resolveImageUrl = (url) => {
    if (!url) return '';
    return url.startsWith('http') ? url : backend + url;
  };

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogs();
        
        // Handle different response formats
        // Rails typically returns: { blogs: [...] } or just [...]
        const blogsArray = Array.isArray(data) ? data : (data.blogs || []);
        setBlogs(blogsArray);
      } catch (err) {
        console.error('Error loading blogs:', err);
        
        // Provide more detailed error messages
        let errorMessage = 'Failed to load blogs. Please try again later.';
        
        if (err.response) {
          // Server responded with error status
          errorMessage = `Server error (${err.response.status}): ${err.response.statusText || 'Unable to fetch blogs'}`;
        } else if (err.request) {
          // Request was made but no response received
          errorMessage = 'Cannot connect to backend server. Please ensure the backend is running on http://localhost:3000';
        } else {
          errorMessage = `Error: ${err.message || 'Unknown error occurred'}`;
        }
        
        setError(errorMessage);
        // You can optionally fall back to static data here
        // import blogs from "../data/blogs";
        // setBlogs(blogs);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="blog-list">
        <div className='blog-banner'>
          <h2>Our Blogs</h2>
          <h4>Insights, Updates, and Inspiration from Our Green Journey</h4>
        </div>
        <div className="blog-cards">
          <p>Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-list">
        <div className='blog-banner'>
          <h2>Our Blogs</h2>
          <h4>Insights, Updates, and Inspiration from Our Green Journey</h4>
        </div>
        <div className="blog-cards">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!blogs || !Array.isArray(blogs) || blogs.length === 0) {
    return (
      <div className="blog-list">
        <div className='blog-banner'>
          <h2>Our Blogs</h2>
          <h4>Insights, Updates, and Inspiration from Our Green Journey</h4>
        </div>
        <div className="blog-cards">
          <p>No blogs available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-list">
        <div className='blog-banner'>
                  <h2>Our Blogs</h2>
                  <h4>Insights, Updates, and Inspiration from Our Green Journey</h4>
        </div>
      <div className="blog-cards">
        {blogs.map((blog) => {
          const imgUrl = resolveImageUrl(blog.image_url || blog.image);
          console.log('Blog image URL:', imgUrl, blog);
          return (
            <Link to={`/blogs/${blog.id}`} className="blog-card" key={blog.id}>
              <img src={imgUrl} alt={blog.title} className="blog-thumb" />
              <h3>{blog.title}</h3>
              <p>{blog.intro || blog.excerpt || blog.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;