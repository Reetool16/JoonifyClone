import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = ({ children, height }) => {
  const bannerStyle = {
    height: height || "auto",
  };

  return (
    <div className="banner" style={bannerStyle}>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="banner-content">{children}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
