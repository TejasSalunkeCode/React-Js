import "./indexPokemon.css";
import { useEffect, useState } from "react";

export const HowNotToFetchApli =()=>{
    const[api,setApi]=useState([]);
    
    const fetchpokemonn=()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((res)=>res.json())
        .then((data)=>setApi(data))
        .catch((error)=>console.log(error));
    }

    useEffect(()=>{
        fetchpokemonn();
     },[])

     console.log(api)

     if(api){
    return(
        <>

            <div className="container-effect">
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure>
                        <img src={api.sprites.other.dream_world.front_default} alt={api.name} 
                        className="pokemon-image" />
                    </figure>
                    <h1>{api.name}</h1>
                </li>
            </ul>
            </div>
        </>
    )
}
}