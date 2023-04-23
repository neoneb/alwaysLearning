import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div>
      <div>
        <Button className='mt-5' onClick={handleClick}>
          <GoBell />
          Click here!!
        </Button>
      </div>
      <div>
        <Button primary>
          <GoCloudDownload />
          Click here!!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Buy Now!
        </Button>
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

export default ButtonPage;
