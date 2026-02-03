import api from './api';

/**
 * Authenticate admin and return JWT token.
 * Adjust endpoint/payload fields to match your Rails auth.
 * Default: POST /login with { email, password }.
 */
export const login = async ({ email, password }) => {
  const response = await api.post('/login', { email, password });
  return response.data; // expected to include token or { token: '...' }
};

/**
 * Store/remove token helpers.
 */
export const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

export const clearAuthToken = () => {
  localStorage.removeItem('authToken');
};

