import { useLoaderData } from "react-router-dom";
// import { NavLink } from "?eact-router-dom";
export const MovieDetailss = () => {
    // const params=useParams();
    // console.log(params);

    const moviedata2 = useLoaderData();
    console.log(moviedata2);

     const{Actor,Poster,Title,Type,Year,Plot,BoxOffice,imdbID}=moviedata2;


    return (
        <li className="hero-container hero-movie-container">
            <div className="main-container">
                <div className="poster-container">
            <img src={Poster} className="poster" alt={Title} />
                </div>
                    <div className="ticket-container">
                        <div className="ticket_content">
                            <h4 className="ticket_movie-title">
                            {Title}
                            </h4>
                            {/* <p>{Plot}</p> */}
                            <p className="ticket_current_price">Year :{Year}</p>
                            {/* <p className="ticket_current_price">Type :</p> */}
                            <button className="ticket_buy-btn">Watch Now</button>
                        </div>
                    </div>
            </div>
        </li>
    );
}
// import { useLoaderData } from "react-router-dom";

// export const MovieDetailss = () => {
//   const moviedata = useLoaderData();
//   console.log(moviedata);

//   if (!moviedata) {
//     return <p>Loading or data not found...</p>;
//   }

//   const {
//     Actors,
//     Poster,
//     Title,
//     Type,
//     Year,
//     Plot,
//     BoxOffice,
//     imdbID,
//   } = moviedata;

//   return (
//     <li className="hero-container hero-movie-container">
//       <div className="main-container">
//         <div className="poster-container">
//           <img src={Poster} className="poster" alt={Title} />

//           <div className="ticket-container">
//             <div className="ticket_content">
//               <h4 className="ticket_movie-title">{Title}</h4>
//               <p className="ticket_current_price">Type: {Type}</p>
//               <p className="ticket_current_price">Year: {Year}</p>
//               <p className="ticket_description">{Plot}</p>
//               <p className="ticket_boxoffice">Box Office: {BoxOffice}</p>
//               <button className="ticket_buy-btn">Watch Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };
