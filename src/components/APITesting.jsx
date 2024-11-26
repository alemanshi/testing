import React, { useState } from "react";
import { Form, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";

const APITesting = () => {
  const [httpMethod, setHttpMethod] = useState("");
  const [formData, setFormData] = useState({
    baseURL: "",
    endpoint: "",
    response: "",
    status: "",
  });

  // Manejar cambios en los campos de entrada
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para exportar a Word
  const exportToWord = () => {
    const doc = new Blob([JSON.stringify(formData, null, 2)], { type: "application/json" });
    saveAs(doc, "API_Test_Report.docx");
  };

  // Función para exportar a PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const fullURL = `${formData.baseURL}${formData.endpoint}`;
    const text = `Método HTTP: ${httpMethod}\n\nURL Completa: ${fullURL}\n\nRespuesta Esperada: ${formData.response}\n\nCódigo de Estado HTTP: ${formData.status}`;
    doc.text(text, 10, 10);
    doc.save("API_Test_Report.pdf");
  };

  // Función para manejar selección de código HTTP
  const handleHTTPStatusSelect = (status, description) => {
    setFormData({ ...formData, status, response: description });
  };

  return (
    <div>
      <h3>Pruebas de API</h3>

      {/* Selección de Método HTTP */}
      <DropdownButton
        title={httpMethod || "Seleccione Método HTTP"}
        onSelect={setHttpMethod}
        className="mb-3"
      >
        <Dropdown.Item eventKey="GET">GET</Dropdown.Item>
        <Dropdown.Item eventKey="POST">POST</Dropdown.Item>
        <Dropdown.Item eventKey="PUT">PUT</Dropdown.Item>
        <Dropdown.Item eventKey="DELETE">DELETE</Dropdown.Item>
        <Dropdown.Item eventKey="PATCH">PATCH</Dropdown.Item>
        <Dropdown.Item eventKey="OPTIONS">OPTIONS</Dropdown.Item>
        <Dropdown.Item eventKey="HEAD">HEAD</Dropdown.Item>
        <Dropdown.Item eventKey="CONNECT">CONNECT</Dropdown.Item>
        <Dropdown.Item eventKey="TRACE">TRACE</Dropdown.Item>
        <Dropdown.Item eventKey="LINK">LINK</Dropdown.Item>
        <Dropdown.Item eventKey="UNLINK">UNLINK</Dropdown.Item>
      </DropdownButton>

      {/* Formulario */}
      <Form>
        {/* Campo de URL Base */}
        <Form.Group>
          <Form.Label>URL Base</Form.Label>
          <Form.Control
            type="text"
            name="baseURL"
            placeholder="Ingrese la URL base (ej., https://api.ejemplo.com)"
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Campo de Endpoint */}
        <Form.Group>
          <Form.Label>Endpoint</Form.Label>
          <Form.Control
            type="text"
            name="endpoint"
            placeholder="Ingrese el endpoint (ej., /users)"
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Campo de Respuesta */}
        
        {/* Selección de Código HTTP */}
        <Form.Group>
          <Form.Label>Código de Respuesta Esperada</Form.Label>
          <DropdownButton title={formData.status || "Seleccione Código de respuesta esperada"} className="mb-3">
            <Dropdown.Header>Respuestas Informativas (100–199)</Dropdown.Header>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(100, "Continue")}>100 - Continue</Dropdown.Item>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(101, "Switching Protocols")}>101 - Switching Protocols</Dropdown.Item>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(102, "Processing")}>102 - Processing</Dropdown.Item>

            <Dropdown.Header>Respuestas Satisfactorias (200–299)</Dropdown.Header>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(200, "OK")}>200 - OK</Dropdown.Item>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(201, "Created")}>201 - Created</Dropdown.Item>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(204, "No Content")}>204 - No Content</Dropdown.Item>

            <Dropdown.Header>Redirecciones (300–399)</Dropdown.Header>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(301, "Moved Permanently")}>301 - Moved Permanently</Dropdown.Item>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(302, "Found")}>302 - Found</Dropdown.Item>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(304, "Not Modified")}>304 - Not Modified</Dropdown.Item>

            <Dropdown.Header>Errores del Cliente (400–499)</Dropdown.Header>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(400, "Bad Request")}>400 - Bad Request</Dropdown.Item>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(401, "Unauthorized")}>401 - Unauthorized</Dropdown.Item>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(404, "Not Found")}>404 - Not Found</Dropdown.Item>

            <Dropdown.Header>Errores del Servidor (500–599)</Dropdown.Header>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(500, "Internal Server Error")}>500 - Internal Server Error</Dropdown.Item>
            <Dropdown.Item onClick={() => handleHTTPStatusSelect(503, "Service Unavailable")}>503 - Service Unavailable</Dropdown.Item>
          </DropdownButton>
        </Form.Group>

        <Form.Group>
          <Form.Label>Respuesta Obtenida</Form.Label>
          <Form.Control
            as="textarea"
            name="response"
            placeholder="Ingrese respuesta obtenida"
            value={formData.response}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form>

      {/* Botones de Exportación */}
      <div className="mt-3">
        <Button onClick={exportToPDF} variant="secondary" className="mr-2">
          Exportar a PDF
        </Button>
      </div>
    </div>
  );
};

export default APITesting;
