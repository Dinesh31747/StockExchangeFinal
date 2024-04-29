import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  Tooltip,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NavAfter from './NavAfterLogin';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Adjust primary color as needed
    },
  },
});

const Price = () => {
  const [isHovered, setIsHovered] = useState({ Premium: false, Luxury: false });

  const cardStyles = () => ({
    backgroundColor: 'background.paper',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 3,
    borderRadius: 2,
    boxShadow: 2,
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer', // Set cursor to pointer for hover effect
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  });

  const handleCardHover = (plan) => {
    setIsHovered((prevState) => ({ ...prevState, [plan]: true }));
  };

  const handleCardLeave = (plan) => {
    setIsHovered((prevState) => ({ ...prevState, [plan]: false }));
  };

  const pricingPlans = [
    {
      title: 'Basic',
      price: 'Free',
      features: [
        'Limited Data & Analysis',
        'Basic News Updates',
      ],
      image: 'https://tse2.mm.bing.net/th?id=OIP.S6eOJIjOVmE1sR4gQx66zAHaEI&pid=Api&P=0&h=180',
      alt: 'Basic Membership',
    },
    {
      title: 'Premium',
      price: 'Unavailable', // Indicate unavailability
      features: [
        'Real-Time Data & Indian Focus Analysis',
        'Curated News & Market Alerts',
      ],
      image: 'https://cdn5.vectorstock.com/i/1000x1000/92/69/premium-offers-icon-vector-16119269.jpg',
      alt: 'Premium Membership',
    },
    {
      title: 'Luxury',
      price: 'Unavailable', // Indicate unavailability
      features: [
        'All Premium Features',
        'Personalized Investment Recommendations',
      ],
      image: 'https://tse4.mm.bing.net/th?id=OIP.82Hih4UnPRW7iBiK7gHk6AHaEh&pid=Api&P=0&h=180',
      alt: 'Luxury Membership',
    },
  ];

  const getTooltipMessage = (plan) => {
    if (plan.title === 'Premium' || plan.title === 'Luxury') {
      return 'Our Premium and Luxury plans are currently unavailable. We apologize for any inconvenience. In the meantime, you can explore the features of our Basic plan.';
    }
    return 'You are already using the Basic plan';
  };

  return (
    <ThemeProvider theme={theme}>
      <NavAfter />
      <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Grid container spacing={3}>
          {pricingPlans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.title}>
              <Tooltip
                open={isHovered[plan.title]}
                title={getTooltipMessage(plan)}
              >
                <Card
                  sx={cardStyles()}
                  onMouseEnter={() => handleCardHover(plan.title)}
                  onMouseLeave={() => handleCardLeave(plan.title)}
                >
                  <CardMedia
                    component="img"
                    image={plan.image}
                    alt={plan.alt}
                    sx={{ width: '250px', height: '150px' }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', marginBottom: 2 }}>
                      {plan.title}
                    </Typography>
                    <Typography variant="body1">
                      {plan.price === 'Unavailable' ? plan.price : `₹${plan.price}`} {/* Display price conditionally */}
                    </Typography>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <LocalOfferIcon fontSize="small" color="primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {plan.title === 'Basic' && (
                      <Button variant="contained" disabled sx={{ mt: 'auto' }}>
                        Continue with Basic
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Price;
