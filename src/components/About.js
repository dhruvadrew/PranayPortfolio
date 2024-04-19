import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <h5>About</h5>
               <h1>Let me introduce myself.</h1>
               <div className="intro-info">
               <img className="profile-pic"  src="images/pranay-hs.png" alt="" />
               <p className="lead">
               {
                 resumeData.aboutme
               }
               </p>
               </div>
            </div>
         </div>
      </section>
    );
  }
}