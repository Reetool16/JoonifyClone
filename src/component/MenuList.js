import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assest/joonifyLogo.c691161d.svg";
import Youtube from "../assest/youtube.png";
import Facebook from "../assest/facebook.png";
import Insta from "../assest/insta.png";
import Linkdin from "../assest/link.png";
import StartUp from "../assest/startup.png";
const MenuList = () => {
  return (
    <div className="section-twelve">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={5} xl={5} className="info footerlinkdiv">
            <div className="footrejunifyimg">
              <img src={Logo} alt="" />
            </div>
            <p className="logo-desc implinktextres indfirstintass">
              India's 1st <span>Intelligent</span> Assessment Platform for
              Discovering your Child's Unique Talents &amp; Nurturing their
              Growth
            </p>
            <div className="social-media-icons socialmediaiconres">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@joonifydotcom"
              >
                <img src={Youtube} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/joonify"
              >
                <img src={Facebook} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/joonify/"
              >
                <img src={Linkdin} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/joonifydotcom/"
              >
                <img src={Insta} alt="" />
              </a>
            </div>
            <div className="footrestartupimg">
              <img src={StartUp} alt="" />
            </div>
          </Col>
          <Col xs={12} md={12} lg={7} xl={7} className="footerlinkdiv">
            <Row>
              <Col
                xs={12}
                md={4}
                lg={5}
                xl={5}
                className="implinkdivres link-text implinktextres"
              >
                <p className="links-heading implinkheadingres">
                  Important Links
                </p>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Blogs</a>
                  </li>
                  <li>
                    <a href="/">Pricing</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">School</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuList;
