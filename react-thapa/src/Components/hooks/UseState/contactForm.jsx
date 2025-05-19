import { useState } from "react";
import "./contact.css";
export const ContactForm = () => {
    const[user,userInfo]=useState({
        name:"",
        password:"",
        message:""
    });

    const handleinput=(e)=>{
        const{name,value}=e.target;
        userInfo((prev)=>({...prev,[name]:value}))
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(user)
    }
    return (
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handlesubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter your name" required  value={user.name2} onChange={handleinput}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password" required value={user.password2} onChange={handleinput} />

                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Enter your message" required value={user.message2} onChange={handleinput}></textarea>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};
