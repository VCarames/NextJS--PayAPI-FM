"use client";

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    title: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    companyName: "",
    title: "",
    message: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name cannot be empty";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (formData.companyName.trim() === "") {
      newErrors.companyName = "Company Name cannot be empty";
    }

    if (formData.title.trim() === "") {
      newErrors.title = "Title cannot be empty";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
    }
  };

  return (
    <form className="contact-section__form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="name"
        id="name"
        className="contact-section__form--name"
        placeholder="Name"
        pattern="[a-zA-Z]*"
        value={formData.name}
        onChange={handleInputChange}
      />
      <label className="visually-hidden" htmlFor="name">
        Name
      </label>
      <span className="error">{errors.name}</span>

      <input
        type="email"
        name="email"
        id="email"
        className="contact-section__form--email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleInputChange}
      />
      <label className="visually-hidden" htmlFor="email">
        Email
      </label>
      <span className="error">{errors.email}</span>

      <input
        type="text"
        name="company name"
        id="company"
        className="contact-section__form--company"
        placeholder="Company Name"
        pattern="[a-zA-Z]*"
      />
      <label className="visually-hidden" htmlFor="company">
        Company Name
      </label>
      <span className="error">{errors.companyName}</span>

      <input
        type="text"
        name="message"
        id="title"
        className="contact-section__form--title"
        placeholder="Title"
        pattern="[a-zA-Z]*"
      />
      <label className="visually-hidden" htmlFor="title">
        Title
      </label>
      <span className="error">{errors.title}</span>

      <input
        type="text"
        name="message"
        id="message"
        className="contact-section__form--message"
        placeholder="Message"
      />
      <label className="visually-hidden" htmlFor="message">
        Message
      </label>
      <span className="error">{errors.message}</span>

      <div className="contact-section__form-container">
        <input
          type="checkbox"
          name="consent"
          id="consent"
          className="contact-section__form--checkbox"
          aria-describedby="updates"
          checked={formData.consent}
          onChange={handleInputChange}
        />
        <p id="updates" className="contact-section__form--consent">
          Stay up-to-date with company announcements and updates to our API
        </p>
      </div>

      <button
        className="contact-section__form-button button button--secondary"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
