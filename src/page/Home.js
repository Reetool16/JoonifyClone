import React from "react";
import MyNavbar from "../component/Navbar";
import Talent from "../component/Talent";
import Banner from "../component/Banner";
import PossibilitiesCard from "../component/PossibilitiesCard";
import MenuList from "../component/MenuList";
import FaqAccordion from "../component/Faq";
import ControlledCarousel from "../component/Carousel";
import { Button, Container, Row, Col, Dropdown } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Tick from "../assest/tick.png";
import Line from "../assest/line.svg";
import Access from "../assest/8.svg";
import Detailed from "../assest/detail.svg";
import Counselling from "../assest/counselling.svg";
import Course from "../assest/course.svg";
import Bullets from "../assest/bullet.svg";
import PriceTag from "../assest/pricetag.png";
import PriceShort from "../assest/pricetag2.svg";
import ShortLine from "../assest/line2.svg";
import GreenTick from "../assest/jp.svg";
import WrongTick from "../assest/tp.svg";
import Discovery from "../assest/discovery.svg";
import Star from "../assest/star.png";
import SnakeArrow from "../assest/snake.svg";
import Footer from "../component/Footer";
import priceCut from "../assest/pricecut.svg";

const Home = () => {
  const testimonialsData = [
    {
      name: "Sonam Baxi",
      role: "Mother of Rhea Baxi",
      comment:
        "“Being a doctor myself, I understand how a child’s psychology works and I’m amazed by their Talent Analysis Report!”",
    },
    {
      name: "Naufeera Zubin",
      role: "Mother of Arya Zubin",
      comment:
        "“Report is such a great tool to discover my kids' aptitude. Game changer for busy parents.”",
    },
  ];
  const pricingData = [
    {
      image: Access,
      title: "Access to take all 8 learning assessments",
      description: [],
    },
    {
      image: Detailed,
      title: "Detailed Report",
      description: [
        "Top performing learning dimensions.",
        "Top 6 talents of your child.",
        "Top 3 personality traits of your child.",
        "Top interest areas for your child.",
        "Learning needs of your child.",
        "Overall cognitive profiling assessment.",
      ],
      price: "₹1299",
    },
    {
      image: Counselling,
      title: "Counselling call with our expert child counsellor",
      description: [
        "In-depth understanding of the Talent Discovery Report",
        "Learn how to use the report to help your child learn better",
        "Receive class recommendations tailored for your child's growth & development.",
      ],
      price: "₹999",
    },
    {
      image: Course,
      title: "Joonify course & community access",
      description: [
        "Access to hundreds of courses personalised for your child",
        "Exclusive offers on courses and programs for your child.",
      ],
      price: "₹699",
    },
  ];

  const parentsData = [
    {
      benefit: "Insight into child's unique talents, strengths, personality",
      joonifyImage: GreenTick,
      traditionalImage: WrongTick,
    },
    {
      benefit: "Deeper connection with their children",
      joonifyImage: GreenTick,
      traditionalImage: WrongTick,
    },
    // Repeat the pattern for other benefits...
    {
      benefit: "Holistic education for their child at an early age",
      joonifyImage: GreenTick,
      traditionalImage: WrongTick,
    },
    {
      benefit: "Personalized learning plan tailored to their child",
      joonifyImage: GreenTick,
      traditionalImage: WrongTick,
    },
    {
      benefit: "Education that is inline with the NEP's policy of ECCE",
      joonifyImage: GreenTick,
      traditionalImage: WrongTick,
    },
    {
      benefit:
        "Ability to make better decisions for their children on what courses to enroll in, so they are not just following the crowd",
      joonifyImage: GreenTick,
      traditionalImage: WrongTick,
    },
    {
      benefit:
        "Keep children excited & joyful about learning by not overburdening them with courses they aren't interested in.",
      joonifyImage: GreenTick,
      traditionalImage: WrongTick,
    },
    {
      benefit: "Ability to track child's progress all in one area",
      joonifyImage: GreenTick,
      traditionalImage: WrongTick,
    },
    {
      benefit:
        "Access to a 14+ page report with valuable insight to support your child's complete development early on.",
      joonifyImage: GreenTick,
      traditionalImage: WrongTick,
    },
  ];

  const faqData = [
    {
      question: "What is Joonify? How does it work?",
      answer:
        "Joonify is India's first intelligent assessment platform for children's learning and growth. Backed by the power of science and artificial intelligence, it works by assessing children across 8 learning dimensions providing parents a detailed 16+ page report about their child's unique talents, skills, interests, personality traits, and learning requirements. With this valuable information, Joonify helps parents craft a personalized learning path for their child's holistic learning & growth.",
    },
    {
      question: "How can we use the platform Joonify?",
      answer:
        "To use Joonify, parents can sign up on the platform at https://register.joonify.com and begin the assessment for their child. If you've already created an account, you can login at https://app.joonify.com/",
    },
    {
      question: "What is the Joonify Way to Learn Better?",
      answer:
        "  The Joonify Way to Learn Better emphasizes understanding and nurturing each child's individuality. By identifying their unique talents, skills, interests, and learning requirements, Joonify enables parents to make informed decisions to support their child's early learning and holistic growth. This personalized approach allows children to learn in a way that aligns with their strengths and interests, promoting better engagement, motivation, and overall development.",
    },
    {
      question: "What is early childhood learning?",
      answer:
        "Early childhood learning refers to the educational and developmental experiences that children undergo during their early years, typically from birth to around 8 years of age. It encompasses a wide range of cognitive, emotional, social, and physical development processes that lay the foundation for future learning and well-being.",
    },
    {
      question: "What is the importance of early childhood learning?",
      answer:
        "Early childhood learning is of utmost importance as it plays a crucial role in shaping a child's overall development. During this critical period, children's brains undergo significant growth and development, making them highly receptive to learning and acquiring new skills. Providing stimulating and supportive learning experiences during early childhood helps children build a strong foundation for future academic success, social skills, emotional well-being, and lifelong learning.",
    },
    {
      question: "What happens after talent discovery of my child?",
      answer:
        "Talent discovery of the child will influence their learning requirements, which will assist the parent select the best courses for the child.",
    },
    {
      question: "What is Joonify's Talent Discovery Program all about?",
      answer:
        "The Joonify Talent Discovery Program is a scientifically validated program designed to identify and uncover the unique talents and abilities of children. It goes beyond academic achievements and explores various dimensions such as emotional reactivity, creativity, logical reasoning, linguistic abilities, and more. This program aims to provide parents with a holistic understanding of their child's potential and strengths, enabling them to make informed decisions regarding their child's educational journey.",
    },
    {
      question: "What happens after the talent discovery of my child?",
      answer:
        "After the talent discovery of your child, you will receive a comprehensive 16+ page report from Joonify that includes valuable insights into your child's cognitive development, unique talents, personality traits, interests, strengths, weaknesses, and learning requirements. Additionally, you will be connected with a Joonify expert child counsellor who will help you utilize the insights from the report and work with you to craft a personalized learning path for your child's optimal learning & growth.",
    },
    {
      question: "Is it mandatory to provide all the details about my child?",
      answer:
        "No, only the questions marked as mandatory require a response. However, providing accurate and comprehensive information allows for a more accurate assessment and provides better insights into your child's unique abilities and requirements. The more information you provide, the more personalized and tailored the assessment and recommendations will be.",
    },
    {
      question:
        "Is there someone whom I can talk while filling the details, in case of need?",
      answer:
        "The Joonify platform is designed to be user-friendly and intuitive, guiding both parents and children through the assessment process smoothly. However, if you have any questions or need help navigating the platform, our Talent Advisors are easily available. You can reach out at: +91-9324648813 or email us at: hello@joonify.com",
    },
    {
      question:
        "What will I get as a result after completing all the details of my child and finishing the assessment?",
      answer:
        "After completing all the details of your child and finishing the assessment on Joonify, you will receive a comprehensive 16+ page report. This report will provide valuable insights into your child's cognitive development across the 8 learning dimensions, their unique talents, personality traits, interests, passions, strengths, and learning requirements.",
    },
    {
      question: "Is my data secured and protected on Joonify?",
      answer:
        "Your data will always remain secured and protected with Joonify. We prioritize the privacy and confidentiality of all user information. We have a comprehensive privacy policy that outlines how your data is collected, used, and protected. You can review it here https://www.joonify.com/privacy-policy",
    },
  ];

  return (
    <>
      <div>
        <MyNavbar />
        <Banner height="700px">
          <div className="home-banner-content" style={{ textAlign: "center" }}>
            <h1 className="home-banner-content-head">
              Discover your child’s unique talents <br />
              with{" "}
              <span style={{ color: "#ffc929" }}>
                early childhood assessment.
              </span>
            </h1>
            <p className="home-banner-content-subhead">
              30 minutes is all it takes to get a report on your child’s unique
              talents, personality traits, learning interests, and the most
              suited learning path for well-rounded early childhood learning.
            </p>
            <Button id="home-banner-content-btn">
              Get Started at only &#8377;1999{" "}
              <span className="prcingbtnspan2">2999</span>
              <span>
                <img src={priceCut} alt="" className="pricehomeimg999" />
              </span>
            </Button>
            <p className="home-banner-content-grades">For grades 1 to 5</p>
          </div>
          <div style={{ width: "888px", height: "490px", margin: "0 auto" }}>
            <video width="100%" controls style={{ borderRadius: "25px" }}>
              <source
                src="https://joonify.s3.amazonaws.com/dev/L1Iv0fVbhQrJtc-gXArqb_Helpyourchildrentoidentifytheirsuperpowers.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </Banner>
      </div>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "400px",
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-container">
              <ReactStars
                count={5}
                size={50}
                edit={false}
                activeColor="#ffc929"
                value={5}
              />
              <div className="testimonial-content">
                <p>{testimonial.comment}</p>
                <h3 style={{ color: "#ed037c" }}>
                  -{testimonial.name} ({testimonial.role})
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className="possible">
        <Container>
          <p className="heading-possibilities">
            <img src={Tick} alt="" className="tickonereportimg" />
            One Report.
          </p>
          <h2 className="sub-heading-possibilities">
            Limitless possibilities for your child
          </h2>
          <p className="sub-sub-heading-poosibilities ">
            Put together by expert psychologists & talent advisors, your child’s
            talent discovery report provides you with life-transforming insights
            into your child. Here’s what the 16+ page report reveals:
          </p>
        </Container>

        <PossibilitiesCard mainCLs="possible"></PossibilitiesCard>
        <div style={{ marginTop: "80px", textAlign: "center" }}>
          <Container>
            <p className="last-sub-heading">AND SO MUCH MORE!</p>
            <button className="view-pricing-btn">View Pricing</button>
          </Container>
        </div>
      </div>

      <Talent />

      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Container>
          <div className="section-seven-head">
            <h2 className="section-seven-heading section-seven-heading-tda">
              Helping parents make the best choices for
              <br className="d-lg-block d-none" />
              <span style={{ color: "#ED037C" }}>
                early childhood learning.
              </span>
            </h2>
          </div>
          <p className="section-seven-heading-para d-none d-lg-block">
            Thousands of parents are choosing Joonify's comprehensive early
            childhood assessment to provide
            <br className="d-none d-lg-block" />
            their child the best of learning & growth. Here are just a few of
            the benefits:
          </p>
          <p className="section-seven-heading-para d-block d-lg-none ">
            Thousands of parents are choosing the
            <br className="d-block d-lg-none" /> Joonify way to provide their
            child the
            <br className="d-block d-lg-none" /> best of learning & growth.
          </p>
          <p className="section-seven-heading-para d-block d-lg-none ">
            Here are just a few of the benefits:
          </p>
          <div className="container">
            <div className="section-seven-tda-tabel">
              <Row className=" section-seven-tda-table">
                <Col
                  lg={6}
                  md={6}
                  sm={6}
                  xs={6}
                  className="tda-table-col tda-table-col1"
                  style={{ backgroundColor: "#2A2A84" }}
                >
                  <p className="para-tab-1">Benefits</p>
                </Col>
                <Col
                  lg={2}
                  md={2}
                  sm={2}
                  xs={2}
                  className="tda-table-col tda-table-col2"
                  style={{ backgroundColor: "#ED037C" }}
                >
                  <p className="para-tab">Joonify Parents</p>
                </Col>
                <Col
                  lg={2}
                  md={2}
                  sm={2}
                  xs={2}
                  className="tda-table-col tda-table-col3"
                  style={{ backgroundColor: "#999999" }}
                >
                  <p className="para-tab">Traditional Parents</p>
                </Col>
              </Row>
              {parentsData.map((parent, index) => (
                <Row
                  key={index}
                  className=" section-seven-tda-table"
                  style={{ marginBottom: "6px", marginTop: "6px" }}
                >
                  <Col
                    xs={6}
                    className="tda-table-col-child tda-table-col-1"
                    style={{ backgroundColor: "#F4F4FB" }}
                  >
                    <p className="charthomepagepara">{parent.benefit}</p>
                  </Col>
                  <Col
                    xs={2}
                    className="tda-table-col-child tda-table-col-2"
                    style={{ backgroundColor: "#ED037C1A" }}
                  >
                    <img src={parent.joonifyImage} alt="Green Tick" fluid />
                  </Col>
                  <Col
                    xs={2}
                    className="tda-table-col-child tda-table-col-3"
                    style={{ backgroundColor: "#ededed" }}
                  >
                    <img src={parent.traditionalImage} alt="Red Tick" fluid />
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <h2 className="joonifysprout">
            Joonify Blossom <br />
            <span>
              <img
                src={Line}
                loading="lazy"
                alt=""
                style={{ marginTop: "-63px" }}
              />
            </span>
          </h2>

          <div className="pricingcontainer">
            <div>
              <h2 className="unlockbonushome">
                Unlock Benefits worth <span>₹2999</span>
              </h2>
            </div>
          </div>
        </Container>
        <div style={{ marginTop: "100px", paddingBottom: "30px" }}>
          <Container>
            {pricingData.map((item, index) => (
              <div key={index} style={{ margin: "0 auto", width: "70%" }}>
                <Row className="my-4">
                  <Col xs={12} md={2} className="text-left">
                    <img
                      src={item.image}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  </Col>
                  <Col xs={12} md={8} className="text-left">
                    <h2 className="pricingparatext">{item.title}</h2>
                    <ul style={{ marginTop: "20px" }}>
                      {item.description.map((point, idx) => (
                        <li key={idx} className="innerulpricingli">
                          <img src={Bullets} alt="" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col xs={12} md={2} className="text-right">
                    <div className="pricehome">{item.price}</div>
                  </Col>
                </Row>
                {index < pricingData.length - 1 && <Dropdown.Divider />}
              </div>
            ))}
          </Container>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <Container>
          <div style={{ margin: "0 auto", width: "70%" }}>
            <div style={{ display: "flex" }}>
              <div className="offerpricedv">
                <h2 className="offerpricing">33% off Early Bird Offer.</h2>
                <p className="offergreytext">(inclusive of all taxes)</p>
              </div>
              <div className="subtractpricing">
                <div className="pricehomediv">
                  <p className="pricehome1">₹2999</p>
                  <p className="pricehome2">
                    ₹1999
                    <br />
                    <span>
                      <img
                        className="pricehomeimg"
                        src={ShortLine}
                        loading="lazy"
                        alt=""
                      />
                    </span>
                  </p>
                </div>
                <img
                  className="subtractpricingimg"
                  src={PriceTag}
                  loading="lazy"
                  alt=""
                />
                <img
                  className="subtractpricingimgvector"
                  src={PriceShort}
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
            <button
              className="offer_btn"
              style={{ backgroundColor: "#ed037c" }}
            >
              Get Started at only &#8377;1999{" "}
              <span className="prcingbtnspan2">2999</span>
              <span>
                <img src={priceCut} alt="" className="pricehomeimg999" />
              </span>
            </button>
          </div>
        </Container>
      </div>

      <div className="section-eight">
        <Container>
          <Row>
            <Col
              xs={12}
              lg={7}
              className="order-2 order-sm-2 order-lg-1 content-section-two content-section-twocustom"
            >
              <h2 className="section-eight-heading" style={{ height: "auto" }}>
                Want to know more about Joonify’s
                <span className="spaneightlandingpage">
                  {" "}
                  Talent Discovery <br className="d-xl-block d-none" />
                  Program ?
                </span>
              </h2>
              <p className="section-eight-desc">
                Schedule a FREE Talent Advisory call for
                <br className="d-lg-block d-none" /> expert 1-to-1 guidance.
              </p>
              <div className="btn-section-eight-div">
                <button className="btn-section-eight-tda">
                  Schedule a FREE Call Now
                </button>
              </div>
            </Col>
            <Col
              xs={12}
              lg={5}
              className="order-1 order-sm-1 imgsectioneight order-lg-2"
            >
              <img
                src={Discovery}
                className="landingchildimg1"
                alt=""
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section-nine">
        <Container>
          <h2 className="section-nine-heading">
            Here’s what{" "}
            <span style={{ color: "#ed037c" }}>Joonify Parents</span>
            are saying.
          </h2>

          <ControlledCarousel />
        </Container>
      </div>

      <div className="section-eleven">
        <Container>
          <div className="section-eleveninnner">
            <h2 className="section-eleven-heading">FAQs</h2>
            <div>
              <FaqAccordion faqData={faqData} />
            </div>
            <div className="section-eleven-sub-sectionouter">
              <div className="section-eleven-sub-section">
                <img
                  src={Star}
                  alt=""
                  className="readystarimg"
                  loading="lazy"
                />
                <p className="section-eleven-sub-section-heading">
                  Ready to unlock your child’s <span> potential</span>?
                </p>
                <img
                  src={SnakeArrow}
                  className="readyarrowimg"
                  alt=""
                  loading="lazy"
                />
                <div className="text-center">
                  <button className="prcing-btn">Get Started at only</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <MenuList />

      <Footer />
    </>
  );
};

export default Home;
