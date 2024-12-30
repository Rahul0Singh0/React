import './App.css';
import { memo, useCallback, useMemo, useState } from 'react';
import SlowComponent from './SlowComponent';
import Modal from './Modal';

// const MemoisedSlowComponent = memo(SlowComponent);
const MemoisedSlowComponent = memo(function ModifiedSlowComponent({ time, custom, x }){
  return (<SlowComponent time={time} custom={custom} x={x} />);
}); 

function App() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [x, setX] = useState(0);
  // const { isOpen, open, close } = useModalDialog();
  const someFunction = useCallback(() => {}, []);

  const timeArray = useMemo(() => {
    return [1000];
  }, []);

  return (
    // <>
    //   <RefactorComponent>
    //     <>
    //       {/* <button onClick={() => { setIsOpen(true) }}>Open Modal</button> */}
    //       <div>
    //         Something done here
    //       </div>
    //       {/* { isOpen && <Modal setIsOpen={setIsOpen} />} */}
    //       <ButtonWithModal />
    //       {/* <button onClick={open}>Open Modal</button> */}
    //       {/* {isOpen && <Modal close={close} />} */}
    //       <div>
    //         Something done here
    //       </div>
    //       <SlowComponent />
    //     </>
    //   </RefactorComponent>
    // </>
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <button onClick={() => setX(x+1)}>Increment</button>
      { isOpen && <Modal close={() => setIsOpen(false)} /> }
      <div>Something done here</div>
      <div>Something done here</div>
      <MemoisedSlowComponent time={timeArray} custom={someFunction} x={x} />
    </>
  );
}

export default App;