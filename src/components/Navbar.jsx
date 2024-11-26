import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import QAQCForm from "./QAQCForm";
import BugReportForm from "./BugReportForm";
import APITesting from "./APITesting";

const AppNavbar = () => {
  const [activeSection, setActiveSection] = useState("case");

  const renderSection = () => {
    switch (activeSection) {
      case "case":
        return <QAQCForm />;
      case "bug":
        return <BugReportForm />;
      case "api":
        return <APITesting />;
      default:
        return <QAQCForm />;
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Herramienta Testing</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setActiveSection("case")}>Caso de Prueba</Nav.Link>
          <Nav.Link onClick={() => setActiveSection("bug")}>Reporte de BUG</Nav.Link>
          <Nav.Link onClick={() => setActiveSection("api")}>Testeo de API</Nav.Link>
        </Nav>
      </Navbar>
      <div className="container mt-4">{renderSection()}</div>
    </div>
  );
};

export default AppNavbar;
