import { useContext } from "react"
import { BioContext } from "."

export const About=()=>{
    const {myName,age}=useContext(BioContext)
    return <h1>Hello Context Api (about) my name is : {myName} and my age is {age}</h1>
}