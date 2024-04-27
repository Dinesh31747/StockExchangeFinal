import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  Link,
} from '@mui/material';
import NavAfter from './NavAfterLogin'; // Assuming you have a separate Navbar component
import Player from 'react-player';

function Homepage() {
  const videoUrl = 'https://youtu.be/kPmXyafzfaU'; // Replace with your video URL
  const quote = "The stock market is a device for transferring money from the impatient to the patient. - Warren Buffett";

  return (
    <div>
      <NavAfter />
      <Grid container spacing={4}>
        <Grid item xs={20}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <Card sx={{ maxWidth: 1000, minWidth: 650 }}>
              <CardMedia
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOBP2RJ71ZvvKt1AJDlXehGkufGIxtla_Cw&usqp=CAU"
                alt="Stock Market Bull"
                style={{ height: 150 }}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                  Stockstalk: Your Stock Market Companion
                </Typography>
                <Typography variant="body1" component="p">
                  {quote}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                  <Button variant="contained" sx={{ marginRight: 1 }}>
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={16} md={6}>
          <Paper sx={{ padding: 4 }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              Stay Informed
            </Typography>
            <Player url={videoUrl} width='100%' height='250px' controls />
            <Typography variant="body1" component="p">
              Keep up with the latest market trends and insights with our educational resources.
            </Typography>
            <Link href="/stocks" underline="none">
              <Button variant="text">Explore Resources</Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }} 
                style={{ height: 500 }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              Make Intelligent Decisions
            </Typography>
            <img
              style={{ width: '100%' }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuC5VI9zGNfaStGgzGvJHFnG-w-RzA3s7fIg&usqp=CAU"
              alt="Stock Charts"
              
            />
            <Typography variant="body1" component="p">
              Access powerful tools and analytics to help you make informed investment choices.
            </Typography>
            <Link href="/trade" underline="none">
              <Button variant="text">Explore Tools</Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;
