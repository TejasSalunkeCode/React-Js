import { useRef } from "react";

export const Useref=()=>{
    // const user=document.getElementById("text");
    // const userpass=document.getElementById("pass");

    const user=useRef();
    const userpass=useRef();    
    const handleforSubmit=(e)=>{
        e.preventDefault();
        console.log(user.current.value,userpass.current.value);

    }
    return (
        <>
            <form onSubmit={handleforSubmit}>
                <input type="text" id="name" placeholder="Username" ref={user}/>
                <input type="text" id="pass" placeholder="password" ref={userpass}/>
                <button>submit</button>
            </form>
        </>
    )
}