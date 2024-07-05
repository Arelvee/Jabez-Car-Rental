import React from 'react';
import Grid from '@mui/material/Grid';
import CarCard from '../components/CarCard';

const cars = [
  { name: 'Tesla Model 3', description: 'Electric Car', image: 'tesla.jpg' },
  { name: 'BMW X5', description: 'Luxury SUV', image: 'bmw.jpg' },
  // Add more cars as needed
];

const Cars = () => {
  return (
    <Grid container spacing={3}>
      {cars.map((car) => (
        <Grid item xs={12} sm={6} md={4} key={car.name}>
          <CarCard car={car} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cars;
