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

        // console.log(user.length);
        const usercount=user.length;
        const avgage=(
            user.reduce((accum,curEle)=>accum+curEle.age,0))/usercount;
    return(
        <div className="main-div">
            <h1>User List</h1>
            <h1>{usercount}</h1>
            <h1>{avgage}</h1>
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