import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoImage from "../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-dom";

import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

function Heading() {
  const [navbar, setnavbar] = useState(false);
  const navbarRef = useRef(null);
  const getNavbarHeight = () => {
    if (navbarRef.current) {
      const rect = navbarRef.current.getBoundingClientRect();
      return rect.height;
    }
    return 0;
  };
  const navbarHeight = getNavbarHeight();
  const changebackground = () => {
    if (window.scrollY >= navbarHeight) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

  window.addEventListener("scroll", changebackground);

  return (
    <Navbar
      expand="lg"
      className={
        navbar ? "navbaractive navbar bounceeeeeeee" : "navbar bounceeeeeeee"
      }
      fixed="top"
      ref={navbarRef}
    >
      <Container fluid>
        <div className=" d-flex  justify-content-end mylogo">
          <Navbar.Brand href="#" className="mr-auto">
            <img
              src={logoImage}
              alt="here is img"
              className="img-fluid"
              style={{
                maxHeight: "200px",
                maxWidth: "200px",
                minWidth: "50px",
                minHeight: "50px",
              }}
            />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 w-100 justify-content-end"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              className="navigators mx-2"
              as={ScrollLink}
              to="first-section"
              smooth="easeInOut"
              duration={200}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="navigators mx-2"
              as={ScrollLink}
              to="skillss"
              smooth="easeInOut"
              duration={200}
            >
              Skills
            </Nav.Link>

            <Nav.Link
             className="navigators mx-2"
             as={ScrollLink}
             to="project-section"
             smooth="easeInOut"
             duration={200}
             >Projects</Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/mostafa-shawkey"
              className="socialmedia mx-1 ms-5"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Nav.Link>
            <Nav.Link
              href="https://www.facebook.com/profile.php?id=100007704068207&mibextid=ZbWKwL"
              className="socialmedia mx-1"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Mustafa212"
              className="socialmedia mx-1"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
          </Nav>
          <Form className="d-flex w-25 mx-2 ">
            <Button className="w-50 py-3  lets-connect">
              <span>let's connect</span>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;
