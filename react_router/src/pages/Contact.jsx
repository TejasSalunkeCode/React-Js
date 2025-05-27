import { Form } from "react-router-dom";
export const contactData=async({request})=>{
    try{
        const res=await request.formData();
        const data=Object.fromEntries(res);
        console.log(data);
        return null;
    }
    catch(e){
        console.log(e.message);
        
    }
}
export const Contact = () => {
    return (
        <>
            <section className="container section-contact">
                <div className="container">
                    <h2 className="section-common--heading">contact us</h2>
                    <p className="section-common--subheading">
                        Get in touch with us, we are alaways here to help you
                    </p>
                </div>
                <div className="grid grid-two--cols">
                    <div className="contact-content">
                        <Form method="POST">
                            <div className="grid grid-two-cols mb-3">
                                <div>
                                    <label htmlFor="username">Full Name</label>
                                    <input type="text"
                                        name="username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        placeholder="Enter Your name"
                                    />
                                </div>
                                  <div>
                                    <label htmlFor="email">email address</label>
                                    <input type="email"
                                        name="email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        placeholder="abc@thapa.com"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message">
                                    message
                                </label>
                                <textarea name="message" id="message"
                                    cols="10"
                                    rows="5"
                                    placeholder="we are alaways here to help you"
                                ></textarea>
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn contact-btn">
                                    send message
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </>
    )
};