import { Headerss } from "../UI/Headerss"
import { Footers } from "../UI/Footers"
import { Outlet } from "react-router-dom"
export const AppLayout=()=>{
    return(
        <>
            <Headerss/>
            <Outlet/>
            <Footers/>
        </>
    )
}
