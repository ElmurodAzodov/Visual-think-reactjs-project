import React, { useState } from "react";
import "../styles/faq.scss";

const faqData = [
  { question: "What is Visual Think?", answer: "Visual Think is an AI-powered startup tool that helps entrepreneurs build businesses efficiently." },
  { question: "How much does it cost?", answer: "We offer a free plan, and our premium plans start at $20/month." },
  { question: "How do I get started?", answer: "Simply sign up and start exploring our AI-driven tools!" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {item.question}
          </h3>
          {openIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
