import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/Pro_Web_Ser.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Professional Web Services"
              description="This website is designed to provide professional web services to clients. It features a responsive interface built with Reactjs and CSS, allowing users to easily navigate through the site and access the services offered. The website includes a contact form for users to reach out to the company for inquiries. The backend is powered by Spring , while MongoDB is utilized as the database."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="E-Commerence Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/PatilIsha/ecommerce-product-listing.git"
              demoLink="https://ishaemart.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Take Care"
              description="Take Care is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform,with php and in that Patient is take Appointment of Doctor."
              ghLink="https://github.com/PatilIsha/TechCare.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Book-Reviewer"
              description="This project is built using Laravel and React, serving as the backend for a 3-tier application architecture. The frontend application is developed using Next.js and can be found here."
              ghLink="https://github.com/PatilIsha/Book-Reviewer.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Marconi Website"
              description="Marconi website for the bussinessman in which i have added map,mail features,this is my freelancing project ,with html,css,javascript."
              ghLink="https://github.com/PatilIsha/MarconiWebsite.git"
              demoLink="https://marconirenewenergy.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="porfolio"
              description="Portfolio with interactive features in which , all about my self information is there ,and with tailwind css  i have done this."
              ghLink="https://ishpatil.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects