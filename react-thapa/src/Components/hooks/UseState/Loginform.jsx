import { useState } from "react";
import "./loginforrm.css";
export const Loginformm=()=>{
    const[username,setFirstName]=useState("");
    const[password,setPassword]=useState("");


    // const handleinpuchange=(e)=>{
   
    //     const{name,value}=e.target;
    //     switch(name){
    //         case "username":
    //             setFirstName(value)
    //             break;
    //         case "password":
    //             setPassword(value);
    //             break;
    //     }
    // };

    const handleforsubmit=(event)=>{
              event.preventDefault();
            const formdata={
                username,
                password
            }
            console.log(formdata);
    }
    return(
        <>
            <div className="container">
                <div className="card">
                    <h1>Login Form</h1>
                    <form >
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off"value={username} onChange={(e)=>setFirstName(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" required autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)} />

                    <button className="submit" onClick={handleforsubmit}>Login</button>     
                    </form>
                </div>
            </div>
        </>
    )
};