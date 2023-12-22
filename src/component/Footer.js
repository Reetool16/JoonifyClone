import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <p className="footer-links privatepolicy1">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-and-conditions">Terms &amp; Conditions</a>
              <a href="/refund-policy">Refund Policy</a>
              <a href="/assessment-terms-and-conditions">
                Assessment Terms &amp; Conditions
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer-text">
              © 2023 Learners Technology Pvt. Ltd. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
