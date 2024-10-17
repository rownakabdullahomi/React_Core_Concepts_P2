import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleClick = () => {
    alert("Button Clicked");
  }
  function clickTwo() {
    alert("Click Btn 2");
  }

  const addToFive = (num) => { alert(num + 5) }

  return (
    <>
      <h3>React Core Concepts</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={clickTwo}>Click 2</button>
      <button onClick={() => { alert("Btn 3 Clicked") }}>Click 3</button>
      <button onClick={()=>addToFive(4)}>Four + Five</button>
    </>
  )
}

export default App
