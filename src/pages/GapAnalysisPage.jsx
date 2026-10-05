import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle, RefreshCw, BarChart2 } from 'lucide-react';

export default function GapAnalysisPage({ competencies }) {
  const navigate = useNavigate();
  const [analyzing, setAnalyzing] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  const scanSteps = [
    "Analyzing MoSPI role requirements...",
    "Evaluating recent assessment performance...",
    "Cross-referencing NSSO field survey standards...",
    "Computing multivariate competency gap scores...",
    "Formulating AI Priority Score breakdown..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStepIndex(prev => {
        if (prev < scanSteps.length - 1) return prev + 1;
        clearInterval(timer);
        setTimeout(() => setAnalyzing(false), 400);
        return prev;
      });
    }, 350);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-700 flex items-center">
              <Sparkles className="w-3 h-3 mr-1 text-teal-400" /> MoSPI AI Competency Intelligence Engine
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-2">AI Competency Gap Analysis</h1>
          <p className="text-xs text-slate-400 mt-1">
            Automated intelligence mapping your current skills against target MoSPI capacity standards.
          </p>
        </div>

        <button
          onClick={() => {
            setAnalyzing(true);
            setStepIndex(0);
            setTimeout(() => setAnalyzing(false), 1800);
          }}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 flex items-center space-x-2"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${analyzing ? 'animate-spin' : ''}`} />
          <span>Re-run Analysis</span>
        </button>
      </div>

      {/* Simulated AI Processing State */}
      {analyzing ? (
        <div className="bg-slate-900 border border-teal-500/40 rounded-3xl p-12 text-center space-y-6 shadow-2xl">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-teal-500/20 border-t-teal-400 animate-spin"></div>
            <BrainCircuit className="w-10 h-10 text-teal-400 absolute inset-0 m-auto animate-pulse" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white font-serif">Karma AI Engine Scanning Competency Matrix...</h3>
            <p className="text-xs text-teal-300 font-mono mt-2">{scanSteps[stepIndex]}</p>
          </div>

          <div className="max-w-md mx-auto space-y-2">
            {scanSteps.map((s, idx) => (
              <div key={idx} className={`flex items-center text-xs justify-between px-4 py-1.5 rounded-lg border transition-all ${
                idx <= stepIndex ? 'bg-slate-950 border-teal-800 text-teal-300' : 'bg-slate-950/40 border-slate-800 text-slate-600'
              }`}>
                <span>{s}</span>
                {idx <= stepIndex ? <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> : <div className="w-3 h-3 rounded-full bg-slate-800" />}
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Rendered AI Gap Analysis Findings */
        <div className="space-y-8">
          
          {/* AI Banner Summary Box */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-3.5 rounded-2xl bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 shrink-0">
                <BrainCircuit className="w-8 h-8 text-teal-400" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-300">Analysis Summary</span>
                <h3 className="text-lg font-bold text-white font-serif">AI Diagnosis Complete</h3>
                <p className="text-xs text-slate-300 max-w-2xl mt-1 leading-relaxed">
                  "AI has analyzed your role requirements, assessment performance, previous learning activity, and competency profile. Your highest impact gap is <strong className="text-rose-400">Sampling Techniques (32% gap)</strong> in survey operations."
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate('/learning-path')}
              className="w-full md:w-auto px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-xl shadow-teal-500/20 flex items-center justify-center space-x-2 shrink-0"
            >
              <span>Generate Personalized Path</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Current Competency vs Required Level Breakdown */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-white">Current Competency vs Required Standard</h3>
                <p className="text-xs text-slate-400">Visualizing gap percentages across official statistical modules</p>
              </div>
              <span className="text-xs font-mono text-teal-400 bg-teal-950 px-3 py-1 rounded border border-teal-800">
                MoSPI Framework 2026
              </span>
            </div>

            <div className="space-y-6">
              {competencies.map((comp) => (
                <div key={comp.id} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-bold text-white">{comp.name}</h4>
                        <span className={`text-[9px] font-extrabold px-2 py-0.2 rounded ${
                          comp.priority === 'HIGH' ? 'bg-rose-950 text-rose-300 border border-rose-800' :
                          comp.priority === 'MEDIUM' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                          'bg-teal-950 text-teal-300 border border-teal-800'
                        }`}>
                          {comp.priority} PRIORITY
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{comp.description}</p>
                    </div>

                    <div className="flex items-center space-x-4 text-xs shrink-0">
                      <div className="text-right">
                        <span className="text-slate-500 block text-[10px]">Current</span>
                        <span className="font-bold text-teal-400 text-sm">{comp.currentLevel}%</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-500 block text-[10px]">Target</span>
                        <span className="font-bold text-indigo-300 text-sm">{comp.requiredLevel}%</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-500 block text-[10px]">Gap</span>
                        <span className="font-bold text-rose-400 text-sm">{comp.gap}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Bar Comparison */}
                  <div className="space-y-1">
                    <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800 relative flex">
                      <div className="h-full bg-teal-400 rounded-l-full" style={{ width: `${comp.currentLevel}%` }}></div>
                      <div className="h-full bg-rose-500/40" style={{ width: `${comp.gap}%` }}></div>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>Proficiency: {comp.currentLevel}% achieved</span>
                      <span className="text-rose-400 font-semibold">{comp.gap}% deficiency gap to close</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Priority Score & Actionable Rationale */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
                <AlertCircle className="w-5 h-5 text-rose-400" />
                <h3 className="text-sm font-bold text-white">AI Priority Score Analysis</h3>
              </div>

              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-300">Sampling Techniques</span>
                  <span className="text-xs font-extrabold text-rose-400">Priority Score: 94/100</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "Your assessment indicates difficulty in selecting appropriate sampling frames, estimating standard error, and calculating cluster allocation for NSS surveys."
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300">Data Visualization</span>
                  <span className="text-xs font-extrabold text-amber-400">Priority Score: 68/100</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "Minor gaps in generating executive geospatial graphs for Consumer Price Index (CPI) releases."
                </p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 mb-4">
                  <BrainCircuit className="w-5 h-5 text-teal-400" />
                  <h3 className="text-sm font-bold text-white">AI Recommendation Plan</h3>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    "Complete the <strong className="text-teal-300">Sampling Fundamentals pathway</strong> on iGOT Karmayogi followed by an adaptive AI assessment. This will close your primary competency gap within 2 weeks."
                  </p>
                  
                  <div className="flex items-center space-x-2 text-[11px] text-teal-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Estimated Competency Upgrade: +14%</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/learning-path')}
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-md flex items-center justify-center space-x-2 transition-all mt-4"
              >
                <span>Generate Personalized Learning Path</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
