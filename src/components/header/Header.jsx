import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/logos/logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__logo" href="/" aria-label="PayAPI - Home">
          <Image src={Logo} alt="" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
