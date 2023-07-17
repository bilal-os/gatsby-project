import React from "react";
import TestimonialFormCard from "./TestimonialFormCard";

const Popup = ({ setIsOpenPopup }) => {
  return (
    <div
      style={{
        position: "fixed",
        background: "rgba(0, 0, 0, 0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "dropTop .3s linear",
          background: "#ffffff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <TestimonialFormCard />
      </div>
    </div>
  );
};

export default Popup;



