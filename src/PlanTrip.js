import React from 'react'
import Footer from './Footer';
import "./PlanTrip.css"
import styled from "styled-components";
const Container = styled.div`
  
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1618627575331-b5f0d4cd72ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExNHxibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60")
      center;
  background-size: cover;
  
`;

const PlanTrip = () => {
    return (
        <Container>
            <h1>Our Services</h1>
            <section class="services" id="services">

    <div class="heading">
       
        <h1>Countless Expericences</h1>
    </div>

    <div class="box-container">

        <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
            <i class="fas fa-globe"></i>
            <h3>Worldwide</h3>
            <p>Create a fully customized day-by-day itinerary and discover the hidden gems of Saudi.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
            <i class="fas fa-hiking"></i>
            <h3>Adventures</h3>
            <p>Routes, rental cars and local tips: Here's everything you need to know for an unforgettable road trip adventure.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
            <i class="fas fa-utensils"></i>
            <h3>Food & Drinks</h3>
            <p>Saudi Arabia’s culinary scene is diverse, delicious and booming. From delectable gourmet cuisine to fragrant Arabic dishes, there’s something to suit every appetite and budget.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="600">
            <i class="fas fa-hotel"></i>
            <h3>Affordable Hotels</h3>
            <p>When you get into a hotel room, you lock the door, and you know there is a secrecy, there is a luxury, there is fantasy. There is comfort. There is reassurance.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="750">
            <i class="fas fa-wallet"></i>
            <h3>Affordable Price</h3>
            <p>A safe, affordable and plentiful supply of Travel is a national security issue. </p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="900">
            <i class="fas fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>To earn the respect (and eventually love) of your customers, you first have to respect those customers. That is why Golden Rule behavior is embraced by most of the winning companies.</p>
        </div>

    </div>

</section>
<Footer/>
        </Container>
    )
}

export default PlanTrip
