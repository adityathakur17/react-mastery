import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(0)

  // let counter = 15;

  const addValue = () =>{
    if(counter<20){
      counter++;
      setCounter(counter)
    }                        
   
  }

  const decValue = () =>{
    if(counter>0){
      counter--;
      setCounter(counter)
    }
  
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={decValue}>Decrease Value{counter}</button>
    </>
  )
}

export default App
