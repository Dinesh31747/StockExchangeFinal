import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import { useParams, useLocation } from 'react-router-dom';

function Success(props) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/'); // Redirect to home page programmatically
  };
  const { username } = useParams(); // Access username from URL params (if using useParams)
  const location = useLocation();
  const registeredUsername = location.state?.username;

  return (
    <div>
      <h1>Registration Success</h1>
      <h2>Hello {username || registeredUsername}!</h2>
      <Button variant="contained" type="button" onClick={handleRedirect}>
        Go to Home
      </Button>
    </div>
  );
}

export default Success;
