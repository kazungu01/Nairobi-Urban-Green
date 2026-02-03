import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  fetchBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../../services/blogService';
import { clearAuthToken } from '../../services/authService';
import { uploadImage } from '../../services/uploadService';
import './AdminBlogs.css';

const initialForm = {
  title: '',
  intro: '',
  content: '',
  image_url: '',
  image: null,
};

const AdminBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  const token = useMemo(() => localStorage.getItem('authToken'), []);

  useEffect(() => {
    // Redirect to login if no token
    if (!token) {
      navigate('/admin/login');
      return;
    }
    loadBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchBlogs();
      const blogsArray = Array.isArray(data) ? data : data?.blogs || [];
      setBlogs(blogsArray);
    } catch (err) {
      console.error('Failed to load blogs:', err);
      setError('Failed to load blogs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setForm((prev) => ({ ...prev, image: file }));
  };

  const clearImage = () => {
    setForm((prev) => ({ ...prev, image_url: '', image: null }));
    setUploadError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      if (editingId) {
        await updateBlog(editingId, form);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Blog post updated successfully!',
          confirmButtonColor: '#28a745'
        });
      } else {
        await createBlog(form);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Blog post created successfully!',
          confirmButtonColor: '#28a745'
        });
      }
      resetForm();
      await loadBlogs();
    } catch (err) {
      console.error('Save failed:', err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Save failed. Please check the data and try again.',
        confirmButtonColor: '#dc3545'
      });
      setError('Save failed. Please check the data and try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog.id);
    setForm({
      title: blog.title || '',
      intro: blog.intro || blog.excerpt || '',
      content: blog.content || blog.body || blog.description || '',
      image_url: blog.image_url || blog.image || '',
      image: null,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteBlog(id);
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Blog post deleted successfully!',
            confirmButtonColor: '#28a745'
          });
          await loadBlogs();
        } catch (err) {
          console.error('Delete failed:', err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Delete failed. Please try again.',
            confirmButtonColor: '#dc3545'
          });
          setError('Delete failed. Please try again.');
        }
      }
    });
  };

  const handleLogout = () => {
    clearAuthToken();
    navigate('/admin/login');
  };

  // Helper to resolve image URLs
  const backend = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const resolveImageUrl = (url) => {
    if (!url) return '';
    return url.startsWith('http') ? url : backend + url;
  };

  if (loading) {
    return (
      <div className="admin-blogs">
        <h2>Admin Blogs</h2>
        <p>Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="admin-blogs">
      <div className="admin-blogs__header">
        <div>
          <h2>Admin Blogs</h2>
          <p>Manage blog posts (create, edit, delete).</p>
        </div>
        <button className="secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <form className="admin-blogs__form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Title
            <input
              type="text"
              value={form.title}
              onChange={onChange('title')}
              required
            />
          </label>
          <label>
            Intro / Excerpt
            <input
              type="text"
              value={form.intro}
              onChange={onChange('intro')}
            />
          </label>
        </div>

        <label>
          Content / Body
          <textarea
            rows={6}
            value={form.content}
            onChange={onChange('content')}
            required
          />
        </label>

        <label className="file-label">
          Upload Feature Image
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
          />
          <small className="hint">
            Upload will store the file via the backend.
          </small>
        </label>

        {(form.image_url || uploadError) && (
          <div className="upload-preview">
            {form.image_url && (
              <div className="preview-box">
                <img src={resolveImageUrl(form.image_url)} alt="Preview" />
                <div className="preview-actions">
                  <span className="muted">Image ready</span>
                  <button
                    type="button"
                    className="secondary"
                    onClick={clearImage}
                    disabled={saving || uploading}
                  >
                    Remove image
                  </button>
                </div>
              </div>
            )}
            {uploadError && (
              <div className="admin-blogs__error">{uploadError}</div>
            )}
          </div>
        )}

        {uploading && (
          <div className="upload-status">Uploading image to Cloudinary…</div>
        )}

        {error && <div className="admin-blogs__error">{error}</div>}

        <div className="actions">
          <button type="submit" disabled={saving}>
            {saving ? 'Saving…' : editingId ? 'Update Blog' : 'Create Blog'}
          </button>
          {editingId && (
            <button
              type="button"
              className="secondary"
              onClick={resetForm}
              disabled={saving}
            >
              Cancel edit
            </button>
          )}
        </div>
      </form>

      <div className="admin-blogs__list">
        {blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="admin-blogs__item">
              <div className="admin-blogs__item-meta">
                {/* Optionally show image here if needed */}
                <h4>{blog.title}</h4>
                <p className="muted">{blog.intro || blog.excerpt}</p>
              </div>
              <div className="admin-blogs__item-actions">
                <button onClick={() => handleEdit(blog)}>Edit</button>
                <button
                  className="danger"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminBlogs;

