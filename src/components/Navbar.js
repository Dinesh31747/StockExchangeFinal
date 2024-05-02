import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  Box,
  Alert,
  Snackbar,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = React.useState(false); // State to control Snackbar visibility

  const handleExploreToolsClick = () => {
    setOpen(true); // Open the Snackbar on button click
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return; // Prevent Snackbar closure on click outside if desired
    }

    setOpen(false); // Close the Snackbar
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#007bff' }}>
      <Toolbar disableGutters>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={2} display="flex" alignItems="center">
            <IconButton size="large" color="inherit" aria-label="menu">
              <Typography variant="h6" component="div" sx={{ marginRight: 5, color: 'white' }}>
                Stockstalk
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="text" color="inherit" component={Link} to="/" sx={{ marginRight: 2, color: 'white' }}>
                  Home
                </Button>
                <Button variant="text" color="inherit" onClick={handleExploreToolsClick} sx={{ marginRight: 2, color: 'white' }}>
                  About
                </Button>
                <Button variant="text" color="inherit" onClick={handleExploreToolsClick} sx={{ color: 'white' }}>
                  Pricing
                </Button>
              </Box>
            </IconButton>
          </Grid>

          {/* Right side: Navigation links */}
          <Grid item xs={10} display="flex" justifyContent="flex-end">
            <Button variant="text" component={Link} to="/login" color="inherit" sx={{ marginLeft: 1, color: 'white' }}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Toolbar>

      {/* Snackbar component to display the alert message */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
          Please Login to View Tools
        </Alert>
      </Snackbar>
    </AppBar>
  );
}

export default Navbar;
