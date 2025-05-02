import React from 'react';
import { Mail, Phone, Github } from 'lucide-react'; // or use Font Awesome if preferred
import '../../assets/styles/components/contact.css';
import Footer from './Footer';

const Contact = () => {
    return (
        <section id="contact" className='section' >
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Me</h2>
                    <p>If you'd like to collaborate or just say hi, feel free to reach out!</p>
                    <ul>
                        <li><Mail size={18} /> <a href="mailto:kaarel.viilvere@voco.ee">kaarel.viilvere@voco.ee</a></li>
                        <li><Phone size={18} /> <a href="tel:+37256685372">+372 566 85 372</a></li>
                        <li><Github size={18} /> <a href="https://github.com/kaarelvv" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Contact;
