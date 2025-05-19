import "./cleanup.css"
import { useEffect, useState } from "react"

export const Cleanup=()=>{
    const[count,setCount]=useState(0);

    useEffect(()=>{
        const timer=setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)

        return ()=> clearInterval(timer)
    })
    return(
        <>
            <div className="container">
                <div className="counter">
                    <p>My Subscribers On Youtube</p>
                    <div className="odometer" id="odometer">{count}</div>
                <h3 className="title">Subscribers <br /> Realtime Counter</h3>
                </div>
            </div>
        </>
    )
}