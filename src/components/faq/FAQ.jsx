import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What is TaskFlow?",
    answer:
      "TaskFlow is an AI-powered project management platform that helps teams organize projects, manage tasks, collaborate in real time, and improve productivity.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. TaskFlow offers a free plan with essential features, allowing individuals and small teams to get started without any cost.",
  },
  {
    question: "How does AI Assistant work?",
    answer:
      "Our AI Assistant helps automate repetitive tasks, generate summaries, suggest improvements, and assist with project planning.",
  },
  {
    question: "Can I integrate with other tools?",
    answer:
      "Absolutely. TaskFlow integrates with Slack, Google Drive, GitHub, Notion, Trello, and many other popular productivity tools.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your subscription at any time without hidden charges.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your data is protected using industry-standard encryption, secure authentication, and regular backups.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq">
      <span className="faq-badge">FAQ</span>

      <h2>
        Frequently Asked <span>Questions</span>
      </h2>

      <p className="faq-text">
        Everything you need to know about TaskFlow before getting started.
      </p>

      <div className="faq-grid">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${active === index ? "active" : ""}`}
            key={index}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}

              <span className="faq-icon">{active === index ? "−" : "+"}</span>
            </button>

            <div className={`faq-answer ${active === index ? "show" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
