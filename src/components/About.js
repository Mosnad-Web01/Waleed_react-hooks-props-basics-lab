import React from "react";
import Links from "./Links"; // Import the Links component

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>} {/* Conditional rendering */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} /> {/* Pass props to Links */}
    </div>
  );
}

export default About;
