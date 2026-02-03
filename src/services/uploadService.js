import api from './api';

// Endpoint for image uploads – override with VITE_UPLOAD_ENDPOINT if your
// backend exposes a different path (e.g. /api/uploads, /api/v1/uploads, /cloudinary/upload)
const UPLOAD_ENDPOINT = import.meta.env.VITE_UPLOAD_ENDPOINT || '/api/uploads';

/**
 * Upload a single image file to the backend (which forwards to Cloudinary).
 * Accepts any file input; returns the resolved image URL from the backend response.
 *
 * @param {File} file - Image file selected by the user
 * @returns {Promise<{ url: string, data: any }>} - URL plus full response data
 */
export const uploadImage = async (file) => {
  if (!file) {
    throw new Error('No file provided');
  }

  const formData = new FormData();
  // Add common param names to maximize compatibility with Rails/Cloudinary setups
  formData.append('image', file);
  formData.append('file', file);

  console.log('Uploading image to:', `${api.defaults.baseURL}${UPLOAD_ENDPOINT}`);
  console.log('File details:', { name: file.name, size: file.size, type: file.type });

  const response = await api.post(UPLOAD_ENDPOINT, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  const data = response.data || {};
  const url =
    data.url ||
    data.secure_url ||
    data.image_url ||
    data.image ||
    data?.data?.url;

  if (!url) {
    throw new Error('Upload succeeded but no image URL was returned.');
  }

  return { url, data };
};

export default uploadImage;

