import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Isha Patil </span>
                 and I'm from <span className="yellow"> Jalgaon , Maharashtra .</span>
                <br />
                <br />
                I am pursuing my Engineering from R.C.Patel Institute od Technology,Shirpur in Computer Stream.I had completed my Diploma From Government Polytechnic,Jalgaon
                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in programming languages such as
                    <b className="yellow"> Java,C,Javascript,SQL,Spring,MongoDB</b>
                    
                  <b className="yellow"> PHP,Laravel,React,Node.js,Tailwind CSS</b>
                  <br />
                  <br />
                  I am aslo working in 
                  with <b className="yellow">FreeLancing</b> in which 
                  <i>
                    <b className="yellow">
                      {" "}
                      I had created a website for bussinessman 
                    </b>
                  </i>
                   and 
                  <i>
                    <b className="yellow"> Hosted it LIVE</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products. </b>
                    as well as i also do 
                    <b className="yellow"> FreeLancing.</b>
                  </i>
                  I am also Contribute for 
                  <i>
                    <b className="yellow"> Open Source (HacktomberFest) </b>
                    in that i have request for  
                    <b className="yellow"> 4 Request are Accepted</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/PatilIsha/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/isha-patil-0a2290213/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/u/Isha_543/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About