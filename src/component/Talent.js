import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import ArrowLeft from "../assest/arrowLeft.svg";
import ArrowRight from "../assest/arrowRight.svg";
import TalentBanner from "../assest/talent.webp";
import Download from "../assest/1000.svg";
import Parents from "../assest/700.svg";
import Session from "../assest/350.svg";
import Learners from "../assest/500.svg";
const Talent = () => {
  return (
    <div className="Talent_report">
      <Container>
        <p className="head_talent">Preview of your child’s</p>
        <p className="main_head_talent">Talent Report</p>

        <Row className="arrows">
          <Col xs={4} style={{ textAlign: "end" }} className="p-0">
            <img
              src={ArrowLeft}
              className="arrowLeftimg"
              alt=""
              loading="lazy"
            />
          </Col>
          <Col xs={4} className="p-0">
            <p className="box-text_talent">
              Revealing the magic:
              <br /> your child’s talent report awaits!
            </p>
          </Col>
          <Col xs={4} className="p-0">
            <img
              src={ArrowRight}
              className="arrowrightimg"
              alt=""
              loading="lazy"
            />
          </Col>
        </Row>

        <div className="" style={{ margin: "80px 0" }}>
          <img
            src={TalentBanner}
            className="d-none d-md-block"
            alt=""
            loading="lazy"
            width="100%"
          />
          {/* <img
              src="/_next/static/media/Talent_report_img.e5f265e1.webp"
              className="d-block d-md-none"
              alt=""
              loading="lazy"
            /> */}
        </div>

        <div className="">
          <Form className="talent-form">
            <Row>
              <Col md={4} className="">
                <Form.Control
                  placeholder="Full Name"
                  autoComplete="off"
                  name="full_name"
                  className="form-input-email"
                />
              </Col>
              <Col md={4} className="">
                <Form.Control
                  placeholder="Enter your Email"
                  autoComplete="off"
                  name="email"
                  className="form-input-email"
                />
              </Col>
              <Col md={4}>
                <Button className="btn-center-report">
                  Email Sample Report
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        <div className="" style={{ margin: "100px 0" }}>
          <Row className="">
            {/* First Number Section */}
            <Col lg={3} md={6} className="">
              <div className="">
                <div className="d-flex justify-content-start">
                  <div>
                    <img src={Download} alt="" loading="lazy" />
                  </div>
                  <div>
                    <p className="animated-number" style={{ color: "#ed037c" }}>
                      &nbsp;<span id="counter1">1,000</span>
                      <span>+</span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="animate-description" style={{ color: "#ed037c" }}>
                Reports Downloaded
              </p>
            </Col>

            {/* Second Number Section */}
            <Col lg={3} md={6} className="">
              <div className="">
                <div className="d-flex justify-content-start">
                  <div>
                    <img src={Parents} alt="" loading="lazy" />
                  </div>
                  <div>
                    <p
                      className="animated-number"
                      style={{ color: "rgb(255, 92, 0)" }}
                    >
                      &nbsp;<span id="counter3">700</span>+
                    </p>
                  </div>
                </div>
              </div>
              <p
                className="animate-description"
                style={{ color: "rgb(255, 92, 0)" }}
              >
                Happy Parents
              </p>
            </Col>

            {/* Third Number Section */}
            <Col lg={3} md={6} className="">
              <center>
                <div className="">
                  <div className="d-flex justify-content-start">
                    <div>
                      <img src={Session} alt="" loading="lazy" />
                    </div>
                    <div>
                      <p
                        className="animated-number"
                        style={{ color: "rgb(255, 201, 41)" }}
                      >
                        &nbsp;<span id="counter2">350</span>+
                      </p>
                    </div>
                  </div>
                </div>
              </center>
              <p
                className="animate-description"
                style={{ color: "rgb(255, 201, 41)" }}
              >
                Counseling Sessions
              </p>
            </Col>

            {/* Fourth Number Section */}
            <Col lg={3} md={6} className="">
              <div className="">
                <div className="d-flex justify-content-start">
                  <div>
                    <img src={Learners} alt="" loading="lazy" />
                  </div>
                  <div>
                    <p
                      className="animated-number"
                      style={{ color: "rgb(0, 201, 255)" }}
                    >
                      &nbsp;<span id="counter4">500</span>+
                    </p>
                  </div>
                </div>
              </div>
              <p
                className="animate-description"
                style={{ color: "rgb(0, 201, 255)" }}
              >
                Engaged Learners
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Talent;
