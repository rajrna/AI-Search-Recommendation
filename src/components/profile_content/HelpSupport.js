import React, { useState } from "react";
import styled from "styled-components";

const faqs = [
  {
    id: 1,
    question: "How do I reset my password?",
    answer:
      "To reset your password, go to Profile Settings and click on 'Change Password'.",
  },
  {
    id: 2,
    question: "Can I save my favorite searches?",
    answer:
      "Yes! Use the recommendation and search history tabs to revisit your past searches and favorites.",
  },
  {
    id: 3,
    question: "How do I contact customer support?",
    answer:
      "You can fill out the contact form below or email us at support@example.com.",
  },
];

const HelpSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  return (
    <Wrapper>
      <div className="help-support-panel">
        <h2>Help & Support</h2>

        <section className="faq-section">
          <h3>Frequently Asked Questions</h3>
          {faqs.map(({ id, question, answer }) => (
            <div key={id} className="faq-item">
              <p className="question">{question}</p>
              <p className="answer">{answer}</p>
            </div>
          ))}
        </section>

        <section className="contact-section">
          <h3>Contact Us</h3>
          {submitted ? (
            <p className="thank-you">
              Thank you for reaching out! We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              />

              <button type="submit">Send Message</button>
            </form>
          )}
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .help-support-panel {
    padding: 30px;
    width: 100%;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    font-family: "Segoe UI", sans-serif;
  }

  .help-support-panel h2 {
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
  }

  .faq-section {
    margin-bottom: 40px;
  }

  .faq-item {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .question {
    font-weight: 600;
    font-size: 16px;
    color: #222;
    margin-bottom: 6px;
  }

  .answer {
    font-size: 14px;
    color: #555;
  }
  .contact-section form {
    display: flex;
    flex-direction: column;
  }

  .contact-section label {
    display: block;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 6px;
    font-weight: 500;
    color: #555;
  }

  .contact-section input,
  .contact-section textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    resize: vertical;
    transition: border-color 0.3s ease;
  }

  .contact-section input:focus,
  .contact-section textarea:focus {
    border-color: #007bff;
    outline: none;
  }

  button {
    margin-top: 20px;
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  .thank-you {
    font-size: 16px;
    color: #28a745;
  }
`;

export default HelpSupport;
