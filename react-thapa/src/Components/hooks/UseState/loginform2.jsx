import { useState } from "react";
import "./loginforrm.css";
export const Loginformm2=()=>{
    const[user,setUserdata]=useState({
        username:"",
        password:""
    });

    const handleinputchange=(e)=>{
        const{name,value}=e.target;
           setUserdata((prev)=>({...prev,[name]:value}))
    }

    const handleforsubmit=(event)=>{
              event.preventDefault();
      
            console.log(user);
    }
    return(
        <>
            <div className="container">
                <div className="card">
                    <h1>Login Form</h1>
                    <form >
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off"value={user.username} onChange={handleinputchange} />

                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" required autoComplete="off" value={user.password} onChange={handleinputchange} />

                    <button className="submit" onClick={handleforsubmit}>Login</button>     
                    </form>
                </div>
            </div>
        </>
    )
};