import React from 'react'
import Footer from './Footer';
import "./Things.css"
import styled from "styled-components";
const Container = styled.div`

  
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1640044262720-e198a086ac6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60")
      center;
  background-size: cover;
  
`;

const Things = () => {
    return (
        <Container>
            
                <div className="container">
                <h1>Our most Wanted Destinations !!!</h1>
              <center> <p>Visitors are spoiled for choice, with a range of attractions from<br /> museums and galleries, markets, sports, desert safaris by the spectacular<br /> Inland Sea or the UNESCO-listed Al Zubarah Fort. </p></center>
              </div>

              <section class="destination" id="destination">

    
    <div class="box-container">

        <div class="box" data-aos="fade-up" data-aos-delay="150">
            <div class="image">
                <img src="https://media.istockphoto.com/photos/young-woman-riding-bicycle-on-wooden-pier-in-the-maldives-picture-id1298306226?b=1&k=20&m=1298306226&s=170667a&w=0&h=pMdUiuUrYDwpLBq69acmj8YCLqTLtrcP3QO-kOyth0g=" alt=""/>
            </div>
            <div class="content">
                <h3>Tours & Travel</h3>
                <p>Planning to travel anytime soon? Subscribe to my email list for exclusive travel tips, hacks, and other resources to save time and money!</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="300">
            <div class="image">
                <img src="https://media.istockphoto.com/photos/scenic-aerial-view-of-two-boats-on-sea-in-thailand-picture-id1136324597?b=1&k=20&m=1136324597&s=170667a&w=0&h=CCzSbAQX9oQh-04efEoP-hYnVjnBaVS0ZYV5398OPUs=" alt=""/>
            </div>
            <div class="content">
                <h3>Cruising</h3>
                <p>To move, to breathe, to fly, to boat, to gain all while you give, to roam the roads of lands remote, to travel is to live....</p>
                <a href="/crusing">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="450">
            <div class="image">
                <img src="https://media.istockphoto.com/photos/young-couple-in-snorkeling-mask-dive-underwater-in-tropical-sea-picture-id1282649181?b=1&k=20&m=1282649181&s=170667a&w=0&h=RPa9NWz3ONcwLG8_nJCUsMnvOrJrQHpgEqfyHyrOJPs=" alt=""/>
            </div>
            <div class="content">
                <h3>Scuba diving</h3>
                <p>People’s point of view differs when it comes to scuba diving. For some, it’s their favorite ocean sports and the best experience one can have to discover sea life like the coral reefs, neon eels, and magnificent sharks.</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="600">
            <div class="image">
                <img src="https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E=" alt=""/>
            </div>
            <div class="content">
                <h3>Sundown</h3>
                <p>Really appreciate the sunset as you're driving home, cursing all the terrible drivers on the road. Be where you are, when you're there, rather than out there in the future, or back there in the past.</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="750">
            <div class="image">
                <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbCUyMGlzbGFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            </div>
            <div class="content">
                <h3>Hiking</h3>
                <p>The beautiful thing about hiking is that it's truly an activity everyone can do. Whether you're young or old, an expert or an amateur, there's a trail out there that will be perfect for you.</p>
                <a href="/hike">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="900">
            <div class="image">
                <img src="https://images.unsplash.com/photo-1523538290088-51e3e7d1c00d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbCUyMGlzbGFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            </div>
            <div class="content">
                <h3>Seaside</h3>
                <p>Your beach vacation is supposed to be relaxing, but that doesn’t always mean it’s a seamless transition. The soft sand beneath your feet, the beautiful waves crashing on the shoreline, and the entire ocean at your fingertips is so restorative.</p>
                <a href="/seaside">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="1150">
            <div class="image">
                <img src="https://images.unsplash.com/photo-1520483601560-389dff434fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbCUyMGlzbGFuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            </div>
            <div class="content">
                <h3>The coast</h3>
                <p>The sea is calm tonight.
The tide is full, the moon lies fair
Upon the straits;- on the French coast the light
Gleams and is gone; the cliffs of England stand,
glimmering and vast, out in the tranquil bay</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="1300">
            <div class="image">
                <img src="https://media.istockphoto.com/photos/friends-laughing-around-the-bonfire-on-the-beach-at-sunset-picture-id1181450953?b=1&k=20&m=1181450953&s=170667a&w=0&h=veqIAbau8H45nKz0kSNkGuL1PdR73PjG__KgWov1U1c=" alt=""/>
            </div>
            <div class="content">
                <h3>Outing</h3>
                <p>Each outing is its own game. You roll on your game plan. It is a different chess match each time you go out there. I just try to be prepared.Every outing is a learning experience</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

    </div>

</section>
             

        <Footer/>    
              

        </Container>
      
    )
}

export default Things
