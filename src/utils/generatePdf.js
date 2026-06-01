import { jsPDF } from "jspdf";

const generatePdf = () => {
  const result = JSON.parse(
    localStorage.getItem("assessmentResult")
  );

  const user = JSON.parse(
    localStorage.getItem("userData")
  );

  const pdf = new jsPDF();

  let y = 20;

  pdf.setFontSize(20);
  pdf.text("Financial Identity Report", 20, y);

  y += 20;

  pdf.setFontSize(12);
  pdf.text(`Name: ${user.name}`, 20, y);

  y += 10;
  pdf.text(`Email: ${user.email}`, 20, y);

  y += 20;
  pdf.setFontSize(16);
  pdf.text(result.title, 20, y);

  y += 15;

  pdf.setFontSize(12);
  pdf.text(result.summary, 20, y, {
    maxWidth: 170,
  });

  y += 30;

  pdf.text("Strengths:", 20, y);
  y += 10;

  result.strengths.forEach((item) => {
    pdf.text(`• ${item}`, 25, y);
    y += 8;
  });

  y += 8;

  pdf.text("Challenges:", 20, y);
  y += 10;

  result.challenges.forEach((item) => {
    pdf.text(`• ${item}`, 25, y);
    y += 8;
  });

  y += 8;

  pdf.text("Recommendation:", 20, y);
  y += 10;

  pdf.text(result.recommendation, 20, y, {
    maxWidth: 170,
  });

  pdf.save("Financial-Identity-Report.pdf");
};

export default generatePdf;