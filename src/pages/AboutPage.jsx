import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen text-text bg-background flex items-center justify-center p-6">
      <div className="max-w-3xl bg-secondary shadow-xl rounded-2xl p-8 space-y-6">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1100"
          className="text-4xl font-bold text-center"
        >
          About Us
        </h1>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1100"
        >
          <p className="text-lg text-center">
            Welcome to our Lost and Found platform! Our mission is to help
            people reunite with their lost belongings and return found items to
            their rightful owners.
          </p>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-secondary">
              How It Works
            </h2>
            <ul className="list-disc list-inside ">
              <li>Post an item you have lost or found.</li>
              <li>Provide details to help identify the item.</li>
              <li>
                Connect with the right person to return or claim the item.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-secondary">
              Our Vision
            </h2>
            <p>
              We believe in a community-driven approach to lost and found,
              making it easier for people to help each other and reduce the
              stress of losing valuable items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
