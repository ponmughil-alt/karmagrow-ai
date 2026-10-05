import React, { useState } from 'react';
import { Upload, FileText, Sparkles, CheckCircle2, Loader2, ArrowRight, Award, BookOpen } from 'lucide-react';

export default function AdminUploadMaterialPage() {
  const [uploading, setUploading] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [fileName, setFileName] = useState('MoSPI_Sampling_Guidelines_2026.pdf');
  const [stepIdx, setStepIdx] = useState(0);

  const steps = [
    "Reading PDF document structure...",
    "Extracting statistical concepts & formulas...",
    "Identifying core learning objectives...",
    "Generating adaptive MCQ questions...",
    "Creating assessment answer matrix..."
  ];

  const handleSimulateUpload = () => {
    setUploading(true);
    setStepIdx(0);

    const interval = setInterval(() => {
      setStepIdx(prev => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(() => {
          setUploading(false);
          setProcessed(true);
        }, 500);
        return prev;
      });
    }, 450);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Content Ingestion Pipeline</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-1">Upload Learning Material</h1>
        <p className="text-xs text-slate-400 mt-1">
          Upload PDF, DOCX, or PPT statistical training manuals to convert them into AI learning pathways & quizzes.
        </p>
      </div>

      {!processed && !uploading && (
        <div
          onClick={handleSimulateUpload}
          className="bg-slate-900 border-2 border-dashed border-slate-700 hover:border-teal-500/60 rounded-3xl p-12 text-center shadow-2xl cursor-pointer transition-all space-y-4"
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto text-teal-400">
            <Upload className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-base font-bold text-white">Click to Select or Drag & Drop Training File</h3>
            <p className="text-xs text-slate-400 mt-1">Supports PDF, PPTX, DOCX (Up to 50MB)</p>
          </div>

          <button
            type="button"
            className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-md inline-flex items-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Select File: MoSPI_Sampling_Guidelines_2026.pdf</span>
          </button>
        </div>
      )}

      {/* Uploading / Ingestion Animation */}
      {uploading && (
        <div className="bg-slate-900 border border-teal-500/50 rounded-3xl p-10 text-center space-y-6 shadow-2xl">
          <Loader2 className="w-10 h-10 text-teal-400 animate-spin mx-auto" />
          <div>
            <h3 className="text-lg font-bold text-white font-serif">Karma AI Ingesting Training Document...</h3>
            <p className="text-xs text-teal-300 font-mono mt-1">{steps[stepIdx]}</p>
          </div>

          <div className="max-w-md mx-auto space-y-2">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl text-xs flex items-center justify-between border ${
                  idx <= stepIdx ? 'bg-slate-950 border-teal-800 text-teal-300' : 'bg-slate-950/40 border-slate-800 text-slate-600'
                }`}
              >
                <span>{st}</span>
                {idx <= stepIdx && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Processed Material Summary */}
      {processed && (
        <div className="bg-slate-900 border border-teal-500/60 rounded-3xl p-8 space-y-6 shadow-2xl">
          <div className="flex items-center space-x-3 text-teal-400 border-b border-slate-800 pb-4">
            <CheckCircle2 className="w-6 h-6" />
            <div>
              <h3 className="text-lg font-bold text-white font-serif">Material Processed Successfully!</h3>
              <p className="text-xs text-slate-400">{fileName}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center">
            <div>
              <span className="text-[10px] text-slate-400 block">Pages Analyzed</span>
              <span className="text-lg font-bold text-white">24 Pages</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Concepts Detected</span>
              <span className="text-lg font-bold text-teal-400">12 Concepts</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Learning Objectives</span>
              <span className="text-lg font-bold text-indigo-300">4 Core Objectives</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Questions Generated</span>
              <span className="text-lg font-bold text-purple-400">10 MCQs</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <button
              onClick={() => alert("Summary: Document covers NSS sample frames, stratification equations, and variance estimators.")}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-950 border border-slate-800 hover:bg-slate-800"
            >
              View Document Summary
            </button>
            <button
              onClick={() => alert("Published to iGOT sync queue!")}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-md"
            >
              Publish Learning Resource
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
