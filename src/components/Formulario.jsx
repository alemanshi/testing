import React, { useState } from "react";
import { Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import DragAndDrop from "./DragAndDrop";
import ExportButton from "./ExportButton";

const Formulario = () => {
  const [selectedType, setSelectedType] = useState("QA/QC");
  const [subOption, setSubOption] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    steps: "",
    expectedResult: "",
    actualResult: "",
    environment: "",
  });

  const handleDropdownChange = (type) => {
    setSelectedType(type);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <Form>
        <DropdownButton title={selectedType} onSelect={handleDropdownChange}>
          <Dropdown.Item eventKey="QA">QA</Dropdown.Item>
          <Dropdown.Item eventKey="QC">QC</Dropdown.Item>
        </DropdownButton>

        <DropdownButton title="Seleccione una opción" onSelect={setSubOption}>
          <Dropdown.Item eventKey="Caso de Prueba">Caso de Prueba</Dropdown.Item>
          <Dropdown.Item eventKey="Reporte de BUG">Reporte de BUG</Dropdown.Item>
        </DropdownButton>

        {subOption && (
          <>
            <Form.Group controlId="title">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Ingrese el título"
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Descripción del caso"
                onChange={handleFormChange}
              />
            </Form.Group>
            <DragAndDrop />
          </>
        )}
        <Button variant="primary" type="submit">
          Guardar
        </Button>
        <ExportButton data={formData} />
      </Form>
    </div>
  );
};

export default Formulario;
