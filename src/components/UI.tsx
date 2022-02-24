import React from 'react';
import { Typography } from '@mui/material/';

import Buttons from './Buttons/Buttons';
import ContactField from './ContactField/ContactField';
import Comments from './Comments/Comment';
import Text from './Text/Text';
import ImageBox from './imageBox/ImageBox';
import Footer from './footer/Footer';

const UI: React.FunctionComponent = () => {
  return (
    <div>
      <Typography variant="h1">Isaks otrevliga hemsida</Typography>
      <ContactField />
      <Text />
      <Comments />
      <Buttons />
      <ImageBox />
      <Footer />
    </div>
  );
};

export default UI;
