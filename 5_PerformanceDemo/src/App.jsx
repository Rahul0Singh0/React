// import { useState } from 'react';
import './App.css';
import SlowComponent from './SlowComponent';
import { ButtonWithModal } from './ButtonWithModal';
// import Modal from './Modal';

function App() {
  // const [ isOpen, setIsOpen ] = useState(false);
  return (
    <>
      {/* <button onClick={() => { setIsOpen(true) }}>Open Modal</button> */}
      <div>
        Something done here
      </div>
      {/* { isOpen && <Modal setIsOpen={setIsOpen} />} */}
      <ButtonWithModal />
      <div>
        Something done here
      </div>
      <SlowComponent />
    </>
  );
}

export default App;