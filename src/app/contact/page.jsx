import CTASection from "@/components/CTASection";
import Join from "@/components/contact/Join";
import Form from "@/components/form/Form";

function Contact() {
  return (
    <>
      <h1 className="visually-hidden">Contact Us</h1>
      <section className="contact-section">
        <div className="contact-section__content">
          <h2 className="contact-section__heading primary__heading--alt">
            Submit a help request and we’ll get in touch shortly
          </h2>
          <section className="contact-section__container">
            <Form />
            <Join />
          </section>
        </div>
        <CTASection />
      </section>
    </>
  );
}

export default Contact;
