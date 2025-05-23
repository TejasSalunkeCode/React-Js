import { createContext, useState } from "react";
import{use} from "react";
export const ThemeContext=createContext();




export const ThemeProvider=({children})=>{

    const[theme,setTheme]=useState('dark');

        const handletoggletheme=()=>{
            return setTheme((prevTheme)=>
              (prevTheme==="dark" ? "light" : "dark"));
        }
    return (
        <ThemeContext.Provider value={{theme,
        handletoggletheme}}>{children}
    </ThemeContext.Provider>
    )
}

export const DarkLight=()=>{
    const {theme,handletoggletheme}=use(ThemeContext);
    return(
        <>
            <div className={`p-4 h-lvh flex flex-col justify-center items-center ${theme==="dark" ? "bg-gray-800" : "bg-white"}`}>
                <h1
                className={`my-4 text-xl ${theme==="light" ? "text-gray-800" : "text-white"}`}
                >Dark Light Mode Website</h1>
                <p>Hello !! My Rect v19 Fans</p>
                <button onClick={handletoggletheme}
                 className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
                >
                {theme==="dark" ? "Switch to light Mode" : "Switch to Dark Mode"} 
                </button>
            </div>
        </>
    )
}