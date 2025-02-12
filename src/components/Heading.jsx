import React from "react";

const Heading = ({ title, subtitle = "" }) => {
  return (
    <div data-aos="zoom-in" data-aos-once="false" data-aos-duration="900">
      <h1 className="text-center text-primary font-bold text-3xl md:text-4xl lg:text-5xl my-8 underline">
        {title}
      </h1>
      {subtitle && (
        <p className="text-center mx-auto mt-4 max-w-3xl text-basic">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
