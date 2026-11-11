import { jsPDF } from 'jspdf';
import { Pattern } from '../types';

/**
 * Generates and downloads a clean, multi-page, formatted PDF crochet pattern.
 */
export function generatePatternPdf(pattern: Pattern): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 16) {
      doc.addPage();
      y = margin;
      drawHeader();
    }
  };

  const drawHeader = () => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(166, 95, 115); // Rosewood #A65F73
    doc.text('MYCROCHIFY · STUDIO PATTERN SERIES', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(140, 140, 140);
    doc.text('www.mycrochify.com', pageWidth - margin, y, { align: 'right' });
    y += 4;
    doc.setDrawColor(232, 191, 197); // Dusty rose divider
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;
  };

  // --- Page 1: Cover Header ---
  drawHeader();

  // Pattern Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(62, 47, 53); // Plum #3E2F35
  const titleLines = doc.splitTextToSize(pattern.title, contentWidth);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 7;

  // Subtitle / Category
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(110, 83, 92);
  doc.text(
    `Collection: ${pattern.subcategory}   |   Skill Level: ${pattern.difficulty}   |   Time: ${pattern.estimatedTime}`,
    margin,
    y
  );
  y += 6;

  // Description box
  doc.setFillColor(255, 249, 247); // Warm Ivory
  doc.setDrawColor(232, 191, 197);
  doc.roundedRect(margin, y, contentWidth, 20, 2, 2, 'FD');
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(73, 52, 59);
  const descLines = doc.splitTextToSize(pattern.fullDescription || pattern.description, contentWidth - 8);
  doc.text(descLines.slice(0, 3), margin + 4, y + 5);
  y += 24;

  // Specifications Box
  doc.setFillColor(249, 235, 234); // Blush
  doc.roundedRect(margin, y, contentWidth, 22, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(166, 95, 115);
  doc.text('SPECIFICATIONS', margin + 4, y + 5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(62, 47, 53);
  doc.text(`Hook Size: ${pattern.hookSize}`, margin + 4, y + 10);
  doc.text(`Yarn Weight: ${pattern.yarnWeight}`, margin + 4, y + 15);
  doc.text(`Finished Size: ${pattern.finishedSize}`, margin + (contentWidth / 2), y + 10);
  doc.text(`Gauge: ${pattern.gauge}`, margin + (contentWidth / 2), y + 15);
  y += 26;

  // Materials Section
  checkPageBreak(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(166, 95, 115);
  doc.text('MATERIALS NEEDED', margin, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(62, 47, 53);
  for (const mat of pattern.materials) {
    checkPageBreak(6);
    doc.setDrawColor(166, 95, 115);
    doc.rect(margin, y - 2.8, 3, 3); // Checkbox
    const matLines = doc.splitTextToSize(mat, contentWidth - 6);
    doc.text(matLines, margin + 5, y);
    y += matLines.length * 4.2;
  }
  y += 4;

  // Abbreviations Table
  checkPageBreak(35);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(166, 95, 115);
  doc.text('ABBREVIATIONS & STITCHES (US TERMS)', margin, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  for (const abbr of pattern.abbreviations) {
    checkPageBreak(5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(166, 95, 115);
    doc.text(abbr.abbr.padEnd(10), margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(62, 47, 53);
    const meaningText = `${abbr.name ? `${abbr.name} - ` : ''}${abbr.meaning}`;
    const meaningLines = doc.splitTextToSize(meaningText, contentWidth - 25);
    doc.text(meaningLines, margin + 25, y);
    y += Math.max(meaningLines.length * 3.8, 4.2);
  }
  y += 6;

  // Written Instructions
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(166, 95, 115);
  doc.text('WRITTEN ROW-BY-ROW INSTRUCTIONS', margin, y);
  y += 6;

  for (let sIdx = 0; sIdx < pattern.instructions.length; sIdx++) {
    const sec = pattern.instructions[sIdx];
    checkPageBreak(18);

    // Section Banner
    doc.setFillColor(255, 249, 247);
    doc.setDrawColor(232, 191, 197);
    doc.roundedRect(margin, y, contentWidth, 7, 1, 1, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(166, 95, 115);
    doc.text(`Section ${sIdx + 1}: ${sec.sectionTitle}`, margin + 3, y + 4.8);
    y += 9;

    if (sec.notes) {
      checkPageBreak(10);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7.5);
      doc.setTextColor(120, 100, 105);
      const noteLines = doc.splitTextToSize(`Note: ${sec.notes}`, contentWidth - 4);
      doc.text(noteLines, margin + 2, y);
      y += noteLines.length * 3.6 + 2;
    }

    // Steps
    for (const step of sec.steps) {
      checkPageBreak(12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(62, 47, 53);
      doc.text(step.label, margin + 2, y);

      if (step.stitchCount) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(7);
        doc.setTextColor(140, 110, 115);
        doc.text(`[${step.stitchCount}]`, pageWidth - margin - 2, y, { align: 'right' });
      }
      y += 4;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(73, 52, 59);
      const instLines = doc.splitTextToSize(step.instruction, contentWidth - 4);
      checkPageBreak(instLines.length * 3.6 + 3);
      doc.text(instLines, margin + 2, y);
      y += instLines.length * 3.6 + 3;
    }
    y += 2;
  }

  // Footer on all pages
  const totalPages = doc.internal.pages.length - 1;
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(160, 160, 160);
    doc.text(
      `MyCrochify.com — ${pattern.title}  |  Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    );
  }

  // Save the PDF file
  const fileName = `${pattern.slug || 'pattern'}-mycrochify.pdf`;
  doc.save(fileName);
}
