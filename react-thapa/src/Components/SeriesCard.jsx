import "./Netflix.css";
import styled from "styled-components";
export const SeriesCard = (props) => {
    console.log(props);
    // const {data}=props;
    const {img_url,name,rating,summary,Cast,genre,watch_url}=props.data;
    // const btn_style={}


    //using style components
        const ButtonThapa = styled.button({
            padding:"1.2rem 2.4rem",
            border:"none",
            fontSize:"1.6rem",
            backgroundColor:"var(  --bnt-hover-bg-color)",
            color:"var( --bg-color)",
        });
       


    //using Backtick 
        // const ButtonThapa = styled.button`
        //     padding:"1.2rem 2.4rem";
        //     border:"none";
        //     fontSize:"1.6rem";
        //     background-color:${(props)=> props.rating >= 8.5 ?  "#7dcea0" : "#f7dc6f"};
        //     color:"var( --bg-color)";`

    return(

        <li className="card">
            <div>
                <img
                src={img_url}
                alt={name}
                />
            </div>

            <div className="flex flex-col gap-6 px-6">
            <h2>Name : {name}</h2>
                    <h3>{rating}</h3>
                    <p>{summary}</p>  
                    <p className="text-3xl font-bold underline">"Genere : "{genre}</p>   
                    <p>Cast: {Cast}</p>
                    <a href={watch_url} target="_blank"/>
                    {/* <button style={btn_style}>Watch Now</button> */}
                    <ButtonThapa>Watch Now</ButtonThapa>
                    <a/>
            </div>
        </li>
    );
}