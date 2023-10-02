import Link from "next/link";
import Companies from "../Companies";

function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-section__content">
        <Companies />
        <div className="clients-section__container">
          <h2 className="clients-section__heading primary__heading">
            Who we work with
          </h2>
          <p className="clients-section__text primary__text">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <Link
            className="clients-section__button button button--tertiary"
            href="/about"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Clients;
