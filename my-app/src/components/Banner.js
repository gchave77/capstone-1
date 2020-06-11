import React from "react";
import { Link } from "react-router-dom";
import SimpleSlider from "./SimpleSlider";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner-center">
          <div className="left-grid">
            <div className="grid-text">
              <p>
                <span>Featured Locations</span>
              </p>
            </div>
            <div className="btn-container">
              <Link className="btn dark" to="/products">
                view all
              </Link>
            </div>
          </div>
          <div className="right-grid">
            <SimpleSlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
