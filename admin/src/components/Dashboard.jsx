import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Dashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/donate');
        setDonations(response.data);
      } catch (error) {
        console.error('Error fetching donation data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Donation List</h2>
      <ul>
        {donations.map(donation => (
          <li key={donation._id}>
            <div>
              <p>Contact Number: {donation.contactNumber}</p>
              <p>Food Description: {donation.foodDescription}</p>
              <p>Address: {donation.address}</p>
              <p>Date: {donation.date}</p>
              <p>Time: {donation.time}</p>
            </div>
            {/* Pass donation object to Completed Screen */}
            <Link to="/completed">
              <button>Complete</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
