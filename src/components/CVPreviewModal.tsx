"use client";

import { motion, AnimatePresence } from "framer-motion";

interface CVPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvPath: string;
  roleTitle: string;
}

export const CVPreviewModal = ({
  isOpen,
  onClose,
  cvPath,
  roleTitle,
}: CVPreviewModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden z-10"
          >
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-black text-blue-600 uppercase tracking-widest">
                  Document Preview
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {roleTitle} Official CV Document
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={cvPath}
                  download
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs transition-colors shadow-sm"
                >
                  Download PDF File
                </a>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-black text-sm flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 bg-slate-100 p-2 sm:p-4">
              <iframe
                src={`${cvPath}#toolbar=0`}
                className="w-full h-full rounded-2xl border border-slate-200/80 shadow-inner bg-white"
                title={`${roleTitle} CV Preview`}
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
              <div>Verifiable 1-Page Format Compliance</div>
              <div>Press ESC or click backdrop to close</div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
