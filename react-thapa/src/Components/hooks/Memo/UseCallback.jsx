// import { Children, useState } from "react";

// const Button=({onClick,Children})=>{
//     console.log(`Rendering button : ${Children}`);

//     return(
//         <button
//         className={`text-black mb-4 py-2 px-5 ${Children==="increment" ? "bg-green-400" : "bg-red-400"}`}
//         onClick={onClick}
//         >
//         {Children}
//         </button>
//     );
// };

// export default function useCallback(){
//     const[count,setCount]=useState(0);

//     const increment=useCallback(()=>{
//         console.log("Increment Inside");
//         setCount((prevCount)=>prevCount-1);
//     },[])
//     // const increment=()=>{
//     //     setCount((prevCount)=>prevCount+1);
//     // };

//     const decrement=useCallback(()=>{
//             console.log("decrement Inside");
//             setCount((prevCount)=>prevCount-1)
//     },[]);
    


//     return(
//         <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
//             <h1 className="mb-4">Count : {count}</h1>
//             <button onClick={increment}>INCREMENT</button>
//             <button onClick={decrement}>DECREMENT</button>
//         </div>
//     );
// }
import React, { useState, useCallback } from "react";

const Button = ({ onClick, children }) => {
    console.log(`Rendering button: ${children}`);

    return (
        <button
            className={`text-black mb-4 py-2 px-5 ${
                children === "increment" ? "bg-green-400" : "bg-red-400"
            }`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default function UseCallbackExample() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("Increment inside");
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        console.log("Decrement inside");
        setCount((prevCount) => prevCount - 1);
    }, []);
    

    return (
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
            <h1 className="mb-4">Count: {count}</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </div>
    );
}
