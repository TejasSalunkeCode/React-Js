import { useEffect, useState } from "react";

export const ReactUseEffect=()=>{

    // const[count,setCount]=useState(0);

    // useEffect(()=>{
    //     console.log("counterr : ",count)
    // },[count]);

    // return(
    //     <>
    //         <div>
    //             <h1>UseEffectHook</h1>
    //             <p>count : {count}</p>
    //             <button onClick={()=>setCount(count+1)}>Increment</button>
    //         </div>
    //     </>
    // );


    const[date,setDate]=useState(0);

    useEffect(()=>{
        const updatedate=new Date();
        setInterval(()=>{
            setDate(updatedate.toLocaleTimeString());
            
        },1000)
        console.log(updatedate);
    },[date])

    return(
        <>
            <h1>Date : {date}</h1>
        </>
    )
};