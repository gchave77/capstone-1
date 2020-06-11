import React from "react";
// Fonts icons for footer
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function footer() {
  return (
    <footer className="footer">
      <div className="summary">
        <div className="footer-center">
          <div className="footer-one">
            <div className="footer-item">
              <h4>Follow Us</h4>
              <ul className="follow-links-footer">
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer1">
                    <a
                      href="https://www.facebook.com/gbrl.chvz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="follow-icon-footer FaFacebookF" />
                    </a>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer2">
                    <a
                      href="https://twitter.com/gabby_gabe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="follow-icon-footer FaTwitter" />
                    </a>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer3">
                    <a
                      href="https://www.instagram.com/gbrl.chvz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="follow-icon-footer FaInstagram" />
                    </a>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer4">
                    <a
                      href="https://www.linkedin.com/in/gabechavezcissp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="follow-icon-footer FaLinkedinIn" />
                    </a>
                  </div>
                </li>
                <li className="follow-container-footer">
                  <div className="follow-icon-container-footer5">
                    <a
                      href="https://github.com/gchave77"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="follow-icon-footer FaGithub" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h4>Phone</h4>
              <ul>
                <li>
                  <Link to="">
                    <FaMapMarkedAlt /> <span> +1 623-239-3965</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h4>Email</h4>
              <ul>
                <li>
                  <Link to="">
                    <FaEnvelope /> <span> TT@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h4>Location</h4>
              <ul>
                <li>
                  <Link to="">
                    <FaMapMarkerAlt />
                    <span> Plano, TX 75002</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-two">
        <div className="contact-center">
          <div className="last-footer">
            <p>TEKSystems Capstone-1</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
