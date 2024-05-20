import { useState } from 'react';
import './ContactUs.css'; // Import CSS file

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    });

    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });

        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setDisabled(true);

            // Implement your logic for form submission here
            // For now, let's log the form data
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);

            toggleAlert('Form submission was successful!', 'success');
        } catch (error) {
            console.error(error);
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            setDisabled(false);
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            {alertInfo.display && (
                <div className={`contact-alert alert-${alertInfo.type}`} role='alert'>
                    {alertInfo.message}
                    <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='alert'
                        aria-label='Close'
                        onClick={() => setAlertInfo({ display: false, message: '', type: '' })}
                    ></button>
                </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={disabled}>Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;
