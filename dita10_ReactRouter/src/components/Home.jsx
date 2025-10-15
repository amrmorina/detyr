import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>
          I'm Amr — a web developer passionate about crafting interactive,
          modern, and responsive experiences using React. Explore my work,
          learn more about me, or get in touch!
        </p>
      </section>

      <section className="gallery">
        <div className="gallery-item">
          <img
            src="./public/sdsa.jpg"
            alt="Project 1"
          />
          <h3>Project One</h3>
          <p>A creative web app showcasing modern UI and clean design.</p>
        </div>

        <div className="gallery-item">
          <img
            src="./public/sa.jpg"
            alt="Project 2"
          />
          <h3>Project Two</h3>
          <p>Building interactive and dynamic features using React hooks.</p>
        </div>

        <div className="gallery-item">
          <img
            src="./public/das.webp"
            alt="Project 3"
          />
          <h3>Project Three</h3>
          <p>Responsive design that looks beautiful on every screen size.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;