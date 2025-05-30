import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar=()=>{

    const[showMenu,setshowMenu]=useState(false);
    const handleButtonToggle=()=>{
        setshowMenu(!showMenu);
    }
    return(
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        <h1>TEJAS</h1>
                    </div>
                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="ham-menu">
                    <button onClick={handleButtonToggle}>
                        <GiHamburgerMenu />
                    </button>
                    </div>
                </div>
            </div>
        </header>
    )
}