import React from "react";

const HeroGridItem = ({ color, hoverColor }) => {
  return (
    <div className="w-full aspect-square relative">
      <div
        className={`w-full h-full ${color} transition-transform duration-500 ease-in-out`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-0 ${hoverColor} transition-all duration-500 ease-in-out group-hover:h-full`}
      />
    </div>
  );
};

export default HeroGridItem;
