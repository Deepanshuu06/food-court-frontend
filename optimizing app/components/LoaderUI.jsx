import React from "react";
const NotFound = () => {
  return (
    <div className="shimmer-wrapper">
      {Array(20)
        .fill("")
        .map((e , index) => (
          <div  key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default NotFound;
