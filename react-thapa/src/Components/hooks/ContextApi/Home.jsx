// import { useContext } from "react"
// import { BioContext } from "."
import { useBioContext } from "./index"; // Or the correct relative path to your context file



export const Home=()=>{
    const {myName,age}=useBioContext();
    return <h1>Hello Context Api my name is : {myName} and my age is {age}</h1>
}