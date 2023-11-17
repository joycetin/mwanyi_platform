// Import necessary libraries and components
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userTypes } from './constants'; // Assuming userTypes are imported from a file
import './signup.css';

// Signup component definition
const Signup = () => {
  // Array of districts for the dropdown menu
  const districts = [
    "Abim", "Adjumani", "Agago", "Alebtong", "Amolatar", "Amudat", "Amuria", "Amuru",
    "Apac", "Arua", "Budaka", "Bududa", "Bugiri", "Buhweju", "Buikwe", "Bulambuli", "Buliisa",
    "Bundibugyo", "Bunyangabu", "Bushenyi", "Busia", "Butaleja", "Butebo", "Buikwe", "Buyende",
    "Dokolo", "Gomba", "Gulu", "Hoima", "Ibanda", "Iganga", "Isingiro", "Jinja", "Kaabong",
    "Kabale", "Kabarole", "Kaberamaido", "Kalangala", "Kaliro", "Kalungu", "Kampala", "Kamuli",
    "Kamwenge", "Kanungu", "Kapchorwa", "Kasese", "Katakwi", "Kayunga", "Kibale", "Kiboga",
    "Kiruhura", "Kisoro", "Kitgum", "Koboko", "Kole", "Kotido", "Kumi", "Kyankwanzi", "Kyegegwa",
    "Kyenjojo", "Kyotera", "Lamwo", "Lira", "Luuka", "Luwero", "Lwengo", "Lyantonde", "Manafwa",
    "Maracha", "Masaka", "Masindi", "Mayuge", "Mbale", "Mbarara", "Mitooma", "Mityana", "Moroto",
    "Moyo", "Mpigi", "Mubende", "Mukono", "Nakapiripirit", "Nakaseke", "Nakasongola", "Namayingo",
    "Namisindwa", "Namutumba", "Napak", "Nebbi", "Ngora", "Ntoroko", "Ntungamo", "Nwoya", "Obongi",
    "Oyam", "Pader", "Pakwach", "Pallisa", "Pampala", "Rakai", "Rubanda", "Rubirizi", "Rukiga",
    "Rukungiri", "Rwampara", "Sembabule", "Serere", "Sheema", "Sironko", "Soroti", "Tororo", "Wakiso",
    "Yumbe", "Zombo"
  ];

  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nickName: '',
    businessName: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    userType: '',
    quantity: '',
    price: '',
    region: '',
    district: '',
  });

  // State to manage form validation errors
  const [errors, setErrors] = useState({});

  // State for success message display
  const [successMessage, setSuccessMessage] = useState('');

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State to toggle confirm password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    // Validation rules for each form field
    if (formData.firstName.length < 4 || formData.firstName.length > 24) {
      newErrors.firstName = 'First name must be between 4 and 24 characters.';
    }

    if (formData.lastName.length < 4 || formData.lastName.length > 24) {
      newErrors.lastName = 'Last name must be between 4 and 24 characters.';
    }

    if (formData.nickName.length < 4 || formData.nickName.length > 24) {
      newErrors.nickName = 'Nick name must be between 4 and 24 characters.';
    }

    if (formData.businessName.length < 4 || formData.businessName.length > 24) {
      newErrors.businessName = 'Business name must be between 4 and 24 characters.';
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (formData.password.length < 8 || formData.password.length > 24) {
      newErrors.password = 'Password must be between 8 and 24 characters.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (formData.userType === '') {
      newErrors.userType = 'Please select a user type.';
    }

    // Validate quantity for farmers
    if (formData.userType === 'farmer' && formData.quantity === '') {
      newErrors.quantity = 'Please enter the quantity.';
    }

    // Validate price for buyers
    if (formData.userType === 'buyer' && formData.price === '') {
      newErrors.price = 'Please enter the price.';
    }

    if (formData.region === '') {
      newErrors.region = 'Please select a region.';
    }

    if (formData.district === '') {
      newErrors.district = 'Please select a district.';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Send a POST request to the server with form data
        const response = await axios.post('/api/signup', formData);

        // Check if the account was created successfully
        if (response.status === 201) {
          setSuccessMessage('Account created successfully.');
        }
      } catch (error) {
        // Handle errors from the server response
        if (error.response) {
          setErrors({ ...errors, server: error.response.data.message });
        } else {
          setErrors({ ...errors, server: 'An error occurred while registering.' });
        }
      }
    }
  };

  // Render the Signup component
  return (
    <div className='login_box'>
      <div className="signup-form">
        <h2>Sign Up</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          {/* Input fields for user information */}
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input-field"
            />
            {errors.firstName && <p className="error-message">{errors.firstName}</p>}
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input-field"
            />
            {errors.lastName && <p className="error-message">{errors.lastName}</p>}
          </div>

          <div className="form-group">
            <label>Nick Name</label>
            <input
              type="text"
              name="nickName"
              value={formData.nickName}
              onChange={handleChange}
              className="input-field"
            />
            {errors.nickName && <p className="error-message">{errors.nickName}</p>}
          </div>

          <div className="form-group">
            <label>Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="input-field"
            />
            {errors.businessName && <p className="error-message">{errors.businessName}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="input-field"
            />
            {errors.contact && <p className="error-message">{errors.contact}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>

          {/* User type selection (Farmer or Buyer) */}
          <div className="form-group">
            <label>User type</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="farmer"
                  onChange={handleChange}
                  className='radio'
                />
                Farmer
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="buyer"
                  onChange={handleChange}
                  className='radio'
                />
                Buyer
              </label>
            </div>
            {errors.userType && <p className="error-message">{errors.userType}</p>}
          </div>

          {/* Quantity field for farmers */}
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="input-field"
            />
            {errors.quantity && <p className="error-message">{errors.quantity}</p>}
          </div>

          {/* Price field for buyers */}
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="input-field"
            />
            {errors.price && <p className="error-message">{errors.price}</p>}
          </div>

        {/* region field */}
          <div className="form-group">
            <label>Region</label>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Select Region</option>
              <option value="central">Central</option>
              <option value="eastern">Eastern</option>
              <option value="western">Western</option>
              <option value="northern">Northern</option>
            </select>
            {errors.region && <p className="error-message">{errors.region}</p>}
          </div>

          <div className="form-group">
            <label>District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Select District</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.district && <p className="error-message">{errors.district}</p>}
          </div>

          {/* Submit button */}
          <button className='sb' type="submit">Sign Up</button>

          {/* Display server error message, if any */}
          {errors.server && <p className="error-message">{errors.server}</p>}
          <p className='acc'>
          Already have an account? <Link to="/login"><span className='sign'>Login</span></Link>
        </p>
        </form>
      </div>
    </div>
  );
};

// Export the Signup component
export default Signup;
