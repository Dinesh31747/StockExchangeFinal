import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NavAfter from './NavAfterLogin';


const Price = () => {
  const cardStyles = () => ({
    backgroundColor: 'background.paper',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 3,
    borderRadius: 2,
    boxShadow: 2,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  });
  
  return (<>
  <NavAfter/>
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 3,
            borderRadius: 2, // Use MUI's theme for consistent styling
            boxShadow: 2,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
          }}>
            <CardMedia
              component="img"
              image="https://tse2.mm.bing.net/th?id=OIP.S6eOJIjOVmE1sR4gQx66zAHaEI&pid=Api&P=0&h=180" // Replace with your image
              alt="Basic Membership"
              sx={{ width: 250, height: 150 }} // Inline styling for CardMedia
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', marginBottom: 2 }}>
                Basic
              </Typography>
              <Typography variant="body1">Free</Typography>
              <ul>
                <li>
                  <LocalOfferIcon fontSize="small" color="primary" />
                  Limited Data & Analysis
                </li>
                <li>
                  <LocalOfferIcon fontSize="small" color="primary" />
                  Basic News Updates
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyles()}>
            <CardMedia
              component="img"
              image="https://cdn5.vectorstock.com/i/1000x1000/92/69/premium-offers-icon-vector-16119269.jpg" // Replace with your image
              alt="Premium Membership"
              sx={{ width: 150, height: 150 }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', marginBottom: 2 }}>
                Premium
              </Typography>
              <Typography variant="body1">₹499/Month</Typography>
              <ul>
                <li>
                  <LocalOfferIcon fontSize="small" color="primary" />
                  Real-Time Data & Indian Focus Analysis
                </li>
                <li>
                  <LocalOfferIcon fontSize="small" color="primary" />
                  Curated News & Market Alerts
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={cardStyles()}>
            <CardMedia
              component="img"
              image="https://tse4.mm.bing.net/th?id=OIP.82Hih4UnPRW7iBiK7gHk6AHaEh&pid=Api&P=0&h=180" // Replace with your image
              alt="Luxury Membership"
              sx={{ width: 250, height: 150 }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', marginBottom: 2 }}>
                Luxury
              </Typography>
              <Typography variant="body1">₹999/Month</Typography>
              <ul>
                <li>
                  <LocalOfferIcon fontSize="small" color="primary" />
                  All Premium Features
                </li>
                <li>
                  <LocalOfferIcon fontSize="small" color="primary" />
                  Personalized Investment Recommendations
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Price;
