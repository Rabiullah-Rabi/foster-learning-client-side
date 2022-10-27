import React from "react";
const position = {
  top: "bottom-full",
  bottom: "top-full",
};
const ToolTip = (props) => {
  return (
    <div className="group cursor-pointer relative text-center">
      {props.title}
      <div
        className={`${position[props.position]} ${
          props.className
        } opacity-0 text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 right-0 px-3 pointer-events-none`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default ToolTip;
