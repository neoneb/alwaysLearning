import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button>Click here!!</Button>
      </div>
      <div>
        <Button primary>Click here!!</Button>
      </div>
      <div>
        <Button secondary>Buy Now!</Button>
      </div>
      <div>
        <Button success>See Deal!</Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger>Something!</Button>
      </div>
    </div>
  );
}

export default App;
