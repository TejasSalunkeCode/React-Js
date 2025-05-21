import "./indexPokemon.css";
import { useEffect, useState } from "react";

export const HowNotToFetchApli =()=>{
    const[api,setApi]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    
    const  ApiOriginal="https://pokeapi.co/api/v2/pokemon/pikachu";
    // const fetchpokemonn=()=>{
    //     fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((res)=>res.json())
    //     .then((data)=>{
    //         setApi(data);
    //         setLoading(false);
    // })
    //     .catch((error)=>{
    //         console.log(error)
    //         setLoading(false)
    //         setError(error)
    //     });
    // }

    const fetchpokemonn=async()=>{
        try{
            const res=await fetch(ApiOriginal);
            const data=await res.json();
            setApi(data);
            setLoading(false);
        }catch(error){
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }
    


    useEffect(()=>{
        fetchpokemonn();
     },[])

     console.log(api)

     if(loading){
        return(
            <>
                <div>
                    <h1>Loading..</h1>
                </div>
            </>
        )
     }
     if(error){
        return(
            <>
                <div>
                    <h1>{error.message}</h1>
                </div>
            </>
        )
     }


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
                    <div className="grid-three-cols">
                        <p className="pokemon-info">
                            Height : <span>{api.height}</span>
                        </p>
                             <p className="pokemon-info">
                            Weight : <span>{api.weight}</span>
                        </p>
                             <p className="pokemon-info">
                            speed : <span>{api.stats[5].base_stat}</span>
                        </p>
                    </div>
                </li>
            </ul>
            </div>
        </>
    )
}