import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter] = useState(15);
  //let Counter= 15;
  const addCounter = ()=>
  {
      Counter = Counter +1;
      if(Counter <= 20)
      {
        setCounter(Counter);
      }
      
  }

  const removeCounter =()=>
  {
    Counter = Counter -1;
      if(Counter >= 0)
      {
        setCounter(Counter);
      }
  }
  return (
    <>
      <h1>First React Project</h1>
      <h2>Counter Value: {Counter}</h2>
      <button onClick={addCounter}>Add Counter {Counter} </button>
      <br></br>
      <br></br>
      <button onClick={removeCounter}> Remover Counter {Counter} </button>
    </>
  )
}

export default App
