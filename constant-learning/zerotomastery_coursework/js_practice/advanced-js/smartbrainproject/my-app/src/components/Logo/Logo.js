import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br2 shadow-2'>
        <div className='Tilt-inner pa3 '>
          <img style={{ paddingTop: '5px' }} src={brain} alt='Brain Logo' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
