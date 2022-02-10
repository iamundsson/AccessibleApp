import React from 'react';
import { Typography } from '@mui/material/';

import Buttons from './buttons/Buttons';
import ContactField from './contactField/ContactField';
import Comments from './comments/Comment';
import Text from './text/Text';
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
