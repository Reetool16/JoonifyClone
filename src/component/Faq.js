import React from "react";
import { Accordion } from "react-bootstrap";

const FaqAccordion = ({ faqData }) => {
  return (
    <Accordion defaultActiveKey="0" className="custom-accordion">
      {faqData.map((faq, index) => (
        <Accordion.Item
          key={index}
          eventKey={index.toString()}
          className="custom-accordion-item"
        >
          <Accordion.Header className="accordion faqaccordianheader">
            {faq.question}
          </Accordion.Header>
          <Accordion.Body className="faqaccordianbody">
            {faq.answer}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
