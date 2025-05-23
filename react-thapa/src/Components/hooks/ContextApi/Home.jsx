import { useContext } from "react"
import { BioContext } from "."

export const Home=()=>{
    const {myName,age}=useContext(BioContext)
    return <h1>Hello Context Api my name is : {myName} and my age is {age}</h1>
}