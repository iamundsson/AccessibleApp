import React from 'react';
import { Button, Typography } from '@mui/material/';

const Buttons: React.FunctionComponent = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <div>Godkänner du <strong>villkoren</strong>?</div>
      <Button
        variant="contained"
        color="error"
        style={{ padding: '15px', margin: '10px' }}
        tabIndex={9000}
      >
        {' '}
      </Button>
      <Button
        variant="contained"
        color="success"
        style={{ padding: '15px', margin: '10px' }}
        tabIndex={-1}
      >
        {' '}
      </Button>

      <Typography variant="h3" component="h5" tabIndex={0}>
        Villkor:
      </Typography>
      <Typography variant="body2" style={{ color: '#AAAAAA' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla at
        voluptates inventore reprehenderit accusamus magni corrupti! Ipsa
        sapiente reiciendis corporis temporibus consectetur dolorum quo culpa id
        laudantium inventore. Voluptates! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Recusandae odit cum quasi qui ipsa atque
        earum quam doloribus maxime quo in, repellendus laborum ipsum dolores
        distinctio. Earum eveniet fugit voluptatibus?
      </Typography>
    </div>
  );
};
export default Buttons;
