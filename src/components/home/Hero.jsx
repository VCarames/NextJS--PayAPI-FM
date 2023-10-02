import Image from "next/image";
import Link from "next/link";
import Illustration from "/public/assets/illustrations/illustration-phone-mockup.png";
import CTA from "../form/CTA";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <Image
          className="hero-section__illustration"
          src={Illustration}
          alt=""
        />
        <div className="hero-section__container">
          <h1 className="hero-section__heading primary__heading">
            Start building with our APIs for absolutely free.
          </h1>
          <div>
            <CTA
              formClassName="cta-form"
              inputClassName="cta-form__email"
              labelClassName="cta-form__email-label visually-hidden"
              buttonClassName="cta-form__button button button--primary"
              spanClassName=""
            />
            <p className="cta-form__text quaternary__text">
              Have any questions?
              <Link className="cta-form__text-link" href="/contact">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
