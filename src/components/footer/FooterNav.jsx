import Link from "next/link";

function FooterNav() {
  return (
    <nav className="footer__nav">
      <ul className="footer__nav-list" role="list">
        <li className="footer__nav-list-item" role="listitem">
          <Link
            className="footer__nav-list-link secondary__link"
            href="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li className="footer__nav-list-item" role="listitem">
          <Link className="footer__nav-list-link secondary__link" href="/about">
            About
          </Link>
        </li>
        <li className="footer__nav-list-item" role="listitem">
          <Link
            className="footer__nav-list-link secondary__link"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
