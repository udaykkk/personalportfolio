import React from "react";

function Card({card}) {
  return (
    <>
      <div >
        <div
        className="h-64 w-120 mb-8 "
          style={{
            backgroundImage: `url(${card})`,
            backgroundSize: "cover",
            position: "relative",
          }}
        ></div>
      </div>
    </>
  );
}

export default Card;
