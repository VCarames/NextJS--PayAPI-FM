import React from "react";
import CTA from "./form/CTA";

function CTASection({ sectionClassName }) {
  return (
    <section className={sectionClassName}>
      <div className="cta-section__content">
        <h2 className="cta-section__heading primary__heading">
          Ready to start?
        </h2>

        <CTA
          formClassName="cta-form cta-form--section"
          inputClassName="cta-form__email"
          labelClassName="cta-form__email-label visually-hidden"
          buttonClassName="cta-form__button button button--primary"
          spanClassName="cta-form__error"
        />
      </div>
    </section>
  );
}

export default CTASection;
