import api from './api';

/**
 * Blog Service - Handles all blog-related API calls
 */

/**
 * Fetch all blogs
 * @returns {Promise} Array of blog objects
 */
export const fetchBlogs = async () => {
  try {
    // Adjust the endpoint based on your Rails API routes
    // Common patterns: /blogs, /api/blogs, /api/v1/blogs
    const response = await api.get('/blogs');
    return response.data;
  } catch (error) {
    // Enhanced error logging
    if (error.response) {
      // Server responded with error status
      console.error('Error fetching blogs - Server Error:', {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
        url: error.config?.url
      });
    } else if (error.request) {
      // Request was made but no response received
      console.error('Error fetching blogs - Network Error:', {
        message: error.message,
        url: error.config?.url,
        baseURL: error.config?.baseURL,
        hint: 'Check if backend server is running and CORS is configured'
      });
    } else {
      // Something else happened
      console.error('Error fetching blogs - Request Setup Error:', error.message);
    }
    throw error;
  }
};

/**
 * Fetch a single blog by ID
 * @param {number|string} id - Blog ID
 * @returns {Promise} Blog object
 */
export const fetchBlogById = async (id) => {
  try {
    // Adjust the endpoint based on your Rails API routes
    const response = await api.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog ${id}:`, error);
    throw error;
  }
};

/**
 * Create a new blog (if needed for admin)
 * @param {Object} blogData - Blog data object
 * @returns {Promise} Created blog object
 */
export const createBlog = async (blogData) => {
  try {
    const formData = new FormData();
    for (const key in blogData) {
      if (key === 'image' && blogData.image) {
        formData.append('image', blogData.image);
      } else if (blogData[key] !== undefined && blogData[key] !== null) {
        formData.append(key, blogData[key]);
      }
    }
    const response = await api.post('/blogs', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

/**
 * Update a blog (if needed for admin)
 * @param {number|string} id - Blog ID
 * @param {Object} blogData - Updated blog data
 * @returns {Promise} Updated blog object
 */
export const updateBlog = async (id, blogData) => {
  try {
    const formData = new FormData();
    for (const key in blogData) {
      if (key === 'image' && blogData.image) {
        formData.append('image', blogData.image);
      } else if (blogData[key] !== undefined && blogData[key] !== null) {
        formData.append(key, blogData[key]);
      }
    }
    const response = await api.put(`/blogs/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating blog ${id}:`, error);
    throw error;
  }
};

/**
 * Delete a blog (if needed for admin)
 * @param {number|string} id - Blog ID
 * @returns {Promise} Deletion response
 */
export const deleteBlog = async (id) => {
  try {
    const response = await api.delete(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting blog ${id}:`, error);
    throw error;
  }
};
