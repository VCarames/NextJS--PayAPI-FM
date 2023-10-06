import CTA from "./form/CTA";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-section__content">
        <h2 className="cta-section__heading primary__heading">
          Ready to start?
        </h2>

        <CTA
          formClassName="cta-form"
          inputClassName="cta-form__email"
          labelClassName="cta-form__email-label visually-hidden"
          buttonClassName="cta-form__button button button--primary"
          spanClassName=""
        />
      </div>
    </section>
  );
}

export default CTASection;
