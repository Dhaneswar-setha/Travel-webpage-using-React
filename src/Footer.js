import React from 'react'
import "./Footer.css"



const Footer = () => {
    return (
        <div>
           <footer className="footer">
               <div className="container">
                   <div className="row">
<div className="footer-col">
<a href="#"  className="logo ft-1"> <i class="fas fa-paper-plane"></i> TRVL</a>
                       <p style={{color:"white" }}>"Planning to travel anytime soon? Subscribe to my email list for exclusive travel tips, hacks, and other resources to save time and money! "</p>
                          
                   <div class="box" data-aos="fade-up" data-aos-delay="150">
           
            
           <div class="share">
               <a href="#" class="fab fa-facebook-f"></a>
               <a href="#" class="fab fa-twitter"></a>
               <a href="#" class="fab fa-instagram"></a>
               <a href="#" class="fab fa-linkedin"></a>
           </div>
       </div>   
                       
</div>
                       
                       <div className="footer-col">
                       <h4>Quick Links</h4>
                       <ul>
                           <li><a href = "/">Home</a></li>
                           <li><a href = "/about">About</a></li>
                           <li><a href = "/things">Destinations</a></li>
                           <li><a href = "/event">Gallery</a></li>
                         <li><a href = "/contact">Contact</a></li>
                           <li><a href = "/term">Term&amp;Condition</a></li>
                           
                       </ul>
                       </div>

                   <div className="footer-col">
                       <h4>Our Address</h4>
               <ul>
                           <li><a href = "#"><i class="fas fa-map-marker-alt"></i> Bhubaneswar,Odisha-75101</a></li>
                           <li><a href = "#"><i class="fas fa-phone-alt"></i> 7683939162</a></li>
                            <li> <a href = "#"><i class="fas fa-envelope"></i> monalisamoharana99@gmail.com</a></li>
                           <li><a href = "#"><i class="fas fa-clock"></i> 7.00am-10.00pm</a></li>
                       </ul>
                           <div id="custom_html-2" class="widget_text widget widget_custom_html"><div class="textwidget custom-html-widget"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.1716398567423!2d-79.89752024846237!3d43.33159728108163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b46ae9c677a21%3A0x7d1955fe83de6541!2sSunrise%20Travel%20Services%2C%20ULC!5e0!3m2!1sen!2sus!4v1588794868651!5m2!1sen!2sus" style={{width:"400", height:"250" ,frameborder:"0"}} style={{ border: "0px" ,maxWidth: "100%" ,maxHeight: "233px"}} allowfullscreen="" aria-hidden="false" tabindex="0">
                               
                           </iframe>
                           </div></div>
                          
                   </div>
                   

                   <div className="footer-col">
                       <h4>Newsletter</h4>
                       <p>subscribe for latest updates</p>
            <form action="">
                <input type="email" name="" placeholder="Enter your mail" class="email" id=""/>
                
                <button  class="btn btn-outline-danger" style={{ borderColor: "RED", color:"white", borderStyle: "solid",
            
            borderRadius: 3,
            marginLeft: 6}}><a href='/plantrip'style={{textDecoration:"none"}}>Subscribe</a></button>
        
            </form>
                   </div>
             

                   </div>
               </div>
           </footer>

<div class="credit">created by <span>Monalisa Moharana</span> | all rights reserved!</div>
        </div>
    )
}

export default Footer
