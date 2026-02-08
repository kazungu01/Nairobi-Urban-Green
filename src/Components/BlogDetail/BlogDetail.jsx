// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { fetchBlogById } from "../../services/blogService";
// import "./BlogDetail.css";

// const backend = import.meta.env.VITE_API_URL || 'http://localhost:3000';
// const resolveImageUrl = (url) => {
//   if (!url) return '';
//   return url.startsWith('http') ? url : backend + url;
// };

// const BlogDetail = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadBlog = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const data = await fetchBlogById(id);
        
//         // Handle different response formats
//         // Rails typically returns: { blog: {...} } or just {...}
//         const blogData = data.blog || data;
//         setBlog(blogData);
//       } catch (err) {
//         console.error('Error loading blog:', err);
//         setError('Failed to load blog. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       loadBlog();
//     }
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="blog-detail">
//         <p>Loading blog...</p>
//       </div>
//     );
//   }

//   if (error || !blog) {
//     return (
//       <div className="blog-detail">
//         <h2>{error || 'Blog not found'}</h2>
//         <Link to="/blogs" className="back-link">← Back to Blogs</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="blog-detail-container">
//       <div className="blog-detail-header">
//         <img 
//           src={resolveImageUrl(blog.image_url || blog.image)} 
//           alt={blog.title} 
//           className="blog-detail-header-img" 
//         />
//         <div className="blog-detail-header-overlay">
//           <h1>{blog.title}</h1>
//         </div>
//       </div>
//       <div className="blog-detail">
//         <p>{blog.content || blog.body || blog.description}</p>
//         <Link to="/blogs" className="back-link">← Back to Blogs</Link>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;

import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchBlogById } from "../../services/blogService"
import "./BlogDetail.css"

const BlogDetail = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadBlog = async () => {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchBlogById(id)
        setBlog(data)
      } catch (err) {
        console.error("Error loading blog:", err)
        setError(err.message || "Failed to load blog. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    if (id) loadBlog()
  }, [id])

  if (loading) {
    return (
      <div className="blog-detail">
        <p>Loading blog...</p>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="blog-detail">
        <h2>{error || "Blog not found"}</h2>
        <Link to="/blogs" className="back-link">← Back to Blogs</Link>
      </div>
    )
  }

  const base = import.meta.env.BASE_URL

  const headerImgUrl = blog.image ? `${base}${blog.image}` : ""
  const htmlContent = (blog.content || blog.body || blog.description || "").replace(/\n/g, "<br/>")

  const images = Array.isArray(blog.images) ? blog.images : []

  return (
    <div className="blog-detail-container">
      <div className="blog-detail-header">
        {headerImgUrl && (
          <img
            src={headerImgUrl}
            alt={blog.title}
            className="blog-detail-header-img"
          />
        )}
        <div className="blog-detail-header-overlay">
          <h1>{blog.title}</h1>
          {blog.date && <p className="blog-detail-date">{blog.date}</p>}
        </div>
      </div>

      <div className="blog-detail">
        <div
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {images.length > 0 && (
          <div className="blog-detail-images">
            {images.map((img, index) => (
              <img
                key={`blog-${blog.id}-image-${index}`}
                src={`${base}${img}`}
                alt={`${blog.title} image ${index + 1}`}
              />
            ))}
          </div>
        )}

        <Link to="/blogs" className="back-link">← Back to Blogs</Link>
      </div>
    </div>
  )
}

export default BlogDetail

