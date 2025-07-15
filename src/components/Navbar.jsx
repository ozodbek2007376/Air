import React from "react";

export default function Navbar() {
  return (
    <>
    <section className="banner">
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="img/Logo-navbar.png" alt="Logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Booking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Private Jet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Specification
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Luxury Charters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Membership
                </a>
              </li>
            </ul>
            <div>
              <a href="#" className="btn btn-outline-dark me-2">
                Register
              </a>
              <button className="btn-sign">Sign In</button>
            </div>
          </div>
        </div>
      </nav>

      
        <div className="banner-overlay"></div>
        <div className="banner-content container">
          <h1>
            Enjoy <span className="highlight">RESERVED</span>
            <br />
            Overhead Bin Space
          </h1>
          <a href="#" className="btn-explore">
            Explore Now →
          </a>
        </div>
      </section>
    </>
  );
}
