import React from "react";
import logo from '../images/team_member.jpg'
import logo2 from '../images/avatar_g2.jpg'


const Testimonials = () => {
    return (
        <testimonials>
            <section class="cards">
                <div class="testimonial">
                    <img src={logo2} alt="Avatar"/>
                    <p class="title">Chris Fox</p>
                    <p>CEO at Little Lemon.</p>
                    <p>Decicated the Passion for Serving Customers at the best.</p>
                </div>

                <div class="testimonial">
                    <img src={logo} alt="Avatar"/>
                    <p class="title">Rebecca Foster</p>
                    <p>Master Chef at Company.</p>
                    <p>No one is better in serving customers than the Little Lemon.</p>
                </div>
            </section>
        </testimonials>
    )
}
export default Testimonials