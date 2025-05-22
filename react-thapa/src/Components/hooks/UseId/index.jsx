import { useId } from "react";

export const UseId=()=>{
    // const username=useId();
    // const email=useId();
    // const password=useId();
    // return(
    //     <>
    //         <form>
    //             <div>
    //                 <label htmlFor={username}>UserName : </label>
    //                 <input type="text" name="name" id={username}/>
    //             </div>
    //             <div>
    //                 <label htmlFor={email}>Email : </label>
    //                 <input type="email" name="email" id={email} />
    //             </div>
    //             <div>
    //                 <label htmlFor={password}>Email : </label>
    //                 <input type="password" name="password" id={password} />
    //             </div>
    //             <button type="submit">Submit</button>
                
    //         </form>
    //     </>
    // );


    const id=useId();
    return(
        <>
            <form>
                <div>
                    <label htmlFor={id+"username"}>UserName : </label>
                    <input type="text" name="name" id={id+"username"}/>
                </div>
                <div>
                    <label htmlFor={id+"email"}>Email : </label>
                    <input type="email" name="email" id={id+"email"} />
                </div>
                <div>
                    <label htmlFor={id+"password"}>Password : </label>
                    <input type="password" name="password" id={id+"password"} />
                </div>
                <button type="submit">Submit</button>
                
            </form>
        </>
    );
}