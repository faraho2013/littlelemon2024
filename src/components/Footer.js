import React from "react";
import logo from '../images/Logo.svg'

const Footer = () => {
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>We are a family owned restaurant, focused on raditionl recipes served with a modern twist.</p>

                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/>7480 Shannon Rd, Chicago city, Illinois</li>
                        <li>Phone: <br/>+630-557-6011</li>
                        <li>Email: <br/>littlelemon2024@gmail.com</li>

                    </ul>
                </div>

                
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
export default Footer