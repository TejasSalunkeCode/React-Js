import { NavLink } from "react-router-dom";
export const Home=()=>{
    return (
       <main>
        <section className="section-hero">
            <div className="container grid grid-two--cols">
                <div className="section-hero--content">
                    <p className="hero-subheading">
                        Explore the Latest in Movie Industries
                    </p>
                    <h1 className="hero-heading">
                        Unlimited Movie,Tvs Shows, & More.
                    </h1>
                    <p className="hero-para">
                        Discover the top Best Movies and Dramas with a catchy subtitle like your Ultimate Goide to Must-Watch Content.
                    </p>
                    <div className="hero-btn">
                       <NavLink to="/movie">
                        Explore Now
                       </NavLink> 
                    </div>
                </div>
                <div className="section-hero-image">
                    <img src="./shop.png" alt="poster"
                    width="150" height="150"  />
                </div>
            </div>
        </section>
       </main>
    );

    // return <h1>Helllooooooooooo</h1>
};







