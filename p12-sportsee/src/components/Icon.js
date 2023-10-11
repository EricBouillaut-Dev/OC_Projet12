import React from "react";

function Icon(props) {
  const { image, backgroundColor } = props;

  const iconStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="icon" style={iconStyle}>
      <img src={image} alt="Icon" />
    </div>
  );
}

export default Icon;
