import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { Link } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import coffeeLeafImage from '../images/coffeeleaf.png'; // Import the coffeeleaf.png image


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };

  const validateForm = () => {
    const newErrors = {};

    // Add email validation using regex
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password is too short.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('/api/login', formData);
        if (response.status === 200) {
          setSuccessMessage('Login successful.');
          setFormData({ email: '', password: '' }); // Reset the form fields
          setErrors({}); // Clear error messages
          // Redirect to the user's dashboard or desired page
        }
      } catch (error) {
        // Handle login errors from the server
        if (error.response) {
          setErrors({ server: error.response.data.message });
        } else {
          setErrors({ server: 'An error occurred while logging in.' });
        }
      }
    }
  };

  return (
    <div className='login_box'>
    {/* <img className='leaf' src={coffeeLeafImage} alt="Coffee Leaf" /> */}
    <div className="login-form">
      <h2>Login</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='log'
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
            name="password"
            value={formData.password}
            onChange={handleChange}
            className='log'
          />
          <p className="phs" onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </p>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <p className='acc'>
          Don't have an account? <Link to="/signup"><span className='sign'>Sign Up</span></Link>
        </p>
        <button type="submit">Login</button>
        {errors.server && <p className="error-message">{errors.server}</p>}
      </form>
    </div>
    </div>
  );
};

export default Login;
