import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiGatsby,
  SiNestjs,
} from "react-icons/si";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

function Techstack() {
  return (
    <>
      <Tooltip id="tech-stack" />
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Typescript">
          <SiTypescript />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Javascript">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Python">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Node.js">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="React">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Redux Toolkit">
          <SiRedux />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Mogodb">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Next.js">
          <SiNextdotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Git">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Firebase">
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Redis">
          <SiRedis />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Postgresql">
          <SiPostgresql />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Java">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Tailwind css">
          <SiTailwindcss />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Gatsby.js">
          <SiGatsby />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Next.js">
          <SiNextdotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Nestjs">
          <SiNestjs />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
