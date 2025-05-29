import { useState } from "react";
import faq from "../api/FAQ.json";
import { useEffect } from "react";
import { FAQ } from "./FAQ";
export const Accordion=()=>{
    const[data,setData]=useState([]);
        const[activeID,setActiveId]=useState(false);


    useEffect(()=>{
        setData(faq);
    },[]);

    const handleButton=(id)=>{
        setActiveId((prev)=>(prev===id ? false : id));
    }

    return(
        <>
            <h1>The Accordios+n</h1>
            <ul className="section-accordion">
                {
                    data.map((curElem)=>{
                       return  <FAQ key={curElem.id} curData={curElem} isactive={activeID===curElem.id} 
                        onToggle={()=>handleButton(curElem.id)}
                       />;
                    })
                }
            </ul>
        </>
    )
}