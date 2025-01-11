import React from "react";

const Heading = ({ title, subtitle = "" }) => {
  return (
    <div>
      <h1 className="text-center text-text font-bold text-3xl md:text-4xl lg:text-5xl my-8 underline">
        {title}
      </h1>
      {subtitle && (
        <p className="text-center mt-4 max-w-3xl text-basic">{subtitle}</p>
      )}
    </div>
  );
};

export default Heading;
