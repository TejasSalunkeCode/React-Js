import { createContext } from "react";
// import { useContext } from "react";
export const BioContext=createContext();

export const BioProvider=({children })=>{
    const myName="Tejas";
    const age=19;
    // console.log();

    return <BioContext.Provider value={{myName,age}}>{children }</BioContext.Provider>
    
};
