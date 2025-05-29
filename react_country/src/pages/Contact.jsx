export const Contact=()=>{

    const handleFormSubmit=(formdata)=>{
        // console.log(formdata.entries());
        const formdInputata=Object.fromEntries(formdata.entries());
        console.log(formdInputata);        
    }

    return (
        <section className="section-contact">
            <h2 className="container-title">
                Contact us
            </h2>

            <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input
                 type="text" 
                 required 
                 placeholder="Enter Your name"
                 autoComplete="false" 
                 name="username" 
                 />
                  <input
                 type="email" 
                 className="form-control"
                 autoComplete="false" 
                 placeholder="Enter Your email"
                 name="email"
                 required 
                 />

                 <textarea 
                 className="form-control"
                 name="message"
                 rows="10"
                 placeholder="Enter Your message"
                 required
                 autoComplete="false"
                  ></textarea>

                  <button type="submit" value="send">Send</button>
            </form>
            </div>
        </section>
    )
}