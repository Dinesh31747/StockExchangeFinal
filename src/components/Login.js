import React, { useState } from 'react';
import {
  Button,
  TextField,
  Alert,
  Grid,
  Typography,
  Box,
  Container,
  Paper
} from '@mui/material';
import { Link,useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import NavBar from './Navbar';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simulate successful registration (no backend)
    navigate('/after'); // Redirect to home page programmatically
    setError(null);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const result = await response.json();

      if (result.status === 'ok') {
        console.log('Got the token:', result.data);
        localStorage.setItem('token', result.data);
        // Handle successful login (e.g., redirect to another page)
      } else {
        setError(result.error);
      }
    } catch (error) {
      // console.error('Error:', error);
      // setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <>
    <NavBar/>
    <Container maxWidth="sm">
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{mt:6}}>
        <Typography variant="h4" component="h1" align="center">
          Login
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              error={!!error}
              helperText={error}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              error={!!error}
              helperText={error}
              fullWidth
              margin="normal"
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2}}>
              <Button variant="contained" type="submit" color="primary">
                Login
              </Button>
            </Box>
            {error && <Alert severity="error">{error}</Alert>}
          </form>
        </Paper>
      </Grid>
    </Grid>
    <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Typography variant="body2" component="p">
              Don't have an account?
            </Typography>
            <Link to="/register" underline="none" sx={{ ml: 1 }}>
              Register here
            </Link>
          </Box>
        </Grid>
  </Container>
  </>
);
}

export default LoginForm;
