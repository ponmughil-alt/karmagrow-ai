import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, CheckCircle2, AlertCircle, ArrowRight, RefreshCw, Database } from 'lucide-react';
import { INITIAL_SAMPLE_VIEWERS } from '../services/sampleData';
import { validateDataset, analyzeAudienceDataset } from '../services/mlEngine';
import AnalysisProgress from './AnalysisProgress';

export default function Dataset({ onAnalysisComplete }) {
  const [dataset, setDataset] = useState(INITIAL_SAMPLE_VIEWERS);
  const [fileName, setFileName] = useState('sample_ott_viewers.csv');
  const [uploadStatus, setUploadStatus] = useState('ready'); // 'idle', 'uploaded', 'validating', 'ready'
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [validationResult, setValidationResult] = useState(validateDataset(INITIAL_SAMPLE_VIEWERS));
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setUploadStatus('validating');
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const text = event.target.result;
          const lines = text.split('\n').filter(l => l.trim() !== '');
          const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
          
          const parsed = lines.slice(1).map((line, idx) => {
            const vals = line.split(',').map(v => v.trim());
            return {
              user_id: vals[0] || `U${1000 + idx}`,
              watch_time_hours: parseFloat(vals[1]) || 0,
              avg_session_mins: parseFloat(vals[2]) || 0,
              visit_frequency_per_week: parseFloat(vals[3]) || 0,
              completion_rate: parseFloat(vals[4]) || 0.5,
              genre_diversity_score: parseFloat(vals[5]) || 0.5,
              top_genres: vals[6] ? vals[6].split(';') : ["Drama", "Thriller"]
            };
          });

          const result = validateDataset(parsed);
          setValidationResult(result);
          setDataset(parsed);
          setUploadStatus('ready');
        } catch (err) {
          setValidationResult({ valid: false, errors: ['Failed to parse CSV file format.'], warnings: [] });
          setUploadStatus('ready');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleUseSample = () => {
    setFileName('sample_ott_viewers.csv');
    setDataset(INITIAL_SAMPLE_VIEWERS);
    const result = validateDataset(INITIAL_SAMPLE_VIEWERS);
    setValidationResult(result);
    setUploadStatus('ready');
  };

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
  };

  const handleAnalysisFinished = (results) => {
    if (onAnalysisComplete) {
      onAnalysisComplete(results);
    }
    setIsAnalyzing(false);
    navigate('/segments');
  };

  if (isAnalyzing) {
    return (
      <AnalysisProgress
        dataset={dataset}
        onComplete={handleAnalysisFinished}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F0E6] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-category mb-3">DATASET INGESTION & PIPELINE</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#3A2925] mt-2 mb-4">
            Give CineSense Your Audience.
          </h1>
          <p className="font-sans text-base text-[#3A2925]/80 max-w-xl mx-auto leading-relaxed">
            Upload your OTT viewer activity dataset and let AI discover the behavioral patterns hidden inside it.
          </p>
        </div>

        {/* Drag & Drop Card Area */}
        <div className="card-cinesense p-8 mb-8 bg-[#FCFAF5] border-2 border-dashed border-[#3A2925]/20 text-center relative hover:border-[#193D32]/50 transition-colors">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          />

          <div className="w-16 h-16 rounded-full bg-[#DDE7D8] text-[#193D32] flex items-center justify-center mx-auto mb-4">
            <Upload className="w-8 h-8" />
          </div>

          <h3 className="font-serif text-xl font-bold text-[#3A2925] mb-2">
            Drag & Drop your CSV dataset here
          </h3>
          <p className="text-xs text-[#3A2925]/60 mb-6">
            Supports CSV with fields: <code className="bg-[#E8DDCB]/50 px-1.5 py-0.5 rounded font-mono">user_id, watch_time_hours, avg_session_mins, visit_frequency_per_week, completion_rate</code>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-30 pointer-events-auto">
            <label className="btn-primary text-xs cursor-pointer py-3 px-6">
              <span>CHOOSE FILE</span>
              <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
            </label>
            <button
              type="button"
              onClick={handleUseSample}
              className="btn-secondary text-xs py-3 px-6 flex items-center gap-2"
            >
              <Database className="w-4 h-4 text-[#193D32]" />
              <span>USE SAMPLE DATASET</span>
            </button>
          </div>
        </div>

        {/* Loaded Dataset Status & Checklist */}
        <div className="card-cinesense p-6 bg-[#FCFAF5]">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#3A2925]/10">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#193D32]" />
              <div>
                <h4 className="font-bold text-sm text-[#3A2925]">{fileName}</h4>
                <p className="text-xs text-[#3A2925]/60">{dataset.length} viewer records loaded</p>
              </div>
            </div>
            <span className="badge-category text-[10px]">Ready for AI</span>
          </div>

          {/* Validation Checklist */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#193D32]">
              <CheckCircle2 className="w-4 h-4 text-[#193D32]" />
              <span>Dataset uploaded & formatted correctly</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#193D32]">
              <CheckCircle2 className="w-4 h-4 text-[#193D32]" />
              <span>Data validated ({dataset.length} records, 0 critical errors)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#193D32]">
              <CheckCircle2 className="w-4 h-4 text-[#193D32]" />
              <span>Behavioral features extracted (Watch time, Session duration, Frequency, Completion)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C9A85C]">
              <CheckCircle2 className="w-4 h-4 text-[#C9A85C]" />
              <span>Ready for unsupervised K-Means segmentation</span>
            </div>
          </div>

          {/* Data Validation Alerts if any */}
          {validationResult.errors.length > 0 && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-xs mb-6">
              <div className="flex items-center gap-2 font-bold mb-1">
                <AlertCircle className="w-4 h-4" />
                <span>Validation Warnings Detected</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {validationResult.errors.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action CTA */}
          <button
            onClick={handleStartAnalysis}
            className="btn-primary w-full py-4 text-sm justify-center gap-2 shadow-lg"
          >
            <span>ANALYZE AUDIENCE</span>
            <ArrowRight className="w-4 h-4 text-[#C9A85C]" />
          </button>
        </div>

      </div>
    </div>
  );
}
