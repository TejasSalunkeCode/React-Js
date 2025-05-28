// import axios from "axios";
import { useEffect, useState } from "react";
import {Card} from "./Card";
import {getMovie} from "../Services/GetServices"
export const Movie=()=>{
    const[data,setData]=useState([]);
    // const API="https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"

    const getMoviedata=async()=>{
        try{
            // const res= await axios.get(API);
            const res= await getMovie();

            console.log(res.data.Search);
            setData(res.data.Search);
        }catch(e){
            console.log(e);
            console.error("Error Message : ",e.message);
            console.error("Error Status : ",e.response.status);
            console.error("Error Data :",e.response.data);
            
        }
    }
    useEffect(()=>{
        getMoviedata();
    },[]);

    return (
        <ul className="container grid grid-four--cols">
            {
                data.map((curEle)=>{
                    return <Card key={curEle.imdbID} movieData={curEle}/>


                })
            }
        </ul>
    )
}