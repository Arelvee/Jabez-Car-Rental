import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Grid from '@mui/material/Grid';

const Booking = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [option, setOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission logic here
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Option:', option);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Typography variant="h3" gutterBottom>
        Booking Page
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DatePicker
              label="Select Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12}>
            <TimePicker
              label="Select Time"
              value={time}
              onChange={(newValue) => setTime(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Pick Up or Delivery"
              value={option}
              onChange={(e) => setOption(e.target.value)}
              fullWidth
            >
              <MenuItem value="Pick Up">Pick Up</MenuItem>
              <MenuItem value="Delivery">Delivery</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit Booking
            </Button>
          </Grid>
        </Grid>
      </form>
    </LocalizationProvider>
  );
};

export default Booking;
