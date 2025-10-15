import React from "react";
import "./About.css"; // Import the CSS file

function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <img
          src="./public/OIP.webp" // <-- Replace with your photo URL
          alt="Profile"
          className="about-photo"
        />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi! I'm Amr — a web developer passionate about creating modern,
            dynamic, and visually engaging websites using React. I love
            exploring new technologies, solving complex problems, and turning
            creative ideas into real digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
