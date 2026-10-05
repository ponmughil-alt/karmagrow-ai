import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, CheckCircle2, TrendingUp, Sparkles, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';

export default function QuizResultsPage({ quizResults }) {
  const navigate = useNavigate();

  const score = quizResults?.score || 84;
  const beforeScore = quizResults?.beforeScore || 58;
  const afterScore = quizResults?.afterScore || 67;
  const improvement = afterScore - beforeScore;

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 text-slate-100 font-sans max-w-4xl mx-auto">
      
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-slate-900 border border-teal-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-teal-500/20 border-2 border-teal-400 flex items-center justify-center mx-auto text-teal-300 shadow-lg">
          <Award className="w-8 h-8" />
        </div>

        <div>
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-800 uppercase tracking-wider">
            Evaluation Complete
          </span>
          <h1 className="text-3xl font-extrabold text-white font-serif mt-2">Assessment Results: {score}%</h1>
          <p className="text-xs text-slate-300 mt-1">
            Performance Level: <strong className="text-teal-300">Excellent</strong> • Time Spent: 07:34
          </p>
        </div>
      </div>

      {/* Grid: 4 Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Final Score", val: `${score}%`, color: "text-teal-400" },
          { label: "Correct Answers", val: "4 / 5", color: "text-emerald-400" },
          { label: "Incorrect Answers", val: "1 / 5", color: "text-rose-400" },
          { label: "Competency Growth", val: `+${improvement}%`, color: "text-indigo-400" }
        ].map((m, idx) => (
          <div key={idx} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center shadow-lg">
            <span className="text-[10px] text-slate-400 font-semibold block">{m.label}</span>
            <span className={`text-2xl font-black font-serif mt-1 block ${m.color}`}>{m.val}</span>
          </div>
        ))}
      </div>

      {/* COMPETENCY IMPACT ANIMATION CARD */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-teal-400" />
            <h3 className="text-base font-bold text-white">Competency Score Impact Update</h3>
          </div>
          <span className="text-xs font-bold text-teal-300 bg-teal-950 px-3 py-1 rounded border border-teal-800">
            Transcript Verified
          </span>
        </div>

        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <span className="text-xs font-bold text-slate-400">Sampling Techniques</span>
            <div className="flex items-center space-x-4">
              <div>
                <span className="text-[10px] text-slate-500 block">Before</span>
                <span className="text-xl font-bold text-slate-400">{beforeScore}%</span>
              </div>
              <ArrowRight className="w-5 h-5 text-teal-400" />
              <div>
                <span className="text-[10px] text-slate-500 block">After Quiz</span>
                <span className="text-2xl font-extrabold text-teal-300">{afterScore}%</span>
              </div>
            </div>
          </div>

          <div className="px-5 py-2.5 rounded-2xl bg-teal-950 border border-teal-600 text-teal-300 font-bold text-xs flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>+9% Competency Growth Recorded!</span>
          </div>
        </div>
      </div>

      {/* AI Diagnostic Feedback & Strengths / Improvement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-1.5" /> Strengths Identified
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">✓ Strong mastery of basic probability sampling principles</li>
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">✓ Accurate understanding of population vs sample statistics</li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1.5" /> Areas for Further Practice
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">! Calculating Design Effect (Deff) in multi-stage cluster designs</li>
            <li className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">! Non-sampling non-response variance estimators</li>
          </ul>
        </div>

      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          onClick={() => navigate('/learning-path')}
          className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800"
        >
          Continue Learning Path
        </button>

        <button
          onClick={() => navigate('/progress')}
          className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-xl flex items-center justify-center space-x-2"
        >
          <span>View Updated Competency Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
