import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.bgColor || "bg-gray-800"} 
      ${props.text || "text-white "}
      ${props.border || "border-l-2 border-r-2"}
      ${props.border || "rounded"}
       p-1 md:p-2 border-box flex items-center hover:shadow-lg dark:shadow-gray-700`}
      type={props.type || "button"}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
