import React from "react";
import { Link } from "react-router-dom";
import aboutBannerImg from "../images/about-banner.png";

export default function About() {
  return (
    <section className="about-container">
      <img
        className="about-banner-img"
        src={aboutBannerImg}
        alt="A man is looking at the stars on top of a van in the night."
      />
      <div className="about-content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-action-container">
          <h2>
            Your destination is waiting. <br />
            Your van is ready.
          </h2>
          <Link to="/vans" className="link-button">
            Explore our vans
          </Link>
        </div>
      </div>
    </section>
  );
}
