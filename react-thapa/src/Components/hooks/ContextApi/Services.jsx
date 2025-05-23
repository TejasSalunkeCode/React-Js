// import { useContext } from "react"
import { useBioContext } from "./index"; // Or the correct relative path to your context file


export const Services=()=>{
    const {myName,age}=useBioContext();
    return <h1>Hello Context Api (Services) my name is : {myName} and my age is {age}</h1>
}