import { useState } from "react"
import "./ToggleSwitchh.css"
import { IoIosSwitch } from "react-icons/io";
export const ToggleSwitch=()=>{
    const [iSon,setIson]=useState(true);
    const handleToggleSwitch=()=>{
        setIson(!iSon);
    }
return(
    <>
<h1 style={{color:"#000",textAlign:"center"}}>ToggleSwitch <IoIosSwitch />
</h1>
    <div className="toggle-switch" style={{backgroundColor:iSon? "#4caf50" : "#f44336"}}   onClick={handleToggleSwitch}>
            <div className={`switch ${iSon ? "on" : "off"}`}>
                <span className="switch-state">{iSon ? "on" : "off"}</span>
            </div>
    </div>
    </>
)
}