import { useId } from "react"

export const AfterReactv=({label,ref})=>{
    const id=useId();
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" ref={ref} />
        </div>
    );
};

//here some coding part remain 