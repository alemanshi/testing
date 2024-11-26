import React from "react";
import { jsPDF } from "jspdf";

const ExportButton = ({ data, reportType, evidences }) => {
  const validReportType = reportType || "Reporte";

  const exportToPDF = () => {
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(validReportType, 10, 10);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    let yPosition = 20;

    const text = `
      Tipo de prueba: ${data.testType || "No especificado"}
      Estado: ${data.caseState || "No especificado"}
      Descripción: ${data.description || "No especificada"}
      Pasos de Reproducción: ${data.steps || "No especificados"}
      Resultado Esperado: ${data.expectedResult || "No especificado"}
      Resultado Obtenido: ${data.actualResult || "No especificado"}
    `;
    doc.text(text.split("\n"), 10, yPosition);
    yPosition += 60;

    if (evidences && evidences.length > 0) {
      evidences.forEach((evidence, index) => {
        if (evidence.startsWith('data:image') || evidence.startsWith('http')) {
          doc.addImage(evidence, 'JPEG', 10, yPosition, 180, 120);
          yPosition += 130;
        }
      });
    }

    const fileName = `${validReportType}.pdf`;
    doc.save(fileName);
  };

  return (
    <div className="mt-3">
      <button onClick={exportToPDF} className="btn btn-secondary mt-3">
        Exportar a PDF
      </button>
    </div>
  );
};

export default ExportButton;
