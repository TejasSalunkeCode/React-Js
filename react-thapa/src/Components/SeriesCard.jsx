import "./Netflix.css";
export const SeriesCard = (props) => {
    console.log(props);
    // const {data}=props;
    const {img_url,name,rating,summary,Cast,genre,watch_url}=props.data;
    const btn_style={
        padding:"1.2rem 2.4rem",
        border:"none",
        fontSize:"1.6rem",
        backgroundColor:"var(  --bnt-hover-bg-color)",
        color:"var( --bg-color)",
    }
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
                    <button style={btn_style}>Watch Now</button>
                    <a/>
            </div>
        </li>
    );
}