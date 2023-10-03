import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/logos/logo-white.svg";
import FooterSocial from "./FooterSocial";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Link className="footer__logo" href="/" aria-label="PayAPI - Home">
          <Image src={Logo} alt="" />
        </Link>
        <FooterNav />
        <FooterSocial />
      </div>
    </footer>
  );
}

export default Footer;
