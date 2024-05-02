import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Import MUI components
import { Button, TextField, FormControlLabel, Checkbox, Grid, Typography, Box, Paper, Snackbar, Alert } from "@mui/material";
import config from "../config";
import Navbar from "./Navbar";

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for error handling
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar visibility

  const submit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post(`${config.url}/register`, {
        email,
        password,
      });

      if (response.data === "success") {
        // Successful registration
        setOpenSnackbar(true); // Open Snackbar for success message
        setTimeout(() => {
          navigate("/"); // Redirect to homepage after 2 seconds
        }, 2000);
      } else if (response.data === "exist") {
        setError("User already exists");
      } else {
        // Handle unexpected responses from the backend
        console.warn("Unexpected response from backend:", response.data);
        setError("An unexpected error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return; // Prevent Snackbar closure on clickaway if desired
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    // Close Snackbar if an error occurs
    if (error) {
      setOpenSnackbar(false);
    }
  }, [error]);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Navbar />
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 4, mt: 10 }}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" align="center">
              Registration
            </Typography>
            <form onSubmit={submit}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                error={!!error} // Display error if present
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
                error={!!error} // Display error if present
                helperText={error}
                fullWidth
                margin="normal"
              />
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Button variant="contained" type="submit" color="primary" fullWidth>
                Register
              </Button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </Box>
        </Paper>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Close automatically after 6 seconds
        onClose={handleSnackbarClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Registration Successful!
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default RegisterPage;
