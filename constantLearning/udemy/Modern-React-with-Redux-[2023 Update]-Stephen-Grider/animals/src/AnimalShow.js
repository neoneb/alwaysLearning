import './AnimalShow.css';
import { useState } from 'react';
import bird from './imgs/bird.svg';
import cat from './imgs/cat.svg';
import cow from './imgs/cow.svg';
import dog from './imgs/dog.svg';
import gator from './imgs/gator.svg';
import horse from './imgs/horse.svg';
import heart from './imgs/heart.svg';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' alt='animal' src={svgMap[type]} />
      <img
        className='heart'
        alt='heart'
        src={heart}
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default AnimalShow;
