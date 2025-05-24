import { useState } from "react"
import {Count}  from "./MemoCount"; // Adjust the path if needed
export const ReactMemo=()=>{
    const[count,setCount]=useState(0);
    return(
        <>
            <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-center items-center">
            <h1>{count}</h1>
            <button className="btn bg-cyan-500 py-1 px-3" onClick={()=>{
                setCount((prev)=>prev+1)
            }}>Increment</button>

            </div>
            <Count/>
        </>
    )
}