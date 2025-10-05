import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(10)


  /*const addValue = ()=>{
    if(counter<20){
    setCounter(counter+1)
  
    } 
  } */

   // ek sath 4 update

    const addValue = ()=>{
    
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter( prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    
  } 

   const removeValue = ()=>{
    if(counter>0){
    setCounter(counter-1)
    }
   }
  return (
    <>
     <h1>Hii Sunny</h1>
     <h2>counter ka value:{counter}</h2>

     <button onClick={addValue}>value ko jodo : {counter}</button>
     <br />
     <button onClick={removeValue}>value ko ghatao : {counter}</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App
