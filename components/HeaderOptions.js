import React from "react";

const HeaderOptions = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center p-1 cursor-pointer group">
      <Icon className="h-5 group-hover:animate-bounce" />
      <p className="opacity-0 sm:opacity-100 group-hover:opacity-100 text-xs font-light group-hover:text-gray-500">
        {title}
      </p>
    </div>
  );
};

export default HeaderOptions;
