import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CarCard = ({ car }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={car.image}
        alt={car.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {car.description}
        </Typography>
      </CardContent>
      <Button size="small">Rent Now</Button>
    </Card>
  );
};

export default CarCard;
