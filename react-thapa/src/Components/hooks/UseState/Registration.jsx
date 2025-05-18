import { useState } from "react";
import "./Registerform.css";
export const RegisteratonFrom=()=>{
    const[firstname,setFirstName]=useState("");
    const[Lastname,setLastname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[Phoneno,setPhoneno]=useState("");

    const handleinputchange=(e)=>{
        
        const{name,value}=e.target;
        switch(name){
            case "firstname":
            setFirstName(value)
            break;

            case "Lastname":
            setLastname(value)
            break;
            
            case "email":
            setemail(value)
            break;
            
            case "Password":
            setpassword(value)
            break;
            
            case "phone":
            setPhoneno(value)
            break;
            
            
            
        }
        
    
    };
    const handleforsubmit=(event)=>{
            event.preventDefault();
            const formdata={
                firstname:firstname,
                Lastname:Lastname,
                email:email,
                password:password,
                Phoneno:Phoneno
            };
            // return(
                // <>
                        // <p>`Hello My Name is ${firstname} ${Lastname} my email address is 
                        // ${email} & my phone number is ${Phoneno}`</p>
                {/* </> */}
            // )
            console.log(formdata);
        }

return(
    <>
        <form onSubmit={handleforsubmit}>
            <div className="container">
                            <p>Hello My Name is {firstname} {Lastname} my email address is 
                        {email} & my phone number is {Phoneno}</p>

            <h1>Sign up</h1>
            <p>Please fill in this form to create an account</p>

            <label htmlFor="firstName">
                <b>First Name</b>
            </label>
            <input type="text" name="firstname" placeholder="Enter firstname" required  value={firstname} onChange={handleinputchange}/>

            <label htmlFor="LastName">
                <b>Last Name</b>
            </label>
            <input type="text" name="Lastname" placeholder="Enter Lastname" required 
                value={Lastname} onChange={handleinputchange}
            />

             <label htmlFor="email">
                <b>email</b>
            </label>
            <input type="text" name="email" placeholder="email" required 
                value={email} onChange={handleinputchange}
            />

             <label htmlFor="Password">
                <b>Password</b>
            </label>
            <input type="text" name="Password" placeholder="Enter Password" required 
                value={password} onChange={handleinputchange}
            />

             <label htmlFor="phone">
                <b>Phone Number</b>
            </label>
            <input type="phone" name="phone" placeholder="8588860989" required 
                value={Phoneno} onChange={handleinputchange}
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