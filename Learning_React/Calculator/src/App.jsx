import React, { useState } from 'react'
// import './App.css'
import './tailwind.css'
import Textarea from './components/Textarea'
import Button from './components/Buttons'
function App() {
  let [calVal,setCalval]=useState("");
  const onButtonClick=(buttonText)=> {
    if (buttonText === 'C') {
      setCalval("");
    } else if (buttonText === '=') {
    const result=eval(calVal);
    setCalval(result.toString());
    } else {
      setCalval(calVal + buttonText);
    }
  }
  return (
 <div className='flex justify-center items-center h-screen'>
<div className="mt-3 w-72 border border-gray-300 h-auto rounded-xl">
<Textarea displayValue={calVal}> </Textarea>
<Button onButtonClick={onButtonClick}></Button>
</div>
</div>
  )
  
}

export default App
