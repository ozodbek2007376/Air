import React from "react";
import HeaderCard from "./HeaderCard";

export default function Header() {
  return (
    <>
      <div>
        <div className="container">
          <h2 className="section-title">
            Private Jet For Business & Leisure Purposes
          </h2>
          <HeaderCard nom="flex-row" sarlavha="Private Jet Carter" imgName="./img/hed-1.png" />
          <HeaderCard nom="flex-row-reverse" sarlavha="Business Jet Carter" imgName="./img/hed-2.png" />
        </div>
      </div>
    </>
  );
}
  