import { useRouteError,useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
export const ErrorPage=()=>{
    const error=useRouteError();
    const navigate=useNavigate();
    console.log(navigate);
    
    const handleGoBack=()=>{
        navigate(-1);
    }
    if(error.status===404){
        return(
            <section className="error-section">
            <div className="error-text">
                <figure>
    <img src="/react_router/src/assets/errorIMg.png" alt="" />
                </figure>
                <div className="text-center">
                    <p className="p-a" >
                        The Page you were looking for could not be found
                    </p>
                    <p className="p-b" >...Back to Previous Page</p>
                </div>
            </div>
            {/* <NavLink to="/" className="btn">
                Go Back to Home Page
            </NavLink> */}
            <button className="btn" onClick={handleGoBack}>Go Back</button>

            </section>
        )
    };

    console.log(error);
    return <h1>The page you are looking does not exist</h1>
}

