import jsPDF from "jspdf";

export function generateOnePager() {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 44;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Accent header bar
  doc.setFillColor(56, 189, 248);
  doc.rect(0, 0, pageWidth, 6, "F");

  // Name + title
  doc.setFont("helvetica", "bold");
  doc.setTextColor(20, 24, 34);
  doc.setFontSize(24);
  y += 18;
  doc.text("Dhanush R", margin, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(80, 90, 105);
  y += 18;
  doc.text("Full Stack Java Developer  |  Spring Boot + React", margin, y);

  // Contact line
  doc.setFontSize(10);
  doc.setTextColor(110, 120, 135);
  y += 16;
  doc.text(
    "dhanushrmdy@gmail.com  |  +91 80732 15548  |  Bangalore, India",
    margin,
    y
  );
  y += 6;
  doc.text(
    "github.com/dhanushr-dev  |  linkedin.com/in/dhanushr-dev",
    margin,
    y + 10
  );
  y += 22;

  // Divider
  doc.setDrawColor(220, 226, 235);
  doc.line(margin, y, pageWidth - margin, y);
  y += 18;

  const section = (title: string) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(30, 130, 180);
    doc.text(title.toUpperCase(), margin, y);
    y += 6;
    doc.setDrawColor(56, 189, 248);
    doc.setLineWidth(1.2);
    doc.line(margin, y, margin + 40, y);
    doc.setLineWidth(0.2);
    y += 14;
  };

  const paragraph = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(45, 55, 72);
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * 13 + 6;
  };

  const bullet = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(45, 55, 72);
    const lines = doc.splitTextToSize(text, contentWidth - 14);
    doc.text("•", margin, y);
    doc.text(lines, margin + 12, y);
    y += lines.length * 13 + 4;
  };

  // Summary
  section("Summary");
  paragraph(
    "BE CSE 2026 fresher and Full Stack Java Developer focused on Spring Boot and React. TCS NQT cleared and shortlisted for TCS Digital Cadre. I enjoy turning ideas into scalable, well-tested products end-to-end."
  );

  // Skills
  section("Skills");
  paragraph("Languages: Java, JavaScript, SQL, HTML5, CSS3");
  paragraph("Backend: Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs");
  paragraph("Frontend: React.js, Tailwind CSS");
  paragraph("Database: MySQL");
  paragraph("Tools: Git, GitHub, Postman, Maven, Eclipse, VS Code");

  // Projects
  section("Projects");
  bullet(
    "ShopEase — Full-stack e-commerce app with cart, orders, JWT auth, admin dashboard. Spring Boot + React + MySQL. github.com/dhanushr-dev/shopease"
  );
  bullet(
    "AirSense Pro — Real-time Air Quality dashboard with weather, interactive map, and AI health recommendations. Java + MySQL. airsensepro.netlify.app"
  );

  // Experience / Education
  section("Experience & Education");
  bullet("Tap Academy — Full Stack Java Development training (Spring Boot, React, MySQL).");
  bullet("BE Computer Science & Engineering — Graduating 2026.");

  // Achievements
  section("Achievements");
  bullet("Cleared TCS NQT — shortlisted for TCS Digital Cadre (2026).");
  bullet("Shipped ShopEase, a full-stack e-commerce app end-to-end.");
  bullet("Participated in multiple hackathons under tight deadlines.");

  // Footer
  doc.setFontSize(9);
  doc.setTextColor(140, 150, 165);
  doc.text(
    "Generated from dhanushr.dev — one-page portfolio summary",
    margin,
    pageHeight - 24
  );

  doc.save("Dhanush_R_OnePager.pdf");
}
