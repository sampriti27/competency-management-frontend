import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import profile from "../images/profile.png";

const header = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{ marginLeft: "-8%" }}>
            Competancy Management System
          </Navbar.Brand>
          <Nav style={{ marginRight: "-6%" }}>
            <Nav.Link
              href="#home"
              style={{ marginRight: "10%", paddingTop: "3.5%" }}
            >
              Dashboard
            </Nav.Link>

            <NavDropdown
              title="Skills"
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
              style={{ marginRight: "7%", paddingTop: "1%" }}
            >
              <NavDropdown.Item href="#action/3.1">Add Skills</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Approved Skills
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Pending Approvals
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Projects"
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
              style={{ marginRight: "7%", paddingTop: "1%" }}
            >
              <NavDropdown.Item href="#action/3.1" id="projects">
                Add Project
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                View Projects
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <>
                  <img
                    src={profile}
                    alt="Profile"
                    style={{ height: "2.5vw" }}
                  />
                </>
              }
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="#action/3.1">
                View Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default header;
