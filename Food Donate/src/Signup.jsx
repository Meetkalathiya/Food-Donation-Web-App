import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'customer', // Assuming customer is the default user type
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData); // Update the URL
      console.log(response.data); // Log the response from the backend
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  

  return (
    <form className='registration-form' onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;