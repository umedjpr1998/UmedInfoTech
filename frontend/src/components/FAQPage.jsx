import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Where can I get a sensor module?",
            answer:
                "Sensors online shopping is now easy at Robocraze with best sensor prices with special offers and free shipping above Rs.500. Buy sensors online in bulk or smaller quantities at the best price on our website.",
        },
        {
            question: "What is the most accurate Sensors and chips value Website?",
            answer:
                "Our Sensor and chip values are sourced from reputable manufacturers and suppliers known for their accuracy and reliability in the industry...",
        },
        {
            question: "What is the difference between a sensor and a module?",
            answer:
                "Sensors and modules are electronic devices that detect and respond to inputs. Modules often include extra components like voltage regulators and headers.",
        },
        {
            question: "Can I Trust a Sensors Site?",
            answer:
                "Absolutely, you can trust our Sensor sites. We are committed to providing high-quality, reliable sensors that meet industry standards and regulations.",
        },
        {
            question: "Exporting Content and Publishing",
            answer:
                "You can easily export content and publish it using our platform in formats like CSV, Excel, and PDF.",
        },
        {
            question: "Getting started with SensorSphere",
            answer:
                "To begin, choose and order the sensors that best suit your needs. Then follow the setup instructions.",
        },
        {
            question: "How can I Get More Content Credit",
            answer:
                "Produce high-quality, original content consistently, engage with the community, and promote your content.",
        },
        {
            question: "I wish to Cancel My Subscription",
            answer:
                "Log in to your account and go to the 'Subscription' section to cancel.",
        },
        {
            question: "Requesting Revisions",
            answer:
                "Reach out to our customer support team for any concerns or revision requests.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-light min-vh-100 py-5">
            <div className="container">
                <h1 className="text-center mb-5 fw-bold">📌 Frequently Asked Questions</h1>
                <div className="accordion shadow-sm rounded bg-white m-auto w-75">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-bottom">
                            <button
                                className="w-100 text-start px-4 py-3 d-flex justify-content-between align-items-center bg-white border-0"
                                onClick={() => toggleFAQ(index)}
                                style={{ outline: "none", fontSize: "1.1rem" }}
                            >
                                <span>{faq.question}</span>
                                <span>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
                            </button>
                            {openIndex === index && (
                                <div className="px-4 pb-3 text-muted">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
