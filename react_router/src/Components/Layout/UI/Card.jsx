import "./Card.css";
import { NavLink } from "react-router-dom";
export const Card = ({ curMovie }) => {
    const { Poster, imdbID } = curMovie;
    return (
        <>
            <li className="hero-container">
                <div className="main-container">
                    <div className="poster-container">
                        <img src={Poster} className="poster" alt={imdbID} />
                    </div>
                    <div className="ticket-container">
                        <div className="ticket_content">
                        <NavLink to={`/movie/${imdbID}`}>
                            <button className="ticket_buy-btn">Watch now</button>
                        </NavLink>

                        </div>
                    </div>
                </div>

            </li>
        </>
    )
}