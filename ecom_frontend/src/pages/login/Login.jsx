import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        toast.success("Login successfully")
        navigate('/');
      }
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Login</h3>
        {error && <p className="login-error">{error}</p>}
        <div className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="login-input"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <button
            type="submit"
            className="login-button"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
        <p className="signup-text">
          Don’t have an account?{' '}
          <span
            className="signup-link"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;