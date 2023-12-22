import React, { useState } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { FaPlayCircle } from "react-icons/fa";
import Naufeera from "../assest/nz.png";
import Priyanka from "../assest/pr.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoundZubin from "../assest/rnz.png";
import RoundPrerna from "../assest/rpc.png";
import RoundSonam from "../assest/rsb.png";
import RoundNeha from "../assest/rns.png";
import RoundRathi from "../assest/rpr.png";
const ParentCarousel = () => {
  const [index, setIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (current, next) => setIndex(next), // Sync with react-bootstrap/Carousel
  };

  const parentsData = [
    {
      parentName: "Naufeera Zubin",
      parentRelation: "mother of Arya Zubin",
      roundImage: RoundZubin,
      imagePaths: {
        profile: Naufeera,
      },
      description:
        "Joonify has been a tremendous gift to us in our fast-paced daily life. It has removed my constant need to micro-manage my kid’s activities. Plus the initial analysis is such a great tool to discover my kid’s aptitude. Truly an ingenious product and a game changer for busy parents.",
    },
    {
      parentName: "Prerna Chaudhary",
      parentRelation: "mother of Suvigya Chaudhary",
      roundImage: RoundPrerna,
      imagePaths: {
        profile: "/_next/static/media/Prerna_Chaudhary_1.50017cb9.png",
      },
      video: {
        source:
          "https://joonify.s3.amazonaws.com/dev/8lFOZCE1JkWJ92-vZBrjx_PrernaChaudhary.mp4",
        poster: "/_next/static/media/Prerna_Chaudhary.abf7d854.png",
        width: 400,
      },
      description:
        "Overall, it's a good platform to understand and keep abreast of all the latest trends & opportunities available for your kids. Offers a 360-degree assessment of the child’s overall personality. The animation features made it extremely interesting and fun for my kids.",
    },
    {
      parentName: "Sonam Baxi",
      parentRelation: "mother of Rhea Baxi",
      roundImage: RoundSonam,
      imagePaths: {
        profile: "/_next/static/media/Sonam_Baxi_1.b5ded7d0.png",
      },
      video: {
        source:
          "https://joonify.s3.amazonaws.com/dev/pvgYR7qo2B5e9JRY4hvjL_SonamBaxi.mp4",
        poster: "/_next/static/media/Sonam_Baxi.2df2be5a.png",
        width: 400,
      },
      description:
        "Loved the way Joonify is interested in my child’s details. Being a doctor myself I understand how a child’s psychology works and I’m amazed by their Talent Analysis Report.! It’s definitely a must-try! Super easy on kids and parents and directs you in the right direction to learn and grow.",
    },
    {
      parentName: "Neha Sanghvi",
      parentRelation: "mother of Aarav Sanghvi",
      roundImage: RoundNeha,
      imagePaths: {
        profile: "/_next/static/media/Neha_Sanghvi_1.c77bd8da.png",
      },
      video: {
        source:
          "https://joonify.s3.amazonaws.com/dev/OrqJz13_gg7X0cqD7OEnl_NehaSanghvi.mp4",
        poster: "/_next/static/media/Neha_Sanghvi.2ddbd146.png",
        width: 400,
      },
      description:
        "Impressive because it gets you analyzing and assessing your kids not just on an academic or athletic level but even deeper. The website in itself is fun and interactive. It offers a range of animated and interactive content that assist us through the whole assessment process.",
    },
    {
      parentName: "Priyanka Rathi",
      parentRelation: "mother of Naira Rathi",
      roundImage: RoundRathi,
      imagePaths: {
        profile: Priyanka,
        video: "/_next/static/media/Priyanka_rathi1.24748f67.png",
      },
      description:
        "What got my grateful approval on Joonify was its in-depth profiling of my children’s personality, traits, habits, interests, strengths and characteristics. The extent is so detailed that it had me thinking and diving deep into peeling each layer of their personalities.",
    },
  ];

  return (
    <Slider {...settings} className="slickcarsoselcontentouterhome">
      {parentsData.map((parent, idx) => (
        <div key={idx} className="slick-slide">
          <div className="slick-slide2 ">
            <Card id="slider-vid">
              <div>
                <img class="sliderprofile" src={parent.roundImage} alt="" />
              </div>
              <Card.Title id="parentname">{parent.parentName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" id="parentrelation">
                {parent.parentRelation}
              </Card.Subtitle>
              {parent.video ? (
                <div style={{ textAlign: "center" }}>
                  <FaPlayCircle
                    size={30}
                    color="#2A2A84"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <video
                    controls
                    poster={parent.video.poster}
                    className="vidimg"
                  >
                    <source src={parent.video.source} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Card.Img
                  variant="top"
                  src={parent.imagePaths.profile}
                  alt={`${parent.parentName}'s Profile`}
                  className="vidimg"
                />
              )}
              <Card.Body>
                <Card.Text>{parent.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ParentCarousel;
