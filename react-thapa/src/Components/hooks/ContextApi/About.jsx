import { use } from "react"
import { BioContext } from "./index"
export const About=()=>{
    // const {myName,age}=useContext(BioContext)

    const newhook=true;
    let myName,age;
    if(newhook){
        ({myName,age}=use(BioContext));
    }
    return <h1>Hello Context Api (about) my name is : {myName} and my age is {age}</h1>
}