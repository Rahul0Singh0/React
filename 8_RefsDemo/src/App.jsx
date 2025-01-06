import { forwardRef, useEffect, useRef, useState } from 'react'
import './App.css'

// function Input({ type, placeholder, inputRef }) {
//   return (
//     <input type={type} placeholder={placeholder} ref={inputRef} />
//   );
// }

const Input = forwardRef(function InputComponent({ type, placeholder }, ref) {
  return (
    <input 
      type={type}
      ref={ref}
      placeholder={placeholder}
    />
  );
})

function App() {
 
  // const [focus, setFocus] = useState(false);

  const [x, setX] = useState(0);
  
  const customRef = useRef(0);

  const inputRef = useRef(null);

  const customInputRef = useRef(null);

  let y = 0;
  
  function handleClick() {
    // setFocus(!focus);
    // document.getElementById('email').focus();
    // customRef.current = customRef.current + 1;
    // y += 1;
    // console.log(customRef);
    inputRef.current.focus();
  }

  useEffect(() => {
    console.log("useEffect", customRef, y);
    console.log(inputRef);
  }, [x]);

  function handleMoreClick() {
    customInputRef.current.focus();
  }

  return (
    <>
      <input 
        type='email'
        id='email'
        ref={inputRef}
      />
      <br />
      {/* <Input type={"text"} placeholder={"Write something"} inputRef={customInputRef} /> */}
      <Input type={"text"} placeholder={"Write something"} ref={customInputRef} />
      <br />
      <input 
        type='password'
      />
      <br />
      <button onClick={handleMoreClick}>Click custom component</button>
      <button onClick={handleClick}>click</button>
      <button onClick={() => setX(x+1)}>Submit</button> {x}
    </>
  )
}

export default App
