import { DirectPDFView } from "@/components/DirectPDFView";

export const metadata = {
  title: "AI Engineer CV PDF | Santana Mena",
  description: "Direct PDF preview and download of Santana Mena's AI Engineer CV.",
};

export default function AIEngineerPage() {
  return (
    <DirectPDFView
      title="AI Engineer"
      pdfFileName="CV_Santana_Mena_AI_Engineer.pdf"
    />
  );
}
