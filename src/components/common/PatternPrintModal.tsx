import React, { useState } from 'react';
import { X, Printer, Download, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { Pattern } from '../../types';
import { generatePatternPdf } from '../../utils/pdfGenerator';

interface PatternPrintModalProps {
  pattern: Pattern | null;
  onClose: () => void;
}

export const PatternPrintModal: React.FC<PatternPrintModalProps> = ({ pattern, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!pattern) return null;

  const handleNativePrint = () => {
    // Triggers browser print dialog (Destination: Save as PDF or physical printer)
    window.print();
  };

  const handleDirectPdfDownload = () => {
    try {
      setIsGenerating(true);
      generatePatternPdf(pattern);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadTextFile = () => {
    // Generate clean text-formatted printable pattern file
    const content = `=====================================================
MYCROCHIFY DIGITAL PATTERN LIBRARY
Pattern: ${pattern.title}
Collection: ${pattern.category} · ${pattern.subcategory}
Difficulty: ${pattern.difficulty} · Est. Time: ${pattern.estimatedTime}
=====================================================

DESCRIPTION:
${pattern.fullDescription || pattern.description}

SPECIFICATIONS:
- Hook Size: ${pattern.hookSize}
- Yarn Weight: ${pattern.yarnWeight}
- Yarn Details: ${pattern.yarnDetails}
- Gauge: ${pattern.gauge}
- Finished Dimensions: ${pattern.finishedSize}

MATERIALS:
${pattern.materials.map((m) => `[ ] ${m}`).join('\n')}

ABBREVIATIONS (US TERMS):
${pattern.abbreviations.map((a) => `${a.abbr.padEnd(8)} - ${a.name}: ${a.meaning}`).join('\n')}

INSTRUCTIONS:
${pattern.instructions
  .map(
    (sec, sIdx) => `
--- SECTION ${sIdx + 1}: ${sec.sectionTitle.toUpperCase()} ---
${sec.notes ? `Note: ${sec.notes}\n` : ''}
${sec.steps
  .map(
    (st) =>
      `${st.label}: ${st.instruction} ${st.stitchCount ? `[${st.stitchCount}]` : ''}`
  )
  .join('\n\n')}
`
  )
  .join('\n')}

=====================================================
Copyright (c) MyCrochify.com. All rights reserved.
For personal use only. Happy Crocheting!
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${pattern.slug}-mycrochify-pattern.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="printable-modal-overlay fixed inset-0 z-50 overflow-y-auto bg-[#49343B]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 print:p-0 print:bg-white">
      <div className="printable-modal-content w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E8BFC5] overflow-hidden flex flex-col max-h-[90vh] print:max-h-none print:shadow-none print:border-none print:rounded-none">
        
        {/* Modal Controls Header (Hidden in physical print & browser PDF preview) */}
        <div className="no-print p-4 sm:p-6 bg-[#FFF9F7] border-b border-[#E8BFC5]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F8E7E9] flex items-center justify-center text-[#A65F73]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#49343B]">
                Printable PDF Pattern
              </h3>
              <p className="text-[11px] text-[#8E747E]">
                Download a clean offline PDF document or send directly to your printer.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {/* Primary Action: Direct PDF File Download */}
            <button
              onClick={handleDirectPdfDownload}
              disabled={isGenerating}
              className="py-2 px-3.5 bg-[#A65F73] hover:bg-[#87495B] text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                  <span>PDF Saved!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{isGenerating ? 'Generating PDF...' : 'Download PDF File'}</span>
                </>
              )}
            </button>

            {/* Secondary Action: Browser Print Dialog */}
            <button
              onClick={handleNativePrint}
              className="py-2 px-3.5 bg-[#F8E7E9] hover:bg-[#E8BFC5] text-[#49343B] text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#A65F73]" />
              <span>Print via Browser</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-[#49343B] hover:text-[#A65F73] rounded-full hover:bg-[#F8E7E9] transition-colors ml-auto sm:ml-2 cursor-pointer"
              title="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Helpful Tip Banner for Users */}
        <div className="no-print bg-[#EFF4F0] border-b border-[#CCD8CF] px-6 py-2.5 text-xs text-[#3E2F35] flex items-center justify-between">
          <span>
            💡 <strong>Two Ways to Save:</strong> Click <strong>"Download PDF File"</strong> to save the document directly to your downloads, or click <strong>"Print via Browser"</strong> and select <em>Destination: Save as PDF</em>.
          </span>
          <button
            onClick={handleDownloadTextFile}
            className="text-[11px] text-[#587261] hover:underline font-medium shrink-0 ml-4 cursor-pointer"
          >
            Download as Text (.txt)
          </button>
        </div>

        {/* Printable Document Body (Becomes entire printed document) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white print:p-0 print:overflow-visible">
          {/* Document Header */}
          <div className="border-b-2 border-[#A65F73] pb-6 flex items-start justify-between print-avoid-break">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#49343B]">
                  MyCrochify
                </span>
                <span className="text-xs uppercase tracking-widest text-[#A65F73] font-medium">
                  · Studio Pattern Series
                </span>
              </div>
              <h1 className="font-serif text-3xl font-bold text-[#49343B]">
                {pattern.title}
              </h1>
              <p className="text-xs text-[#6E535C] mt-1">
                Designed by MyCrochify Atelier · {pattern.subcategory} · Skill Level: {pattern.difficulty} · Est. Time: {pattern.estimatedTime}
              </p>
            </div>
            <div className="text-right text-xs text-[#8E747E] shrink-0 ml-4">
              <span className="font-semibold text-[#A65F73] block">
                {pattern.isPremium ? 'Premium Edition' : 'Free Pattern Edition'}
              </span>
              <span>www.mycrochify.com</span>
            </div>
          </div>

          {/* Quick Specifications Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#FFF9F7] border border-[#E8BFC5]/50 text-xs print-avoid-break">
            <div>
              <span className="text-[#8E747E] block font-medium">Hook Size</span>
              <span className="font-semibold text-[#49343B]">{pattern.hookSize}</span>
            </div>
            <div>
              <span className="text-[#8E747E] block font-medium">Yarn Weight</span>
              <span className="font-semibold text-[#49343B]">{pattern.yarnWeight}</span>
            </div>
            <div>
              <span className="text-[#8E747E] block font-medium">Gauge</span>
              <span className="font-medium text-[#49343B]">{pattern.gauge}</span>
            </div>
            <div>
              <span className="text-[#8E747E] block font-medium">Finished Size</span>
              <span className="font-semibold text-[#49343B]">{pattern.finishedSize}</span>
            </div>
          </div>

          {/* Materials Checklist */}
          <div className="print-avoid-break">
            <h3 className="font-serif text-lg font-semibold text-[#49343B] mb-2">
              Materials Needed
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#49343B]">
              {pattern.materials.map((m, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-xs border border-[#A65F73] inline-block shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Abbreviations & Stitches */}
          <div className="print-avoid-break">
            <h3 className="font-serif text-lg font-semibold text-[#49343B] mb-2">
              Abbreviations &amp; Stitches (US Terms)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs">
              {pattern.abbreviations.map((a, idx) => (
                <div key={idx} className="flex items-baseline gap-2 py-0.5 border-b border-dashed border-[#E8BFC5]/30">
                  <span className="font-mono font-bold text-[#A65F73] w-14 shrink-0">{a.abbr}</span>
                  <span className="text-[#49343B]">{a.meaning}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold text-[#49343B] border-b border-[#E8BFC5]/40 pb-2">
              Written Instructions
            </h3>

            {pattern.instructions.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3 print-avoid-break">
                <h4 className="font-serif text-base font-semibold text-[#A65F73]">
                  {section.sectionTitle}
                </h4>
                {section.notes && (
                  <p className="text-xs text-[#8E747E] italic">
                    Note: {section.notes}
                  </p>
                )}

                <div className="space-y-2 text-xs text-[#49343B]">
                  {section.steps.map((step, stIdx) => (
                    <div key={stIdx} className="p-2.5 rounded-lg bg-[#FFF9F7]/50 border border-[#E8BFC5]/30 print:border-[#E8BFC5] print-avoid-break">
                      <div className="flex items-baseline justify-between mb-0.5">
                        <strong className="text-[#A65F73]">{step.label}</strong>
                        {step.stitchCount && (
                          <span className="font-mono text-[10px] text-[#6E535C]">
                            [{step.stitchCount}]
                          </span>
                        )}
                      </div>
                      <p>{step.instruction}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note on printout */}
          <div className="pt-6 border-t border-[#E8BFC5]/40 text-center text-[10px] text-[#8E747E] print-avoid-break">
            <p>MyCrochify.com — Your Creative World of Crochet. Pattern designed for personal non-commercial crafting.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
