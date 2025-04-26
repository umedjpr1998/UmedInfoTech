import React from "react";
import './About.css';


const cardsData = [
    { id: 1, imageUrl: '../assets/about-grid-1.jpg' },
    { id: 2, imageUrl: '../assets/about-grid-2.jpg' },
    { id: 3, imageUrl: '../assets/about-grid-3.jpg' },
    { id: 4, imageUrl: '../assets/about-grid-4.jpg' },
    { id: 5, imageUrl: '../assets/about-grid-5.jpg' },
    { id: 6, imageUrl: '../assets/about-grid-6.jpg' },
];


const About = () => {
    return (
        <div className="bg-light text-dark">
            {/* Bootstrap Container */}
            <section className="container">
                <h2 className="about text-center fw-bold" style={{ color: "green", fontFamily: "-moz-initial" }}>About Us</h2>


                <div className="container">
                    <div className="about-cards-grid m-auto align-item-center justify-content-center">
                        {cardsData.map((card) => (
                            <div key={card.id} className="about-card">
                                <img src={card.imageUrl} alt={`card-${card.id}`} className="about-card-image" />
                            </div>
                        ))}
                    </div>
                </div>



                <h3 className="text-primary text-center mt-4 mb-4">
                    Every Business Needs Great Content
                </h3>
                {/* Grid Layout for About Section */}
                <div className="row g-5 mb-5 align-items-center mt-5" style={{ marginLeft: "100px" }}>
                    {/* Mission Section */}
                    <div className="col-md-6" style={{ width: "500px", marginRight: "100px" }}>
                        <img src="../assets/about-1.jpg" alt="Our Mission" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-md-6" style={{ width: "500px" }}>
                        <h3 className="fw-bold text-start">Our Mission</h3>
                        <p className="text-start">
                            Our mission is to empower individuals and businesses with advanced
                            sensor technology that enhances safety, efficiency, and
                            productivity. We strive to provide accurate and reliable sensor
                            solutions that enable our customers to monitor and analyze
                            environmental conditions, detect changes, and make informed
                            decisions.
                        </p>
                    </div>

                    {/* Quality and Reliability */}

                    <div className="col-md-6" style={{ width: "500px", marginRight: "100px" }}>
                        <h3 className="fw-bold text-start">Quality and Reliability</h3>
                        <p className="text-start">
                            At SensorSphere, quality and reliability are our top priorities.
                            We source our sensors from reputable manufacturers known for their
                            precision and durability. Each sensor undergoes rigorous testing
                            and quality control measures to ensure it meets our high standards
                            and delivers accurate and consistent performance.
                        </p>
                    </div>
                    <div className="col-md-6" style={{ width: "500px" }}>
                        <img src="../assets/about-2.jpg" alt="Quality and Reliability" className="img-fluid rounded shadow"
                        />
                    </div>
                    {/* Custom Solutions */}
                    <div className="col-md-6" style={{ width: "500px", marginRight: "100px" }}>
                        <img src="../assets/about-3.jpg" alt="Custom Solutions" className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6" style={{ width: "500px" }}>
                        <h3 className="fw-bold text-start">Custom Solutions</h3>
                        <p className="text-start">
                            In addition to our standard sensor offerings, we also provide
                            custom sensor solutions tailored to meet the specific requirements
                            of our customers. Our team of skilled engineers and technicians
                            work closely with clients to design and develop custom sensor
                            solutions that address unique challenges and applications.
                        </p>
                    </div>

                    {/* Customer Support */}

                    <div className="col-md-6" style={{ width: "500px", marginRight: "100px" }}>
                        <h3 className="fw-bold text-start">Customer Support</h3>
                        <p className="text-start">
                            At SensorSphere, we are committed to providing exceptional
                            customer support and service. Our knowledgeable and friendly
                            customer support team is available to assist you with any
                            questions, concerns, or issues you may have, ensuring a smooth and
                            hassle-free experience.
                        </p>
                    </div>
                    <div className="col-md-6" style={{ width: "500px" }}>
                        <img src="../assets/about-4.jpg" alt="Customer Support" className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;




