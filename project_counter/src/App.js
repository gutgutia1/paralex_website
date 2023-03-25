import { useState } from "react";
import "./App.css";

function App() {
  const[counter,setCounter]=useState(0)
  const[var1,setVar1]=useState("")
  function incrementHandler(){
    let counter_v=counter+1
    setCounter(counter_v)
    // console.log(counter)
    setVar1("")
  }
  function decrementHandler(){
    if (counter === 0){
      setCounter(0)
      setTimeout(()=>{
        setVar1("Counter cannot be negative")
      },1000)
      
    }
    else{
      let counter_v=counter-1
    setCounter(counter_v)
    }
    
  }
  return (
    <main className="flex justify-center gap-4 flex-col items-center min-h-screen bg-[#344151]">
      <h1 className="text-[#0398d4] font-medium text-[20px]">
        Increment And Decrement
      </h1>
      <h2 className="text-[#0398d4] font-medium text-[20px]">
        {var1}
      </h2>
      <div className="flex bg-white text-[25px] text-[#344151] rounded-sm gap-12 p-3 px-5">
        <button className="border-r-2 border-[#bfbfbf] pr-5 " onClick={incrementHandler}>
          +
        </button>
        <p>
          {counter}
        </p>
        <button className="border-l-2 border-[#bfbfbf] pl-5" onClick={decrementHandler}>
          -
        </button>
      </div>
      
    </main>
  );
}

export default App;
