import { DirectPDFView } from "@/components/DirectPDFView";

export const metadata = {
  title: "Data Analyst CV PDF | Santana Mena",
  description: "Direct PDF preview and download of Santana Mena's Data Analyst CV.",
};

export default function DataAnalystPage() {
  return (
    <DirectPDFView
      title="Data Analyst"
      pdfFileName="CV_Santana_Mena_Data_Analyst.pdf"
    />
  );
}
