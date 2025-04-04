export const EventHandling = () =>{
    //traditional way
    // function handleButtonClick(){
    //     alert("Hey I am onClick Event");
    // }

    const handleButtonClick = (event) =>{
        console.log(event);
        console.log(event.target)
        console.log(event.type)
        console.log(event.eventPhase)
        alert("Hey I am onClick Event");
    }
    const handleWelcomeUser = (user)=>{
        console.log(`Hey ${user} , Welcome`)
    }
    return(
        <>
        
            <button onClick={handleButtonClick} style={{backgroundColor:"red"}}>Click Me</button>
            <br/>
            <button onClick={(event)=>handleButtonClick(event)} style={{backgroundColor:"yellow"}}>Click me 2</button>
            <br/>
            <button onClick={()=> alert("HEy i am inline event function")}>Inline arr fun</button>
            <br/>
            <button onClick={()=>handleWelcomeUser("Tejas")} style={{backgroundColor:"yellow"}}>Click me 2</button>
            <br/>
        </>


    )
}