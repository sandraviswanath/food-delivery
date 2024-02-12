// ContactPage.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ContactPage = () => {
  // State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    margin: "20px",
  };

  const formStyle = {
    display: "grid",
    gap: "10px",
    maxWidth: "400px",
    margin: "20px auto",
  };

  const submitButtonStyle = {
    backgroundColor: "#1D3557",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h2 className="head">Contact Form</h2>
      <form style={formStyle} onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        ></textarea>

        <Button type="submit" id="buttonadd" onClick={handleFormSubmit}>
          SUBMIT
        </Button>
      </form>

      <p>Thank you for choosing SHOPIO! We are here to assist you.</p>
    </div>
  );
};

export default ContactPage;
