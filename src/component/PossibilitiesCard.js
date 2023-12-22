import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Learning from "../assest/pone.svg";
import Talents from "../assest/ptwo.png";
import Traits from "../assest/pthird.png";
import Paths from "../assest/pfour.png";
import Profiles from "../assest/pfive.png";
import Personalities from "../assest/psix.png";

const PossibilitiesCard = (props) => {
  const learningDimensionsData = [
    {
      image: Learning,
      title: "Learning Dimensions",
      description:
        "Gain insight into your child’s thinking style & childhood developmental stages.",
      colors: "#2a2a84",
    },
    {
      image: Talents,
      title: "Unique Talents",
      description:
        "Uncover your child’s inherent talents. Are they entrepreneurial, creative, musical, etc?",
      colors: "#ed037c",
    },
    {
      image: Traits,
      title: "Personality Traits",
      description:
        "Extrovert or introvert? Creative or practical? Understand your child’s inherent personality.",
      colors: "#00c9ff",
    },
    {
      image: Paths,
      title: "Learning Paths",
      description:
        "Know your child’s areas of interest and support to tailor personalised learning paths for all-rounded growth and development.",
      colors: "#ffc929",
    },
    {
      image: Profiles,
      title: "Interest Profiles",
      description:
        "Know what interests your child is most inclined towards for happy & joyful learning.",
      colors: "#2a88b5",
    },
    {
      image: Personalities,
      title: "Famous Personalities",
      description:
        "Find out which celebrities share your child’s similar profiling.",
      colors: "#ff5c00",
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          {learningDimensionsData.map((dimension, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4}>
              <img
                src={dimension.image}
                alt={dimension.title}
                style={{
                  width: "100px",
                  marginBottom: "10px",
                  height: "100px",
                }}
              />
              <h2
                className="heading-images"
                style={{ color: `${dimension.colors}` }}
              >
                {dimension.title}
              </h2>
              <p className="description-images">{dimension.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PossibilitiesCard;
