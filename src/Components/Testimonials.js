import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user} onclick="location.href = 'https://www.linkedin.com/in/anishjha93/';">
            <a href="https://www.linkedin.com/in/anishjha93/" target="blank">
            <blockquote >
               <p style={{'font-size': '14px','line-height': '24px'}}>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
            </a>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
