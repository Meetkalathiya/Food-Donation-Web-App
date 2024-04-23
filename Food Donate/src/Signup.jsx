// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// function Signup() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [userType, setUserType] = useState("Donater"); // default user type is Donater
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault(); 
//         // Check if password and confirm password match
//         if (password !== confirmPassword) {
//             console.log("Passwords do not match");
//             return;
//         }

//         axios.post('http://localhost:3001/register', { name, email, password, confirmPassword, userType })
//         .then(result => {
//             console.log(result);
//             navigate('/login');
//         })
//         .catch(err => console.log(err));
//     }

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2>Register</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="name">
//                             <strong>Name</strong>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter Name"
//                             autoComplete="off"
//                             name="name"
//                             className="form-control rounded-0"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="email">
//                             <strong>Email</strong>
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="Enter Email"
//                             autoComplete="off"
//                             name="email"
//                             className="form-control rounded-0"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)} 
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password">
//                             <strong>Password</strong>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Enter Password"
//                             name="password"
//                             className="form-control rounded-0" 
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="confirmPassword">
//                             <strong>Confirm Password</strong>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Confirm Password"
//                             name="confirmPassword"
//                             className="form-control rounded-0" 
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="userType">
//                             <strong>User Type</strong>
//                         </label>
//                         <select
//                             className="form-select rounded-0"
//                             value={userType}
//                             onChange={(e) => setUserType(e.target.value)}
//                         >
//                             <option value="Donater">Donater</option>
//                             <option value="Servicer">Servicer</option>
//                         </select>
//                     </div>
//                     <button type="submit" className="btn btn-success w-100 rounded-0">
//                         Register
//                     </button>
//                 </form>
//                 <p>Already Have an Account</p>
//                 <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//                     Login
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default Signup;


// eslint-disable-next-line no-unused-vars
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
