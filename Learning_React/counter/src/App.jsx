import {useState} from 'react'
import './App.css'

function App() {
let [counter,setCounter]=useState(0);
const Increment=()=>{
  if(counter>19){
    setCounter(20)
  }else{
  setCounter(counter+1);
}}
  return (
    <>
      <h1>Counter : {counter} </h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={()=>{setCounter(counter-1) 
       if(counter<1){
    setCounter(0)
  }else{
  setCounter(counter-1);
}
    }}>Decrement</button>
    <button onClick={()=>{setCounter(counter=0)}}>Reset</button>
    </>
  )
}

export default App
