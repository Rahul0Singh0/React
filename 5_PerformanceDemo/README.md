# Re-render
React automatically re-renders components whenever there is a change in their state or props and provides dynamic content in accordance with user interactions
![alt text](image1.png)

## Custom hook
``` JavaScript
import { useState } from "react";
// custom hook
export default function useModalDialog() {
    const [ isOpen, setIsOpen ] = useState(false);
    return {
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    };
}
```

## children props
* passing JSX as children is solution of re-rendering:
``` JavaScript
// App Component
function App() {
  return (
    <>
      <RefactorComponent>
        <>
          <div>
            Something done here
          </div>
          <ButtonWithModal />
          <div>
            Something done here
          </div>
          <SlowComponent />
        </>
      </RefactorComponent>
    </>
  );
}
```
``` JavaScript 
// RefactorComponent
export default function RefactorComponent({ children }) {
    const [ x, setX ] = useState(0);
    return (
        <>
            <button onClick={() => setX(x + 1)}>Increment X</button>
            {x}
            {children}
        </>
    );
}
```
This type of implementation, Whenever we click increment button , it will re-rendered only RefactorComponent and ButtonWithModal component - This way, we acheived another solution of re-rendering of whole App component whereas we don't need this.

#### But question is how is it done??
* Fibre Tree or Virtual DOM

## Virtual DOM / Fibre Tree
* Virtual DOM is a lightweight in-memory representation of the real DOM.
![alt text](image.png)


## Memoisation or Caching
``` JavaScript
import './App.css';
import { memo, useState } from 'react';
import SlowComponent from './SlowComponent';
import Modal from './Modal';

const MemoisedSlowComponent = memo(SlowComponent); 

function App() {
  const [ isOpen, setIsOpen ] = useState(false);
  return (
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      { isOpen && <Modal close={() => setIsOpen(false)} /> }
      <div>Something done here</div>
      <div>Something done here</div>
      <MemoisedSlowComponent />
    </>
  );
}

export default App;
```

In case of we are passing non primitive value and consuming it then it doesn't work.
Means it doesn't avoid re-rendering of component.
```JavaScript
const MemoisedSlowComponent = memo(function ModifiedSlowComponent({ time, custom }){
  return (<SlowComponent time={time} custom={custom} />);
}); 
function App() {
  return (
    <><MemoisedSlowComponent time={[1000]} custom={() => {}} /></>
  );
}
// Solution of this above problem is hooks
const MemoisedSlowComponent = memo(function ModifiedSlowComponent({ time, custom }){
  return (<SlowComponent time={time} custom={custom} />);
}); 
function App() {
  const someFunction = useCallback(() => {}, []);

  const timeArray = useMemo(() => {
    return [1000];
  }, []);
  return (
    <>
      <MemoisedSlowComponent time={timeArray} custom={someFunction} />
    </>
  );
}
```