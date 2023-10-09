"use client";

import React, { useState } from "react";

function CTA({
  formClassName,
  inputClassName,
  labelClassName,
  buttonClassName,
  spanClassName,
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setError("Email cannot be blank.");
    } else if (!emailRegex.test(email)) {
      setError("Invalid email address.");
    } else {
      setError("");
    }
  };

  const handleInputClick = () => {
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    // Add further logic here if needed, e.g., submitting the form data.
  };

  return (
    <form className={formClassName} noValidate onSubmit={handleSubmit}>
      <input
        className={inputClassName}
        id="email"
        type="email"
        name="email"
        aria-describedby="email__error"
        placeholder="Enter email address"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onClick={handleInputClick}
      />
      <label className={labelClassName} htmlFor="email">
        Enter email address
      </label>
      <button className={buttonClassName} type="submit">
        Schedule a Demo
      </button>
      <span
        id="email__error"
        className={`error ${spanClassName}`}
        aria-live="assertive"
      >
        {error && <p>{error}</p>}
      </span>
    </form>
  );
}

export default CTA;
