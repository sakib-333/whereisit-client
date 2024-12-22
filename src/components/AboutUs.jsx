import React from "react";
import lostAndFoudImage from "../assets/lost-and-found.jpg";

const AboutUs = () => {
  return (
    <div className="mt-20 px-4" id="about-us">
      <div className="container mx-auto">
        <div className="text-center mb-8 flex flex-col items-center">
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl my-8 underline">
            About Us
          </h2>
          <p className="mt-4 max-w-5xl">
            Welcome to
            <span className="italic"> Lost and Found</span>, a platform
            dedicated to reconnecting people with their lost belongings. We aim
            to build a supportive community where lost items find their rightful
            owners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={lostAndFoudImage}
              alt="Lost and Found Illustration"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is simple: to make it easier for people to reunite
              with their misplaced or lost items. Whether it’s a wallet, keys,
              or something sentimental, we strive to provide a reliable and
              efficient service.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
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
