"use client";

interface DirectPDFViewProps {
  title: string;
  pdfFileName: string;
}

export const DirectPDFView = ({ title, pdfFileName }: DirectPDFViewProps) => {
  const pdfPath = `/cv/${pdfFileName}`;

  return (
    <div className="fixed inset-0 w-screen h-screen bg-slate-900 z-[9999] overflow-hidden" suppressHydrationWarning>
      <iframe
        src={pdfPath}
        className="w-full h-full border-none"
        title={`${title} CV PDF`}
      />
    </div>
  );
};
