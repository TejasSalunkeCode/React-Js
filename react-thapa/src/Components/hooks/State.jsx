import { useState } from "react";

export const State=()=>{
    // let value=0;
    // const handleButtonClick=()=>{
    //     value++;
    //     co   nsole.log(value)
    // };
    // let array=useState();
    // console.log(array);
    const [count,setCount]=useState(0);
   const handleButtonClick=()=>{

    
    setCount(()=>count+1)
   }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
        </>
    );
};