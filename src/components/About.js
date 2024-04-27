import * as React from "react";
import "./About.css"
import { Grid, Typography, Card, CardHeader, Avatar, CardContent } from '@mui/material';
import NavAfter from "./NavAfterLogin";


function About() {
  return (
<>
<NavAfter/>
<div className="about-container">
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <div className="about-intro">
        <Typography variant="h1" component="h1" align="center">
          About StockStalk
        </Typography>
        <Typography variant="body1" align="center">
        StockStalk is dedicated to empowering investors of all levels with the tools and information they need to make informed investment decisions. 
        </Typography>
      </div>
    </Grid>
    <Grid item xs={12} md={6}>
      <div className="about-mission">
        <Typography variant="h2" component="h2" align="center">
          Our Mission
        </Typography>
        <Typography variant="body1">
          [Take a Risk for your future, It's definitely worth it. 
          "We strive to provide a user-friendly platform with accurate real-time data, in-depth analysis, and educational resources to help investors navigate the complexities of the stock market."]
        </Typography>
      </div>
    </Grid>
  </Grid>

  <div className="about-team">
    <Typography variant="h2" component="h2" align="center">
      Our Team
    </Typography>
    {/* <Grid container spacing={3}> */}
         <Card>
    <CardHeader
      avatar={<Avatar src="[Team member image URL]" />}
      title={<Typography variant="h6" component="h6">Jataprolu Dinesh</Typography>}
      subheader={<Typography variant="body2" component="p">Lead</Typography>}
    />
    <CardContent>
      <Typography variant="body1" component="p">Team Lead: Guides and motivates the team to deliver projects.</Typography>
    </CardContent>
  </Card>
{/* </Grid> */}

<Card>
    <CardHeader
      avatar={<Avatar src="[Team member image URL]" />}
      title={<Typography variant="h6" component="h6">Pardhu Madhu</Typography>}
      subheader={<Typography variant="body2" component="p">Logic and Middleware</Typography>}
    />
    <CardContent>
      <Typography variant="body1" component="p">Builds the core functionalities and connects applications to servers.</Typography>
    </CardContent>
  </Card>
<Card>
    <CardHeader
      avatar={<Avatar src="[Team member image URL]" />}
      title={<Typography variant="h6" component="h6">Appala Naidu</Typography>}
      subheader={<Typography variant="body2" component="p">Resource management</Typography>}
    />
    <CardContent>
      <Typography variant="body1" component="p">Optimizes team allocation and ensures project needs are met.</Typography>
    </CardContent>
  </Card>

      {/* Team member cards go here */}
      {/* <Grid item xs={12} sm={6} md={4}>
 
    </Grid> */}
  </div>
</div>

</>
  );
}
export default About