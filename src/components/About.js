import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row section-intro">

            <div className="three columns">

               <h5>About</h5>
               <h1>Let me introduce myself.</h1>
               <div className="intro-info">
               <img className="profile-pic"  src="images/pranay-hs.png" alt="" />
               </div>
               <div>
               <p className="lead">
               {
                 resumeData.aboutme
               }
               </p>
               </div>
               <div className="intro-buttons">
               <a href="#contact" title="Hire Me" class="button stroke smoothscroll">Hire Me</a>
               <a href="files/resume.pdf" title="Download CV" class="button button-primary">Download CV</a>
               </div>
            </div>
         </div>
      </section>
    );
  }
}