import { useState } from "react";

// const user=[
//     {name:"Alice",age:25},
//     {name:"Bob",age:17},
//     {name:"Charlie",age:36},
//     {name:"Angles",age:55},
// ];

export const DerivedState=()=>{
    const [user,setUser]=useState([
        {name:"Alice",age:25},
        {name:"Bob",age:17},
        {name:"Charlie",age:36},
        {name:"Angles",age:55},])
    return(
        <div className="main-div">
            <h1>User List</h1>
            <ul>
                {
                    user.map((curEle,index)=>{
                        return(
                            <>
                                <li key={index}>
                                    {curEle.name}-{curEle.age} year old

                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    );
};