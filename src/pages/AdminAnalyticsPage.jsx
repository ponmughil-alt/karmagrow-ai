import React, { useState } from 'react';
import { BarChart3, Sparkles, AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { MOCK_ADMIN_STATS } from '../services/mockData';

export default function AdminAnalyticsPage() {
  const [showIntervention, setShowIntervention] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-700 flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-indigo-400" /> MoSPI AI Organisational Intelligence
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mt-2">Workforce Competency Intelligence</h1>
          <p className="text-xs text-slate-400 mt-1">
            Macro-level skill gap analytics and automated capacity building interventions for Ministry leadership.
          </p>
        </div>
      </div>

      {/* AI Organizational Insight Callout Box */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">Karma AI Macro Diagnosis</span>
        </div>

        <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
          "Karma AI detected that <strong className="text-rose-400">Sampling Techniques</strong> is a recurring, high-impact competency gap affecting <strong className="text-teal-300">31% of personnel</strong> across <strong className="text-indigo-300">Survey Operations</strong> teams nationwide."
        </p>

        {!showIntervention ? (
          <button
            onClick={() => setShowIntervention(true)}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-lg flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Training Recommendation</span>
          </button>
        ) : (
          <div className="p-4 bg-slate-950 rounded-2xl border border-teal-500/50 space-y-2 animate-fade-in">
            <div className="flex items-center space-x-2 text-xs font-bold text-teal-300">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Recommended Organizational Intervention Strategy</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              "Deploy a targeted <strong className="text-teal-300">Sampling Techniques Capacity Pathway</strong> on iGOT Karmayogi to 1,326 affected Survey Operations employees. Expected organizational competency lift: <strong className="text-amber-300">+11.4% overall</strong>."
            </p>
          </div>
        )}
      </div>

      {/* Most Common Skill Gaps Breakdown */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <h3 className="text-base font-bold text-white">Most Common Skill Gaps Across MoSPI Personnel</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_ADMIN_STATS.gapDistribution.map((gap, idx) => (
            <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">{gap.name}</span>
                <span className="text-xs font-bold text-rose-400">{gap.gapPercentage}% Personnel</span>
              </div>
              
              <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div className="h-full bg-rose-500 rounded-full" style={{ width: `${gap.gapPercentage}%` }}></div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Affected Count: {gap.affectedCount} employees</span>
                <span className="text-indigo-400 font-semibold">Priority Action</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
