import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      {' '}
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim
        felis turpis. Maecenas eu consectetur libero. Morbi fringilla leo et
        tristique elementum. Donec facilisis viverra turpis, vel tempus leo
        sodales a. Ut nec vulputate enim. Sed tempor at arcu vel dapibus.
        Vivamus congue pulvinar tristique. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Fusce dignissim felis turpis. Maecenas eu
        consectetur libero. Morbi fringilla leo et tristique elementum. Donec
        facilisis viverra turpis, vel tempus leo sodales a. Ut nec vulputate
        enim. Sed tempor at arcu vel dapibus. Vivamus congue pulvinar tristique.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim
        felis turpis. Maecenas eu consectetur libero. Morbi fringilla leo et
        tristique elementum. Donec facilisis viverra turpis, vel tempus leo
        sodales a. Ut nec vulputate enim. Sed tempor at arcu vel dapibus.
        Vivamus congue pulvinar tristique. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Fusce dignissim felis turpis. Maecenas eu
        consectetur libero. Morbi fringilla leo et tristique elementum. Donec
        facilisis viverra turpis, vel tempus leo sodales a. Ut nec vulputate
        enim. Sed tempor at arcu vel dapibus. Vivamus congue pulvinar tristique.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim
        felis turpis. Maecenas eu consectetur libero. Morbi fringilla leo et
        tristique elementum. Donec facilisis viverra turpis, vel tempus leo
        sodales a. Ut nec vulputate enim. Sed tempor at arcu vel dapibus.
        Vivamus congue pulvinar tristique. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Fusce dignissim felis turpis. Maecenas eu
        consectetur libero. Morbi fringilla leo et tristique elementum. Donec
        facilisis viverra turpis, vel tempus leo sodales a. Ut nec vulputate
        enim. Sed tempor at arcu vel dapibus. Vivamus congue pulvinar tristique.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim
        felis turpis. Maecenas eu consectetur libero. Morbi fringilla leo et
        tristique elementum. Donec facilisis viverra turpis, vel tempus leo
        sodales a. Ut nec vulputate enim. Sed tempor at arcu vel dapibus.
        Vivamus congue pulvinar tristique. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Fusce dignissim felis turpis. Maecenas eu
        consectetur libero. Morbi fringilla leo et tristique elementum. Donec
        facilisis viverra turpis, vel tempus leo sodales a. Ut nec vulputate
        enim. Sed tempor at arcu vel dapibus. Vivamus congue pulvinar tristique.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim
        felis turpis. Maecenas eu consectetur libero. Morbi fringilla leo et
        tristique elementum. Donec facilisis viverra turpis, vel tempus leo
        sodales a. Ut nec vulputate enim. Sed tempor at arcu vel dapibus.
        Vivamus congue pulvinar tristique. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Fusce dignissim felis turpis. Maecenas eu
        consectetur libero. Morbi fringilla leo et tristique elementum. Donec
        facilisis viverra turpis, vel tempus leo sodales a. Ut nec vulputate
        enim. Sed tempor at arcu vel dapibus. Vivamus congue pulvinar tristique.
      </p>
    </div>
  );
}

export default ModalPage;
