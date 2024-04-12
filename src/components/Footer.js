import React from "react";
import logoimg from "../gifs/stickman.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-react";
import mailimg from "../gifs/mail.json";
function Footer() {
  return (
    <div className="footer d-flex flex-column justify-content-lg-around">
      <div className="shifted-div container rounded-5">
        <div className="container d-flex justify-content-center align-items-center flex-wrap h-100">
          <div className="dialogue flex-grow-1 d-flex justify-content-center">
            <h2 style={{ lineHeight: "3rem", letterSpacing: "1.rem" }}>
              Unlock the Door to My Creative<br></br>
              <b style={{ color: "#9873d2" }}>Universe🌌</b>
              <br></br>&Drop Your Mail Here
            </h2>
          </div>

          <div className="in-shifted-div flex-grow-1 d-flex justify-content-center me-5">
            <input
              type="text"
              className="innn rounded-4"
              placeholder="Enter Your Email"
            />
            <Lottie animationData={mailimg} loop={true} className="mailimg " />
          </div>
        </div>
      </div>

      <div className="endofpage d-flex justify-content-center container pb-3">
        <div className="logo flex-grow-1">
          <img
            src={logoimg}
            alt="Logo"
            style={{ width: "90px" }}
            className="ms-5"
          />
        </div>
        <div className="reserved flex-grow-1 d-flex align-items-end flex-column">
          <div className="icons d-flex">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/mostafa-shawkey"
              className="socialmedia "
              target="_blank"
              style={{ lineHeight: "3rem" }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/mostafa-shawkey"
              className="socialmedia "
              target="_blank"
              style={{ lineHeight: "3rem" }}
            >
              <FontAwesomeIcon icon={faFacebookF} />{" "}
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/mostafa-shawkey"
              className="socialmedia "
              target="_blank"
              style={{ lineHeight: "3rem" }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <h6 style={{ color: "#ddd" }}>
            ____copy right &copy;2024 All reserved by mostafa shawkey &reg;
          </h6>
        </div>
      </div>
      <div className="footer-content"></div>
    </div>
  );
}

export default Footer;
