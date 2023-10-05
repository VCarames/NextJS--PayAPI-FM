import Stats from "@/components/about/Stats";
import Value from "@/components/about/Value";

import Image from "next/image";

function About() {
  return (
    <>
      <h1 className="visually-hidden">About Us</h1>
      <section className="values-section">
        <div className="values-section__content">
          <div className="values-section__container">
            <h2 className="values-section__heading primary__heading--alt">
              We empower innovators by delivering access to the financial system
            </h2>

            <Value
              heading="Our Vision"
              text="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. "
            />
            <Value
              heading="Our Business"
              text="At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. "
            />
          </div>

          <picture className="values-section__picture">
            <source
              srcSet="/assets/images/image-team-members-desktop.jpg"
              media="(min-width: 1000px)"
              width="1440"
              height="500"
            />
            <source
              srcSet="/assets/images/image-team-members-tablet.jpg"
              media="(min-width: 700px)"
              width="769"
              height="267"
            />
            <Image
              src="/assets/images/image-team-members-mobile.jpg"
              width="375"
              height="300"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="..."
            />
          </picture>

          <Stats />

          <div className="values-section__container">
            <Value
              heading="The Culture"
              text="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
            />
            <Value
              heading="The People"
              text=" We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
