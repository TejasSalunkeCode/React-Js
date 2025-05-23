import { createContext, useContext } from "react";
// import { useContext } from "react";

export const BioContext=createContext();

export const BioProvider=({children })=>{
    const myName="Tejas";
    const age=19;
    // console.log();

    return <BioContext.Provider value={{myName,age}}>{children }</BioContext.Provider>
    
};

//custom hooks

export const useBioContext=()=>{
    const context=useContext(BioContext);
    if(context===undefined){
        throw new Error("Component must be wrapped with BioProvider");
    }
    return context;
}
