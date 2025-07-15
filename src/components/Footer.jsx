import React from "react";
import TimeCard from "./TimeCard";

export default function Footer() {
  return (
    <>
      <div class="container py-5">
        <h2 class="text-center mb-4">Enjoy Our Membership</h2>
        <div class="row text-center">
          <TimeCard Nomi="Popular" pul="$250/month" />
          <TimeCard Nomi="Business" pul="$480/month" />
          <TimeCard Nomi="Elite" pul="$680/month" />
        </div>
      </div>

      <footer class="text-center py-4 footer-sty">
        <div className="footer-logo">
          <img src="./img/Frame 2.png" alt="" className="img-2" />
        </div>
        <div className="d-flex align-content-center justify-content-evenly">
          <small>© 2021 Air. All Rights Reserved.</small>
          <br />
          <div class="mt-2">
            <a href="#" class="text-white me-3">
              SERVICES
            </a>
            <a href="#" class="text-white me-3">
              ABOUT US
            </a>
            <a href="#" class="text-white me-3">
              NEWS 
            </a>
            <a href="#" class="text-white">
              CONTACT
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
