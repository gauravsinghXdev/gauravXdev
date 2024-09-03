import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing specific icons

const Contact = () => {
    return (
        <>
            <section id="cont-section" className="contact">
                <div>
                    <h3>Find me on:</h3>
                </div>
                <div className="media">
                    <div className="links">
                        <div className="link">
                            <FaGithub size={25} style={{color:"white"}}/> {/* GitHub icon */}
                            <a href="https://github.com/gauravsinghXdev" target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                        <div className="link">
                            <FaLinkedin size={25} style={{color:"white"}}/> {/* LinkedIn icon */}
                            <a href="https://www.linkedin.com/in/gaurav-singh-10a2a5225" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div className="link">
                            <FaTwitter size={25} style={{color:"white"}}/> {/* Twitter icon */}
                            <a href="https://twitter.com/Gaurav07singh10?t=4Vq7Nlz1y7JFN3bf5bV_uw&s=08" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                        <div className="link">
                            <FaInstagram size={25} style={{color:"white"}}/> {/* Instagram icon */}
                            <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                    <button className="getInTouch">
                        <a href="pages/contact.html">
                            <span className="text">Get in touch</span><span>Send message</span>
                        </a>
                    </button>
                    <button className="getInTouch">
                        <a href="pages/contact.html">
                            <span className="text">Know About me</span><span>Alternate text</span>
                        </a>
                    </button>
                </div>
                <h1 className='collaborate-button'>Let&#39;s Collaborate</h1>
            </section>
        </>
    )
}

export default Contact;
