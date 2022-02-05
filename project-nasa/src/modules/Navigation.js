import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import NotFound from "./NotFound";
import Rover from "./Rover";
import Projects from "./Projects";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div style={{ textAlign: "center" }} className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Project NASA</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/rover">Rover</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/rover" element={<Rover />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Navigation;
