export const SeriesCard = (props) => {
    console.log(props);
    return(
        <li key={props}>
            <div>
                <img
                src={props.curElem.img_url}
                alt={props.curElem.name}
                width="40%"
                height="40%"
                />
            </div>
            <h2>Name : {props.curElem.name}</h2>
                    <h3>{props.curElem.rating}</h3>
                    <p>{props.curElem.summary}</p>  
                    <p>"Genere : "{props.curElem.genre}</p>   
                    <p>Cast: {props.curElem.Cast}</p>
                    <a href={props.curElem.watch_url} target="_blank"/>
                    <button>Watch Now</button>
                    <a/>
        </li>
    );
}