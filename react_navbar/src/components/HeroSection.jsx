export const HeroSection = () => {
  return (
    <>
      <main className="hero-section main ">
        <div className="container">
          <div className=" banner-column ">
            <div className="banner-inner">
              <h1 className="heading-xl">
                All Your Files in One Secure Location.
              </h1>
              <p className="paragraph">
                We stores all your most important files in one secure location.
                Access them whenever needed, share and collaborate with your
                connections.
              </p>
              <button className="btn btn-darken btn-inline">
                Get Started<i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
            <div className="banner-img">
              <img
                className="banner-image"
                src="https://plus.unsplash.com/premium_photo-1676618539992-21c7d3b6df0f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  width="200px"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};