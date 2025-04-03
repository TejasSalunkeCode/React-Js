import "./Netflix.css";
export const SeriesCard = (props) => {
    console.log(props);
    // const {data}=props;
    const {img_url,name,rating,summary,Cast,genre,watch_url}=props.data;
    return(
        <li className="card">
            <div>
                <img
                src={img_url}
                alt={name}

                />
            </div>

            <div className="card-content">
            <h2>Name : {name}</h2>
                    <h3>{rating}</h3>
                    <p>{summary}</p>  
                    <p>"Genere : "{genre}</p>   
                    <p>Cast: {Cast}</p>
                    <a href={watch_url} target="_blank"/>
                    <button>Watch Now</button>
                    <a/>
            </div>
        </li>
    );
}