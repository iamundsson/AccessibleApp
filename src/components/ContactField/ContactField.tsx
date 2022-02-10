import React from 'react';
import { Typography, TextField, Grid, Button } from '@mui/material/';
import './ContactField.css';

const ContactField: React.FunctionComponent = () => {
  return (
    <div>
      {' '}
      <Typography variant="h2" component="h1">
        Kontaktuppgifter:
      </Typography>
      <div className="container">
        <TextField placeholder="Förnamn"></TextField>
        <TextField placeholder="Efternamn"></TextField>
        <TextField placeholder="Mailadress"></TextField>
        <TextField placeholder="Mailadress"></TextField>
        <Button variant="outlined" tabIndex={-1}>
          Skicka in
        </Button>
        <Button tabIndex={2} variant="contained" color="error">
          Avbryt
        </Button>
      </div>
    </div>
  );
};
export default ContactField;
