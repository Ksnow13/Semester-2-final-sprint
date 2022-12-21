// Author: Kyle Snow
// Software Development Semster 2
// Keyin College
// started: Dec 8, 2022
// Finished: Dec 20, 2022

// componet used in the Feedpage to add a banner to the top of the page

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <section className="banner">
        <h2 className="banner-title">TyKyEn</h2>
        <nav className="banner-nav">
          <ul>
            <li className="banner-btn">
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Banner;
