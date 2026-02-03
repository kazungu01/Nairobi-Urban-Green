import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, setAuthToken, clearAuthToken } from '../../services/authService';
import './AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await login({ email, password });
      const token = data?.token || data?.jwt || data?.access_token;
      if (!token) {
        throw new Error('Token missing from response');
      }

      setAuthToken(token);
      navigate('/admin/blogs');
    } catch (err) {
      console.error('Admin login failed:', err);
      setError('Login failed. Please check your credentials.');
      clearAuthToken();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__card">
        <h2>Admin Login</h2>
        <p className="admin-login__hint">
          Enter your admin credentials to manage blogs.
        </p>
        <form onSubmit={handleSubmit} className="admin-login__form">
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <div className="admin-login__error">{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

