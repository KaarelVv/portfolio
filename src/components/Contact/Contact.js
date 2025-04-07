import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="section">
            <h1>Contact Me</h1>
            <p>If you want to collaborate, have questions, or just want to say hi, feel free to reach out:</p>
            <ul>
                <li>Email: <a href="mailto:kaarel.viilvere@voco.ee">kaarel.viilvere@voco.ee</a></li>
                <li>Phone: +372 566 85 372</li>
                <li><a href="https://github.com/kaarelvv">GitHub</a></li>
                {/* <li><a href="https://www.linkedin.com/in//">LinkedIn</a></li> */}
            </ul>
        </div>
    );
};

export default Contact;


