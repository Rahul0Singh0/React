// import { useState } from 'react';
import './App.css';
import SlowComponent from './SlowComponent';
// import { ButtonWithModal } from './ButtonWithModal';
import useModalDialog from './hooks/useModalDialog';
import Modal from './Modal';
// import Modal from './Modal';

function App() {
  // const [ isOpen, setIsOpen ] = useState(false);
  const { isOpen, open, close } = useModalDialog();
  return (
    <>
      {/* <button onClick={() => { setIsOpen(true) }}>Open Modal</button> */}
      <div>
        Something done here
      </div>
      {/* { isOpen && <Modal setIsOpen={setIsOpen} />} */}
      {/* <ButtonWithModal /> */}
      <button onClick={open}>Open Modal</button>
      {isOpen && <Modal close={close} />}
      <div>
        Something done here
      </div>
      <SlowComponent />
    </>
  );
}

export default App;