import React from 'react';
import './Footer.css';

const Footer: React.FunctionComponent = () => {
  const handleClick = (buttonNumber: string) => {
    alert('Du klickade på: ' + buttonNumber);
  };

  const alternativeOne = 'Alternativ 1';
  const alternativeTwo = 'Alternativ 2';
  const alternativeThree = 'Alternativ 3';
  const alternativeFour = 'Alternativ 4';
  return (
    <div className="footer">
      <div
        className="button"
        onClick={(e) => handleClick(alternativeOne)}
        role={'img'}
        tabIndex={0}
      >
        {alternativeOne}
      </div>
      <div
        className="button"
        onClick={(e) => handleClick(alternativeTwo)}
        tabIndex={0}
      >
        {alternativeTwo}
      </div>
      <div
        className="button"
        onClick={(e) => handleClick(alternativeThree)}
        tabIndex={0}
      >
        {alternativeThree}
      </div>
      <div
        className="button"
        onClick={(e) => handleClick(alternativeFour)}
        tabIndex={0}
      >
        {alternativeFour}
      </div>
    </div>
  );
};

export default Footer;
