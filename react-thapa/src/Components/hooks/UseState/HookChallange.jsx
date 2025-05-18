import { useState } from "react";
export const Counter=()=>{

    const[value,setvalue]=useState([]);
    const[value2,setvalue2]=useState(0);
    
    const handlevalue=()=>{
        // setvalue((prev)=>[...prev+value2]);
        const result=Number(value)+Number(value2);
        setvalue(result);
        console.log(value2);

        
        
    }
        const handlevalue2=()=>{
            // if(value>0){
                  const result=Number(value)-Number(value2);
                  setvalue(result);
                // setvalue(value-{value2});
                console.log(value);
            // }
        
    }
    const handlevalue3=()=>{
        setvalue(0);
        console.log(value);
        
    }
    const handlevalue4=(e)=>{
        setvalue2(e.target.value);
        console.log(value2);
        
    }
//   localStorage.setItem("Form-Info",JSON.stringify(FormData))
    return(
        <div className="container state-container" style={{textAlign:"center"}}>
            <h1>useState Hook!</h1>
            <br/>
            <p>Count : {value}</p>
            {/* <button className="state-button" onClick={setvalue}</div>}>Increment</button> */}
            {/* <p>{value}</p> */}
            <input className="" placeholder="steps" onChange={handlevalue4}></input>
            <button className="state-button" disabled={value>=100} onClick={handlevalue}>Increment</button>
            <button className="state-button" disabled={value<=0} onClick={handlevalue2}>Deccrement</button>
            <button className="state-button"  onClick={handlevalue3}>Reset</button>
        </div>
    )
}