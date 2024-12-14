import React, { useState } from 'react';
import "./index.css"

const CustomFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'How much price is for one year subscription?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Can I add more than one team member?',
      answer:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'Can I manage my payments?',
      answer:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      question: 'Can I integrate payment gateways to take payments?',
      answer:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQ</h2>
        <div className="faq-items my-4">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-header ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <h6>{item.question}</h6>
                <span className="icon">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              <div
                className={`faq-body ${
                  openIndex === index ? 'open' : ''
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomFaq;
