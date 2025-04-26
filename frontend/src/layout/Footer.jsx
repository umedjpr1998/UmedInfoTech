import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, } from "react-icons/fa";
import "./footer.css"

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="content_1">
                        <img src="../images/logo.png" style={{ width: "190px", height: "80px", }} alt="" />
                        <p style={{ marginTop: '18px', fontSize: '15px' }}>The customer is at the heart<br />
                            of our unique business model,<br />which includes design.</p>
                    </div>

                    <div className="content_2">
                        <h4 style={{ color: '#FF9D00' }}>CONTACT US</h4>
                        <div style={{ marginTop: '35px', lineHeight: '12px', color: 'white', fontSize: "14px" }}>
                            <p>
                                <i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i>
                                R-1 Maa Karni Nagar-E, Amrapali Marg (West),
                            </p>
                            <p style={{ marginLeft: '8px' }}>
                                Panchyawala, Jaipur, Rajasthan 302034
                            </p>
                            <p>
                                <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i>
                                +91 9521481193
                            </p>
                            <p>
                                <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
                                umedinfotech@gmail.com
                            </p>
                        </div>


                    </div>
                    <div className="footer-social">
                        <h4 style={{ color: '#FF9D00' }}>FOLLOW US</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a><br></br>
                            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a><br></br>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>

                        <div className="social-icons mt-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a><br></br>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a><br></br>
                            <a href="mailto:umedinfotech@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>



                    <div className="content_4">
                        <h4 style={{ color: '#FF9D00' }}>LOCATION</h4>
                        <iframe
                            title="location-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7493264757154!2d75.71626067489497!3d26.91144956014579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db355f12243e9%3A0xfadf21539d55d3c7!2sUMED%20KIRANA%20STORE!5e0!3m2!1sen!2sin!4v1734930643642!5m2!1sen!2sin" width="100%" height="250" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>




                    </div>

                </div>
                <div className="f-design">
                    <div className="f-design-txt" >
                        <p className='mb-0 py-2'>&copy; 2025 &nbsp; All rights reserved .&nbsp;&nbsp; Design and Code By &nbsp; - &nbsp; <span style={{ color: '#FF9D00', fontFamily: "'Lobster', cursive", }}>UMED INFO TECH</span></p>
                    </div>
                </div>
            </footer >

        </>
    )
}

export default Footer;