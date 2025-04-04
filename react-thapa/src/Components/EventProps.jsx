export const EventProps = () =>{
    const handleWelcomeUser = (user) =>{
        alert(`Hey, ${user}`);
    };
    const handleHover=()=>{

        alert("Hey thanks for hovering me");
    };

    return(
        <>
            <WelcomeUser
                onButtonClick={()=> handleWelcomeUser("TEJAS")}
                onMouseEnter={handleHover}
            />
        </>
    );
}
const WelcomeUser=(props)=>{
    const handleGreeting=()=>{
        console.log("Hey Welcome User");
        props.onButtonClick();
    };
    return(
        <>
            <button onClick={props.onButtonClick}>Click</button>
            <br/>
            <button onMouseEnter={props.onMouseEnter}>Hover me</button>
            <br/>
            <button onClick={handleGreeting}>Greeting</button>
            <br/>
        </>
    )
}