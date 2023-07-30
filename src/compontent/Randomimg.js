import React from "react";

export const Randomimg = ({ hover }) => {
  return (
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={`https://source.unsplash.com/random/780x400`}
      />
    </div>
    // https://image.unsplash.com/example
  );
};
