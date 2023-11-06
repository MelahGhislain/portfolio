import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Melah Ghislain </span>
            from <span className="purple"> Douala Cameroon.</span>
            <br /> 
            I am currently employed as fullstack developer at Nanodev sarl.
            <br />
            Additionally, I am a graduate of Bachelor in Technology from the University of Buea.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch tech news
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believe in the power of continuous learning and personal development."{" "}
          </p>
          <footer className="blockquote-footer">Ghislain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
