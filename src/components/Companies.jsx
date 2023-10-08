import Image from "next/image";

function Companies({ color }) {
  const getImageSource = (companyName) => {
    return `./assets/logos/${companyName}--${color}.svg`;
  };

  const companies = [
    { name: "tesla", alt: "Tesla", width: "129", height: "17" },
    { name: "microsoft", alt: "Microsoft", width: "145", height: "31" },
    {
      name: "hewlett-packard",
      alt: "Hewlett-Packard",
      width: "140",
      height: "27",
    },
    { name: "oracle", alt: "Oracle", width: "131", height: "17" },
    { name: "google", alt: "Google", width: "96", height: "33" },
    { name: "nvidia", alt: "Nvidia", width: "137", height: "26" },
  ];

  return (
    <ul className="companies__list" role="list">
      {companies.map((company) => (
        <li className="companies__item" role="listitem" key={company.name}>
          <Image
            className="companies__logo"
            src={getImageSource(company.name)}
            alt={company.alt}
            width={company.width}
            height={company.height}
          />
        </li>
      ))}
    </ul>
  );
}

export default Companies;
