import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CompletedScreen = () => {
  const { donationId } = useParams();
  const [donation, setDonation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/donate/${donationId}`);

        setDonation(response.data);
      } catch (error) {
        console.error('Error fetching donation data:', error);
      }
    };

    fetchData();
  }, [donationId]);

  return (
    <div>
      <h2>Completed Donation</h2>
      {donation ? (
        <div>
          <p>Contact Number: {donation.contactNumber}</p>
          <p>Food Description: {donation.foodDescription}</p>
          <p>Address: {donation.address}</p>
          <p>Date: {donation.date}</p>
          <p>Time: {donation.time}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CompletedScreen;
