import React, { useState } from 'react'
import { contact, section5Title, social } from '../../profile'
import { async } from 'q';

// export NODE_OPTIONS=--openssl-legacy-provider && react-scripts start"

const Contact = () => {

    const [formData, setFormData] = useState({
        name:"",
        email: "",
        subject: "",
        message : "",
        phone: ""
    })

    const handleSubmit = (e) => {

        // action={contact.contactUrl ? contact.contactUrl : "mailto:rajendramaharjan666@gmail.com"}
        e.preventDefault();

        console.log(formData, 'form data is here');
        
        try {
            fetch(contact.contactUrl, {
              method: "POST",
              body: JSON.stringify(formData),
            }).then((res  => {
                console.log(res, 'res is here');
                setFormData({
                    name:"",
                    email: "",
                    subject: "",
                    message : "",
                    phone: ""
                });
                alert("Thank for your message.\n I will try to get back to you as soon as possible.");
            })).catch((err) => {
                console.log(err, "Something went wrong.");
            });
        } catch (err) {
            console.log(err, "Something went wrong.");
        }
      };

      const handleOnChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name] : e.target.value}))
      }
    
    return (
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                </>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    {/* <form onSubmit={handleSubmit}> */}
                    <form  onSubmit={handleSubmit}>
                        <input type="text" id="fname" name="name" value={formData.name} onChange={handleOnChange}  placeholder="Your name" required></input>
                        <input type="email" id="mailid" name="email" value={formData.email} onChange={handleOnChange}  placeholder="Email Address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
                        <input type="text" id="sub" name="subject" value={formData.subject} onChange={handleOnChange} placeholder="Message Title" required></input>
                        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleOnChange} placeholder="Phone"></input>
                        <textarea id="msg" name="message" value={formData.message} onChange={handleOnChange} placeholder="Message" required></textarea>
                        <button style={{cursor: 'pointer'}} type="submit">Send Message</button>
                    </form>
                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead">
                        {contact.pitch}   
                        <br/> 
                        <div className='contact-information'>
                        <div>
                        <b>{contact.name}</b>
                        </div>
                        <div>
                        {contact.address}
                        </div>
                        <div>   
                        <b>Ping me here:</b> {contact.email}
                        </div>
                        <div >
                            <b>Let's connect: </b>{contact.phone}
                        </div>
                    </div>    
                    </p>
                    <br></br> 
                
                <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                    {social.twitter && <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}><i className="fab fa-twitter"></i></a>}
                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                </div>
                    {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
                </div>
                </div>
            </div>
            </div>
        </div>
            <p id="not-dark" className="Copy">2024 © Copyright <strong>{contact.copyright}</strong>.</p>
        </div>
    )
    
}

export default Contact
