//  const Netflexseires=()=>{
//     const name="Hello, Tejas Salunke.";
//     const rating="Rating: 8.2";
//     const summary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus commodi itaque magnam ducimus repellat quisquam suscipit omnis, blanditiis cum ipsam molestiae id quasi odio placeat fuga reiciendis, amet asperiores deserunt! Pariatur, necessitatibus exercitationem!"
//     let age=19;
//     // let canwatch="Not Availabel";
//     // if(age>=18) canwatch="Watch now"

//      const canwatch=()=>{
//         if(age>=18) return "Watch now"
//         return "Not Availabel"
//      }
//     const genre=()=>{
//         const gen="romdom";
//         return gen;
//     }
//     // if(age>=18){
//     //     return (
//     //         <div>
//     //             <div>
//     //             <img src="shop.png" alt="shop.png" width="50%" height="40%"/>
//     //         </div>
//     //         <h1></h1>
//     //                     <h2>{name}</h2>
//     //                     <h3>{rating}</h3>
//     //                     <p>{summary}</p>  
//     //                     <p>"Genere : "{genre()}</p>      
//     //                     <button>Watch now</button>
//     //         </div>
        
//     //     )
//     // }
//     return (
//         <div>
//             <div>
//             <img src="shop.png" alt="shop.png" width="50%" height="40%"/>
//         </div>
//         <h1></h1>
//                     <h2>{name}</h2>
//                     <h3>{rating}</h3>
//                     <p>{summary}</p>  
//                     <p>"Genere : "{genre()}</p>   
//                     {/* <button>{age>=18 ? "Watch now" : "Not availabe"}</button>    */}
//                     {/* <button>{canwatch}</button> */}
//                     <button>{canwatch()}</button>
//         </div>
    
//     )
// };

// export default Netflexseires;

// export const Footer=()=>{
//     return <p>Copyright @thapa</p>;
// }

// export const Header=()=>{
//     return <p>Copyright @Header</p>;
// }








import seriesData from "../api/seriesData.json";;

const Netflexseires =() =>{
    return(
        <ul>
        {
            seriesData.map((curElem) => {
            return( <li key={curElem.id}>
             <div>
            <img
                src="{seriesData[0].img_url}"
                alt=""
                width="40%"
                height="40%"
            />
            </div>
            <h2>Name : {curElem.name}</h2>
                    <h3>{curElem.rating}</h3>
                    <p>{curElem.summary}</p>  
                    <p>"Genere : "{curElem.genre}</p>   
                    <p>Cast: {curElem.Cast}</p>
                    <a href={curElem.watch_url} target="_blank"/>
                    <button>Watch Now</button>
        </li>)
  
            })
        }

        </ul>
    );
};

export default Netflexseires;