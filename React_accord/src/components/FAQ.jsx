// import { useState } from "react";

export const FAQ = ({ curData,onToggle,isactive }) => {
    const { question,answer } = curData;
    // const[activeID,setActiveId]=useState(false);
    // const handleButton=()=>{
    //     setActiveId(!activeID);
    // }
    return (
        
            <li>
                <div className="accordion-grid">
                    <p>{question}</p>
                    <button onClick={onToggle} className={isactive ? "active-btn" : ""}>{isactive ? "Close" : "Show" }</button>
                </div>
                <p>{isactive && answer}</p>
            </li>
    )
}