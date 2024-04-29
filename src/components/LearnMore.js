import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Link,
} from '@mui/material';
import NavBar from './Navbar'; // Assuming you have a separate Navbar component

function LearnMore() {
  return (
    <div>
      <NavBar />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 4 }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Learn More About Stockstalk
            </Typography>
            <Typography variant="body1" component="p">
              Stockstalk is your one-stop companion for navigating the exciting world of the stock market. 
              This page provides a deeper look into the app's features and how they can benefit you.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 4 }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Benefits
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Stay Informed" secondary="Access the latest market trends and insights." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Make Intelligent Decisions" secondary="Utilize powerful tools and analytics for informed investing." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Simplified Learning" secondary="Get easy-to-understand guides and tutorials." />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 4 }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Key Features
            </Typography>
            <Typography variant="body1" component="p">
              Here's a glimpse into some of the functionalities offered by Stockstalk:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', padding:3 ,gap: 3 }}>
              {/* Add more features with descriptions here  */}
              <Typography variant="body2" component="p">
                * Real Time Stock Prices
              </Typography>
              <Typography variant="body2" component="p">
                * Advanced Trading Chart
              </Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Add more sections with additional content (FAQs, Tutorials etc.) */}
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item>
        <Link href="/Register" underline="none">
          <Button variant="contained" color="primary">
            Sign Up Now
          </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default LearnMore;
