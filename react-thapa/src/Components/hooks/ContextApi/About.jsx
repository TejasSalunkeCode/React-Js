// import { useContext } from "react"
// import { BioContext } from "."
import { useBioContext } from "./index"; // Or the correct relative path to your context file



export const About=()=>{
    const {myName,age}=useBioContext();
    return <h1>Hello Context Api (about) my name is : {myName} and my age is {age}</h1>
}