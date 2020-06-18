import React, { Component } from "react";
import "./css/about.css";
import "./fontawesome/css/all.css";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="about-container">
          <img src={require("./computer.jpg")}></img>
          <p>
            Hello There,This is basically a website of games and
            applications.This is fully front-end website built using
            React-Js.You will notice that the page doesn't reload when you
            swicth between the apps.Thanks for visiting the website.
          </p>
          <div className="social-media">
            <img src={require("./socialmedia.png")}></img>
          </div>
          <div className="icons">
            <p>Any suggestions would be appreciated</p>
            <a href="https://www.facebook.com/saiteja.balla.311/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://github.com/saiteja623/" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/saiteja_balla0713/"
              target="_blank"
            >
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
