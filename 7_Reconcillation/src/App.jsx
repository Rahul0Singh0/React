import { useState } from 'react'
import './App.css'

function Input({ type, placeholder }) {
  const [s, setS] = useState('');
  return <input type={type} placeholder={placeholder} value={s} onChange={(e) => setS(e.target.value)} />
}

function App() {

  const [isStudent, setIsStudent] = useState(false);
  const [count, setCount] = useState(0); // here state update - re-rendering

  function updateCount() { // count: 0 -> 1
    // setCount(count + 1); // setCount(0 + 1)
    // setCount(count + 1); // setCount(0 + 1)
    setCount((prevCount) => prevCount + 1); // setCount(0 + 1); // [cb]
    setCount((prevCount) => prevCount + 1); // setCount(1 + 1); // [cb]
    console.log(count); // current render
  }

  return (
    <>
      <form>
        <input type="text" placeholder='Enter your name' />
        <br/>
        <input type='checkbox' id='student' name='student' value={isStudent} onChange={()=>{
          setIsStudent(!isStudent)
        }} />
        <label htmlFor='student'>Are you a student?</label>
        <br/>
        {/* { isStudent ? <Input type={"text"} placeholder={"Enter your school name"} /> : null }
        { !isStudent ? <Input type={"text"} placeholder={"Enter you company name"} /> : null } */}
        {isStudent ? <Input type={"text"} placeholder={"Enter your school name"} key={"school"} /> 
        : <Input type={"text"} placeholder={"Enter you company name"} key={"company"} /> }
      </form>
      <div>
        Count Value: {count}
        <br/>
        <button onClick={updateCount}>Click</button>
      </div>
    </>
  )
}

export default App
