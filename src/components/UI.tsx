import React from 'react';
import { Typography, TextField, Grid } from '@mui/material/';

import Buttons from './Buttons/Buttons';
import ContactField from './ContactField/ContactField';
import Comments from './Comments/Comment';
import Text from './Text/Text';

const UI: React.FunctionComponent = () => {
  return (
    <div>
      <Typography variant="h1">Isaks otrevliga hemsida</Typography>
      <ContactField />
      <Comments />
      <Text />
      <Buttons />
    </div>
  );
};

export default UI;
