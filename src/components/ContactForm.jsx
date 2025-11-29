import { useState } from "react"
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const parseFormData = {
            user_email_id: formData.email,
            user_message: formData.message,
        }
        emailjs.send(
            "service_spcsdu6", // SERVICE_KEY
            "template_aozu3fr", // MAIN_TEMPLATE_ID
            parseFormData,
            "bCJ_3r-18NL1e-4rB") // PUBLIC_KEY
            .then(result => {
                // console.log('SUCCESS!', result);
                alert(`Hi ${formData.name}, Thank you for reaching out to me! I will contact you within three to five business days.`)
            })
            .catch(error => {
                // console.log('FAILED...', error);
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }
    return (
        <div id="contact-form" className="contact-form">
            <h2 className="title">Contact Information</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label htmlFor="name">Full name:</label>
                    <input type="text" name="name" id="name" required
                        value={formData.name} onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required
                        value={formData.email} onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" rows={7} required
                        value={formData.message} onChange={e => handleChange(e)} >
                    </textarea>
                </div>
                <button type="submit" className="btn-default w-full">Submit</button>
            </form>
        </div>
    )
}
export default ContactForm;