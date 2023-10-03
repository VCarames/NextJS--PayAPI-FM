import Image from "next/image";
import IllustrationOne from "/public/assets/illustrations/illustration-easy-to-implement.png";
import IllustrationTwo from "/public/assets/illustrations/illustration-simple-ui-one.png";
import IllustrationThree from "/public/assets/illustrations/illustration-simple-ui-two.png";

function Features() {
  return (
    <section className="features-section">
      <div className="features-section__content">
        <div className="features-section__content--one">
          <Image
            className="features-section__illustration features-section__illustration--one"
            src={IllustrationOne}
            alt=""
          />
          <div className="features-section__container features-section__container--one">
            <h3 className="features-section__heading  tertiary__heading">
              Easy to implement
            </h3>
            <p className="features-section__text primary__text">
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
        <div className="features-section__content--two">
          <div className="features-section__container--illustrations">
            <Image
              className="features-section__illustration features-section__illustration--two"
              src={IllustrationTwo}
              alt=""
            />
            <Image
              className="features-section__illustration features-section__illustration--two"
              src={IllustrationThree}
              alt=""
            />
          </div>
          <div className="features-section__container features-section__container--two">
            <h3 className="features-section__heading tertiary__heading">
              Simple UI & UX
            </h3>
            <p className="features-section__text primary__text">
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
