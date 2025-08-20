import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.subject && formData.message) {
            try {
                const response = await fetch("http://localhost:5000/send-email", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setSubmitted(true);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                } else {
                    alert('Failed to send the message. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error sending the message. Please try again later.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Contact Us</h2>
            {submitted && <p style={styles.successMessage}>Thank you! Your message has been sent.</p>}
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={styles.textarea}
                    />
                </div>
                <button type="submit" style={styles.button}>Send Message</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: '100px auto',
        padding: '10px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '14px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        fontSize: '14px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        resize: 'vertical',
        height: '100px',
    },
    button: {
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#5cb85c',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    successMessage: {
        color: 'green',
        marginBottom: '15px',
    },
};

export default Contact;