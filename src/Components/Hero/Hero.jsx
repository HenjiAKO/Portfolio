import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Henji,</span> a Second Year College Web Developer in
        Philippines
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        architecto eius quam a repudiandae libero cum pariatur eveniet culpa ut{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
