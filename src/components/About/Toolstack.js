import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiMicrosoftteams
} from "react-icons/si";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

function Toolstack() {
  return (
    <>
      <Tooltip id="tool-stack" />
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Macos">
          <SiMacos />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Visual studio code">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Postman">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Slack">
          <SiSlack />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Microsoft teams">
          <SiMicrosoftteams />
        </Col>
        <Col xs={4} md={2} className="tech-icons" data-tooltip-id="tech-stack" data-tooltip-content="Vercel">
          <SiVercel />
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
