import React, { useState } from 'react'
import './App.css'

function Input({ type, placeholder }) {
  return <input type={type} placeholder={placeholder} />
}

function App() {

  const [isStudent, setIsStudent] = useState(false);
  console.log(React.createElement(Input, null, 'Hello World'));

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
        { isStudent ? <Input type={"text"} placeholder={"Enter your school name"} />
          : <Input type={"text"} placeholder={"Enter you company name"} /> }
      </form>
    </>
  )
}

export default App
