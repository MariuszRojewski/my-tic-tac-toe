import React from "react";

const Square = ({ index, onClick, value }) => {
  return (
    <button className={`sqaure squareID_${index}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
