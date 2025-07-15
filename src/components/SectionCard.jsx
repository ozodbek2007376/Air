import React from "react";

export default function SectionCard({ imgNamee, Boshsarlavha }) {
  return (
    <div>
      <div className="feature-card">
        <img src={imgNamee} alt="" />
        <h6>{Boshsarlavha}</h6>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable
        </p>
      </div>
    </div>
  );
}
