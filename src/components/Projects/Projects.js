import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import {ProjectData} from './projectInfo'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            ProjectData.map(project => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                imgPath={project.imagePath}
                isBlog={project.isBlog}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                webLink={project.websiteLink}
              />
            </Col>

            ))
          }

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
