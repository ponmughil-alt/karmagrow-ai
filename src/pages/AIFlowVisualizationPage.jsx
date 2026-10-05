import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Workflow } from 'lucide-react';
import AIFlowDiagram from '../components/AIFlowDiagram';

export default function AIFlowVisualizationPage() {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-700 flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-teal-400" /> SIH Evaluation Special Component
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-2">KarmaGrow AI Pipeline Visualizer</h1>
          <p className="text-xs text-slate-400 mt-1">
            Technical blueprint explaining how the AI engine connects MoSPI employee data with iGOT Karmayogi capacity building.
          </p>
        </div>

        <button
          onClick={() => navigate('/gap-analysis')}
          className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-md flex items-center space-x-2"
        >
          <span>Run Live AI Gap Scanner</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Embedded Pipeline Component */}
      <AIFlowDiagram />

      {/* Product Positioning Highlight Card for SIH Judges */}
      <div className="bg-slate-900 border border-indigo-700/60 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center space-x-2 text-indigo-400">
          <ShieldCheck className="w-5 h-5" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Product Positioning Rationale</h3>
        </div>

        <blockquote className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed font-serif italic">
          "KarmaGrow AI is NOT designed to replace iGOT Karmayogi. Instead, it serves as an intelligent, automated personalization and competency analytics layer that sits on top of iGOT Karmayogi, enabling personalized learning path generation and adaptive assessment generation for government employees."
        </blockquote>
      </div>

    </div>
  );
}
