import { DirectPDFView } from "@/components/DirectPDFView";

export const metadata = {
  title: "Software Engineer CV PDF | Santana Mena",
  description: "Direct PDF preview and download of Santana Mena's Software Engineer CV.",
};

export default function SoftwareEngineerPage() {
  return (
    <DirectPDFView
      title="Software Engineer"
      pdfFileName="CV_Santana_Mena_Software_Engineer.pdf"
    />
  );
}
