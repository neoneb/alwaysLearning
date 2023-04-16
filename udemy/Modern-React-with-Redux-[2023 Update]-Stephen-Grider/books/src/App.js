import { useState } from 'react';
import BookCreate from './Components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log('Need to add book with:', title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
