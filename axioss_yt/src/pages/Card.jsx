export const Card=({movieData})=>{
    const{Poster,Title}=movieData;
    return(
        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={Poster} alt={Title} />
                </div>
                <div className="ticket-container">
                    <div className="ticket_content">
                        <a href={`./movie/${Title}`}>
                            <button className="ticket_buy-btn">Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}