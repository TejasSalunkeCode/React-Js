import { useEffect, useState } from "react";
import "./EffectChallange.css"
export const Challange=()=>{
    const[count,setCount]=useState(0);
    const[text,setText]=useState("");

    useEffect(()=>{
        console.log(text);
        // document.title=`count :${count}`
    },[text])
    
    useEffect(()=>{
        // console.log(text);
        document.title=`count :${count}`
    },[count])
    return(
        <>
            <div className="conatiner-effect">
                <h1>useEffect Challange</h1>
                <p>
                    Count : <span>{count}</span>
                </p>
                <button onClick={()=>setCount(count+1)}>Increment</button>
                <p>
                    Name: <span>{text}</span>
                </p>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
        </>
    );
};