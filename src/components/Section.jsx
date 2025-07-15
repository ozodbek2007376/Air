import React from "react";
import SectionCard from "./SectionCard";
import Chartes from "./Chartes";

export default function Section() {
  return (
    <div>
      <div className="container">
        <h2 className="section-title">
          Private Jet Performance And Specifications
        </h2>

        <div className="row align-items-center">
          <div className="col-4">
            <SectionCard
              Boshsarlavha="Luxury And Comfort"
              nomi="d-flex"
              imgNamee="./img/section1.png"
            />
            <SectionCard
              Boshsarlavha="Personal schedule & booking"
              nomi="d-flex"
              imgNamee="./img/se.png"
            />
          </div>

          <div className="col-4 d-flex justify-content-center">
            <img src="./img/samolyot-plane-1 1.png" alt="" />
          </div>

          <div className="col-4">
            <SectionCard
              Boshsarlavha="SAFETY AND SECURITY"
              nomi="d-flex"
              imgNamee="./img/section3.png"
            />
            <SectionCard
              Boshsarlavha="EXPERIENCED CREW"
              nomi="d-flex"
              imgNamee="./img/section4.png"
            />
          </div>
        </div>





        <h3 className="section-title">Luxury Charters</h3>

        <div className="row text-center">

         <Chartes rasm="./img/Head-1.png" matn="Piaggio P.180 Avanti"/>
         <Chartes rasm="./img/Head-2.png" matn="Pilatus PC-12"/>
         <Chartes rasm="./img/Head-3.png" matn="Piper Pa27 Aztec"/>
         <Chartes rasm="./img/Head-4.png" matn="Beech BE100 King Air"/>



       

        </div>
      </div>
    </div>
  );
}
