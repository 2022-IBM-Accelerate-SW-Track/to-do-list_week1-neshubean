import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {profile_pic_name}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Annesha Ghosh</div>
            <div className="brief_description">
              I absolutely love learning new things. It amazes me how these learnings expand my perspective and understanding of the world.
              This plays into the fascination I have with philosophical discussions and deep, intellectual conversations.
              I also adore reading, singing and traveling! :D
            </div>
          </div>
        </div>
      </div>
    )
  }
}