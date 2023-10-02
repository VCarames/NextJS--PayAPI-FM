import Image from "next/image";
import Tesla from "/public/assets/logos/tesla.svg";
import Microsoft from "/public/assets/logos/microsoft.svg";
import HP from "/public/assets/logos/hewlett-packard.svg";
import Oracle from "/public/assets/logos/oracle.svg";
import Google from "/public/assets/logos/google.svg";
import Nvidia from "/public/assets/logos/nvidia.svg";

function Companies() {
  return (
    <ul className="companies__list" role="list">
      <li className="companies__item" role="listitem">
        <Image className="companies__logo" src={Tesla} alt="Tesla" />
      </li>
      <li className="companies__item" role="listitem">
        <Image className="companies__logo" src={Microsoft} alt="Microsoft" />
      </li>
      <li className="companies__item" role="listitem">
        <Image className="companies__logo" src={HP} alt="Hewlett-Packard" />
      </li>
      <li className="companies__item" role="listitem">
        <Image className="companies__logo" src={Oracle} alt="Oracle" />
      </li>
      <li className="companies__item" role="listitem">
        <Image className="companies__logo" src={Google} alt="Google" />
      </li>
      <li className="companies__item" role="listitem">
        <Image className="companies__logo" src={Nvidia} alt="Nvidia" />
      </li>
    </ul>
  );
}

export default Companies;
