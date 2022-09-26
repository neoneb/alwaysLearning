import React from 'react';

const SearchBox = ({ seachfield, searchChange }) => {
   return (
      <div className='pa2'>
         <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Search Robots' 
            onChange={searchChange}
         />
      </div>
   );
}

export default SearchBox;