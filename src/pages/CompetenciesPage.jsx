import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight, BrainCircuit, X } from 'lucide-react';

export default function CompetenciesPage({ competencies }) {
  const navigate = useNavigate();
  const [selectedComp, setSelectedComp] = useState(null);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Statistical Competency Framework</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-1">My Competency Dashboard</h1>
          <p className="text-xs text-slate-400 mt-1">
            Detailed breakdown of your current statistical proficiency vs target MoSPI standards.
          </p>
        </div>

        <button
          onClick={() => navigate('/gap-analysis')}
          className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-md flex items-center space-x-2"
        >
          <BrainCircuit className="w-4 h-4" />
          <span>Run AI Gap Scanner</span>
        </button>
      </div>

      {/* Grid of 6 Detailed Competency Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competencies.map((comp) => (
          <div
            key={comp.id}
            onClick={() => setSelectedComp(comp)}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl hover:border-teal-500/50 transition-all cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  {comp.category}
                </span>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                  comp.priority === 'HIGH' ? 'bg-rose-950 text-rose-300 border border-rose-800' :
                  comp.priority === 'MEDIUM' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                  'bg-teal-950 text-teal-300 border border-teal-800'
                }`}>
                  {comp.priority} PRIORITY
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1">{comp.name}</h3>
              <p className="text-xs text-slate-400 line-clamp-2">{comp.description}</p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800/80">
              <div className="grid grid-cols-3 gap-2 text-center bg-slate-950 p-2.5 rounded-2xl border border-slate-800">
                <div>
                  <span className="text-[10px] text-slate-500 block">Current</span>
                  <span className="text-sm font-bold text-teal-400">{comp.currentLevel}%</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Required</span>
                  <span className="text-sm font-bold text-indigo-300">{comp.requiredLevel}%</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Gap</span>
                  <span className="text-sm font-bold text-rose-400">{comp.gap}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className={`h-full rounded-full ${
                      comp.gap > 20 ? 'bg-rose-500' : comp.gap > 10 ? 'bg-amber-500' : 'bg-teal-400'
                    }`}
                    style={{ width: `${comp.currentLevel}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>Trend: {comp.trend}</span>
                  <span>Last Assessed: {comp.lastAssessed}</span>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/gap-analysis');
                }}
                className="w-full py-2 rounded-xl text-xs font-semibold text-teal-300 bg-slate-950 border border-slate-800 hover:border-teal-500/50 flex items-center justify-center space-x-1"
              >
                <span>View Recommended Action</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Competency Modal View */}
      {selectedComp && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-6 text-white relative">
            <button
              onClick={() => setSelectedComp(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                {selectedComp.category}
              </span>
              <h2 className="text-xl font-bold text-white font-serif mt-2">{selectedComp.name}</h2>
              <p className="text-xs text-slate-300 mt-2">{selectedComp.description}</p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-200">AI Competency Assessment Rationale</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{selectedComp.recommendedAction}</p>
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setSelectedComp(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedComp(null);
                  navigate('/learning-path');
                }}
                className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300"
              >
                Start Learning Path
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
