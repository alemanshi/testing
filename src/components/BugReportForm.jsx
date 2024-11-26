import React, { useState } from "react";
import { Form, DropdownButton, Dropdown } from "react-bootstrap";
import DragAndDrop from "./DragAndDrop";
import ExportButton from "./ExportButton";

const BugReportForm = () => {
  const [bugType, setBugType] = useState(""); // Tipo de bug
  const [criticality, setCriticality] = useState(""); // Criticidad
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    steps: "",
    expectedResult: "",
    actualResult: "",
    environment: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Reporte de BUG</h3>
      <Form>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Ingrese título"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Ingrese descripción"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Pasos de Reproducción</Form.Label>
          <Form.Control
            as="textarea"
            name="steps"
            placeholder="Describa los pasos"
            onChange={handleInputChange}
          />
        </Form.Group>
        <DropdownButton
          title={bugType || "Seleccione Tipo de Bug"}
          onSelect={(e) => setBugType(e)}
          className="mb-3"
        >
          <Dropdown.Item eventKey="Funcionales">Funcionales</Dropdown.Item>
          <Dropdown.Item eventKey="Rendimiento">Rendimiento</Dropdown.Item>
          <Dropdown.Item eventKey="Seguridad">Seguridad</Dropdown.Item>
          <Dropdown.Item eventKey="UI/UX">UI/UX</Dropdown.Item>
          <Dropdown.Item eventKey="Compatibilidad">Compatibilidad</Dropdown.Item>
          <Dropdown.Item eventKey="Lógicos">Lógicos</Dropdown.Item>
          <Dropdown.Item eventKey="Integración">Integración</Dropdown.Item>
          <Dropdown.Item eventKey="Configuración">Configuración</Dropdown.Item>
          <Dropdown.Item eventKey="Ortográficos">Ortográficos</Dropdown.Item>
          <Dropdown.Item eventKey="Usabilidad">Usabilidad</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          title={criticality || "Seleccione Criticidad"}
          onSelect={(e) => setCriticality(e)}
          className="mb-3"
        >
          <Dropdown.Item eventKey="Alta">Alta</Dropdown.Item>
          <Dropdown.Item eventKey="Media">Media</Dropdown.Item>
          <Dropdown.Item eventKey="Baja">Baja</Dropdown.Item>
        </DropdownButton>
        <Form.Group>
          <Form.Label>Ambiente / SO</Form.Label>
          <Form.Control
            type="text"
            name="environment"
            placeholder="Especifique Ambiente / SO"
            onChange={handleInputChange}
          />
        </Form.Group>
        <DragAndDrop />
        <ExportButton data={{ bugType, criticality, ...formData }} />
      </Form>
    </div>
  );
};

export default BugReportForm;
