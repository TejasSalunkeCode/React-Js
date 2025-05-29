import { useRouteError } from "react-router-dom"
import  {NavLink} from "react-router-dom"
export const ErrorPage=()=>{
    const error=useRouteError();
    console.log("error like this :",error);

    return (
        <div>
            <h1>Oops ! an Error Occured</h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/">
                <button>Go Home</button>
            </NavLink>
            
        </div>
    );
};