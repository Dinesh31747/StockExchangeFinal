import React, { useState } from 'react';
import {
  Button,
  TextField,
  Alert,
  Grid,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import Navbar from './Navbar'

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Simulate successful registration (no backend)
    setSuccess('Registration successful!');
  
    // Access username from state
    const registeredUsername = username;
  
    // Logic to use or display the username (optional)
    console.log('Registered username:', registeredUsername);
  
    navigate('/Registersuccess', { state: { username } }); // Pass username in state
  };

  return (
    <>
    <Navbar/>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <Paper elevation={3}sx={{ p: 4, mt: 10 }}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" align="center">
              Registration
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <Button variant="contained" type="submit" color="primary" fullWidth>
                Register
              </Button>
            </form>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        {success && <Alert severity="success">{success}</Alert>}
      </Grid>
    </Grid>
    </>
  );
}

export default RegistrationForm;
