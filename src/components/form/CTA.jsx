import React from "react";

function CTA({
  formClassName,
  inputClassName,
  labelClassName,
  buttonClassName,
  spanClassName,
}) {
  return (
    <form className={formClassName} noValidate>
      <input
        className={inputClassName}
        id="email"
        type="email"
        name="email"
        aria-describedby="email__error"
        placeholder="Enter email address"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        autoComplete="email"
      />
      <label className={labelClassName} htmlFor="email">
        Enter email address
      </label>
      <button className={buttonClassName} type="submit">
        Schedule a Demo
      </button>
      <span
        id="email__error"
        className={spanClassName}
        aria-live="assertive"
      ></span>
    </form>
  );
}

export default CTA;
