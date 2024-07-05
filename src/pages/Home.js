import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const data = [
  { name: 'Monday', bookings: 30 },
  { name: 'Tuesday', bookings: 45 },
  { name: 'Wednesday', bookings: 20 },
  { name: 'Thursday', bookings: 27 },
  { name: 'Friday', bookings: 50 },
  { name: 'Saturday', bookings: 40 },
  { name: 'Sunday', bookings: 35 },
];

const carData = [
  { name: 'Jan', cars: 10 },
  { name: 'Feb', cars: 15 },
  { name: 'Mar', cars: 12 },
  { name: 'Apr', cars: 18 },
  { name: 'May', cars: 20 },
  { name: 'Jun', cars: 25 },
  { name: 'Jul', cars: 22 },
  { name: 'Aug', cars: 30 },
  { name: 'Sep', cars: 28 },
  { name: 'Oct', cars: 35 },
  { name: 'Nov', cars: 32 },
  { name: 'Dec', cars: 40 },
];

const Home = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Bookings Per Week
          </Typography>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="bookings" fill="#8884d8" />
          </BarChart>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Number of Cars Per Month
          </Typography>
          <LineChart
            width={500}
            height={300}
            data={carData}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cars" stroke="#82ca9d" />
          </LineChart>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
