import { useEffect, useState } from "react";

export const ReactUseEffect=()=>{

    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log("counterr : ",count)
    },[count]);

    return(
        <>
            <div>
                <h1>UseEffectHook</h1>
                <p>count : {count}</p>
                <button onClick={()=>setCount(count+1)}>Increment</button>
            </div>
        </>
    );
};