export const SeriesCard = (props) => {
    console.log(props);
    // const {data}=props;
    const {id,img_url,name,rating,summary,Cast,genre,watch_url}=props.data;
    return(
        <li>
            <div>
                <img
                src={img_url}
                alt={name}
                width="40%"
                height="40%"
                />
            </div>
            <h2>Name : {name}</h2>
                    <h3>{rating}</h3>
                    <p>{summary}</p>  
                    <p>"Genere : "{genre}</p>   
                    <p>Cast: {Cast}</p>
                    <a href={watch_url} target="_blank"/>
                    <button>Watch Now</button>
                    <a/>
        </li>
    );
}