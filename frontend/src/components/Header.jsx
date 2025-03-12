import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import SearchBox from "./SearchBox";

export default function Header() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/" || pathname.startsWith("/search");

  return (
    <Navbar bg="light" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <span className="d-flex align-items-center">
            <div
              className="bg-secondary rounded-circle d-inline-block me-2"
              style={{ width: "30px", height: "30px" }}
            ></div>
            Bamboozled
          </span>
        </Navbar.Brand>
        {isHomePage && <SearchBox />}
        {isHomePage && (
          <Button
            as={Link}
            to="/create"
            variant="primary"
            className="ms-auto rounded-pill"
          >
            Create a Quiz
          </Button>
        )}
      </Container>
    </Navbar>
  );
}
