import CTA from "./form/CTA";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-section__content">
        <h2 className="cta-section__heading primary__heading">
          Ready to start?
        </h2>

        <CTA />
      </div>
    </section>
  );
}

export default CTASection;
