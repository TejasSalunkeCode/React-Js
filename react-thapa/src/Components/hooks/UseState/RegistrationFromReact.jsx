import { useState } from "react";
import "./Registerform.css";
export const RegistrationFromReact=()=>{
    const[user,setUser]=useState({
        firstname:"",
        Lastname:"",
        email:"",
        Password:"",
        Phoneno:""
    });

    const handleinputchange=(e)=>{
        
        const{name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}))
    
    };
    const handleforsubmit=(event)=>{
            event.preventDefault();
            console.log(user);
        }

return(
    <>
        <form onSubmit={handleforsubmit}>
            <div className="container">
                            <p>Hello My Name is {user.firstname} {user.Lastname} my email address is 
                        {user.email} & my phone number is {user.Phoneno}</p>

            <h1>Sign up</h1>
            <p>Please fill in this form to create an account</p>

            <label htmlFor="firstName">
                <b>First Name</b>
            </label>
            <input type="text" name="firstname" placeholder="Enter firstname" required  value={user.firstname} onChange={handleinputchange}/>

            <label htmlFor="LastName">
                <b>Last Name</b>
            </label>
            <input type="text" name="Lastname" placeholder="Enter Lastname" required 
                value={user.Lastname} onChange={handleinputchange}
            />

             <label htmlFor="email">
                <b>email</b>
            </label>
            <input type="text" name="email" placeholder="email" required 
                value={user.email} onChange={handleinputchange}
            />

             <label htmlFor="Password">
                <b>Password</b>
            </label>
            <input type="text" name="Password" placeholder="Enter Password" required 
                value={user.password} onChange={handleinputchange}
            />

             <label htmlFor="phone">
                <b>Phone Number</b>
            </label>
            <input type="phone" name="Phoneno" placeholder="8588860989" required 
                value={user.Phoneno} onChange={handleinputchange}
            />

            <p>
                By creating an account you agree to our
                <a href="#" style={{color:"dodgerblue"}}>Term & Privacy</a>
            </p>

            <div className="clearfix">
                <button type="submit" className="btn">Sign Up</button>
            </div>
            </div>
        </form>
    </>
)
}