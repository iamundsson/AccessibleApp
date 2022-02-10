import React from 'react';
import './ImageBox.css';

const ImageBox: React.FunctionComponent = () => {
  return (
    <div className="container">
      <img
        src="https://www.google.se/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
        alt="Gå vidare till Ringvägen, om du passerar gå: inkassera 500 riksdaler"
        tabIndex={0}
      />
      <img
        src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/77/93/9b.jpg"
        alt="Hund som simmar i vatten"
      />
      <img
        src="https://www.google.se/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
        alt="Gå vidare till Ringvägen, om du passerar gå: inkassera 500 riksdaler"
      />
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQELcygtxm0fPA/company-logo_200_200/0/1564988490520?e=2159024400&v=beta&t=Wdh4vePqE8yk_Aww8DIMviQPEHGUA7y3Tx-c-1PkvkI"
        alt=""
        style={{ visibility: 'hidden' }}
      />
    </div>
  );
};

export default ImageBox;
