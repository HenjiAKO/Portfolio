import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Hi I'm Khyle Macasilhig,</span> a Second Year College Web Developer
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        architecto eius quam a repudiandae libero cum pariatur eveniet culpa ut{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
