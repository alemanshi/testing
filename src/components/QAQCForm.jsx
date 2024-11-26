import React, { useState } from "react";
import { Form, DropdownButton, Dropdown } from "react-bootstrap";
import DragAndDrop from "./DragAndDrop";
import ExportButton from "./ExportButton";

const QAQCForm = () => {
  const [testType, setTestType] = useState("");
  const [formData, setFormData] = useState({
    description: "",
    steps: "",
    expectedResult: "",
    actualResult: "",
  });
  const [evidences, setEvidences] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEvidencesChange = (newEvidences) => {
    setEvidences(newEvidences);
  };

  return (
    <div>
      <h3>Caso de Prueba</h3>
      <DropdownButton
        title={testType || "Seleccione Tipo de Prueba"}
        onSelect={setTestType}
        className="mb-3"
      >
        <Dropdown.Item eventKey="Estática">Estática</Dropdown.Item>
        <Dropdown.Item eventKey="Dinámica">Dinámica</Dropdown.Item>
      </DropdownButton>

      <Form>
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
        <Form.Group>
          <Form.Label>Resultado Esperado</Form.Label>
          <Form.Control
            as="textarea"
            name="expectedResult"
            placeholder="Resultado esperado"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Resultado Obtenido</Form.Label>
          <Form.Control
            as="textarea"
            name="actualResult"
            placeholder="Resultado obtenido"
            onChange={handleInputChange}
          />
        </Form.Group>

        <DragAndDrop onEvidencesChange={handleEvidencesChange} />

        <ExportButton data={{ testType, ...formData }} reportType="CasoDePrueba" evidences={evidences} />
      </Form>
    </div>
  );
};

export default QAQCForm;
