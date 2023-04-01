import React from 'react';

const Rank = ({ name, entries }) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div>
      <div className='white f3'>{`${formattedName}, you've made....`}</div>
      <div className='white f1'>{entries}</div>
      <div className='white f3'>Detections!</div>
    </div>
  );
};

export default Rank;
