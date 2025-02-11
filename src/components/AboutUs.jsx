import React from "react";
import FramerMotion from "./FramerMotion";
import Heading from "./Heading";

const AboutUs = () => {
  return (
    <div className="mt-20 px-4" id="about-us">
      <div className="container mx-auto">
        <div className="text-center mb-8 flex flex-col items-center">
          <Heading
            title={"About Us"}
            subtitle={
              <>
                Welcome to
                <span className="italic"> Lost and Found</span>, a platform
                dedicated to reconnecting people with their lost belongings. We
                aim to build a supportive community where lost items find their
                rightful owners.
              </>
            }
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="900"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <FramerMotion />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-text mb-4">
              Our Mission
            </h3>
            <p className="text-basic leading-relaxed text-justify">
              Our mission is simple: to make it easier for people to reunite
              with their misplaced or lost items. Whether it’s a wallet, keys,
              or something sentimental, we strive to provide a reliable and
              efficient service.
            </p>
            <div className="divider before:bg-text after:bg-text"></div>
            <h3 className="text-2xl font-semibold text-text mt-8 mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-basic space-y-2">
              <li>Easy-to-use platform for reporting lost or found items.</li>
              <li>Secure and trustworthy environment.</li>
              <li>Community-driven efforts for faster results.</li>
              <li>Dedicated to helping people recover what matters most.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
