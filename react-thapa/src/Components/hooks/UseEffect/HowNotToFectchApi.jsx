import { useState } from "react";

export const HowNotToFetchApli =()=>{
    const[api,setApi]=useState([]);
    fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json())
    .then((data)=>setApi(data))
    .catch((error)=>console.log(error));

    return(
        <>
            <div className="container-effect">
                <ul>data:
                {
                    api.map((curdata)=>{
                        return <li key={curdata.id}> {curdata.post}</li>
                    })
                }
                </ul>
            </div>
        </>
    )
}