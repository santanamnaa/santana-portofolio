import { DirectPDFView } from "@/components/DirectPDFView";

export const metadata = {
  title: "Business Analyst CV PDF | Santana Mena",
  description: "Direct PDF preview and download of Santana Mena's Business Analyst CV.",
};

export default function BusinessAnalystPage() {
  return (
    <DirectPDFView
      title="Business Analyst"
      pdfFileName="CV_Santana_Mena_Business_Analyst.pdf"
    />
  );
}
