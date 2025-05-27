import { useLoaderData } from "react-router-dom";
import {Card} from "../Components/Layout/UI/Card"
export const Movie=()=>{
    const moviedata=useLoaderData();
    console.log(moviedata);
    
    return (
        <>
        <ul className=" container grid grid-four--cols">
            {moviedata && moviedata.Search.map((curMovie)=>{
                return <Card key={curMovie.imdbID} curMovie={curMovie}
                />
            })}
        </ul>
        </>
    )
};