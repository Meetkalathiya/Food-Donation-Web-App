
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './Donation.css';

function DonationScreen() {
  const [contactNumber, setContactNumber] = useState('');
  const [foodDescription, setFoodDescription] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const clearForm = () => {
    setContactNumber('');
    setFoodDescription('');
    setAddress('');
    setDate('');
    setTime('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/donate', {
        contactNumber,
        foodDescription,
        address,
        date,
        time
      });
      alert(response.data.message);
      clearForm();
    } catch (error) {
      console.error('Error submitting donation:', error);
      alert('Error submitting donation. Please try again.');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Donate Now</h2>
          <div className="Field">
            <label>Contact Number</label>
            <input
              value={contactNumber}
              onChange={(e) => {
                setContactNumber(e.target.value);
              }}
              placeholder="Contact Number"
            />
          </div>
          <div className="Field">
            <label>Description of Food</label>
            <input
              value={foodDescription}
              onChange={(e) => {
                setFoodDescription(e.target.value);
              }}
              placeholder="Description of Food"
            />
          </div>
          <div className="Field">
            <label>Address</label>
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Address"
            />
          </div>
          <div className="Field">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="Field">
            <label>Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
          </div>
          <button type="submit">Donate Now</button>
        </fieldset>
      </form>
    </div>
  );
}

export default DonationScreen;
