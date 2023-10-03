import Link from "next/link";
import Checkmark from "/public/assets/icons/icon-check.svg";
import Image from "next/image";

function Plans() {
  return (
    <section className="plans-section">
      <div className="plans-section__content">
        <h2 className="plans-section__heading primary__heading--alt">
          Pricing
        </h2>
        <div className="plans-section__container">
          <div className="plans-section__plan">
            <h3 className="plans-section__plan-heading secondary__subheading">
              Free Plan
            </h3>
            <p className="plans-section__plan-text primary__text">
              Build and test using our core set of products with up to 100 API
              requests
            </p>
            <p className="plans-section__plan-price">$0.00</p>
            <ul className="plans-section__plan-list">
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Transactions</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Auth</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Identity</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <p className="feature--not-included secondary__text">
                  Investments
                </p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <p className="feature--not-included secondary__text">Assets</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <p className="feature--not-included secondary__text">
                  Liabilities
                </p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <p className="feature--not-included secondary__text">Income</p>
              </li>
            </ul>
            <Link
              href="/contact"
              className="plans-section__plan-list-button button button--secondary"
            >
              Request Access
            </Link>
          </div>
          <div className="plans-section__plan">
            <h3 className="plans-section__plan-heading secondary__subheading">
              Basic Plan
            </h3>
            <p className="plans-section__plan-text primary__text">
              Launch your project with unlimited requests and no contractual
              minimums
            </p>
            <p className="plans-section__plan-price">$249.00</p>
            <ul className="plans-section__plan-list">
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Transactions</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Auth</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Identity</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Investments</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Assets</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <p className="feature--not-included secondary__text">
                  Liabilities
                </p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <p className="feature--not-included secondary__text">Income</p>
              </li>
            </ul>
            <Link
              href="/contact"
              className="plans-section__plan-list-button button button--secondary "
            >
              Request Access
            </Link>
          </div>
          <div className="plans-section__plan">
            <h3 className="plans-section__plan-heading secondary__subheading">
              Premium Plan
            </h3>
            <p className="plans-section__plan-text primary__text">
              Get tailored solutions, volume pricing, and dedicated support for
              your team
            </p>
            <p className="plans-section__plan-price">$499.00</p>
            <ul className="plans-section__plan-list">
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Transactions</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Auth</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Identity</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Investments</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Assets</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Liabilities</p>
              </li>
              <li className="plans-section__plan-list-feature" role="listitem">
                <Image src={Checkmark} alt="checkmark" />
                <p className="secondary__text">Income</p>
              </li>
            </ul>
            <Link
              href="/contact"
              className="plans-section__plan-list-button button button--secondary"
            >
              Request Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
