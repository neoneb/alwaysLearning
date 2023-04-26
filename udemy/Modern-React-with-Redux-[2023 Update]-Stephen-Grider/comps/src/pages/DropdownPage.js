import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <div className='flex'>
      <Dropdown value={selection} onChange={handleSelect} options={options} />
    </div>
  );
}

export default DropdownPage;
