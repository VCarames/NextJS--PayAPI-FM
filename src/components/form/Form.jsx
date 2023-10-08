function Form() {
  return (
    <form className="contact-section__form">
      <input
        type="text"
        name="name"
        id="name"
        className="contact-section__form--name"
        placeholder="Name"
        pattern="[a-zA-Z]*"
      />
      <label className="visually-hidden" htmlFor="name">
        Name
      </label>

      <input
        type="email"
        name="email"
        id="email"
        className="contact-section__form--email"
        placeholder="Email Address"
      />
      <label className="visually-hidden" htmlFor="email">
        Email
      </label>

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

      <div className="contact-section__form-container">
        <input
          type="checkbox"
          name=""
          id=""
          className="contact-section__form--checkbox"
          aria-describedby="updates"
        />
        <p id="updates" className="contact-section__form--consent">
          Stay up-to-date with company announcements and updates to our API
        </p>
      </div>

      <button className="contact-section__form-button button button--secondary">
        Submit
      </button>
    </form>
  );
}

export default Form;
