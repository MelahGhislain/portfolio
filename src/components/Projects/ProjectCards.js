import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgGlobeAlt, CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
          <br />
          Tech Stack: &nbsp;
          <span className="purple">{props.techStack}</span>
        </Card.Text>
        {props.isBlog && <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {(props.webLink || props.demoLink) && (
          <Button
            variant="primary"
            href={props.webLink ?? props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            {props.webLink? <CgGlobeAlt /> : <CgWebsite />}
            &nbsp;
            <span style={{fontSize: '15px'}}>{props.webLink ? "Website" : "Demo"}</span>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
