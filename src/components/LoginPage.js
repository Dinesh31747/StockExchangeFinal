import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Alert, Snackbar, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import config from "../config";


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar visibility
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // State for Snackbar severity

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${config.url}/login`, {

        email,
        password,
      });

      if (response.data === 'success') {
        // Successful login
        setOpenSnackbar(true);
        setSnackbarSeverity('success');
        navigate('/after', { state: { id: email } });
      } else if (response.data === 'userNotFound') {
        setOpenSnackbar(true);
        setSnackbarSeverity('error');
      } else if (response.data === 'incorrectPassword') {
        setOpenSnackbar(true);
        setSnackbarSeverity('error');
      } else {
        console.error('Unexpected response:', response.data);
        setOpenSnackbar(true);
        setSnackbarSeverity('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setOpenSnackbar(true);
      setSnackbarSeverity('error');
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Login
      </Typography>

      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        {/* Email Field */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          sx={{ '& .MuiInputLabel-root': { color: 'text.secondary' } }} // Customize label color
        />

        {/* Password Field */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          sx={{ '& .MuiInputLabel-root': { color: 'text.secondary' } }} // Customize label color
        />

        {/* Submit Button */}
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, bgcolor: 'primary.main' }}>
          Login
        </Button>
      </Box>

      {/* Signup Link */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          OR
        </Typography>
      </Box>
      <Link to="/register" sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
        <Typography variant="body2" color="text.primary">
          Signup Page
        </Typography>
      </Link>

      {/* Snackbar for Error or Success Messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Close automatically after 6 seconds
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={snackbarSeverity}>
          {snackbarSeverity === 'success' ? 'Login Successful!' : 'Invalid login details.'}
        </Alert>
      </Snackbar>
    </Container>

  );
};

export default LoginPage;
