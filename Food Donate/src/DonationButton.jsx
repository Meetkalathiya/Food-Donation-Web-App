// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './DonationButton.css';

function DonationButton() {
  return (
    <div className="button-container">
      <Link to="/donation">
        <Button variant="outline-success">Donate Now (દાન કરવા માટે)</Button>
      </Link>
    </div>
  );
}

export default DonationButton;
