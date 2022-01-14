import React from 'react';
import "./App.css";
import styled from "styled-components";
const Container = styled.div`
  
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1640011654969-5cebce51da09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60")
      center;
  background-size: cover;
  
`;

const Home = () => {
    return (
        <Container>
         <div className='hero-container'>
    <h1 >ADVENTURE AWAITS</h1>
     <p style = {{color:"black",fontSize:"35px"}}>ONE LIFE.</p>
    <p style = {{color:"black",fontSize:"35px"}}>ONE WORLD.</p>
    <p style = {{color:"black",fontSize:"35px"}}>EXPLORE It.</p> 
   <p style = {{color:"SteelBlue",fontSize:"80px" }} >  <i class="fas fa-paper-plane">TRVL</i></p>
      <button className='btn' style = {{backgroundColor:"rgb(255,102,217)",marginTop:"-5px",paddingLeft:"20px"}}><a href = "/logonav"style={{textDecoration:"none",color:"black"}} >GET STARTED</a></button>

</div> 


    
    
   
    
  </Container>
//   <div>
   
// <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="02" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
      
//       <img src="https://images.unsplash.com/photo-1640011654969-5cebce51da09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//                 <h1 style={{color:"Black"}}><b>ADVENTURE AWAITS</b></h1>
//                 <p><b>TO TRAVEL TO LIFE</b></p>
//                 <p style = {{color:"black",fontSize:"35px"}}><b>ONE WORLD.</b></p>
//   <p style = {{color:"black",fontSize:"35px"}}>EXPLORE It.</p>     <p style = {{color:"SteelBlue",fontSize:"80px" }} >  <i class="fas fa-paper-plane">TRVL</i></p>
             
//                 <button class="btn btn-primary"><a href="/logonav"style={{textDecoration:"none",color:"white"}}>GET STARTED</a></button>
              
//               </div>
//     </div>
//     <div class="carousel-item">
//       <img src="https://source.unsplash.com/1400x600/?toorist place, place" class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//                 <h1 style={{color:"Black"}}><b>ADVENTURE AWAITS</b></h1>
//                 <p><b>TO TRAVEL TO LIFE</b></p>
//                 <p style = {{color:"black",fontSize:"35px"}}><b>ONE WORLD.</b></p>
//   <p style = {{color:"black",fontSize:"35px"}}>EXPLORE It.</p>     <p style = {{color:"SteelBlue",fontSize:"80px" }} >  <i class="fas fa-paper-plane">TRVL</i></p>
             
//                 <button class="btn btn-primary"><a href="/logonav"style={{textDecoration:"none",color:"white"}}>GET STARTED</a></button>
              
//               </div>
//     </div>
//     <div class="carousel-item">
//       <img src="https://source.unsplash.com/1400x600/?toorist place,Pike Place Market
// " class="d-block w-100" alt="..."/>
//     <div class="carousel-caption d-none d-md-block">
//                 <h1 style={{color:"black"}}><b>ADVENTURE AWAITS</b></h1>
//                 <p><b>TO TRAVEL TO LIFE</b></p>
//                 <p style = {{color:"black",fontSize:"35px"}}><b>ONE WORLD.</b></p>
//   <p style = {{color:"black",fontSize:"35px"}}>EXPLORE It.</p>     <p style = {{color:"SteelBlue",fontSize:"80px" }} >  <i class="fas fa-paper-plane">TRVL</i></p>
             
//                 <button class="btn btn-primary"><a href="/logonav"style={{textDecoration:"none",color:"white"}}>GET STARTED</a></button>
              
//               </div>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//   </div>

 
  


    )
}

export default Home
