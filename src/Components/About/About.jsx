import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p> I am a motivated and adaptable College student who is always eager to learn new things and grow both personally and professionally. I work well in a team, communicate effectively, and take pride in being a fast and hands-on learner. </p>
            <p>With a strong work ethic and a positive attitude, I aim to contribute meaningfully to any environment while continuing to develop my skills and knowledge</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "20%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Junior</h1>
          <p>ENTRY LEVEL</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1+</h1>
          <p>EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>0</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
