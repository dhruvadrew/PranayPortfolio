import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div class="row section-intro">
   <div class="three columns">

      <h5>Contact</h5>
      <h1>I'd Love To Connect With You.</h1>

      <p class="lead">Let me get to know more about you.</p>

   </div> 
</div> 
<div class="row contact-info">

         <div class="col-four tab-full">

            <div class="icon">
               <i class="fa fa-location-arrow"></i>
            </div>

            <h5>Where to find me</h5>

         </div>

         <div class="col-four tab-full collapse">

            <div class="icon">
               <i class="icon-mail"></i>
            </div>

            <h5>Email Me At</h5>

            <p>sunnybd97@gmail.com      
            </p>

         </div>
	      
	 <div class="col-four tab-full collapse">

            <div class="icon">
               <i class="fa fa-linkedin"></i>
            </div>

            <h5>Let's Connect</h5>
            <a href="https://www.linkedin.com/in/swkang73/" target="_blank">LinkedIn Profile</a>

         </div>
         
      </div>
        </section>
        
        );
  }
}


