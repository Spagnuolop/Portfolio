import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Grow from "../../Assets/Projects/Grow-icon.jpeg";
import Food from "../../Assets/Projects/Food-icon.jpeg";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Grow}
              isBlog={false}
              title="Grow Up"
              description="E-commerce for book sales which was focused on developing functionalities to provide a pleasant and fluid experience to the user. The technologies applied for its construction were in the Front-end Reat.js, css, Bootstrap, Redux, in the Back-End JavaScript, Node.js, Express, MongoDB."
              ghLink="https://github.com/Spagnuolop/E-Commerce-Books-1"
              demoLink="https://e-commerce-books.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Food}
              isBlog={false}
              title="PI-Food"
              description="Individual project in which you can see several recipes for different foods to learn how to make them, and you can also create your own recipes and add them to the site. The technologies applied in the Front-end were Reac.js, css, Redux and in the Back-end, JavaScript, Node.js, Express, Sequelize."
              ghLink="https://github.com/Spagnuolop/PI-FOOD"
            />
          </Col>

         {/*  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Spagnuolop/PI-POKEMON"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
